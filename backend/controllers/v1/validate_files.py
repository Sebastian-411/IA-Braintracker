# Check if the number of files is correct
from fastapi import HTTPException, UploadFile
from pydantic import ValidationError
import os

from schemas.ClinicHistoryFileUploaded import ClinicHistoryFileUploaded
from schemas.MRIFileUploaded import MRIFileUploaded


def validate_quantity_files(files: list):
    return len(files) != 2


def is_type_PDF(type_file):
    return type_file == "application/pdf"


def is_type_image(type_file):
    return type_file in ["image/jpeg", "image/png", "image/jpg"]


def processing_file_type_based(files: list[UploadFile]):
    if validate_quantity_files(files):
        raise HTTPException(
            status_code=400, detail="The number of files is not correct."
        )

    img = None
    pdf = None

    for file in files:
        # Assign the file to the corresponding variable
        if is_type_image(file.content_type):
            try:
                img = MRIFileUploaded(file=file, type=file.content_type, size=file.size)

            except ValidationError as e:
                raise HTTPException(status_code=400, detail=str(e).splitlines()[2])

        elif is_type_PDF(file.content_type):
            try:
                pdf = ClinicHistoryFileUploaded(
                    file=file, type=file.content_type, size=file.size
                )

            except ValidationError as e:
                raise HTTPException(status_code=400, detail=str(e).splitlines()[2])

        else:
            raise HTTPException(
                status_code=400,
                detail=f"The type of the file {file.filename} is not supported.",
            )
    return [img, pdf]

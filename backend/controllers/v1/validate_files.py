# Check if the number of files is correct
from fastapi import HTTPException, UploadFile
from pydantic import ValidationError

from schemas.ClinicHistoryFileUploaded import ClinicHistoryFileUploaded
from schemas.MRIFileUploaded import MRIFileUploaded


def validate_quantity_files(files: list):
    return len(files) != 2


def check_files(files: list[UploadFile]):
    # Check if each file has an extension
    if not all(["." in file.filename for file in files]):
        raise HTTPException(status_code=400, detail="File without extension.")

    if validate_quantity_files(files):
        raise HTTPException(
            status_code=400, detail="The number of files is not correct."
        )


def is_type_PDF(type_file):
    return type_file == "application/pdf"


def is_type_image(type_file):
    return type_file in ["image/jpeg", "image/png", "image/jpg"]


def type_based_checking(file: MRIFileUploaded | ClinicHistoryFileUploaded):
    # Check the model type based on defined schema
    if is_type_image(file.content_type):
        try:
            MRIFileUploaded(file=file, type=file.content_type, size=file.size)

        except ValidationError as e:
            raise HTTPException(status_code=400, detail=str(e).splitlines()[2])

    elif is_type_PDF(file.content_type):
        try:
            ClinicHistoryFileUploaded(file=file, type=file.content_type, size=file.size)

        except ValidationError as e:
            raise HTTPException(status_code=400, detail=str(e).splitlines()[2])

    else:
        raise HTTPException(
            status_code=400,
            detail=f"The type of the file {file.filename} is not supported.",
        )
    return file

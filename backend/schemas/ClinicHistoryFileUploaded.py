from fastapi import UploadFile
from pydantic import BaseModel, field_validator


class ClinicHistoryFileUploaded(UploadFile, BaseModel):
    @field_validator("size")
    @classmethod
    def validate_size(cls, value):
        if value > (5 * 1024 * 1024):
            raise ValueError("File size is too large")
        return value

    @field_validator("content_type")
    @classmethod
    def validate_extension(cls, value):
        if value.split("/")[-1] not in ["pdf"]:
            raise ValueError("File extension is not supported")
        return value

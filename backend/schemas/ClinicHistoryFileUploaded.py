from typing import Annotated, Literal
from fastapi import UploadFile
from pydantic import BaseModel, field_validator
from pydantic_core import PydanticCustomError


class ClinicHistoryFileUploaded(BaseModel):
    file: UploadFile
    type: Literal["application/pdf"]
    size: Annotated[int, field_validator("size")]

    @field_validator("size")
    @classmethod
    def validate_size(cls, value):
        if value > (2 * 1024 * 1024):  # 2MB limit
            raise PydanticCustomError("size_file_error", "File size is too large")
        return value

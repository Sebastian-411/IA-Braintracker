from typing import Literal
from pydantic import BaseModel, field_validator
from fastapi import UploadFile
from pydantic_core import PydanticCustomError


class MRIFileUploaded(BaseModel):
    name: Literal["brain_mri"]
    file: UploadFile
    type: Literal["image/jpeg", "image/png", "image/jpg"]
    size: int

    @field_validator("size")
    @classmethod
    def validate_size(cls, value):
        if value > (2 * 1024 * 1024):  # 2MB limit
            raise PydanticCustomError("size_file_error", "File size is too large")
        return value

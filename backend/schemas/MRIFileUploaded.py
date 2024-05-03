import imageio
from pydantic import BaseModel, field_validator
from fastapi import UploadFile


class MRIFileUploaded(UploadFile, BaseModel):
    # size: Annotated[int, Field(min_value=0, max_value=5242880)]

    @field_validator("size")
    @classmethod
    def validate_size(cls, value):
        if value > (5 * 1024 * 1024):  # 5MB limit
            raise ValueError("File size is too large")
        return value

    @field_validator("content_type")
    @classmethod
    def validate_extension(cls, value):
        if value.split("/")[-1] not in ["jpg", "jpeg", "png"]:
            raise ValueError("File extension is not supported")
        return value

    async def read(self):
        return await imageio.read()

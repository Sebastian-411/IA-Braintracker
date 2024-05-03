from pydantic import BaseModel


class ClassificationModelOut(BaseModel):
    classification: str

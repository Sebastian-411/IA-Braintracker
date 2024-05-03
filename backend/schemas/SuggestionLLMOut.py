from pydantic import BaseModel


class SuggestionLLMOut(BaseModel):
    suggestion: str
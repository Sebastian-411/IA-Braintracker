import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.v1.post_suggestions import router as v1_router
from dotenv import load_dotenv


load_dotenv()

FRONT_END_URL = os.getenv("FRONT_END_URL")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[FRONT_END_URL],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(v1_router)


@app.get("/healthcheck")
async def healthcheck():
    return {"healthcheck": "ok"}

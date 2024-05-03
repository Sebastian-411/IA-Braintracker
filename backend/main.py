from fastapi import FastAPI
from api.v1.post_suggestions import router as v1_router

app = FastAPI()


app.include_router(v1_router)


@app.get("/healthcheck")
async def healthcheck():
    return {"healthcheck": "ok"}

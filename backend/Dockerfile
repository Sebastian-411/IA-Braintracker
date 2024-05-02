# Slim image as builder base
FROM python:3.12.3-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install --upgrade pip setuptools \ 
    && pip install --no-cache -r requirements.txt
COPY . .
EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

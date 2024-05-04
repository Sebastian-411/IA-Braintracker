from fastapi import HTTPException
import base64
import json


def decode_base64_string(encoded_string):
    try:
        decoded_bytes = base64.b64decode(encoded_string)
        decoded_string = decoded_bytes.decode("utf-8")
        return json.loads(decoded_string)
    except Exception as e:
        raise HTTPException(status_code=400, detail="Invalid base64 string")


def read_key(path) -> str | None:
    try:
        with open(path, "r") as file:
            key = file.read().strip()
            return key
    except FileNotFoundError:
        print("Not found.")
        return None

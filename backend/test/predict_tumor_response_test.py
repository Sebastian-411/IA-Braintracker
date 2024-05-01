import pytest
import requests

@pytest.fixture
def api_url():
    return "http://127.0.0.1:8000/"

def test_concatenate_pdf_text(api_url):

    with open("./resource/test/clinical_history_test/laso-ortiz.pdf", "rb") as pdf_file:

        files = {"pdf_file": pdf_file}
        data = {"text": "Tumor presente"}


        response = requests.post(api_url, data=data, files=files)

    assert response.status_code == 200

    print(response.json())
    assert "response" in response.json()

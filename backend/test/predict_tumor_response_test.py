import pytest
import requests

@pytest.fixture
def api_url():
    return "http://localhost:8000/"

@pytest.fixture
def sample_hc_path():
    return "./resource/test/clinical_history_test/laso-ortiz.pdf"

def test_predict_tumor(api_url, sample_hc_path):
    with open(sample_hc_path, "rb") as image_file:
        files = {"pdf_file": image_file}
        response = requests.post(api_url, files=files)

    assert response.status_code == 200
    assert "prediction" in response.json()
    print(response.json())

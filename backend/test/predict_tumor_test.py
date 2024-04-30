import pytest
import requests

@pytest.fixture
def api_url():
    return "http://localhost:8000/predict_tumor/"

@pytest.fixture
def sample_image_path():
    return "./resource/test/tumor_test/Cancer (1).jpg"

def test_predict_tumor(api_url, sample_image_path):
    with open(sample_image_path, "rb") as image_file:
        files = {"image": image_file}
        response = requests.get(api_url, files=files)

    assert response.status_code == 200
    assert "prediction" in response.json()
    assert response.json()["prediction"] == "Tumor presente"
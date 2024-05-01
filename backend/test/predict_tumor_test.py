import pytest
import requests

@pytest.fixture
def api_url():
    return "http://127.0.0.1:8000/"

@pytest.fixture
def sample_image_path():
    return "./resource/test/tumor_test/Cancer (1).jpg"

def test_predict_tumor(api_url, sample_image_path):
    with open(sample_image_path, "rb") as image_file:
        files = {"image": image_file}
        response = requests.post(api_url, files=files)

    assert response.status_code == 200
    assert "prediction" in response.json()
    assert response.json()["prediction"] == "Resultado del MRI: El modelo predictivo observa la probabilidad de que haya un tumor."
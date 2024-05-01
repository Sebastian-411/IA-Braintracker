
import google.generativeai as genai
import os

class GenerativeModel:
    def __init__(self, model_name):
        self.model_name = model_name

    def generate_content(self, content, generation_config, safety_settings):
        genai.configure(api_key=os.environ.get('API_KEY'))
        gemini = genai.GenerativeModel(model_name=self.model_name)
        
        response = gemini.generate_content(
            content,
            generation_config=generation_config,
            safety_settings=safety_settings,
            stream=False
        )
        return response.candidates[0].content.parts[0].text

from utils.utilities import read_key


model_LLM = "gemini-1.5-pro-latest"
contents_b64 = read_key("./key/content_token.pkl")
generation_config_b64 = read_key("./key/generation_token.pkl")
safety_settings_b64 = read_key("./key/setting_token.pkl")

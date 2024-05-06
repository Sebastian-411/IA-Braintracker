const baseUrl = import.meta.env.VITE_BACKEND_URL;

const uploadFiles = async (formData) => {
  try {
    const response = await fetch(`${baseUrl}/v1/files`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error during file upload:", error);
    throw error;
  }
};

export { uploadFiles };

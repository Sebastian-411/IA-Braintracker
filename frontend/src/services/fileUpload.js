const baseUrl = "";

const uploadFiles = async (formData) => {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error during file upload:", error);
    throw error;
  }
};

export { uploadFiles };

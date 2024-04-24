import { useState } from "react";
import "./App.css";
import UploadFileWrapper from "./components/UploadFileWrapper";
import Footer from "./components/Footer";
import HealthRecommendations from "./components/HealthRecommendations";
import { uploadFiles } from "./services/fileUpload";

function App() {
  const [healthData, setHealthData] = useState(null);

  // Callback to update the state after uploading the file
  const handleFileUpload = async (formData) => {
    try {
      const response = await uploadFiles(formData);
      setHealthData(response);
    } catch (error) {
      console.error("Error during file upload");
    }
  };

  // The UploadFileWrapper component is used to render the form and the model's response data
  return (
    <>
      <h1>Brain Tumor Checker</h1>
      <div className="gridCard">
        <UploadFileWrapper handleFileUpload={handleFileUpload} />
        {healthData ? <HealthRecommendations data={healthData} /> : null}
      </div>
      <Footer />
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import UploadFileForm from "./components/UploadFileForm";
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

  return (
    <>
      <h1>Brain Tumor Checker</h1>
      <UploadFileForm handleFileUpload={handleFileUpload} />
      <img />
      {healthData ? (
        <p>
          Result:
          <span>
            {healthData?.isTumorPresent
              ? " Brain tumor present"
              : " No brain tumor"}
          </span>
        </p>
      ) : null}
      {healthData ? <HealthRecommendations data={healthData} /> : null}
      <Footer />
    </>
  );
}

export default App;

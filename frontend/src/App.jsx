import { useState } from "react";
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

  const fakeHealth = {isTumorPresent: true, recommendations: "jskdlfjlsadjflkask  kjsdkfljsadl asdkfj salkjad"}

  // The UploadFileWrapper component is used to render the form and the model's response data
  return (
    <div className="flex flex-col min-h-screen">
      <h1 className='text-6xl p-6'>Brain Tumor Checker</h1>
      <main className="flex-1">        
        <div>
          <UploadFileWrapper
            handleFileUpload={handleFileUpload}
            healthData={fakeHealth}
          />
          {healthData ? (
            <HealthRecommendations data={fakeHealth?.recommendations} />
          ) : null}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

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

  const fakeHealth = {
    isTumorPresent: true,
    recommendations: `For optimal health, nourish yourself with a balanced diet, get regular exercise, prioritize quality sleep,
       and manage stress. Listen to your body's cues, schedule preventive checkups, and incorporate healthy habits into your daily routine.
        These small steps pave the way for a life of well-being.`,
  };

  // The UploadFileWrapper component is used to render the form and the model's response data
  return (
    <div className="flex flex-col min-h-screen">
      <h1 className="text-6xl font-bold p-6">Brain Tumor Checker</h1>
      <main className="flex-1 flex max-w-7xl self-center pt-8">
        <UploadFileWrapper
          handleFileUpload={handleFileUpload}
          healthData={fakeHealth}
          className="grow"
        />
        {fakeHealth ? (
          <HealthRecommendations data={fakeHealth?.recommendations} />
        ) : null}
      </main>
      <Footer />
    </div>
  );
}

export default App;

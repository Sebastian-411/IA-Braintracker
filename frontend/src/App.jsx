import { useState } from "react";
import UploadFileWrapper from "./components/UploadFileWrapper";
import Footer from "./components/Footer";
import HealthRecommendations from "./components/HealthRecommendations";
import { uploadFiles } from "./services/fileUpload";
import Notification from "./components/Notification";

function App() {
  const [healthData, setHealthData] = useState(null);
  const [notification, setNotification] = useState(null);

  // Callback to update the state after uploading the file
  const handleFileUpload = async (formData) => {
    try {
      const response = await uploadFiles(formData);
      setHealthData(response);
    } catch (error) {
      console.error("Error during file upload");
    }
  };

  const notify = (message, type = "success") => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  // The UploadFileWrapper component is used to render the form and the model's response data
  return (
    <div className="flex flex-col min-h-screen">
      <h1 className="text-6xl font-bold p-6">Asistente Medico</h1>
      <Notification notification={notification} />
      <main className="flex-1 flex max-w-7xl self-center pt-16 flex-col">
        <UploadFileWrapper
          handleFileUpload={handleFileUpload}
          healthData={healthData}
          notify={notify}
          className="grow"
        />
        <HealthRecommendations data={healthData} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import { useState } from "react";
import UploadFileWrapper from "./components/UploadFileWrapper";
import Footer from "./components/Footer";
import HealthRecommendations from "./components/HealthRecommendations";
import { uploadFiles } from "./services/fileUpload";
import Notification from "./components/Notification";

function App() {
  const [healthData, setHealthData] = useState(null);
  const [notification, setNotification] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const notify = (message, type = "success") => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  // Callback to update the state after uploading the file
  const handleFileUpload = async (formData) => {
    setIsLoading(true);
    try {
      const response = await uploadFiles(formData);
      setHealthData(response);
    } catch (error) {
      console.error("Error:", error);
      notify(error.message, "error");
    } finally {
      setIsLoading(false);
    }
  };

  // The UploadFileWrapper component is used to render the form and the model's response data
  return (
    <div className="flex flex-col min-h-screen">
      <h1 className="text-6xl font-bold p-6 m-auto">
        Asistente de diagnóstico médico
      </h1>
      <Notification notification={notification} />
      <main className="flex-1 flex max-w-7xl self-center pt-16 flex-col">
        <UploadFileWrapper
          handleFileUpload={handleFileUpload}
          notify={notify}
          disabled={isLoading}
          className="grow"
        />
        <div className="divider"></div>
        <HealthRecommendations data={mockData} isLoading={isLoading} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

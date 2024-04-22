import { useState } from "react";
import "./App.css";
import UploadTool from "./components/UploadTool";
import Footer from "./components/Footer";
import HealthRecommendations from "./components/HealthRecommendations";

function App() {
  return (
    <>
      <h1>Brain Tumor Checker</h1>
      <UploadTool />
      <HealthRecommendations data={""} />
      <Footer />
    </>
  );
}

export default App;

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
  const mockData = {
    classification:
      "The MRI analysis indicates a high probability of a benign tumor present in the left hemisphere of the brain.",
    analysis_results:
      "## Análisis de la Historia Clínica:\n\n**Datos del Paciente:**\n\n* Mujer de 34 años, soltera, argentina, empleada administrativa.\n* Reside en La Matanza, Provincia de Buenos Aires.\n\n**Motivo de Consulta:**\n\n* Crisis frecuentes de palpitaciones de dos semanas de evolución.\n\n**Enfermedad Actual:**\n\n* Episodios de palpitaciones de inicio brusco, nocturnos, al intentar dormir.\n* Los episodios también ocurren después de la ingesta de alimentos.\n* No cede con cambios de posición, pero sí con la ingesta de agua.\n* Relación con estrés laboral.\n* Se le indicó ansiolítico, pero no lo ha tomado.\n\n**Antecedentes Personales:**\n\n* **Fisiológicos:** Desarrollo normal, menstruación regular, sin embarazos ni abortos.\n* **Patológicos:** Sarampión y varicela en la infancia, sin complicaciones.  Toma anticonceptivos orales.  Alergia a la dipirona. Apendicectomía.\n* **Hábitos:** Alimentación completa y variada, buen apetito, catarsis intestinal normal, insomnio reciente, no consume alcohol ni drogas, no fuma, toma ibuprofeno ocasionalmente. Pareja estable, usa anticonceptivos, niega ETS. No realiza actividad física regular.\n\n**Antecedentes Heredofamiliares:**\n\n* No se especifica.\n\n**Examen Físico:**\n\n* **General:** Paciente lúcida y colaboradora, buen estado general, sin signos de deshidratación.\n* **Piel y Faneras:** Sin lesiones significativas, mucosas húmedas y normocoloreadas.\n* **Sistema Linfático:** Adenomegalias no significativas en cadena laterocervical izquierda.\n* **Sistema Osteoarticulomuscular:** Sin alteraciones significativas.\n* **Cabeza y Cuello:** Sin alteraciones significativas, movilidad cervical discretamente limitada.\n* **Tórax:** Simétrico, sin deformaciones.\n* **Aparato Respiratorio:** Respiración normal, sin ruidos agregados.\n* **Aparato Circulatorio:** Sin soplos, frecuencia cardiaca 90/min, tensión arterial normal.\n* **Abdomen:** Blando, depresible, indoloro, sin visceromegalias, ruidos hidroaéreos presentes.\n* **Aparato Genital:** Mamas sin nódulos, cuello uterino normal al tacto vaginal.\n* **Sistema Nervioso:** Lúcida, pares craneales normales, tono y fuerza muscular conservados, sensibilidad conservada, taxia normal.\n\n## Impresión Diagnóstica:\n\nLa paciente presenta un cuadro de palpitaciones de reciente comienzo, posiblemente relacionado con estrés laboral. El examen físico es normal, lo que sugiere una causa no orgánica. \n\n**Posibles diagnósticos:**\n\n* **Trastorno de ansiedad:** La relación con el estrés, el insomnio y la respuesta parcial a la ingesta de agua sugieren un posible componente de ansiedad.\n* **Trastorno del ritmo cardíaco:** Aunque el examen físico cardiovascular es normal, no se puede descartar por completo un trastorno del ritmo como causa de las palpitaciones.\n\n## Estudios Complementarios:\n\n* **Electrocardiograma:** Para evaluar el ritmo cardíaco y descartar arritmias.\n* **Holter de ritmo:** Si el electrocardiograma es normal, se puede indicar un Holter para registrar el ritmo cardíaco durante 24 horas.\n* **Estudios de laboratorio:** Hemograma completo, perfil tiroideo, electrolitos.\n* **Evaluación psicológica:** Si se sospecha un trastorno de ansiedad.\n\n## Tratamiento:\n\nEl tratamiento dependerá del diagnóstico final.\n\n* **Trastorno de ansiedad:** Manejo del estrés, terapia cognitivo-conductual, ansiolíticos.\n* **Trastorno del ritmo cardíaco:** Dependerá del tipo de arritmia.\n\n## Recomendaciones:\n\n* Evitar el consumo de cafeína y otros estimulantes.\n* Practicar técnicas de relajación.\n* Dormir lo suficiente.\n* Realizar actividad física regular.\n* Seguimiento con el médico para evaluar la respuesta al tratamiento.\n\n**Nota:** Este análisis es solo una orientación y no reemplaza la consulta con un profesional de la salud.\n",
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

import React from "react";
import Markdown from "react-markdown";

function HealthRecommendations({ data, isLoading }) {
  // data = {
  //   classification:
  //     "Resultado del MRI: el modelo predictivo observa la probabilidad de que haya un tumor",
  //   analysis_results: `## Análisis del Caso Clínico\n\n**Datos del Paciente:**\n\n* Mujer de 34 años, soltera, empleada administrativa.\n* Residente de La Matanza, Provincia de Buenos Aires, Argentina.\n* Sin antecedentes patológicos significativos.\n* Toma anticonceptivos orales desde hace 4 años.\n* Alergia a la dipirona.\n* Antecedentes quirúrgicos: apendicectomía.\n\n**Motivo de Consulta:**\n\n* Crisis de palpitaciones de dos semanas de evolución, de inicio brusco, nocturnas, que mejoran con la ingesta de agua y aparecen después de comer. \n* Relaciona los síntomas con estrés laboral.\n* Consultó previamente en guardia, donde le indicaron ansiolíticos, que no tomó. \n\n**Examen Físico:**\n\n* Normal, sin hallazgos significativos.\n\n**Resultado del MRI:**\n\n* No se observa probabilidad de tumor. \n\n## Impresión Diagnóstica\n\nDada la información disponible, las crisis de palpitaciones podrían deberse a:\n\n* **Ansiedad o estrés:** La paciente relaciona los síntomas con estrés laboral y el examen físico es normal.\n* **Efectos secundarios de los anticonceptivos orales:** Algunas mujeres experimentan palpitaciones como efecto secundario. \n* **Trastorno del ritmo cardíaco:** Aunque menos probable dado el MRI normal, no se puede descartar completamente sin estudios adicionales. \n\n## Recomendaciones\n\n* **Evaluación por un cardiólogo:** Para descartar cualquier causa cardíaca de las palpitaciones, se recomienda realizar un electrocardiograma y posiblemente un Holter de ritmo.\n* **Manejo del estrés:**  Técnicas de relajación, meditación o terapia cognitivo-conductual pueden ser útiles. \n* **Considerar cambio de anticonceptivos:** Si se sospecha que los anticonceptivos son la causa, se puede discutir con el ginecólogo un cambio de método.\n\n## Conclusión\n\nAunque el MRI descarta un tumor, es importante investigar la causa de las palpitaciones. El manejo dependerá del diagnóstico final y puede incluir desde el manejo del estrés hasta la modificación de la medicación o tratamiento específico para un trastorno del ritmo cardíaco. \n`,
  // };

  if (isLoading) {
    return (
      <span className="loading loading-spinner loading-lg mx-auto mt-12"></span>
    );
  }

  if (!data) return null;

  return (
    <div className="max-w-xl pl-16">
      <p className="font-bold text-xl">{data.classification}</p>
      <Markdown className="prose my-10">{data.analysis_results}</Markdown>
    </div>
  );
}

export default HealthRecommendations;

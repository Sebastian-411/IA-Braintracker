import { jsPDF } from "jspdf";
import html2canvas from "html2canvas-pro";

export const downloadPDF = async (ref) => {
  const scale = 1.5;
  const canvas = await html2canvas(ref, { scale });
  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF("p", "mm");

  const imgWidth = 208;
  const pageHeight = 295;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;
  let heightLeft = imgHeight;
  let position = 0;

  while (heightLeft >= 0) {
    pdf.addImage(
      imgData,
      "PNG",
      0,
      position,
      imgWidth,
      imgHeight,
      undefined,
      "FAST",
    );
    heightLeft -= pageHeight;
    if (heightLeft >= 0) {
      pdf.addPage();
      position = heightLeft - imgHeight;
    }
  }

  pdf.save("resultado.pdf");
};

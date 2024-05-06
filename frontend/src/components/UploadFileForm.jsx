import React from "react";

function UploadFileForm({ handleFileUpload, notify, disabled }) {
  const submitHandler = async (e) => {
    e.preventDefault();

    const pdfFiles = e.target.elements.pdf.files;
    const imgFiles = e.target.elements.img.files;
    console.log(pdfFiles);
    console.log(imgFiles);

    if (pdfFiles.length === 0 && imgFiles.length === 0) {
      notify("No ha seleccionado ningun archivo", "error");
      return;
    } else if (pdfFiles.length === 0) {
      notify("No ha seleccionado la historia clinica", "error");
      return;
    } else if (imgFiles.length === 0) {
      notify("No ha seleccionado la IRM (cerebro)", "error");
      return;
    }

    const formData = new FormData();

    for (let i = 0; i < pdfFiles.length; i++) {
      formData.append("pdf", pdfFiles[i]);
    }

    for (let i = 0; i < imgFiles.length; i++) {
      formData.append("img", imgFiles[i]);
    }

    handleFileUpload(formData);
    notify(
      "Archivos enviados exitosamente. Por favor no refresque la pagina...",
    );
  };
  // la IRM (cerebro)
  return (
    <div className="pr-8">
      <form encType="multipart/form-data" onSubmit={submitHandler}>
        {/* <p className="text-sm text-gray-500">
          Formato esperado: clinical_history.pdf, brain_mri.jpeg
        </p> */}
        <div className="flex flex-col ">
          <label className="text-2xl font-semibold" htmlFor="pdf">
            Seleccione la historia clínica
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs my-4"
            id="pdf"
            name="pdf"
            multiple
          />
          <label className="text-2xl font-semibold" htmlFor="img">
            Seleccione la IRM (cerebro)
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs my-4"
            id="img"
            name="img"
            multiple
          />

          <button
            className="btn btn-primary w-2/3"
            type="submit"
            disabled={disabled}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default UploadFileForm;

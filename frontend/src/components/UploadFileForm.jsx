import React from "react";

function UploadFileForm({
  handleFileUpload,
  expectedFiles = ["clinical_history.pdf", "brain_mri.jpeg"],
  notify,
  disabled,
}) {
  const submitHandler = async (e) => {
    e.preventDefault();
    const files = e.target.elements.file.files;

    if (files.length === 0) {
      notify("No hay archivos seleccionados", "error");
      return;
    }

    if (files.length !== expectedFiles.length) {
      notify(
        `Por favor, suba exactamente ${expectedFiles.length} archivos`,
        "error",
      );
      return;
    }

    const filenames = Array.from(files).map((file) => file.name);

    if (
      !expectedFiles.every((expectedFile) => filenames.includes(expectedFile))
    ) {
      notify("Los archivos no tienen el formato correcto", "error");
      return;
    }

    const formData = new FormData();

    for (let i = 0; i < expectedFiles.length; i++) {
      formData.append("files", files[i]);
    }

    handleFileUpload(formData);
    notify("Archivos enviados exitosamente. Procesando...");
  };

  return (
    <div className="pr-8">
      <form encType="multipart/form-data" onSubmit={submitHandler}>
        <label className="text-2xl font-semibold" htmlFor="file">
          Seleccione la IRM (cerebro) e historia clínica:
        </label>
        <p className="text-sm text-gray-500">
          Formato esperado: clinical_history.pdf, brain_mri.jpeg
        </p>
        <div className="flex flex-col ">
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs my-4"
            id="file"
            name="file"
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

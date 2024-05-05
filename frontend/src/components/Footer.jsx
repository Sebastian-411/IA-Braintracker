import React from "react";

function Footer() {
  return (
    <footer className="footer p-4 bg-base-300 text-base-content">
      <p>
        <strong>Advertencia:</strong> Este servicio está diseñado para
        proporcionar una evaluación preliminar y no debe utilizarse como
        diagnóstico definitivo. No nos hacemos responsables de las medidas
        adoptadas sobre la base de los resultados proporcionados por este
        servicio. Consulte siempre a un profesional médico cualificado para
        cualquier cuestión relacionada con su salud.
        <a
          className="link link-warning"
          onClick={() => document.getElementById("modal_info").showModal()}
        >
          Haga clic aquí para saber más
        </a>
      </p>
      <dialog id="modal_info" className="modal modal-middle">
        <div className="modal-box w-11/12 max-w-5xl">
          <h2 className="font-bold text-lg">Declaración de responsabilidad</h2>
          <p className="py-3">
            Antes de cargar su escáner cerebral por resonancia magnética (IRM),
            tenga en cuenta lo siguiente:{" "}
          </p>
          <dl>
            <p className="py-1">
              <dt>
                <strong>Confidencialidad y privacidad</strong>
              </dt>
              <dd>
                Este sitio web se compromete a proteger su privacidad. Todos los
                datos cargados en los datos cargados se tratan con el máximo
                nivel de confidencialidad y de acuerdo con la legislación de
                protección de datos.
              </dd>
            </p>
            <p className="py-1">
              <dt>
                <strong>Seguridad de los datos</strong>
              </dt>
              <dd>
                Aplicamos medidas de seguridad técnicas y organizativas para
                proteger sus datos personales contra el acceso no autorizado
                alteración o destrucción.
              </dd>
            </p>
            <p className="py-1">
              <dt>
                <strong>Uso de los datos</strong>
              </dt>
              <dd>
                Los datos cargados se utilizan exclusivamente para evaluar la
                presencia de posibles tumores cerebrales mediante algoritmos de
                inteligencia artificial. No se comparten con terceros sin su
                consentimiento explícito.
              </dd>
            </p>
            <p className="py-1">
              <dt>
                <strong>Consentimiento informado</strong>
              </dt>
              <dd>
                Al cargar su IRM, da su consentimiento para el análisis de sus
                datos y entiende que la responsabilidad final de cualquier
                decisión decisiones médicas recae en su médico o profesional
                sanitario.
              </dd>
            </p>
            <p className="py-1">
              <dt>
                <strong>Limitaciones del servicio</strong>
              </dt>
              <dd>
                Este servicio no sustituye el diagnóstico clínico realizado por
                profesionales sanitarios. Si tiene dudas sobre su salud,
                consulte a su médico.
              </dd>
            </p>
          </dl>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn hoover:btn-primary btn-outline">
                Cerrar
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </footer>
  );
}

export default Footer;

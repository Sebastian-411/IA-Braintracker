import React from "react";

function Footer() {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content fixed bottom-0 w-full">
      <p>
        <strong>Disclaimer:</strong> This service is designed to provide a
        preliminary assessment and should not be used as a definitive diagnosis.
        We are not responsible for actions taken based on the results provided
        by this service. Always seek the advice of a qualified medical
        professional for any questions regarding your health.
        <a
          className="link link-warning"
          onClick={() => document.getElementById("modal_info").showModal()}
        >
          Click here to know more
        </a>
      </p>
      <dialog id="modal_info" className="modal modal-middle">
        <div className="modal-box w-11/12 max-w-5xl text-cyan-900">
          <h2 className="font-bold text-lg">Liability Statement</h2>
          <p className="py-3">
            Before uploading your magnetic resonance imaging (MRI) brain scan,
            please note the following:{" "}
          </p>
          <dl>
            <p className="py-1">
              <dt>
                <strong>Confidentiality and Privacy</strong>
              </dt>
              <dd>
                This website is committed to protecting your privacy. All
                uploaded data is treated with the highest level of
                confidentiality and in accordance with applicable data
                protection laws.
              </dd>
            </p>
            <p className="py-1">
              <dt>
                <strong>Data Security</strong>
              </dt>
              <dd>
                We implement technical and organizational security measures to
                protect your personal data against unauthorized access,
                alteration or destruction.
              </dd>
            </p>
            <p className="py-1">
              <dt>
                <strong>Data Use</strong>
              </dt>
              <dd>
                The uploaded data is used exclusively for the purpose of
                assessing the presence of possible brain tumors using artificial
                intelligence algorithms. It is not shared with third parties
                without your explicit consent.
              </dd>
            </p>
            <p className="py-1">
              <dt>
                <strong>Informed Consent</strong>
              </dt>
              <dd>
                By uploading your MRI, you consent to the analysis of your data
                and understand that the final responsibility for any medical
                decisions rests with your physician or healthcare professional.
              </dd>
            </p>
            <p className="py-1">
              <dt>
                <strong>Limitations of Service</strong>
              </dt>
              <dd>
                This service is not a substitute for clinical diagnosis by
                healthcare professionals. If you have concerns about your
                health, please consult your physician.
              </dd>
            </p>
          </dl>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn hoover:btn-primary btn-outline">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </footer>
  );
}

export default Footer;

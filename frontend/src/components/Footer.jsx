import React from "react";

function Footer() {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <p>
        <strong>Disclaimer:</strong> This service is designed to provide a
        preliminary assessment and should not be used as a definitive diagnosis.
        We are not responsible for actions taken based on the results provided
        by this service. Always seek the advice of a qualified medical
        professional for any questions regarding your health.{" "}
        <a className="link link-warning" onClick={()=>document.getElementById('modal_info').showModal()}>Click here to know more</a>
      </p>
      <dialog id="modal_info" className="modal">
      <div className="modal-box w-11/12 max-w-5xl">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
    </footer>
  );
}

export default Footer;

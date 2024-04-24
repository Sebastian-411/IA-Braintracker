import React from "react";
import "./css/BrainImage.css";

function BrainImage() {
    const brain = "https://logodix.com/logo/33148.jpg";
    return (
        <div className="cardBrain">
            <img src={brain} alt='brain-image'/>
        </div>
  );
}

export default BrainImage;
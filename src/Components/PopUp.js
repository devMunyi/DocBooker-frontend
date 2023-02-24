import React from "react";
import "./Popup.css";

const Popup = ({ message, confirmAction }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>{message}</h2>
        <button onClick={confirmAction}>OK</button>
      </div>
    </div>
  );
};

export default Popup;

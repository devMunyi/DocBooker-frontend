import React from 'react';
import PropTypes from 'prop-types';

const PopUp = ({ message, confirmAction, cancelAction }) => (
  <div className="popup">
    <div className="popup-content">
      <h2 className="message">{message}</h2>
      <div className="action-buttons">
        <button type="button" onClick={confirmAction}>OK</button>
        <button type="button" onClick={cancelAction}>CANCEL</button>
      </div>
    </div>
  </div>
);

PopUp.propTypes = {
  message: PropTypes.string.isRequired,
  confirmAction: PropTypes.func.isRequired,
  cancelAction: PropTypes.func.isRequired,
};

export default PopUp;

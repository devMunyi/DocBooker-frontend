import React from 'react';
import PropTypes from 'prop-types';

const PopUp = ({ message, confirmAction, cancelAction }) => (
  <div className="popup">
    <div className="popup-content">
      <p className="message">{message}</p>
      <div className="action-buttons">
        <button type="button" onClick={cancelAction}>CANCEL</button>
        <button type="button" onClick={confirmAction}>OK</button>
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

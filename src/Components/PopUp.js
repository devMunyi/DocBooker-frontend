import React from 'react';
import PropTypes from 'prop-types';

const PopUp = ({ message, confirmAction }) => (
  <div className="popup">
    <div className="popup-content">
      <h2>{message}</h2>
      <button type="button" onClick={confirmAction}>OK</button>
    </div>
  </div>
);

PopUp.propTypes = {
  message: PropTypes.string.isRequired,
  confirmAction: PropTypes.func.isRequired,
};

export default PopUp;

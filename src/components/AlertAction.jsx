import React from "react";

const AlertAction = ({handleViewAlert, handleStateAlert}) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show my-0 animate__animated animate__fadeInDown"
      role="alert">
      <strong>Holy!</strong> {handleViewAlert} con éxito...
      <button
        type="button"
        className="btn-close"
        onClick={handleStateAlert}
      ></button>
    </div>
  );
};

export default AlertAction;

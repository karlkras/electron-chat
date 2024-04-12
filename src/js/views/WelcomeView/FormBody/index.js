import React from 'react';
import {useNavigate} from "react-router-dom";
const FormBody = ({children, navTo, navText, navPrompt, formText, submitText, submitCallback}) => {
  const navigate = useNavigate();

  const processNavClick = () => {
    navigate(navTo)
  }

  return (
    <div className="centered-view">
      <div className="centered-container">
        <form onSubmit={submitCallback} className="centered-container-form">
          <div className="header">{formText}</div>
          <div className="form-container">
            {children}
            {false && <div className="alert alert-danger small">Some Error</div>}
            <button type="submit" className="btn btn-outline-primary">{submitText}</button>
          </div>
        </form>
        <small className="form-text text-muted mt-2">{navPrompt}
          <span
            onClick={processNavClick}
            className="btn-link ml-2"
            style={{cursor: "pointer"}}
          >{navText}</span>
        </small>
      </div>
    </div>
  )
}
export default FormBody;

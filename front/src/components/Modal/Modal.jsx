/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import ModalStyles from "./Modal.module.css";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className={ModalStyles["ModalBackground"]}>{children}</div>,
    document.getElementById("modal")
  );
}

export { Modal };

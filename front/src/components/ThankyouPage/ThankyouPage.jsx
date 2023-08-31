import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./ThankyouPage.module.css";
import { PDFDownloadLink } from "@react-pdf/renderer";
import OrderSummaryPDF from "../OrderSummaryPDF/OrderSummaryPDF";

const ThankYouPage = () => {
  const cartItems = useSelector((state) => state.filters.cart);
  const details = useSelector((state) => state.filters.details);
  const compraExitosa = useSelector((state) => state.filters.compraExitosa);
  const [pdfFileName, setPdfFileName] = useState("order-summary.pdf");



  return (
    <div className={styles["thank-you-container"]}>
      {compraExitosa ? (
        <>
          <h2>¡Gracias por tu compra!</h2>
        </>
      ) : (
        <h2>¡Ups, algo salió mal en la compra!</h2>
      )}
    </div>
  );
};
export default ThankYouPage;

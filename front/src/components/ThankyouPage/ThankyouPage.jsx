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

  const totalPrecio = cartItems.reduce((total, item) => {
    const detail = details.find((detail) => detail.id === item.id);
    if (detail && detail.price) {
      return total + detail.price * item.quantity;
    }
    return total;
  }, 0);

  return (
    <div className={styles["thank-you-container"]}>
      {compraExitosa ? (
        <>
          <h2>¡Gracias por tu compra!</h2>
          <p>Aquí tienes el resumen de tu compra:</p>
        </>
      ) : (
        <h2>¡Ups, algo salió mal en la compra!</h2>
      )}

      <ul className={styles["thank-you-list"]}>
        {cartItems.map((item) => {
          const detail = details.find((detail) => detail.id === item.id);
          return (
            <li key={item.id} className={styles["thank-you-item"]}>
              {detail && <img src={detail.images[0]} alt={detail.name} />}
              <div className={styles["thank-you-item-content"]}>
                <p className={styles["thank-you-item-title"]}>{item.name}</p>
                <p className={styles["thank-you-item-quantity"]}>
                  Cantidad: {item.quantity}
                </p>
                <p className={styles["thank-you-item-price"]}>
                  Precio: ${detail && detail.price ? detail.price : "N/A"}
                </p>
              </div>
            </li>
          );
        })}
      </ul>

      <div className={styles["pdf-button-container"]}>
        <PDFDownloadLink
          document={
            <OrderSummaryPDF
              cartItems={cartItems}
              details={details}
              totalPrecio={totalPrecio}
            />
          }
          fileName={pdfFileName}
        >
          {({ blob, url, loading, error }) => (
            <button className={styles["pdf-button"]} disabled={loading}>
              {loading ? "Generando PDF..." : "Guardar orden"}
            </button>
          )}
        </PDFDownloadLink>
      </div>

      <p className={styles["thank-you-total"]}>
        Total: <span>${totalPrecio}</span>
      </p>
    </div>
  );
};

export default ThankYouPage;

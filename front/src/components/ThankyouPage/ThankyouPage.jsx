import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./ThankyouPage.module.css";
import { BlobProvider, PDFDownloadLink } from "@react-pdf/renderer";
import OrderSummaryPDF from "../OrderSummaryPDF/OrderSummaryPDF";

const ThankYouPage = () => {
  const compraExitosa = useSelector((state) => state.filters.compraExitosa);
  // Recuperar productos temporales del Local Storage
  const cartItems = JSON.parse(localStorage.getItem("tempCartItems")) || [];
  const [loading, setLoading] = useState(true);
  const pdfFileName = "order_summary.pdf";

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className={styles["thank-you-container"]}>
      {loading ? (
        <h2 className={styles["thank-you-item-title"]}>Cargando...</h2>
      ) : compraExitosa ? (
        <>
          <h2 className={styles["thank-you-item-title"]}>
            ¡Gracias por tu compra!
          </h2>
          <h3 className={styles["thank-you-item-title"]}>
            Detalles de la compra:
          </h3>
          <ul className={styles["thank-you-list"]}>
            {cartItems.map((item) => (
              <li key={item._id} className={styles["thank-you-item"]}>
                {item.image && item.image[0] && (
                  <img
                    src={item.image[0].url}
                    alt={item.name}
                    className={styles["thank-you-item-img"]}
                  />
                )}
                <div className={styles["thank-you-item-content"]}>
                  <span className={styles["thank-you-item-title"]}>
                    Producto: {item.name}
                  </span>
                  <span className={styles["thank-you-item-quantity"]}>
                    Cantidad: {item.quantity}
                  </span>
                  <span className={styles["thank-you-item-price"]}>
                    Precio Total: ${parseInt(item.price * item.quantity)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <p className={styles["thank-you-total"]}>
          Total: ${cartItems.reduce((total, item) => parseInt(total + (item.price * item.quantity)), 0)}
          </p>
        </>
      ) : (
        <h2>Error en la compra.</h2>
      )}
    </div>
  );
};

export default ThankYouPage;

import React, { useEffect,useState } from "react";
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
        <h2>Cargando...</h2>
      ) : compraExitosa ? (
        <>
          <h2>¡Gracias por tu compra!</h2>
          <h3>Detalles de la compra:</h3>
          <ul>
            {cartItems.map((item) => (
              <li key={item._id}>
                Producto: {item.name}
                <br />
                Cantidad: {item.quantity}
                <br />
                Precio Total: ${parseInt(item.price * item.quantity)}
                {item.image && item.image[0] && (
                <img
                  src={item.image[0].url}
                  alt={item.name}
                  width="100"
                  height="100"
                />
              )}
              </li>
            ))}
          </ul>

          {/*}  <BlobProvider document={<OrderSummaryPDF cartItems={cartItems} />}>
            {({ blob, loading }) => (
              <div className={styles["pdf-button-container"]}>
                <PDFDownloadLink document={blob} fileName={pdfFileName}>
                  {({ loading }) => (
                    <button className={styles["pdf-button"]} disabled={loading}>
                      {loading ? "Generating PDF..." : "Save Order"}
                    </button>
                  )}
                </PDFDownloadLink>
              </div>
            )}
                  </BlobProvider>*/}
        </>
      ) : (
        <h2>¡Ups, algo salió mal en la compra!</h2>
      )}
    </div>
  );
};

export default ThankYouPage;

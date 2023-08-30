import React from "react";
import { Page, Document, Text, StyleSheet, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    padding: 40,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    borderBottom: 1,
    paddingBottom: 5,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginTop:20
  },
  itemName: {
    fontSize: 14,
  },
  itemQuantity: {
    fontSize: 14,
  },
  itemPrice: {
    fontSize: 14,
  },
  total: {
    fontSize: 10,
    fontWeight: "bold",
    marginTop: 35,
  },
  totalprice: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  footer: {
    marginTop: 40,
    textAlign: "center",
    fontSize: 12,
  },
});

const OrderSummaryPDF = ({ cartItems, details, totalPrecio }) => {
  const iva = 0.16; 

  const subtotal = cartItems.reduce((subtotal, item) => {
    const detail = details.find((d) => d.id === item.id);
    if (detail && detail.price) {
      return subtotal + detail.price * item.quantity;
    }
    return subtotal;
  }, 0);

  const descuento = 0; 

  const totalDespuesImpuestos = (subtotal - descuento) * (1 + iva);

  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.heading}>Resumen de la compra</Text>
        <Text>Fecha: {new Date().toLocaleDateString()}</Text>
        {/* Agregar títulos de columnas */}
        <View style={styles.item}>
          <Text style={styles.itemTitle}>Producto</Text>
          <Text style={styles.itemTitle}>Cantidad</Text>
          <Text style={styles.itemTitle}>Precio Unitario</Text>
        </View>
        {/* Detalles de los productos */}
        {cartItems.map((item) => {
          const detail = details.find((d) => d.id === item.id);
          return (
            <View key={item.id} style={styles.item}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemQuantity}>{item.quantity}</Text>
              <Text style={styles.itemPrice}>
                {detail && detail.price ? `$${detail.price}` : "N/A"}
              </Text>
            </View>
          );
        })}
        {/* Subtotal */}
        <View style={styles.item}>
          <Text style={styles.total}>Subtotal:</Text>
          <Text style={styles.total}>${subtotal}</Text>
        </View>
        {/* Descuentos */}
        <View style={styles.item}>
          <Text style={styles.total}>Descuento:</Text>
          <Text style={styles.total}>-${descuento}</Text>
        </View>
        {/* IVA */}
        <View style={styles.item}>
          <Text style={styles.total}>IVA ({iva * 100}%):</Text>
          <Text style={styles.total}>${(subtotal - descuento) * iva}</Text>
        </View>
        {/* Total después de impuestos */}
        <View style={styles.item}>
          <Text style={styles.total}>Total:</Text>
          <Text style={styles.totalprice}>${totalDespuesImpuestos}</Text>
        </View>
        {/* Pie de página */}
        <Text style={styles.footer}>
          Gracias por su compra. Para más información, visite nuestro sitio web
          o contáctenos a marketzone@gmail.com
        </Text>
      </Page>
    </Document>
  );
};

export default OrderSummaryPDF;


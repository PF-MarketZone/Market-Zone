import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { backendUrl } from "../../../deployConfig";


const Sales = () => {
  const [stores, setStores] = useState([]);
  const [selectedStoreId, setSelectedStoreId] = useState(null);
  const { user } = useSelector((state) => state.auth.user);
//console.log(user)
  useEffect(() => {
    // me traigo las storeporid
    axios.get(`${backendUrl}/store?user=${user._id}`)
      .then((response) => {
        setStores(response.data.data);
      })
      .catch((error) => {
        console.error("Error al obtener las tiendas:", error);
      });
  }, [user._id]);

  const handleStoreChange = (storeId) => {
    setSelectedStoreId(storeId);
  }

  // Busco la tienda que coindcida con la selected (id)
  const selectedStore = stores.find((store) => store._id === selectedStoreId);

  return (
    <div>
      <h1>Estadísticas</h1>
      <p>Selecciona una tienda:</p>
      <div>
        {stores.map((store) => (
          <label key={store._id}>
            <input
              type="checkbox"
              value={store._id}
              checked={selectedStoreId === store._id}
              onChange={() => handleStoreChange(store._id)}
            />
            {store.name}
          </label>
        ))}
      </div>
      
      {selectedStore && (
        <iframe
          style={{
            background: "#21313C",
            border: "none",
            borderRadius: "2px",
            boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
            width: "100vw",
            height: "100vh"
          }}
          src={`https://charts.mongodb.com/charts-marketzone-jmrft/embed/dashboards?id=${selectedStore.chart}&theme=dark&autoRefresh=true&maxDataAge=60&showTitleAndDesc=false&scalingWidth=scale&scalingHeight=scale`}
        ></iframe>
      )}
    </div>
  );
}

export default Sales;
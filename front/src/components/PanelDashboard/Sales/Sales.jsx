import React from "react";

const Sales = () => {
    
    return ( 
        <>
        <h1>Panel de ventas</h1>
        <div>
        <iframe
        style={{
          background: "#21313C",
          border: "none",
          borderRadius: "2px",
          boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
          width: "100vw",
          height: "100vh",
        }}
        src="https://charts.mongodb.com/charts-marketzone-jmrft/embed/dashboards?id=304d35c5-ea61-4b74-ace0-2e7358b5808b&theme=dark&autoRefresh=true&maxDataAge=60&showTitleAndDesc=false&scalingWidth=scale&scalingHeight=scale"
      ></iframe>
           
        </div>
        </>
     );
}
  //guardamos la src en el la coleccion del user 
        
export default Sales;
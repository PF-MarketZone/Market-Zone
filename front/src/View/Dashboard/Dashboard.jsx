import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "../../components/PanelDashboard/Sidebar/Sidebar";
import Products from "../../components/PanelDashboard/Products/Products";
import AddProducts from "../../components/PanelDashboard/AddProducts/AddProducts";
import AddStore from "../../components/PanelDashboard/AddStore/AddStore";
import Orders from "../../components/PanelDashboard/Orders/Orders";
import Users from "../../components/PanelDashboard/Users/Users";
import Sales from "../../components/PanelDashboard/Sales/Sales";
import Reviews from "../../components/PanelDashboard/Reviews/Reviews";

const AdminPanel = styled.div`
  display: flex;
  height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const Dashboard = () => {
  const [selected, setSelected] = useState(null);

  const renderSelected = () => {
    switch (selected) {
      case "products":
        return <Products />;
      case "add store":
        return <AddStore />;
      case "add products":
        return <AddProducts />;
      case "users":
        return <Users />;
      case "orders":
        return <Orders />;
      case "reviews":
        return <Reviews />;
      case "sales":
        return <Sales />;
      default:
        return null;
    }
  };

  const handleComponentClick = (component) => {
    setSelected(component);
  };

  return (
    <AdminPanel>
      <Sidebar handleComponentClick={handleComponentClick} />
      <Content>
        <div>{renderSelected()}</div>
      </Content>
    </AdminPanel>
  );
};

export default Dashboard;

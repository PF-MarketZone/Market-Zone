import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import store from "./redux/store.js";
import { StyleSheetManager } from "styled-components";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <StyleSheetManager
        shouldForwardProp={(prop) => !["index", "rating"].includes(prop)}
      >
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </StyleSheetManager>
    </BrowserRouter>
  </Provider>
);

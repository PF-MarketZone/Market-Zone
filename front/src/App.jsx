import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./View/Home/Home";
import { Routes, Route } from "react-router-dom";
import TiendaDetalle from "./View/TiendaDetalle/TiendaDetalle";
import Detail from "./View/Detail/Detail";
import Landing from "./View/Landing/Landing";
import Dashboard from "./View/Dashboard/Dashboard";
import CartSidebar from "./components/CartSidebar/CartSidebar";
import Footer from "./components/footer/Footer.jsx";
import { useLocation } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import LogInSignUp from "./View/LogInSignUp/LogInSignUp";
import ThankYouPage from "./components/ThankyouPage/ThankyouPage";
import { setCompraExitosa } from "../src/redux/actions";
import LogInSuccess from "./components/LogIn/LoginSuccess";
import { refreshAccessToken, sessionActive } from "./redux/Actions/authAction";

function App() {
  const location = useLocation();
  const [categoriaFiltrada, setCategoriaFiltrada] = useState();
  const [isCartSidebarVisible, setCartSidebarVisible] = useState(false);
  const cartItems = useSelector((state) => state.filters.cart);
  const userStringify = sessionStorage.getItem("session-mz");

  const handleCartButtonClick = () => {
    setCartSidebarVisible(!isCartSidebarVisible);
  };

  const handleSearch = (categoria) => {
    setCategoriaFiltrada(categoria);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const collectionStatus = searchParams.get("collection_status");

    if (collectionStatus === "approved") {
      dispatch(setCompraExitosa(true));
      localStorage.removeItem("carrito");
    } else {
      dispatch(setCompraExitosa(false));
    }
  }, [dispatch, location.search]);

  useEffect(() => {
    const carritoJSON = localStorage.getItem("carrito");
    if (carritoJSON) {
      const carrito = JSON.parse(carritoJSON);
      dispatch({ type: "SET_INITIAL_CART", payload: carrito });
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(sessionActive());
    return;
  }, [userStringify]);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("session-mz"));
    const refreshtkn = user.refreshToken;
    const tokenExpirationTime = 900; // Tiempo de expiración en segundos
    const refreshTokenTimer = setInterval(() => {
      dispatch(refreshAccessToken(refreshtkn));
    }, (tokenExpirationTime - 60) * 1000); // Refrescar a 60 segundos antes de la expiración

    // Limpieza cuando el componente se desmonta
    return () => {
      clearInterval(refreshTokenTimer);
    };
  }, []);

  return (
    <>
      <div className="App">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>

        <div>
          {location.pathname === "/" ||
          location.pathname === "/login" ||
          location.pathname === "/dashboard" ? null : (
            <Nav onSearch={handleSearch} />
          )}
        </div>

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/home"
            element={<Home categoriaFiltrada={categoriaFiltrada} />}
          />
          <Route path="/login" element={<LogInSignUp />} />
          <Route path="/login/success" element={<LogInSuccess />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/:storeId" element={<TiendaDetalle />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detail/:detailId" element={<Detail />} />
          <Route path="/thankyou" element={<ThankYouPage />} />
        </Routes>

        <div>{location.pathname === "/" ? null : <Footer />}</div>
      </div>
      {isCartSidebarVisible && <CartSidebar />}
      {/* </GoogleOAuthProvider> */}
    </>
  );
}
export default App;

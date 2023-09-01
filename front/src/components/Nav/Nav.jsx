import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import SearchBar from "../searchBar/searchBar";
import { useSelector } from "react-redux";
import CartSidebar from "../CartSidebar/CartSidebar";
import Logo from "../../images/Logo.png";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";

const Nav = ({ onSearch }) => {
  const cartItems = useSelector((state) => state.filters.cart);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [isCartSidebarVisible, setCartSidebarVisible] = useState(false);

  const toggleCartSidebar = () => {
    setCartSidebarVisible(!isCartSidebarVisible);
  };

  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setCartSidebarVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleLogout = () => {
    // Realiza las acciones necesarias para cerrar la sesión
    // Por ejemplo, eliminar tokens, limpiar el sessionStorage, etc.
    // Luego redirige a la página de inicio de sesión
    // dispatch(logout()); // Llama a la acción de logout en tu authActions
    // sessionStorage.clear(); // Limpia el sessionStorage
    // history.push("/login");
  };

  return (
    <div className={styles.navContainer}>
      <div className={styles.navbar} ref={navRef}>
        <div className={styles.searchBarContainer}>
          <Link to="/home">
            <img
              className={styles.imgLogo}
              src={Logo}
              alt="logo no disponible"
            />
          </Link>
          <SearchBar onSearch={onSearch} />
        </div>
        {isAuthenticated && (
          // Mostrar botón de Dashboard solo si está autenticado
          <Link to="/dashboard">
            <button className={styles.button1}>Dashboard</button>
          </Link>
        )}

        <div className={styles.cartButtonContainer}>
          <button className={styles.button2} onClick={toggleCartSidebar}>
            Carrito ({cartItems.length})
          </button>

          {isCartSidebarVisible && (
            <div
              className={`${styles.cartSidebarOverlay} ${
                isCartSidebarVisible ? styles.active : ""
              }`}
            >
              <CartSidebar onClose={toggleCartSidebar} />
            </div>
          )}
        </div>
        {isAuthenticated ? (
          // Mostrar botón de Perfil si está autenticado
          <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>
            <AiOutlineLogout style={{ width: "10vh", height: "5vh" }} />
          </Link>
        ) : (
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <AiOutlineLogin
              style={{ width: "10vh", height: "5vh", Color: "blue" }}
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;

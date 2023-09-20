import { useEffect, useRef, useState } from "react";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../images/Logo.png";
import { logoutFn } from "../../redux/Actions/authAction";
import CartSidebar from "../CartSidebar/CartSidebar";
import styles from "./Nav.module.css";

const Nav = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.filters.cart);
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [isCartSidebarVisible, setCartSidebarVisible] = useState(false);
  const location = useLocation();

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

  const handleLogout = async () => {
    const header = {
      Authorization: `Bearer ${user.token}`,
      "refresh-token": user.refreshToken,
    };

    const result = await dispatch(logoutFn(header));

    result ? sessionStorage.clear("session-mz") : null;
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
        </div>
        {isAuthenticated && (
          // Mostrar botón de Dashboard solo si está autenticado====================== Dashboard
          <Link to="/dashboard">
            <button className={styles.button1}>Ajustes</button>
          </Link>
        )}

        <div className={styles.cartButtonContainer}>
          {location.pathname !== "/home" && (
            // Mostrar el botón del carrito solo en páginas distintas de /home
            <button className={styles.button2} onClick={toggleCartSidebar}>
              <FaShoppingCart style={{ fontSize: "24px" }} />
              {cartItems.length > 0 && (
                <span className={styles.cartItemCount}>{cartItems.length}</span>
              )}
            </button>
          )}
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
            <AiOutlineLogout
              onClick={handleLogout}
              style={{ width: "10vh", height: "5vh" }}
            />
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

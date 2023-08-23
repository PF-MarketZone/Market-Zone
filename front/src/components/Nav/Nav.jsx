import React, { useState,useRef, useEffect  } from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import SearchBar from "../searchBar/searchBar";
import { useSelector } from "react-redux";
import CartSidebar from "../CartSidebar/CartSidebar";
import Logo from '../../images/Logo.png'
import { CgProfile } from 'react-icons/cg';

const Nav = ({ onSearch }) => {
  const cartItems = useSelector((state) => state.cart);
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

  return (
    <div className={styles.navContainer}>
      <div className={styles.navbar} ref={navRef}>
        <div className={styles.searchBarContainer}>
          <Link to="/home">
          <img className={styles.imgLogo} src={Logo} alt="logo no disponible" />
          </Link>
          <SearchBar onSearch={onSearch} />
        </div>
        <Link to="/dashboard">
          <button className={styles.button1}>Dashboard</button>
        </Link>

        <div className={styles.cartButtonContainer}>
          <button
            className={styles.button2}
            onClick={toggleCartSidebar}
          >
            Carrito ({cartItems.length})
          </button>

          {isCartSidebarVisible && (
            <div className={styles.cartSidebarOverlay}>
              <CartSidebar onClose={toggleCartSidebar} />
            </div>
          )}
        </div>
        <Link to="/login" style={{ textDecoration: 'none', color: 'inherit'}}>
        <CgProfile style={{width: '10vh', height: '5vh'}}/>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
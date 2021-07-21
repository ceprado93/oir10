import React, { useState, useEffect, useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { Link } from "react-router-dom";
import logoLigth from "../../assets/LogoOscuro.svg";
import cepillos from "../../assets/cepillos.png";
import "./Accesorios.css";

const Cepillo = () => {
  const { addItemToCheckout, fetchProductWithId, openCart, product, fetchAllProducts } = useContext(ShopContext);

  useEffect(() => {
    fetchProductWithId("Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzcwNjc4NTg2MzI4NzM=");

    return () => {};
  }, [fetchProductWithId]);

  function clickBrush(event) {
    addItemToCheckout(product.variants[0].id, 1);
    openCart();
  }
  return (
    <section>
      <div className="cartPage">
        <Link to="/">
          <img src={logoLigth} alt="logo" className="logoimg" />
        </Link>
        <img className="productImg__Cart" src={cepillos} alt="cepillos" />
        <ul>
          <div>
            <li className="blueBottom__menu-cart">Precio: 2.50€</li>
            <li className="blueBottom__menu-cart">Cantidad: 1</li>
          </div>
          <li>
            <button onClick={clickBrush} className="confirmar">
              Confirmar
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Cepillo;

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
        <div className="product__info">
          <img className="productImg__Cart" src={cepillos} alt="cepillos" />
          <div className="product__text">
            <h2>Kit de cepillos Nemeson</h2>
            <p>El kit de cepillos de nemeson incluye dos cepillos de diferentes tamaños, de 7 y 5 apliques de nylon, que te ayudarán a mantener tu nemeson en perfecto estado. </p>
            <p>Optimiza la limpieza de tu dispositivo con nuestro spray de limpieza, diseñado para preservar la vida util de tu nemeson y asegurarte la mejor calidad auditiva.</p>
          </div>
        </div>
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

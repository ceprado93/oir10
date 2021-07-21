import React, { useState, useLayoutEffect, useEffect, useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { Link } from "react-router-dom";
import logoLigth from "../../assets/LogoOscuro.svg";

import dome from "../../assets/dome.png";

const Dome = () => {
  const { addItemToCheckout, fetchProductWithId, openCart, product, fetchAllProducts } = useContext(ShopContext);

  useEffect(() => {
    fetchProductWithId("Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzcwNjc4MzI2ODA2MTc=");

    return () => {};
  }, [fetchProductWithId]);

  function clickDome(e) {
    addItemToCheckout(product.variants[0].id, 1);
    openCart();
  }

  return (
    <section>
      <div className="cartPage">
        <Link to="/">
          <img src={logoLigth} alt="logo" className="logoimg" />
        </Link>
        <img className="productImg__Cart" src={dome} alt="dome" />
        <ul>
          <div>
            <li className="blueBottom__menu-cart">Precio: 2.50€</li>
            <li className="blueBottom__menu-cart">Cantidad: 1</li>
          </div>
          <li>
            <button onClick={clickDome} className="confirmar">
              Confirmar
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Dome;

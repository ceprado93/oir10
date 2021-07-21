import React, { useState, useEffect, useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { Link } from "react-router-dom";
import logoLigth from "../../assets/LogoOscuro.svg";
import clean from "../../assets/bote.png";

const Spray = () => {
  const { addItemToCheckout, fetchProductWithId, product, openCart, fetchAllProducts } = useContext(ShopContext);

  useEffect(() => {
    fetchProductWithId("Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzcwNjc4NTIwNzkyNzM=");

    return () => {};
  }, [fetchProductWithId]);

  function clickSpray(event) {
    addItemToCheckout(product.variants[0].id, 1);
    openCart();
  }
  return (
    <section>
      <div className="cartPage">
        <Link to="/">
          <img src={logoLigth} alt="logo" className="logoimg" />
        </Link>
        <img className="productImg__Cart" src={clean} alt="clean" />
        <ul>
          <div>
            <li className="blueBottom__menu-cart">Precio: 4.25€</li>
            <li className="blueBottom__menu-cart">Cantidad: 1</li>
          </div>
          <li>
            <button onClick={clickSpray} className="confirmar">
              Confirmar
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Spray;

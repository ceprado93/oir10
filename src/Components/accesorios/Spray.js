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
        <div className="product__info">
          <img className="productImg__Cart" src={clean} alt="clean" />
          <div className="product__text">
            <h2>Spray de limpieza </h2>
            <p>El Spray de limpieza de nemeson tiene una composicion a base de detergentes cationicos y detergentes suaves que no dañan el audifono ni sus accesorios. </p>
            <p> El spray viene en un bote de 30ml y sirve para limpiar tanto el audifono como sus accesorios y moldes.</p>
          </div>
        </div>
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

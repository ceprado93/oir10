import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
import logoLigth from "../../assets/LogoOscuro.svg";
import cable from "../../assets/cable.png";

const TuboOpen = () => {
  let { id } = useParams();

  const { addItemToCheckout, fetchProductWithId, openCart, product, fetchAllProducts } = useContext(ShopContext);
  useEffect(() => {
    fetchProductWithId("Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzcwNjc3MTI0MjIwNTc=");

    return () => {};
  }, [fetchProductWithId, id]);

  function clickTube(event) {
    addItemToCheckout(product.variants[0].id, 1);
    openCart();
  }
  return (
    <section>
      <div className="cartPage">
        <Link to="/">
          <img src={logoLigth} alt="logo" className="logoimg" />
        </Link>
        <img className="productImg__Cart" src={cable} alt="cable" />
        <ul>
          <div>
            <li className="blueBottom__menu-cart">Precio: 5.95€</li>
            <li className="blueBottom__menu-cart">Cantidad: 1</li>
          </div>
          <li>
            <button onClick={clickTube} className="confirmar">
              Confirmar
            </button>
          </li>
        </ul>
      </div>
    </section>
    // <section>
    //   <div className="nemesonPage">
    //     <Link to="/">
    //       <img src={logoLigth} alt="logo" className="logoimg" />
    //     </Link>
    //     <div className="carousel__section">
    //       <img className="productImg" src={tuboOpen} alt="tuboOpen" />
    //       <div className="camara__text">
    //         <p>Precio: 75$</p>
    //         <p>
    //           Descripción: Cámara de secado para audífonos que elimina la humedad y la condensación a través de un suave secado de calor mediante radiación de luz UV simultánea con 3 fases
    //           seleccionables. Bandeja extraíble, fácil de usar, capacidad para varios audífonos o implantes cocleares, 4 luces UV que garantizan una radiación homogénea e inhiben el crecimiento de
    //           bacterias que pueden causar picazón en los oídos.
    //         </p>
    //       </div>
    //     </div>
    //     <ul>
    //       <li className="nemesonOne">Tubo Open</li>
    //       <li>
    //         <Link className="comprar" to="/carrito/1">
    //           Comprar
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </section>
  );
};

export default TuboOpen;

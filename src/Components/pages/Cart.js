import React, { useState, useLayoutEffect, useContext } from "react";

import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
import "./Pages.css";

const Cart = () => {
  let { id } = useParams();
  let [quan, setQuan] = useState(1);

  const { isCartOpen, closeCart, product, deleteItemFromCheckout, products, addItemToCheckout, checkout, fetchAllProducts } = useContext(ShopContext);

  useLayoutEffect(() => {
    fetchAllProducts();
    return () => {};
  }, []);

  function addItemstoCart(products, item) {
    products.map((elm, idx) => {
      if (elm.title === item.title) {
        let newQuan = 1;
        let newQuanState = quan + 1;
        setQuan(newQuanState);
        addItemToCheckout(elm.variants[0].id, newQuan);
      }

      return idx;
    });
  }

  function removeItemsFromCart(products, item) {
    if (quan > 0) {
      products.map((elm, idx) => {
        if (elm.title === item.title) {
          let minusQuan = -1;
          let minusQuanState = quan - 1;
          setQuan(minusQuanState);
          addItemToCheckout(elm.variants[0].id, minusQuan);
        }
        return idx;
      });
    } else {
      setQuan(0);
    }
  }

  function deleteProduct(checkout, item) {
    checkout.lineItems.map((elm, idx) => {
      if (elm.title === item.title) {
        console.log(elm);
        deleteItemFromCheckout(elm.id);
      }

      return idx;
    });
  }

  // if (isCartOpen && product.id === "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzcwNjU0MjMyMTY4MDk=") {
  //   return (
  //     <section>
  //       <div className="cartPage">
  //         <Link to="/">
  //           <img onClick={() => closeCart()} src={logoLigth} alt="logo" className="logoimg" />
  //         </Link>
  //         <img className="productImg__Cart" src={nemeson} alt="nemeson" />
  //         <ul>
  //           <div>
  //             <li className="blueBottom__menu-cart">Precio: 899€</li>
  //             <li className="blueBottom__menu-cart">Cantidad: 1</li>
  //           </div>
  //           <li>
  //             <a href={checkout.webUrl}>
  //               <button className="confirmar">Confirmar</button>
  //             </a>
  //           </li>
  //         </ul>
  //       </div>
  //     </section>
  //   );
  // } else if (isCartOpen && product.id === "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzcwNjc3MTI0MjIwNTc=") {
  //   return (
  //     <section>
  //       <div className="cartPage">
  //         <Link to="/">
  //           <img onClick={() => closeCart()} src={logoLigth} alt="logo" className="logoimg" />
  //         </Link>
  //         <img className="productImg__Cart" src={cable} alt="cable" />
  //         <ul>
  //           <div>
  //             <li className="blueBottom__menu-cart">Precio: 5.95€</li>
  //             <li className="blueBottom__menu-cart">Cantidad: 1</li>
  //           </div>
  //           <li>
  //             <a href={checkout.webUrl}>
  //               <button className="confirmar">Confirmar</button>
  //             </a>
  //           </li>
  //         </ul>
  //       </div>
  //     </section>
  //   );
  // } else if (isCartOpen && product.id === "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzcwNjc4MzI2ODA2MTc=") {
  //   return (
  //     <section>
  //       <div className="cartPage">
  //         <Link to="/">
  //           <img onClick={() => closeCart()} src={logoLigth} alt="logo" className="logoimg" />
  //         </Link>
  //         <img className="productImg__Cart" src={dome} alt="dome" />
  //         <ul>
  //           <div>
  //             <li className="blueBottom__menu-cart">Precio: 2.50€</li>
  //             <li className="blueBottom__menu-cart">Cantidad: 1</li>
  //           </div>
  //           <li>
  //             <a href={checkout.webUrl}>
  //               <button className="confirmar">Confirmar</button>
  //             </a>
  //           </li>
  //         </ul>
  //       </div>
  //     </section>
  //   );
  // } else if (isCartOpen && product.id === "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzcwNjc4NTIwNzkyNzM=") {
  //   return (
  //     <section>
  //       <div className="cartPage">
  //         <Link to="/">
  //           <img onClick={() => closeCart()} src={logoLigth} alt="logo" className="logoimg" />
  //         </Link>
  //         <img className="productImg__Cart" src={clean} alt="clean" />
  //         <ul>
  //           <div>
  //             <li className="blueBottom__menu-cart">Precio: 4.25€</li>
  //             <li className="blueBottom__menu-cart">Cantidad: 1</li>
  //           </div>
  //           <li>
  //             <a href={checkout.webUrl}>
  //               <button className="confirmar">Confirmar</button>
  //             </a>
  //           </li>
  //         </ul>
  //       </div>
  //     </section>
  //   );
  // } else if (isCartOpen && product.id === "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzcwNjc4NTg2MzI4NzM=") {
  //   return (
  //     <section>
  //       <div className="cartPage">
  //         <Link to="/">
  //           <img onClick={() => closeCart()} src={logoLigth} alt="logo" className="logoimg" />
  //         </Link>
  //         <img className="productImg__Cart" src={cepillos} alt="cepillos" />
  //         <ul>
  //           <div>
  //             <li className="blueBottom__menu-cart">Precio: 2.50€</li>
  //             <li className="blueBottom__menu-cart">Cantidad: 1</li>
  //           </div>
  //           <li>
  //             <a href={checkout.webUrl}>
  //               <button className="confirmar">Confirmar</button>
  //             </a>
  //           </li>
  //         </ul>
  //       </div>
  //     </section>
  //   );
  // }

  // return null;
  if (isCartOpen) {
    return (
      <div className="cart__wrapper">
        <div className="cart__wrapper-color">
          <div id="cart__page">
            <div className="cart__header">
              <p>Carrito</p>
              <div onClick={() => closeCart()}>
                <p style={{ fontSize: 20, cursor: "pointer" }}>x</p>
              </div>
            </div>
            <div className="cart_main">
              {checkout.lineItems.length < 1 ? (
                <div>
                  <div>
                    <p>El carrito está vacío</p>
                  </div>
                </div>
              ) : (
                <>
                  {checkout.lineItems &&
                    checkout.lineItems.map((item, idx) => (
                      <div key={item.id} className="cart__line">
                        <div className="cart__line-col">
                          <div className="cart__productImg" style={{ backgroundImage: `url(${item.variant.image.src})` }} />
                        </div>
                        <div className="cart__line-col">
                          <p>{item.title}</p>
                        </div>
                        <div className="cart__line-col">
                          <div className="cart__itemList">
                            <button className="cart__button" onClick={() => removeItemsFromCart(products, item)}>
                              -
                            </button>
                            <p>{item.quantity}</p>
                            <button className="cart__button" onClick={() => addItemstoCart(products, item)}>
                              +
                            </button>
                          </div>
                        </div>
                        <div className="cart__itemList cart__line-col">
                          <p className="cart__totalPrice" maxLength="11">
                            {(item.variant.price * item.quantity).toFixed(2)}€
                          </p>
                          <button className="delete_image" onClick={() => deleteProduct(checkout, item)}>
                            X
                          </button>
                        </div>
                      </div>
                    ))}
                </>
              )}
            </div>
            <div>
              <div className="cart__finalButton">
                <a href={checkout.webUrl}>
                  <button>FINALIZAR PEDIDO</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default Cart;

import { useLayoutEffect, useState, useContext } from "react";

import { ShopContext } from "../../context/shopContext";

import carro from "../../assets/Carrito.png";

const Carrito = ({ start }) => {
  const [size, setSize] = useState(false);

  useLayoutEffect(() => {
    window.innerWidth < 800 && setSize(true);
  }, []);
  const { openCart, isCartOpen } = useContext(ShopContext);

  if (isCartOpen || !start) return null;

  return <img onClick={() => openCart()} style={{ cursor: "pointer", zIndex: "1050", position: "absolute", right: "8%", top: size ? "4%" : "8%", width: 30 }} src={carro} alt="carro" />;
};

export default Carrito;

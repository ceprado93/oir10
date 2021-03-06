import { useState, useLayoutEffect, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import logoLigth from "../../assets/LogoOscuro.svg";
import nemeson from "../../assets/RenderNemeson.7.2.png";
import rendernemeson from "../../assets/RenderNemeson.png";
import nemesondoble from "../../assets/Renderinicio.png";
import nemesonAgua from "../../assets/Renderagua.png";
import { ShopContext } from "../../context/shopContext";
import { useParams } from "react-router-dom";

const Nemeson = () => {
  const [leftBtn, setLeftBtn] = useState(false);
  const [rigthBtn, setRigthBtn] = useState(false);
  const [carouselPos, setCarouselPos] = useState(1);
  let { id } = useParams();

  const { addItemToCheckout, fetchProductWithId, products, product, openCart } = useContext(ShopContext);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchProductWithId("Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzcwNjU0MjMyMTY4MDk=");

    return () => {};
  }, [fetchProductWithId]);

  function addPos() {
    if (carouselPos === 3) {
      setCarouselPos(1);
    } else {
      let newPos = carouselPos + 1;
      setCarouselPos(newPos);
    }
  }

  function subPos() {
    if (carouselPos === 1) {
      setCarouselPos(3);
    } else {
      let newPos = carouselPos - 1;
      setCarouselPos(newPos);
    }
  }

  function click(event) {
    addItemToCheckout(product.variants[0].id, 1);
    openCart();
  }

  return (
    <section>
      {products.map((product) => {
        <p>{product.id}</p>;
      })}
      <div className="nemesonPage">
        <Link to="/">
          <img src={logoLigth} alt="logo" className="logoimg" />
        </Link>
        <div className="nemeson__info">
          <div className="product__imgs">
            <img className="nemeson__bigImg" src={carouselPos === 1 ? nemeson : carouselPos === 2 ? rendernemeson : nemesonAgua} alt="cepillos" />
            <div className="productImg__small">
              <img className={carouselPos != 1 && "img__inActive"} onClick={() => setCarouselPos(1)} src={nemeson} alt="nemeson" />
              <img className={carouselPos != 2 && "img__inActive"} onClick={() => setCarouselPos(2)} src={rendernemeson} alt="nemeson" />
              <img className={carouselPos != 3 && "img__inActive"} onClick={() => setCarouselPos(3)} src={nemesonAgua} alt="nemeson" />
            </div>
          </div>
          <div className="product__text">
            <h2>Nemeson One</h2>
            <p>
              Nemeson One es el ??nico dispositivo auditivo inteligente del mercado que garantiza una recuperaci??n de la audici??n m??nima del 75% a trav??s de una amplificaci??n por frecuencias selectiva
              y autom??tica.
            </p>
            <p>
              Dispone de hasta 6 programas diferentes que se adaptan al 85% de los perfiles auditivos existentes. Su procesador digital permite ofrecer una cobertura especifica para cada paciente,
              mejorando el sonido original, amplificando las frecuencias y reduciendo los ruidos del exterior.
            </p>
          </div>
        </div>
        {/* <div className="carousel__section">
          <button className={leftBtn ? "blue_btn" : "btn__nemeson"} onMouseEnter={() => setLeftBtn(true)} onMouseLeave={() => setLeftBtn(false)} onClick={() => subPos()}></button>
          <img className={carouselPos === 1 ? "productImg" : "inActive"} src={nemeson} alt="nemeson" />
          <img className={carouselPos === 2 ? "productImg" : "inActive"} src={rendernemeson} alt="nemeson" />
          <img className={carouselPos === 3 ? "productImgAgua" : "inActive"} src={nemesonAgua} alt="nemeson" />

          <button className={rigthBtn ? "blue_btn" : "btn__nemeson"} onMouseEnter={() => setRigthBtn(true)} onMouseLeave={() => setRigthBtn(false)} onClick={() => addPos()}></button>
        </div> */}
        <ul>
          <li className="nemesonOne">Nemeson One</li>
          <li>
            <button id="SemiBold" className="comprar" onClick={click}>
              Comprar
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Nemeson;

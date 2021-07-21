import React, { useState, useLayoutEffect, useContext } from "react";
import { Link } from "react-router-dom";
import logoLigth from "../../assets/LogoOscuro.svg";

import cable from "../../assets/cable.png";
import cepillos from "../../assets/cepillos.png";
import clean from "../../assets/bote.png";
import dome from "../../assets/dome.png";

import { ShopContext } from "../../context/shopContext";

const Accesorios = () => {
  const [leftBtn, setLeftBtn] = useState(false);
  const [rigthBtn, setRigthBtn] = useState(false);
  const [carouselPos, setCarouselPos] = useState(1);
  const [size, setSize] = useState(false);

  const { addItemToCheckout, fetchProductWithId, products, product, openCart, fetchAllProducts } = useContext(ShopContext);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    window.innerWidth < 550 ? setSize(true) : setSize(false);
    fetchAllProducts();
  }, []);

  function addPos() {
    if (carouselPos === 2) {
      setCarouselPos(1);
    } else {
      let newPos = carouselPos + 1;
      setCarouselPos(newPos);
    }
  }

  function subPos() {
    if (carouselPos === 1) {
      setCarouselPos(2);
    } else {
      let newPos = carouselPos - 1;
      setCarouselPos(newPos);
    }
  }

  async function clickTube(event) {
    await fetchProductWithId("Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzcwNjc3MTI0MjIwNTc=");
    await addItemToCheckout("Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDc4NzgyMjc3MjM5Mw==", 1);
    openCart();
  }

  async function clickDome(event) {
    await fetchProductWithId("Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzcwNjc4MzI2ODA2MTc=");
    await addItemToCheckout("Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDc4ODI1NzUwNTQ0OQ==", 1);
    openCart();
  }

  async function clickSpray(event) {
    await fetchProductWithId("Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzcwNjc4NTIwNzkyNzM=");
    await addItemToCheckout("Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDc4ODM0OTY4MTgzMw==", 1);
    openCart();
  }

  async function clickBrush(event) {
    await fetchProductWithId("Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzcwNjc4NTg2MzI4NzM=");
    await addItemToCheckout("Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDc4ODM3OTQ2Nzk0NQ==", 1);
    openCart();
  }

  return (
    <section>
      <section>
        <div className="accPage">
          <Link to="/">
            <img src={logoLigth} alt="logo" className="logoimg" />
          </Link>
          <div className="carousel__section-acc">
            <button className={leftBtn ? "blue_btn" : "btn__accesorios"} onMouseEnter={() => setLeftBtn(true)} onMouseLeave={() => setLeftBtn(false)} onClick={() => subPos()}></button>
            <div className="accesories">
              <div className={!size ? "accesory__group" : carouselPos === 1 ? "accesory__group" : "inActive"}>
                <article>
                  <Link to="/accesorios/dome">
                    <img className="dome__img" src={dome} alt="accesorio" />
                    <p>Dome</p>
                  </Link>
                </article>
                <article>
                  <Link to="/accesorios/tuboOpen">
                    <img className="tubo__img" src={cable} alt="accesorio" />
                    <p>Tubo Open</p>
                  </Link>
                </article>
              </div>
              <div className={!size ? "accesory__group" : carouselPos === 2 ? "accesory__group" : "inActive"}>
                <article>
                  <Link to="/accesorios/spray">
                    <img className="spay__img" src={clean} alt="accesorio" />
                    <p>Spray Limpieza</p>
                  </Link>
                </article>
                <article>
                  <Link to="/accesorios/cepillo">
                    <img className="cepillo__img" src={cepillos} alt="accesorio" />
                    <p>Cepillo con imán</p>
                  </Link>
                </article>
                {/* <article>
                  <button onClick={clickDome}>
                    <img className="dome__img" src={dome} alt="accesorio" />
                    <p>Dome</p>
                  </button>
                </article>
                <article>
                  <button onClick={clickTube}>
                    <img className="tubo__img" src={cable} alt="accesorio" />
                    <p>Tubo Open</p>
                  </button>
                </article>
              </div>
              <div className={!size ? "accesory__group" : carouselPos === 2 ? "accesory__group" : "inActive"}>
                <article>
                  <button onClick={clickSpray}>
                    <img className="spay__img" src={clean} alt="accesorio" />
                    <p>Spray Limpieza</p>
                  </button>
                </article>
                <article>
                  <button onClick={clickBrush}>
                    <img className="cepillo__img" src={cepillos} alt="accesorio" />
                    <p>Cepillo con imán</p>
                  </button>
                </article> */}
              </div>
            </div>
            <button className={rigthBtn ? "blue_btn" : "btn__accesorios"} onMouseEnter={() => setRigthBtn(true)} onMouseLeave={() => setRigthBtn(false)} onClick={() => addPos()}></button>
          </div>
          <ul>
            <li className="accBottom">Accesorios</li>
            <li>
              <Link className="comprar" to="/accesorios">
                Comprar
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Accesorios;

import { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoLigth from "../../assets/LogoOscuro.svg";
import emailjs from "emailjs-com";

const Support = () => {
  const [size, setSize] = useState(false);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    window.innerWidth < 600 && setSize(true);
  }, []);

  function handleInputChange(e) {
    console.log(e.target);
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("service_h8glclh", "template_0ggwnkl", e.target, "user_MZhyjnUfuHQQ2IDgayj3B").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  }

  return (
    <section>
      <form onSubmit={sendEmail} className="form-control">
        <div className="support">
          <Link to="/">
            <img src={logoLigth} alt="logo" />
          </Link>
          <div className="form-control">
            <input type="text" className="form-input" placeholder="Nombre" name="name" onChange={handleInputChange} />
            <input type="text" className="form-input" placeholder="Correo" name="email" onChange={handleInputChange} />
            <input type="text" className="form-input" placeholder="Teléfono*" name="phone" onChange={handleInputChange} />
            <textarea className="form-input-textarea" rows="5" placeholder="Dudas..." name="message"></textarea>
            <input type="text" style={{ visibility: "hidden" }} placeholder="Telefono*" name="type" value="Soporte técnico" onChange={handleInputChange} />
          </div>
          <ul>
            <li>
              <Link className="blueBottom__menu" to="/soporte">
                Soporte técnico
              </Link>
            </li>
            <li className="blueBottom__menu">657835691</li>
            <li>
              <button type="submit" style={{ marginBottom: size && "4rem" }} className="blueBottom__menu navNemeson">
                Enviar
              </button>
            </li>
          </ul>
        </div>
      </form>
    </section>
  );
};

export default Support;

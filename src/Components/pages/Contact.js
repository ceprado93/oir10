import { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoContact from "../../assets/LogoClaro.svg";
import emailjs from "emailjs-com";

const Contact = () => {
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
        <div className="contact">
          <Link to="/">
            <img src={logoContact} alt="logo" />
          </Link>
          <div className="form-control">
            <input type="text" className="contact__form-input" placeholder="Nombre" name="name" onChange={handleInputChange} />
            <input type="text" className="contact__form-input" placeholder="Correo" name="email" onChange={handleInputChange} />
            <input type="text" className="contact__form-input" placeholder="Teléfono*" name="phone" onChange={handleInputChange} />
            <textarea className="contact__form-input-textarea" rows="5" placeholder="Dudas..." name="message"></textarea>
            <input type="text" style={{ visibility: "hidden" }} name="type" value="Contacto" onChange={handleInputChange} />
          </div>
          <ul>
            <li>
              <Link className="contact__menu" to="/contacto">
                Contacto
              </Link>
            </li>
            <li className="contact__menu">657835691</li>
            <li>
              <button type="submit" style={{ marginBottom: size && "4rem" }} className="contact__menu">
                Enviar
              </button>
            </li>
          </ul>
        </div>
      </form>
    </section>
  );
};

export default Contact;

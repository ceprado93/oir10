import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import logoLigth from "../../assets/LogoOscuro.svg";

const About = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <div className="about">
        <div>
          <Link to="/">
            <img src={logoLigth} alt="logo" className="logoimg" />
          </Link>
        </div>
        <div className="about__text">
          <p>
            Oir10 nace para dar respuesta a los problemas auditivos de una forma sencilla y rápida gracias al avance tecnológico en el sector de la audiología, siendo la empresa comercializadora
            online exclusiva de Nemeson One, dispositivo inteligente para la recuperación auditiva de la última generación.
          </p>
          <p>Oir10 está avalado por sus más de 40 años de experiencia al servicio de la audiología.</p>
          <p>Ponemos el foco en el paciente y en si recuperación auditiva, por ello ofrecemos un asesoramiento integral que le ayudará a optimizar el uso de su Nemeson One.</p>
          <p>
            Nuestra experiencia, además, nos permite ofrecerle la mejor solución auditiva, valoramos la prescripción médica realizada inicialmente por el ORL y le ayudamos a resolver cualquier duda
            que pueda surgirle.
          </p>
        </div>
        <ul>
          <li className="about_menu">Sobre nosotros</li>
        </ul>
      </div>
    </section>
  );
};

export default About;

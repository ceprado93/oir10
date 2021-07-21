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
            Oir10 nace para dar respuesta a los avances de la tecnología en materia de audición, solucionando de manera
            rápida y sencilla pérdidas de audición, facilitando el acceso online a app?
          </p>
          <p>
            Oir10 está avalado por un Centro de Atención Sanitaria, especializado en audiología, con más de 40 años de
            experiencia al servicio de la audiología. Estamos al servicio de las personas que padecen algún tipo de
            dificultad o pérdida auditiva. Realizamos un servicio profesional, con nuestra amplia formación y
            experiencia damos solución a su pérdida auditiva, asesoramos en la mejora de sus audífonos con las mejores
            ayudas.
          </p>
          <p>
            Nuestra experiencia como Audiólogos nos capacita para ofrecerle la mejor solución auditiva, valorando la
            prescripción médica realizada inicialmente por el ORL. Damos respuesta a cualquier duda en relación a la
            pérdida de audición.
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

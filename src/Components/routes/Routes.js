import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Nemeson from "../pages/Nemeson";
import Accesorios from "../pages/Accesorios";
import Support from "../pages/Support";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Cart from "../pages/Cart";
import TuboOpen from "../accesorios/tuboOpen";
import Dome from "../accesorios/Dome";
import Cepillo from "../accesorios/Cepillo";
import Spray from "../accesorios/Spray";

const Routes = ({ start }) => {
  return (
    <Switch>
      <Route path="/" exact render={() => <Home start={start} />} />
      <Route path="/nemeson" exact render={() => <Nemeson />} />
      <Route path="/carrito/:id" exact render={() => <Cart />} />
      <Route path="/accesorios" exact render={() => <Accesorios />} />
      <Route path="/accesorios/dome" exact render={() => <Dome />} />
      <Route path="/accesorios/cepillo" exact render={() => <Cepillo />} />
      <Route path="/accesorios/spray" exact render={() => <Spray />} />
      <Route path="/accesorios/tuboOpen" exact render={() => <TuboOpen />} />

      <Route path="/soporte" exact render={() => <Support />} />
      <Route path="/contacto" exact render={() => <Contact />} />
      <Route path="/sobre-nosotros" exact render={() => <About />} />
      <Route path="/tuboOpen" exact render={() => <TuboOpen />} />
    </Switch>
  );
};

export default Routes;

import { useState, useLayoutEffect } from "react";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import "./App.css";
import Routes from "./routes/Routes";
import Cart from "./pages/Cart";
import ShopProvider from "../context/shopContext";
import Carrito from "./shared/Carrito";

const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

const engine = new Styletron();

function App() {
  const [start, setStart] = useState(false);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setStart(true);
    }, 1000);
  }, []);

  return (
    <>
      <ShopProvider>
        <StyletronProvider value={engine} debug={debug} debugAfterHydratation>
          <Cart />
          <main>
            <Carrito start={start} />
            <Routes start={start} />
          </main>
        </StyletronProvider>
      </ShopProvider>
    </>
  );
}

export default App;

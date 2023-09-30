import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="portada">
        <div class="title">
          <h1>
            Beatriz González
            <span> Cronología</span>
          </h1>
          <hr />
          <h2>Por Natalia Gutiérrez Montes y José Ruiz Díaz</h2>
        </div>

        <div class="boton-guia">
          <span>Desplázate hacia abajo</span>
          <div class="down">{/* <img src="img/up-arrow.png" alt=""> */}</div>
        </div>
      </div>
    </>
  );
}

export default App;

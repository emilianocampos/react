import "./index.css";
import "./App.css";
import { useState } from "react";
import {Data} from './Data.jsx'
function App() {
  // const [position, setPosition] = useState({
  //   x: 0,
  //   y: 0
  // });
  // return (
  //   <div
  //     onPointerMove={e => {
  //       setPosition({
  //         x: e.clientX,
  //         y: e.clientY
  //       });
  //     }}
  //     style={{
  //       position: 'relative',
  //       width: '100vw',
  //       height: '100vh',
  //     }}>
  //     <div style={{
  //       position: 'absolute',
  //       backgroundColor: 'red',
  //       borderRadius: '50%',
  //       transform: `translate(${position.x}px, ${position.y}px)`,
  //       left: -1,
  //       top: -1,
  //       width: 10,
  //       height: 210,
  //     }} />
  //   </div>
  // )

  // return (
  //   <Tool
  //     tocandoMusica={() => {
  //       alert("tocando");
  //     }}
  //     subiendoImg={() => {
  //       alert("subiendo");
  //     }}
  //   />
  // );

  const [index, setIndex] = useState(0);
  const [mostrarMas, setMostrarMas] = useState(false);
  const prox = index < data.length - 1;
  const handleClickNext = () => {
    if (prox) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const handleClickMostrarmas = () => {
    setMostrarMas(!mostrarMas);
  };
  let escultura = data[index];
  return (
    <>
      <button onClick={handleClickNext}>Siguiente</button>
      <h1>Hola</h1>
    </>
  );
}
// export const Tool = ({ tocandoMusica, subiendoImg }) => {
//   return (
//     <div>
//       <Button onClick={tocandoMusica}>Tocar musica</Button>
//       <Button onClick={subiendoImg}>Subir img</Button>
//     </div>
//   );
// };

// export const Button = ({ onClick, children }) => {
//   return <button onClick={onClick}> {children}</button>;
// };

export default App;

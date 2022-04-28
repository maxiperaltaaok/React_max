import Navbar1 from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar1 />
    </div>
  )
}
/*function App() {
  <Navbar />
      const Array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,];
      const Array2 = [...Array1, 12, 13, 14];
      console.log(Array2)
      const Array3 = [
        {
            id: 1,
            nombre: "Carmen",  
         },
         {
           id: 2,
           nombre: "Lola"
         }
      ]
      const {nombre} = Array3[1]
      console.log(nombre)
      return (
        <div className='app'>
          <h1> Imprimo arrays </h1>
          <div>Hola {nombre}</div>
          {Array3.map((persona) => (
            <p>{persona.nombre}</p>
          ))}
        </div>
      )
    }*/

export default App;


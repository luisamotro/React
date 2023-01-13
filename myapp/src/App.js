import Header from './components/header';
import Ejemplo from './components/ejemplo';
import Ejemplo2 from './components/ejemplo2';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> JSX es una extension de javaScript; html + JavaScript (es5, ecmascript) </h1>
      <Header nombre="Luisa" apellido=" Morales"/>
      <Ejemplo/>
      <Ejemplo/>
      <Ejemplo/>
      <Ejemplo2/>
    </div>
  );
}

export default App;

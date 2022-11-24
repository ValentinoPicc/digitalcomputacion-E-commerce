
import './App.css';
import Navbar from './componentes/Navbar';
import Logo from './componentes/logoDigitalComp.webp';
import ItemListContainer from './componentes/ItemListContainer';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <a  href='index.hmtl'> <img src={Logo} className="App-logo" alt="logo" /> </a>


        <div>
          <Navbar
           Logo = {Logo} />

          <ItemListContainer
          nombre="Valentino"
          />

        </div>


      </header>
    </div>
  );
}

export default App;

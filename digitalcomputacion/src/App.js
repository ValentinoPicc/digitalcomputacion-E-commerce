import{
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Home from './pages/Home';
import Products from './pages/Products';
import Elemento from './pages/Elemento';
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
        <BrowserRouter>
        <Navbar
           Logo = {Logo} />

          <ItemListContainer
          nombre="Valentino"
          />
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/productos' element={<Products/>}/>
            <Route path='detalle/:name/:modelo/:color' element={<Elemento/>}/>
          </Routes>
        </BrowserRouter>


        </div>


      </header>
    </div>
  );
}

export default App;

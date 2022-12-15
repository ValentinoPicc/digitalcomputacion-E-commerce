import{
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import ItemListContainer from './componentes/ItemListContainer'
import Productos from './pages/Productos';
import ItemDetailContainer from './pages/ItemDetailContainer';
import './App.css';
import Navbar from './componentes/Navbar';
import Logo from './componentes/logoDigitalComp.webp';



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <a  href='index.hmtl'> <img src={Logo} className="App-logo" alt="logo" /> </a>




        <div>
        <BrowserRouter>
        <Navbar
           Logo = {Logo} />
          <Routes>
            <Route exact path='/' element={<ItemListContainer/>}/>
            <Route path='/products' element={<Productos/>}/>
            <Route path='detail/:name/:category' element={<ItemDetailContainer/>}/>
          </Routes>
        </BrowserRouter>


        </div>


      </header>
    </div>
  );
}

export default App;

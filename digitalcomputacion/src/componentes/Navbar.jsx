import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = (Logo) => {
    return (
        <header>
                <div class="container">
                        <nav class="navbar navbar-expand-lg navbar-light">
                                <div class="container-fluid">
                                    <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                                    <Link to='/'>
                                                    <li class="nav-item">
                                                    <img src={Logo} className="App-logo" alt="logo" />
                                                    </li>
                                                    </Link>
                                                    <Link to='/' >
                                                    <li class="nav-item">
                                                        Home
                                                    </li>
                                                    </Link>
                                                    <Link to='/productos'>
                                                    <li class="nav-item">
                                                        Productos
                                                    </li>
                                                    </Link>
                                                    <Link>
                                                    <li class="nav-item">
                                                        Ubicacion
                                                    </li>
                                                    </Link>
                                                    <Link>
                                                    <li class="nav-item">
                                                        Contacto
                                                    </li>
                                                    </Link>
                                                    <Link>
                                                    <li class="nav-item">
                                                    <CartWidget />
                                                    </li>
                                                    </Link>
                                                </ul>
                                        </div>
                                </div>
                        </nav>
                </div>
        </header>
    )
};

export default Navbar;
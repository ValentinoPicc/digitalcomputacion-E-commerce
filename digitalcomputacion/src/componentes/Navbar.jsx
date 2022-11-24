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
                                                    <li class="nav-item">
                                                        <a class="nav-link active letra" href="/index.html">  <img src={Logo} className="App-logo" alt="logo" /></a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link active letra" href="/home.html">Home</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link letra" href="/productos.html">Productos</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link letra" href="/ubicacion.html">Ubicacion</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link letra" href="/contacto.html">Contacto</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link letra" href="/carrito.html"><CartWidget /></a>
                                                    </li>
                                                </ul>
                                        </div>
                                </div>
                        </nav>
                </div>
        </header>
    )
};

export default Navbar;
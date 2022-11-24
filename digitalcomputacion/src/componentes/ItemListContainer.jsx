import Title from './Title';


const ItemListContainer = ({nombre, mensaje}) => {


    return (
        <div>
        <Title greeting='Digital Computacion' />
        <h2>Bienvenido. Mi nombre es {nombre}. Dueño de este sitio web</h2>
        <p>En esta pagina podras encontrar todos los componentes necesarios para armar tu propia computadora, a tu medida!</p>
        </div>
    )
};

export default ItemListContainer
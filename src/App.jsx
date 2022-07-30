import './Styles/App.scss';

import NavBar from './shared/NavBar/NavBar';
import Container from './components/Container/Container';
import { CartProvider } from './context/CartContext';



function App() {

  return (
    <CartProvider>

      <NavBar />
      <Container />
    </CartProvider>

  )
}

export default App;

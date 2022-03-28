import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { ProductsContainer } from './components/ProductsContainer';
import { ProductCard } from './components/ProductCard';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Cart } from './components/Cart';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>

        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<ProductsContainer />} />
            <Route path='/products/:id' element={<ProductCard />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </>
  );
};

export default App;

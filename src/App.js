import { Home } from './components/Home';
import { NavBar } from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductsContainer } from './components/ProductsContainer';
import { ProductCard } from './components/ProductCard';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductsContainer />} />
          <Route path='/products/:id' element={<ProductCard />} />

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

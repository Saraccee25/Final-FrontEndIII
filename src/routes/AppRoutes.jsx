import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Contact from '../pages/Contact';
import Product from '../pages/Product/Product';
import Character from '../pages/Character';
import NotFound from '../pages/NotFound';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/product" element={<Product />} />
    <Route path="/character/:id" element={<Character />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;

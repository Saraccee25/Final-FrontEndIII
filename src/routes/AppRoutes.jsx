import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Product from "../pages/Product/Product";
import Favorites from "../pages/Favorites/Favorites";
import NotFound from "../pages/NotFound";
import CharacterDetailPage from "../pages/CharacterDetailPage/CharacterDetailPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/product" element={<Product />} />
    <Route path="/favorites" element={<Favorites />} /> 
    <Route path="/product/:id" element={<CharacterDetailPage />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;

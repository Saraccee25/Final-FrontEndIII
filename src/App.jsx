import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AppRoutes from "./routes/AppRoutes";
import FavoritesProvider from "./context/FavoritesContext"; 

const App = () => (
  <Router>
    <FavoritesProvider>
      <Navbar />
      <AppRoutes />
    </FavoritesProvider>
  </Router>
);

export default App;

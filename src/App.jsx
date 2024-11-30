import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AppRoutes from "./routes/AppRoutes";
import FavoritesProvider from "./context/FavoritesContext";
import Footer from "./components/Footer/Footer"; 

const App = () => (
  <Router>
    <FavoritesProvider>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <AppRoutes />
        </main>
        <Footer /> 
      </div>
    </FavoritesProvider>
  </Router>
);

export default App;
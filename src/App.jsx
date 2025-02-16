import "./App.css";
import Navbar from "./components/navbar";
import {Routes, Route} from "react-router-dom"
import Details from "./pages/details";
import Favorites from "./pages/favorites";
import Home from "./pages/home";


function App() {
  return (
    <div>
      <div className="min-h-screen p-6 dark:bg-rose-200 text-gray-600 text-lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import './css/App.css'
import Favorites from './pages/Favorites';
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
// we want navbar on all pages so we put it here and not just Home
import NavBar from './components/NavBar';
import { MovieProvider } from './contexts/MovieContext';

function App() {
  return (
    // we have wrapped all the elements in the movie provider so they have acess to all the value in the movie provider
      <MovieProvider>
      <NavBar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
     </MovieProvider>
  );
}


export default App

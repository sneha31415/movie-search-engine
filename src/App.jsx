import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  const movieNumber = 1;
  return (
    <>
      {/* first set of braces denote we are putting a variable, 
    next set of braces denote we are putting an object  */}
      {movieNumber === 1 ? (
        <MovieCard movie={{ title: "3 idiots", release_date: "2017" }}></MovieCard>
      ) : (
        <MovieCard movie={{ title: "3 idiots", release_date: "2017" }}></MovieCard>
      )}

      {/* way 2 */}
      {movieNumber === 1 && <MovieCard movie={{ title: "3 idiots", release_date: "2017" }}></MovieCard>}
    </>
  );
}


export default App

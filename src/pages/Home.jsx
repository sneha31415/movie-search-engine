// list of all movies

import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css"

function Home() {
    // [state VAriable, function used to change the state]
    // we need to connect the componenets with the state 
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    /* on refreshing wkt all the components rerun so doing
    ***const movies = getPopularMovies()*** will make the API call again and again 
    even tho the answer of getPopularMovies is same for each day/week
    */
   /* The "useEffect" allows you to add sideeffects to your functions or 
   tour components and define when they should run */
    
//    if anything inside the dependency array [] changes, useEffect is run
    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                console.log(err)
                setError("failed to load movies...")
            }
            finally {
                setLoading(false)
            }
        }
        loadPopularMovies()
    }, [])

   const handleSearch = async  (e) => {
        // by default page is reloaded 
        e.preventDefault()
        // search movie must not be am empty string 
        if (!searchQuery.trim()) return 
        //dont search if we are already searching 
        if (loading) return

        // set "true" because we have started to search for movie
        setLoading(true)
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch (err) {
            console.log(err)
            setError("failed to search movies...")
        } finally {
            setLoading(false)
        }

    };

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text"
                placeholder="Search for movies..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>

        {error && <div className="error-message">{error} </div>}

        {loading ? (
            <div className="loading">Loading...</div>
        ) : (
            <div className="movies-grid">
            {/* what comes after the arrow is the component we want to return for every instance of a movie
            Whenever you dynamically render we need key */}
            {movies.map(
                movie =>
                (<MovieCard movie={movie} key={movie.id} />)
            )}
        </div>
        )}
    
    </div>
}

export default Home
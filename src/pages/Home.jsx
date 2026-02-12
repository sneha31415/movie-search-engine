// list of all movies

import MovieCard from "../components/MovieCard";
import { useState } from "react";
// .map to dynamically render an array of values. It iterates over all the values 

function Home() {
    // [state VAriable, function used to change the state]
    // we need to connect the componenets with the state 
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "3 idiots", release_date: "2009" },
        { id: 2, title: "I", release_date: "2019" },
        { id: 3, title: "badshaah", release_date: "1999" }
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("----")
    }

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" 
            placeholder="Search for movies..." 
            className="search-input"
            value = {searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type = "submit" className="search-button">Search</button>
        </form>
        <div className="movies-grid">
            {/* what comes after the arrow is the component we want to return for every instance of a movie
            Whenever you dynamically render we need key */}
            {movies.map(movie => <MovieCard movie={movie} key={movie.id} />)}
        </div>
    </div>
}

export default Home
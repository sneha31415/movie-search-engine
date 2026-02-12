// list of all movies

import MovieCard from "../components/MovieCard";
// .map to dynamically render an array of values. It iterates over all the values 

function Home() {
    const movies = [
        { id: 1, title: "3 idiots", release_date: "2009" },
        { id: 2, title: "I", release_date: "2019" },
        { id: 3, title: "badshaah", release_date: "1999" }
    ]

    const handleSearch = () => {

    }

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for movies..." className="search-input"
            
            />
        </form>
        <div className="mvoies-grid">
            {/* what comes after the arrow is the component we want to return for every instance of a movie
            Whenever you dynamically render we need key */}
            {movies.map(movie => <MovieCard movie={movie} key={movie.id} />)}
        </div>
    </div>
}

export default Home
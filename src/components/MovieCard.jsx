// components are things that will be displayed on our page 
import "../css/MovieCard.css"

function MovieCard({ movie }) {
    return <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.title} />
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={onFavoriteClick}>
                    ❤︎⁠
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>

    </div>

}

function onFavoriteClick() {
    alert("fav btn clicked")
}

export default MovieCard
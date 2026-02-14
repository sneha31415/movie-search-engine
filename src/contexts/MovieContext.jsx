// this is a state manager for the favorite movies
// this state will be across multiple components

import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

// this will provide state to any of the components that are wrapped around it
export const MovieProvider = ({children}) => {
    // children is anything thats inside of the component that we rendered
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    // if we change favorites, we have to update local storage
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    // operations to add, remove and check if favorite
    // learn : how to update state when adding value to an array
    const addToFavorites = (movie) => {
        // prev is the list of prev fav movies
        setFavorites(prev => [...prev, movie])
    }
    
    // generate a new array w/o movieId
    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    // set the values that you want the children to be accessible 
    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }
    return <MovieContext.Provider value = {value}>
        {/* children inside this have access to everything in value */}
        {children}
    </MovieContext.Provider>
}
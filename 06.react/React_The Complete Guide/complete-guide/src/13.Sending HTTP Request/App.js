import React, {useCallback, useEffect, useState} from 'react';
import AddMovie from "./components/AddMovie";
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    // function fetchMoviesHandler() {
    //   setIsLoading(true);
    //   setError(null);
    //   fetch("https://swapi.dev/api/films/").then(resp => resp.json()).then(data => {
    //       const transformedMovies = data.results.map(movieData => {
    //         return {id:movieData.episode_id , title: movieData.title, openingText: movieData.opening_crawl, releaseDate: movieData.release_date }
    //       }).catch(error => {setError(error.message)})
    //
    //     setMovies(transformedMovies);
    //     setIsLoading(false);
    //   });
    // }
    const fetchMoviesHandler = useCallback( async () => {
        console.log("fetch")
        setIsLoading(true);
        setError(null)
        try {
            // const response = await fetch("https://swapi.dev/api/films/");
            const response = await fetch("https://react-http-intro-50d18-default-rtdb.firebaseio.com/movies.json");
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const data = await response.json();
            // console.log(data)
            const loadedMovies = [] ;
            for (const key in data){
                loadedMovies.push({
                    id: key,
                    title: data[key].title,
                    openingText: data[key].openingText,
                    releaseDate: data[key].releaseDate
                })
            }

            setMovies(loadedMovies);
            setIsLoading(false);
        } catch (error) {
            console.log(error.message)
            setError(error.message)
        }
    },[])

    useEffect(() => {
        fetchMoviesHandler();
    }, [fetchMoviesHandler]);

    let content;
    if (error) {
        content = <p>{error}</p>
    } else if (isLoading) {
        content = <p>Loading... </p>
    } else if (movies.length > 0) {
        content = <MoviesList movies={movies}/>
    } else {
        content = <p>Found no Movie</p>
    }

    async function addMovieHandler(movie) {
        const response = await fetch("https://react-http-intro-50d18-default-rtdb.firebaseio.com/movies.json",
            {method: "POST", body: JSON.stringify(movie), headers: {'Content-Type': 'application/json'}})
        const data = await response.json();
        console.log(data)
    }

    return (
        <React.Fragment>
            <section>
                <AddMovie onAddMovie={addMovieHandler}/>
            </section>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>
                {content}
            </section>
        </React.Fragment>
    );
}

export default App;

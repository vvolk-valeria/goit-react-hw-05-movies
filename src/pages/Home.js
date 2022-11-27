import {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from '../API/fetchApi';

const TrendingMovies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchTrendingMovies().then(setMovies);
    }, []);
console.log(movies.length);
    if (movies.length<1) {
        return;
    }
    
    const { results } = movies;
    console.log(results);
    // console.log(results.id);
    // console.log(results.overview);
    // console.log(results.backdrop_path);
    // console.log(results.original_title);
    return (
        <>
        <ul>
            {results.map(result => (
                <li key={result.id}>
                    <Link to={`${result.id}`}>
                        {result.title || result.name}
                    </Link>
                </li>))}
            </ul>
           
        </>)
}

export default TrendingMovies;


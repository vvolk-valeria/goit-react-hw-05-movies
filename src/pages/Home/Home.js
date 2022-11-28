import SearchMovieList from 'components/SearchMovieList/SearchMovieList';
import {useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../API/fetchApi';


const TrendingMovies = () => {
    const [movies, setMovies] = useState([]);
 
    useEffect(() => {
        fetchTrendingMovies().then(setMovies).catch(error => {
        console.log('Error',error);
      });
            
    }, []);

    const { results } = movies;
console.log(results);
    if (!results) {
        return;
    }

    return ( 
        <SearchMovieList movies={ results}/>
    )
}

export default TrendingMovies;


import { fetchSearchMovies } from '../../API/fetchApi';
import { useState } from 'react';
import { SearchBox } from '../../components/SearchBox/SearchBox';
//import SearchMovieList from 'components/SearchMovieList/SearchMovieList';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { lazy } from 'react';

const SearchMovieList = lazy(() => import('../../components/SearchMovieList/SearchMovieList'));

//import { useLocation } from 'react-router-dom';


 const Movies = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);
 
     const handleChange = e => {
         setSearchQuery(e.target.value.toLowerCase());
   };

  const handleSubmit = e => {
      e.preventDefault();
    
    if (searchQuery.trim() === '') {
    //   alert('Enter a title to search for a movie.');
       toast.error('Enter term for search images and photos.');
      return;
    }
        fetchSearchMovies(searchQuery).then(setMovies);
        setSearchQuery('');
        e.target.reset();
    };

    const { results } = movies;
  
    return (
        <div>
            < SearchBox
                onSubmit={handleSubmit}
                onChange={handleChange} 
            />
           {results && <SearchMovieList movies={ results} />}         
        </div>
    )
}

export default Movies;
import { fetchSearchMovies } from '../../API/fetchApi';
import { useState,useEffect } from 'react';
import { SearchBox } from '../../components/SearchBox/SearchBox';
//import SearchMovieList from 'components/SearchMovieList/SearchMovieList';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { lazy } from 'react';
import { useSearchParams } from "react-router-dom";

const SearchMovieList = lazy(() => import('../../components/SearchMovieList/SearchMovieList'));


 const Movies = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const [searchParams, setSearchParams] = useSearchParams();
 
//      const handleChange = e => {
//          setSearchQuery(e.target.value.toLowerCase());
//    };

    const updateQueryString = (e) => {
        const query = e.target.value;
        setSearchQuery(query.toLowerCase());
        const nextParams = query !== "" ? { query } : {};
        setSearchParams(nextParams);
  };

    const handleSubmit = e => {
      e.preventDefault();
    
    if (searchQuery.trim() === '') {
       toast.error('Enter term for search images and photos.');
      return;
    }
        // fetchSearchMovies(searchQuery).then(setMovies).catch(error => {
        //     console.log('Error',error);
        // }); 
    setSearchQuery('');
    e.target.reset();

    };

   
     useEffect(() => {

         const QueryFromSearchParams = searchParams.get('query');
    
         if (!QueryFromSearchParams) {
             return;
         }

         if (searchQuery === '') {
         
             fetchSearchMovies(QueryFromSearchParams)
                 .then(setMovies)
                 .catch(error => {
                    console.log('Error',error);
                }); 
          }
      
    }, [searchParams,searchQuery]);
   

    const { results } = movies;
  
    return (
        <div>
            < SearchBox
                onSubmit={handleSubmit}
                onChange={updateQueryString} 
            />
           {results && <SearchMovieList movies={ results} />}         
        </div>
    )
}

export default Movies;
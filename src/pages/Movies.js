import { fetchSearchMovies } from '../API/fetchApi';
import {useState, useEffect } from 'react';

// export const Movies = () => {
//     const [movies, setMovies] = useState([]);
//const location = useLocation();
//     const handleSubmit = ({query}) = {
//         fetchSearchMovies(query).then(setMovies);
//     }
    

//     return (
//         <div>
//             <SearchBox onSubmit={ handleSubmit} />
//             <ul>
//<Link to={`${customer.id}`} state={{ from: location }}>{customer.name}</Link>
//                 console.log(movies);

//             </ul>
//         </div>
//     )
// }
import { fetchMovieById } from 'API/fetchApi';
import { Box } from 'components/Box';
import {useState, useEffect } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { BASE_URL_IMAGE } from '../components/refs';

export const MovieDetails = () => {
   const {movieId} = useParams();
    const [movie, setMovie] = useState(null);
const location = useLocation();
    useEffect(() => {
        fetchMovieById(movieId).then(setMovie);
    }, [movieId]);

    if (!movie) {
        return;
    }
    const navItems = [
  { href: 'cast', text: 'Cast'},
  { href: 'reviews', text: 'Reviews' },
];
    const backLinkHref = location.state?.from ?? "/";

    const {title,overview,genres,poster_path } = movie;
    return (
        <div>
            <Link to={backLinkHref}>Back to customers</Link>
            <div>
                {poster_path!==null ? (<div>
                        <img src={BASE_URL_IMAGE+poster_path} alt={title}/>
                    </div>) : <div></div>}
                    
                <div>
                    <h1>{title}</h1>
                    <div>
                        <p>Genres:</p>
                        <p>{genres.map(genre => genre.name).join(', ')} </p>    
                    </div>
                    <div>
                        <p>Overview:</p>
                        <p>{overview}</p>
                    </div>
                </div>
            </div>            
            <div>
                <h2>Additional information</h2>

                <Box as="ul"  >
                {navItems.map(({ href,text })=>(<Link to={href} key={href}> {text }</Link>))}
            </Box>

            </div>
            <Outlet/>
        </div>
    )
}



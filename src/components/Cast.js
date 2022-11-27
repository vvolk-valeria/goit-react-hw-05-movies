import { fetchMovieCast } from 'API/fetchApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL_IMAGE } from './refs';

const Cast = () => {
    const { movieId } = useParams();
    const [castMembers, setCastMembers] = useState(null);

    useEffect(() => {
        fetchMovieCast(movieId).then(setCastMembers);
    }, [movieId]);
     
    if (!castMembers || castMembers.cast.length===0) {
        return (
            <div>
                <p>We have no information about the cast of this film.</p>
            </div>);
    }

    const { cast } = castMembers;

    return (
        <ul>
            {cast.map(({ cast_id, character, name, profile_path }) => (
                <li key={cast_id}>
                         {profile_path!==null ? (<div>
                        <img src={BASE_URL_IMAGE+profile_path} alt={name}/>
                    </div>) : <div></div>}
                    
                    <p>{character}</p>
                    <p>{name}</p>
                </li>))}
        </ul>)
}

export default Cast;
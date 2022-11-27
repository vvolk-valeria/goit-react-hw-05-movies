import { fetchMovieReviews } from 'API/fetchApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        fetchMovieReviews(movieId).then(setReviews);
    }, [movieId]);
     
    if (!reviews || reviews.results.length===0) {
        return (
            <div>
                <p>We don't have any reviews for this movie.</p>
            </div>);
    }

    const { results } = reviews;
console.log(results);
    return (

        <ul>
            {results.map(({ content,author,id }) => (
                <li key={id}>
                    <p>{author}</p>
                    <p>{content}</p>
                </li>))}
        </ul>
    )
}

export default Reviews;
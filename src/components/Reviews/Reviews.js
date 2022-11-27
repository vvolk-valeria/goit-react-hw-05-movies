import { fetchMovieReviews } from 'API/fetchApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Item,Container,Title ,Text } from "./Reviews.styled";

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        fetchMovieReviews(movieId).then(setReviews);
    }, [movieId]);
     
    if (!reviews || reviews.results.length===0) {
        return (
            <Container>
                <p>We don't have any reviews for this movie.</p>
            </Container>);
    }

    const { results } = reviews;

    return (
<Container>
        <ul>
            {results.map(({ content,author,id }) => (
                <Item key={id}>
                    <Title>{author}</Title>
                    <Text>{content}</Text>
                </Item>))}
            </ul>
        </Container>
    )
}

export default Reviews;
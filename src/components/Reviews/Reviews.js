import { fetchMovieReviews } from 'API/fetchApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Item,Container,Title ,Text } from "./Reviews.styled";

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        fetchMovieReviews(movieId).then(setReviews).catch(error => {
        console.log('Error',error);
      });
    }, [movieId]);
     
    if (!reviews) {
        return ;
    }

    const { results } = reviews;

    return (
        <Container>
            {results.length===0 && <p>We don't have any reviews for this movie.</p>}
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
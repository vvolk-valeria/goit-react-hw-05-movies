import { fetchMovieCast } from 'API/fetchApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL_IMAGE } from '../refs';
import { Container,List,LinkItem,ItemImgCover,Title } from "./Cast.styled";

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
        <Container>
        <List>
            {cast.map(({ cast_id, character, name, profile_path }) => (
                <LinkItem key={cast_id}>
                         {profile_path!==null ? (<ItemImgCover>
                        <img src={BASE_URL_IMAGE+profile_path} alt={name}/>
                    </ItemImgCover>) : <ItemImgCover></ItemImgCover>}
                    
                    <Title>{character}</Title>
                    <Title>{name}</Title>
                </LinkItem>))}
        </List>
    </Container>)
}

export default Cast;
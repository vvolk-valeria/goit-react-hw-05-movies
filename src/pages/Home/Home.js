import {useState, useEffect } from 'react';
import {  useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from '../../API/fetchApi';
import { BASE_URL_IMAGE } from "../../components/refs";
import { Container, List, Item, ItemImgCover, Img, Title, LinkItem } from "./Home.styled";

const TrendingMovies = () => {
    const [movies, setMovies] = useState([]);
    const location = useLocation();

    useEffect(() => {
        fetchTrendingMovies().then(setMovies);
    }, []);

    if (movies.length<1) {
        return;
    }
    
    const { results } = movies;
  
    return (
        <Container>
        <List>
            {results.map(({id,poster_path,title,name}) => (
                <Item key={id}>
                    <LinkItem to={`movies/${id}`}  state={{ from: location }}>
                        {poster_path!==null ? (<ItemImgCover>
                        <Img src={BASE_URL_IMAGE+poster_path} alt={title}/>
                    </ItemImgCover>) : <ItemImgCover></ItemImgCover>}
                       <Title>{title || name}</Title> 
                    </LinkItem>
                </Item>))}
            </List>
           
        </Container>)
}

export default TrendingMovies;


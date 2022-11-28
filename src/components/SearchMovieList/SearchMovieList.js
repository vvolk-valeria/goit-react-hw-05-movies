import { BASE_URL_IMAGE } from '../refs';
import { Container, List, Item, ItemImgCover, Img, Title, LinkItem } from "./SearchMovieList.styled";
import { useLocation } from 'react-router-dom';

const SearchMovieList = ({ movies }) => {

    const location = useLocation();
   
    return (
        <Container>
          <List>
            {movies.map(({id,poster_path,title,name}) => (
                <Item key={id}>
                    <LinkItem to={`/movies/${id}`} state={{ from: location }}>
                        {poster_path!==null ? (<ItemImgCover>
                        <Img src={BASE_URL_IMAGE+poster_path} alt={title}/>
                    </ItemImgCover>) : <ItemImgCover></ItemImgCover>}
                       <Title>{title || name}</Title> 
                    </LinkItem>
                </Item>))}
            </List>
        </Container>
    )
}

export default SearchMovieList;
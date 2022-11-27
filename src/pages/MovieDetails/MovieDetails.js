import { fetchMovieById } from 'API/fetchApi';
import { Box } from 'components/Box';
import { useState, useEffect } from 'react';
import { Suspense } from "react";
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { BASE_URL_IMAGE } from '../../components/refs';
import { Loader } from "../../components/Loader/Loader";
import { Container,LinkItem,ItemImgCover,Title,BoxTitle,LinkToBack,InfoTitle } from "./MovieDetails.styled";

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

    const {title,overview,genres,poster_path,vote_average } = movie;
    return (
        <Container>
            <LinkToBack to={backLinkHref}>Back</LinkToBack>
            <Box display="flex" p={3} mt={2} mb={2} >
                {poster_path !== null ? (
                    <ItemImgCover>
                        <img src={BASE_URL_IMAGE+poster_path} alt={title}/>
                    </ItemImgCover>) : <ItemImgCover></ItemImgCover>}
                    
                <Box ml={3} p={2} width={ 1/2}>
                    <Title>{title}</Title>
                    <Box p={2} mb={2}>
                        <BoxTitle>User score:</BoxTitle>
                        <p>{vote_average.toFixed(2)}</p>
                    </Box>
                    <Box p={2} mb={2}>
                        <BoxTitle>Genres:</BoxTitle>
                        <p>{genres.map(genre => genre.name).join(', ')} </p>    
                    </Box>
                    <Box p={2} mb={2}>
                        <BoxTitle>Overview:</BoxTitle>
                        <p>{overview}</p>
                    </Box>
                </Box>
            </Box>            
            <Box p={2}>
                <InfoTitle>Additional information</InfoTitle>

                <Box as="ul" display="flex" flexDirection="column" >
                {navItems.map(({ href,text })=>(<LinkItem to={href} key={href} > {text }</LinkItem>))}
            </Box>

            </Box>
            <Suspense fallback={<Loader/>}>
                <Outlet />
            </Suspense>
        </Container>
    )
}



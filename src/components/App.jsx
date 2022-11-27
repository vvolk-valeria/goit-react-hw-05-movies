import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import TrendingMovies from '../pages/Home';
import { SearchBox } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TrendingMovies />} />
          {/* <Route path="movies" element={<SearchBox />}></Route> */}
          <Route path=":movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};

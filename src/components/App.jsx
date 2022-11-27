import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import TrendingMovies from '../pages/Home/Home';
import { ToastContainer } from 'react-toastify';
import { Movies } from 'pages/Movies/Movies';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TrendingMovies />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
        </Route>
      </Routes>
      <ToastContainer autoClose={3000} />
    </>
  );
};

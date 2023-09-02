import {useState, useEffect} from 'react';
import movieDB from '../api/movieDB';
import {MovieFull} from '../interfaces/useMovies.interface';
import {CreditsResponse, Cast} from '../interfaces/credits.iterface';
interface IMovieDetails {
  isLoading: boolean;
  isError: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}
export const useMovieDetails = (movieId: number) => {
  const [movieData, setMovieDetails] = useState<IMovieDetails>({
    isLoading: true,
    isError: false,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    try {
      const overView = movieDB.get<MovieFull>(`/${movieId}`);
      const credits = movieDB.get<CreditsResponse>(`/${movieId}/credits`);

      const [movieOverViewR, movieDetailsR] = await Promise.all([
        overView,
        credits,
      ]);
      setMovieDetails({
        isLoading: false,
        isError: false,
        cast: movieDetailsR.data.cast,
        movieFull: movieOverViewR.data,
      });
    } catch (error) {
      setMovieDetails({
        isLoading: false,
        isError: true,
        cast: [],
        movieFull: undefined,
      });
    }
  };

  useEffect(() => {
    getMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {...movieData};
};

import React, {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {MoviesResponse} from '../interfaces/movie.interface';
import {IUseMovies} from '../interfaces/useMovies.interface';
import {View, ActivityIndicator, Text} from 'react-native';
import {stylesHM} from '../theme/appTheme';

export const useMovies = () => {
  const [{allMovies, isError, isLoading}, setMoviesPlaying] =
    useState<IUseMovies>({
      allMovies: {
        nowPlaying: [],
        popular: [],
        topRated: [],
        upComming: [],
      },
      isLoading: true,
      isError: false,
    });
  let ComponentStatus: JSX.Element = <></>;

  const getMovies = async () => {
    try {
      const resNowPlaying = movieDB.get<MoviesResponse>('/now_playing');
      const resPopularMovies = movieDB.get<MoviesResponse>('/popular');
      const resTopRated = movieDB.get<MoviesResponse>('/top_rated');
      const resUpcoming = movieDB.get<MoviesResponse>('/upcoming');

      const resp = await Promise.all([
        resNowPlaying,
        resPopularMovies,
        resTopRated,
        resUpcoming,
      ]);

      setMoviesPlaying({
        isError: false,
        isLoading: false,
        allMovies: {
          nowPlaying: resp[0].data.results,
          popular: resp[1].data.results,
          topRated: resp[2].data.results,
          upComming: resp[3].data.results,
        },
      });
    } catch (error) {
      setMoviesPlaying({
        isError: true,
        isLoading: false,
        allMovies: {
          nowPlaying: [],
          popular: [],
          topRated: [],
          upComming: [],
        },
      });
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  if (isLoading) {
    ComponentStatus = (
      <View style={stylesHM.initialContainer}>
        <ActivityIndicator color="blue" size={90} />
      </View>
    );
  }

  if (!isLoading && isError) {
    ComponentStatus = (
      <View style={stylesHM.initialContainer}>
        <Text>Ocurrio un error al obtener la información</Text>
      </View>
    );
  }

  return {
    ...allMovies,
    isLoading,
    isError,
    ComponentStatus,
  };
};

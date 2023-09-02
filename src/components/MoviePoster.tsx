import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {IMoviePoster} from '../interfaces/moviePoster.interface';
import {stylesMP} from '../theme/appTheme';
import {useNavigation, CommonActions} from '@react-navigation/native';

export const MoviePoster = ({
  movie,
  width = 300,
  height = 420,
}: IMoviePoster) => {
  const {dispatch} = useNavigation();
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <TouchableOpacity
      onPress={() => dispatch(CommonActions.navigate('DetailScreen', movie))}
      activeOpacity={0.8}
      style={{
        width,
        height,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 7,
      }}>
      <View style={stylesMP.imageContainer}>
        <Image
          source={{
            uri,
          }}
          style={stylesMP.imagePoster}
        />
      </View>
    </TouchableOpacity>
  );
};

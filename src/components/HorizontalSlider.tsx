import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {IHorizontalSliderProps} from '../interfaces/horizontalSlider.interface';
import {stylesMP} from '../theme/appTheme';
import {MoviePoster} from './MoviePoster';

export const HorizontalSlider = ({movies, title}: IHorizontalSliderProps) => {
  return (
    <View
      style={{
        height: title ? 265 : 225,
      }}>
      {title && <Text style={stylesMP.textMC}>{title}</Text>}

      <FlatList
        data={movies}
        renderItem={({item}) => (
          <MoviePoster movie={item} height={200} width={140} />
        )}
        keyExtractor={item => `${item.id}`}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

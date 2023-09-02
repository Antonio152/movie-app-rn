import React from "react";
import { View, ScrollView } from "react-native";
import Carousel from "react-native-snap-carousel";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useMovies } from "../hooks/useMovies";
import { MoviePoster } from "../components/MoviePoster";
import { useWindowDimensions } from "react-native";
import { stylesMP } from "../theme/appTheme";
import { HorizontalSlider } from "../components/HorizontalSlider";
import { GradientBackground } from "../components/GradientBackground";
import { getImageColors } from "../helpers/getColores";

export const HomeScreen = () => {
  const { width } = useWindowDimensions();
  const { top } = useSafeAreaInsets();
  const {
    nowPlaying,
    popular,
    topRated,
    upComming,
    isLoading,
    isError,
    ComponentStatus,
  } = useMovies();
  if (isLoading || (!isLoading && isError)) {
    return <>{ComponentStatus}</>;
  }
  const getPosterColors = async (index: number) => {
    const movieData = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`;
    const {primary,secondary} = await getImageColors(uri);
    console.log(primary,secondary);
  };

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{ marginTop: top + 20 }}>
          {/* Carousel */}
          <View style={stylesMP.carouselC}>
            <Carousel
              data={nowPlaying}
              renderItem={({ item }) => <MoviePoster movie={item} />}
              sliderWidth={width + 10}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={(index) =>
                getPosterColors(index)
              } /* This functions executes when the user slide to other poster */
            />
          </View>
          {/* Popular movies */}
          <HorizontalSlider title="Populares" movies={popular} />
          <HorizontalSlider title="Top Rated" movies={topRated} />
          <HorizontalSlider title="Upcomming" movies={upComming} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

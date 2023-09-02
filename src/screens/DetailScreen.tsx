import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import {
  Image,
  View,
  useWindowDimensions,
  ScrollView,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Movie } from "../interfaces/movie.interface";
import { RootStackarams } from "../navigation/Navigation";
import { stylesDT } from "../theme/appTheme";
import { useMovieDetails } from "../hooks/useMovieDetails";
import { MovieDetails } from "../components/MovieDetails";

interface IDetailProps
  extends StackScreenProps<RootStackarams, "DetailScreen"> {}

export const DetailScreen = ({ route, navigation }: IDetailProps) => {
  const movie = route.params as Movie;
  const { width, height } = useWindowDimensions();
  const { cast, isError, isLoading, movieFull } = useMovieDetails(movie.id);
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <ScrollView>
      <View
        style={{ height: height * 0.7, width, ...stylesDT.shadowContainer }}
      >
        <Image source={{ uri }} style={stylesDT.posterImage} />
      </View>
      <View style={stylesDT.containerDes}>
        <Text style={stylesDT.subTitle}>{movie.original_title}</Text>
        <Text style={stylesDT.title}>{movie.title}</Text>
      </View>
      <View style={stylesDT.containerDes}>
        {isLoading ? (
          <ActivityIndicator size={35} color="blue" style={{ marginTop: 20 }} />
        ) : isError && !isLoading ? (
          <View style={{ width, flex: 1, justifyContent: "center" }}>
            <Text style={{ textAlign: "center" }}>
              Error al obtener la descripción
            </Text>
          </View>
        ) : (
          <MovieDetails movieFull={movieFull!} cast={cast} />
        )}
      </View>
      {/* Button To close  */}
      <View style={stylesDT.backButton}>
        <TouchableOpacity onPress={() => navigation.pop()} activeOpacity={0.8}>
          <Icon color={"white"} name="chevron-back-outline" size={50} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

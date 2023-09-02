import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { MovieFull } from "../interfaces/useMovies.interface";
import { Cast } from "../interfaces/credits.iterface";
import { ActorItem } from "./ActorItem";
import { FlatList } from "react-native-gesture-handler";
interface IMovieDetailsProps {
  movieFull: MovieFull;
  cast: Cast[];
}
export const MovieDetails = ({ movieFull, cast }: IMovieDetailsProps) => {
  const { genres, vote_average, overview, budget } = movieFull;
  const budgetValue = () => {
    return budget.toLocaleString("en", {
      style: "currency",
      currency: "USD",
    });
  };
  return (
    <>
      {/* Details */}
      <View>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            alignItems: "center",
          }}
        >
          <Icon name="star-sharp" size={25} color="#ccc" />
          <Text>{vote_average} | </Text>
          <Text>{genres.map((g) => g.name).join(", ")}</Text>
        </View>

        <Text style={{ fontSize: 21, marginTop: 15, fontWeight: "bold" }}>
          Historia
        </Text>
        <Text style={{ fontSize: 16 }}>{overview}</Text>

        {/* Pesupuest */}
        <Text style={{ fontSize: 21, marginTop: 15, fontWeight: "bold" }}>
          Presupuesto
        </Text>
        <Text style={{ fontSize: 17 }}>{budgetValue()} USD</Text>
        {/* Cast / Actors */}
        <View style={{ marginTop: 10, marginBottom: 50 }}>
          <Text style={{ fontSize: 21, marginTop: 15, fontWeight: "bold" }}>
            Actores
          </Text>
          {/*  <ActorItem actor={cast[0]} /> */}
          <FlatList
            data={cast}
            renderItem={({ item }) => <ActorItem actor={item} />}
            keyExtractor={(item) => `${item.id}`}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 10 }}
          />
        </View>
      </View>
    </>
  );
};

import React from "react";
import { Cast } from "../interfaces/credits.iterface";
import { Image, Text, View } from "react-native";
import { stylesAI } from "../theme/appTheme";
interface PropsActorItem {
  actor: Cast;
}
export const ActorItem = ({ actor }: PropsActorItem) => {
  return (
    <View style={stylesAI.mainContainer}>
      {actor.profile_path && (
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${actor.profile_path}`,
          }}
          style={{ width: 50, height: 50, borderRadius: 10 }}
        />
      )}
      <View style={stylesAI.actorInto}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{actor.name}</Text>
        <Text style={{ fontSize: 16, opacity: 0.7 }}>{actor.character}</Text>
      </View>
    </View>
  );
};

import React, { useRef } from "react";
import { Animated, Button, View } from "react-native";
import { useFadeAnimation } from "../hooks/useFadeAnimation";

export const FadeScreen = () => {
  const { fadeIn, fadeOut, opacity } = useFadeAnimation({ initialOpacity: 0 });
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "gray",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.View
        style={{
          backgroundColor: "#ccc",
          width: 150,
          height: 150,
          borderColor: "#2dba94",
          borderWidth: 10,
          opacity,
        }}
      />

      <View style={{ marginTop: 12 }}>
        <Button title="FadeIn" onPress={fadeIn} />
      </View>
      <View style={{ marginTop: 12 }}>
        <Button title="FadeOut" onPress={fadeOut} />
      </View>
    </View>
  );
};

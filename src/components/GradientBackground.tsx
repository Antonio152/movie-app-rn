import React from "react";
import { StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
interface IGradientBackground {
  children: JSX.Element | JSX.Element[];
}
export const GradientBackground = ({ children }: IGradientBackground) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#d96" }}>
      <LinearGradient
        colors={["#d90", "#f43", "#d25"]}
        style={{ ...StyleSheet.absoluteFillObject }}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.5, y: 0.7 }}
      >
        {children}
      </LinearGradient>
    </View>
  );
};

import { useRef } from "react";
import { Animated } from "react-native";

interface IFadeAnimation {
  initialOpacity: number;
}
export const useFadeAnimation = ({ initialOpacity = 0 }: IFadeAnimation) => {
  const opacity = useRef(new Animated.Value(initialOpacity)).current;
  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return {
    fadeIn,
    fadeOut,
    opacity,
  };
};

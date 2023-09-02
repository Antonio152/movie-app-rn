import { StyleSheet } from "react-native";

export const stylesDT = StyleSheet.create({
  shadowContainer: {
    paddingBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.24,
    shadowRadius: 18,
    elevation: 24,
  },
  posterImage: {
    flex: 1,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  containerDes: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    opacity: 0.8,
    fontSize: 18,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  backButton: {
    position: "absolute",
    zIndex: 999,
    elevation: 9,
    top: 20,
    left: 5,
  },
});
export const stylesHM = StyleSheet.create({
  initialContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});

export const stylesMP = StyleSheet.create({
  mainContainer: {
    width: 300,
    height: 420,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.24,
    shadowRadius: 18,
    elevation: 24,
  },
  imagePoster: {
    flex: 1,
    borderRadius: 18,
  },
  carouselC: {
    height: 440,
  },
  pMovieC: {
    height: 265,
  },
  textMC: {
    fontSize: 30,
    color: "#ccc",
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export const stylesAI = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    height: 50,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    marginRight: 25,
    paddingRight: 15,
  },
  actorInto: {
    marginLeft: 10,
    marginTop: 4,
  },
});

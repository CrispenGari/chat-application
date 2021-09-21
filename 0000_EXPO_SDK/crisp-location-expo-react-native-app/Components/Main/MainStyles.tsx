import { StyleSheet, Dimensions } from "react-native";
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  main__container: {
    justifyContent: "center",
    alignItems: "center",
  },
  main__input: {
    flex: 1,
    backgroundColor: "#fff",
    marginRight: 10,
    paddingHorizontal: 5,
  },
  main__card: {
    backgroundColor: "#f5f5f5",
    width: Dimensions.get("screen").width * 0.95,
    padding: 5,
    borderRadius: 5,
    borderBottomColor: "lightgray",
    borderBottomWidth: 0.5,
    marginBottom: 10,
  },
  main__text3: {
    color: "orange",
  },
  main__row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 5,
    borderBottomColor: "white",
    borderBottomWidth: 0.5,
  },
  main__image: {
    width: Dimensions.get("screen").width * 0.95,
    height: Dimensions.get("screen").height * 0.65,
    resizeMode: "contain",
  },
  main__text0: {
    fontSize: 15,
    fontWeight: "500",
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "lightseagreen",
    textAlign: "center",
    marginBottom: 15,
  },
  main__text1: {
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "lightseagreen",
    textAlign: "center",
    marginBottom: 15,
  },
  main__text2: {
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "lightseagreen",
    textAlign: "center",
  },
  main__controls: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Dimensions.get("screen").width * 0.95,
    marginTop: 10,
  },
  main__search: {
    width: Dimensions.get("screen").width * 0.25,
    backgroundColor: "black",
    padding: 5,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",
  },
  main__open: {
    width: Dimensions.get("screen").width * 0.8,
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 30,
    flex: 1,
  },
  main__controltext: {
    fontWeight: "500",
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "lightseagreen",
    textAlign: "center",
  },
});
export default styles;

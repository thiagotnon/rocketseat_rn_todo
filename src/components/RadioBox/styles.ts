import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    gap: 10,
  },
  text: {
    color: "#F2F2F2",
    fontSize: 14,
  },
  textCheched: {
    color: "#808080",
    fontSize: 14,
    textDecorationLine: "line-through",
  },
  outer: {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: "#4EA8DE",
    borderRadius: 15,
  },
  outerChecked: {
    backgroundColor: "#5E60CE",
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: "#5E60CE",
    borderRadius: 15,
  },
  inner: {
    width: 15,
    height: 15,
    backgroundColor: "#5E60CE",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});

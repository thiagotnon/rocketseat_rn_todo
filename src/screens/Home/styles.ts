import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1A1A1A",
    flex: 1,
    padding: 24,
  },
  form: {
    gap: 10,
    width: "100%",
    flexDirection: "row",
    marginTop: -30,
    marginBottom: 42,
  },
  input: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#0D0D0D",
    borderRadius: 6,
    backgroundColor: "#262626",
    flex: 1,
  },
  button: {
    borderRadius: 6,
    backgroundColor: "#1E6F9F",
    width: 52,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
});

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
    marginTop: -50,
    marginBottom: 42,
  },
  input: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#0D0D0D",
    borderRadius: 6,
    backgroundColor: "#262626",
    flex: 1,
    height: 52,
    color: "#F2F2F2",
  },
  button: {
    borderRadius: 6,
    backgroundColor: "#1E6F9F",
    width: 52,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
  taskList: {
    borderTopWidth: 1,
    borderColor: "#333333",
  },
  counters: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  counterView: {
    gap: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  counter: {
    fontWeight: "900",
    color: "#ffffff",
    backgroundColor: "#333333",
    width: 25,
    height: 20,
    borderRadius: 10,
    textAlign: "center",
  },
  createdText: {
    fontWeight: "900",
    color: "#4EA8DE",
  },
  closedText: {
    fontWeight: "900",
    color: "#8284FA",
  },
  emptyMessage: {
    paddingTop: 48,
    paddingBottom: 48,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  listEmptyTitle: {
    marginTop: 16,
    fontWeight: "900",
    color: "#808080",
    textAlign: "center",
  },
  listEmptyText: {
    color: "#808080",
    textAlign: "center",
  },
});

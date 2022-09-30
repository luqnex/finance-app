import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 80,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#FFFF",
    borderRadius: 4,
    shadowColor: "#0000",
    borderLeftWidth: 8,
    marginVertical: 8,
  },
  borderGreen: {
    borderLeftColor: "#75D2CE",
  },
  borderRed: {
    borderLeftColor: "#F06322",
  },
  containerInfoCard: {
    flexDirection: "row",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subtitle: {
    color: "#C4C4CC",
  },
});

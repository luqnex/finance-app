import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#E5E5E5",
  },
  header: {
    width: "100%",
    height: "20%",
    backgroundColor: "#466AEA",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 30,
    flexDirection: "row",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFF",
  },
  subtitle: {
    width: "90%",
    marginTop: 30,
    marginHorizontal: 20,
    color: "#7C7C8A",
    fontSize: 16,
  },
  containerText: {
    height: "70%",
  },
  inputName: {
    width: "90%",
    height: 50,
    marginHorizontal: 20,
    marginTop: 30,
    backgroundColor: "#FFF",
    borderRadius: 4,
    paddingHorizontal: 15,
  },
});

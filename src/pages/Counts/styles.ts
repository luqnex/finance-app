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
  containerText: {
    height: "70%",
    paddingTop: 30,
  },
  inputName: {
    width: "90%",
    height: 50,
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: "#FFF",
    borderRadius: 4,
    paddingHorizontal: 15,
  },
  inputDate: {
    width: "90%",
    height: 100,
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: "#FFF",
    borderRadius: 4,
    paddingHorizontal: 15,
  },
});

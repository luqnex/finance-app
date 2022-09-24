import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  containerHeader: {
    width: "100%",
    height: "30%",
    backgroundColor: "#466AEA",
    alignItems: "center",
    justifyContent: "center",
  },
  titlePage: {
    fontSize: 20,
    color: "#ffff",
    fontWeight: "bold",
  },
  subtitlePage: {
    fontSize: 28,
    color: "#ffff",
    fontWeight: "500",
  },
  cardRelative: {
    width: "90%",
    height: "10%",
    position: "absolute",
    top: "25%",
    marginHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  containerImageCard: {
    flexDirection: "row",
    alignItems: "center",
  },
  containerArrowGreen: {
    width: 30,
    height: 30,
    backgroundColor: "rgba(117, 210, 206, 0.25)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginRight: 15,
  },
  containerArrowRed: {
    width: 30,
    height: 30,
    backgroundColor: "rgba(240, 99, 34, 0.25)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginRight: 15,
  },
  title: {
    fontSize: 16,
    color: "#AEAEAE",
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 18,
    color: "#E5E5E5",
  },
  containerAmount: {
    marginTop: "15%",
    marginHorizontal: 20,
  },
  textAmount: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#AEAEAE",
  },
  containerListCounts: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  imageNotCounts: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  textNotCounts: {
    maxWidth: "80%",
    marginTop: 20,
    fontSize: 18,
    textAlign: "center",
    color: "#7C7C8A",
  },
});

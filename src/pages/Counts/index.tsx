import { Button, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

export const Counts = () => {
  const navigation: any = useNavigation();

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

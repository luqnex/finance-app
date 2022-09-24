import { Button, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { StackNavigationProp } from "@react-navigation/stack";

import { NavigationProps } from "../../utils/interface";

export const Counts = () => {
  const navigation = useNavigation<StackNavigationProp<NavigationProps>>();

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

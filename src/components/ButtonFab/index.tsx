import { useState } from "react";

import { Image, Text, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

export const ButtonFab = () => {
  const [showButtons, setShowButtons] = useState(false);

  // TODO: arrumar a tipagem
  const navigation: any = useNavigation();

  const handleShowButtons = () => {
    setShowButtons(!showButtons);
  };

  const handleNavigateToCounts = () => {
    navigation.navigate("Counts");
    setShowButtons(false);
  };

  const handleNavigateToAmount = () => {};

  return (
    <>
      <TouchableOpacity
        onPress={handleShowButtons}
        style={styles.containerButtonFab}
      >
        <Image
          source={require("../../../assets/icons/iconBtnFab.png")}
          style={styles.iconButton}
        />
      </TouchableOpacity>
      {showButtons && (
        <View style={styles.containerButtonAdd}>
          <TouchableOpacity
            style={styles.buttonAdd}
            onPress={handleNavigateToAmount}
          >
            <Text style={styles.textButton}>Adicionar receita</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonAdd}
            onPress={handleNavigateToCounts}
          >
            <Text style={styles.textButton}>Adicionar gasto</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

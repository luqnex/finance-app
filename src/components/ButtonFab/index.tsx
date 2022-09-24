import { useState } from "react";

import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

export const ButtonFab = () => {
  const [showButtons, setShowButtons] = useState(false);

  const handleShowButtons = () => {
    setShowButtons(!showButtons);
  };

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
            onPress={() => console.log("aqui")}
          >
            <Text style={styles.textButton}>Adicionar receita</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonAdd}
            onPress={() => console.log("aqui")}
          >
            <Text style={styles.textButton}>Adicionar gasto</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

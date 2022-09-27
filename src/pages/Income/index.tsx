import { useState } from "react";

import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { useNavigation } from "@react-navigation/native";

import { StackNavigationProp } from "@react-navigation/stack";

import { NavigationProps } from "../../utils/interface";

import { styles } from "./styles";
import { ButtonSave } from "../../components/ButtonSave";

export const Income = () => {
  const [value, setValue] = useState("");

  const navigation = useNavigation<StackNavigationProp<NavigationProps>>();

  const handleChangeName = (text: string) => {
    setValue(text);
  };

  const handleSaveData = async () => {
    try {
      AsyncStorage.setItem("income", value);
      goBack();
    } catch (e) {
      console.log(e);
    }
  };

  const goBack = () => {
    navigation.goBack();
  };

  const save = async () => {
    await handleSaveData();
    goBack;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <Image source={require("../../../assets/icons/arrowLeft.png")} />
        </TouchableOpacity>
        <Text style={styles.title}>Receita</Text>
        <View />
      </View>

      <View style={styles.containerText}>
        <Text style={styles.subtitle}>
          Insira o valor total da sua receita, já somando todas caso tenha mais
          de uma
        </Text>
        <TextInput
          value={value}
          style={styles.inputName}
          placeholder="Valor total da sua receita"
          onChangeText={handleChangeName}
        />
      </View>

      <ButtonSave label="Salvar" onPress={save} />
    </View>
  );
};

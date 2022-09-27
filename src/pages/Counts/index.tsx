import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { useNavigation } from "@react-navigation/native";

import { StackNavigationProp } from "@react-navigation/stack";

import { NavigationProps } from "../../utils/interface";

import { styles } from "./styles";
import { ButtonSave } from "../../components/ButtonSave";
import { useState } from "react";

export const Counts = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const navigation = useNavigation<StackNavigationProp<NavigationProps>>();

  const handleSaveData = async () => {

    try {
      const newData = {
        name,
        date,
      };

      const response = await AsyncStorage.getItem("counts");
      const previusData = response ? JSON.parse(response) : []

      const data = [...previusData, newData]

      await AsyncStorage.setItem("counts", JSON.stringify(data))

      goBack();
    } catch (e) {
      console.log(e);
    }
  };

  const goBack = () => {
    navigation.goBack();
  };

  const save = async () => {
    handleSaveData();
  };

  const handleChangeName = (text: string) => {
    setName(text);
  };

  const handleChangeDate = (date: string) => {
    setDate(date);
  };

  const clear = async () => {
    await AsyncStorage.clear();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <Image source={require("../../../assets/icons/arrowLeft.png")} />
        </TouchableOpacity>
        <Text style={styles.title}>Gastos</Text>
        <View />
      </View>

      <View style={styles.containerText}>
        <TextInput
          value={name}
          style={styles.inputName}
          placeholder="Nome da conta"
          onChangeText={handleChangeName}
        />
        <TextInput
          value={date}
          style={styles.inputDate}
          placeholder="Data de vencimento"
          onChangeText={handleChangeDate}
        />
      </View>

      <ButtonSave label="Salvar" onPress={save} />
    </View>
  );
};

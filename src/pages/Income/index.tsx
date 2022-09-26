import {
  Button,
  Image,
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { StackNavigationProp } from "@react-navigation/stack";

import { NavigationProps } from "../../utils/interface";

import { styles } from "./styles";
import { ButtonSave } from "../../components/ButtonSave";
import { useState } from "react";

export const Income = () => {
  const [name, setName] = useState("");

  const navigation = useNavigation<StackNavigationProp<NavigationProps>>();

  const goBack = () => {
    navigation.goBack();
  };

  const save = () => {
    goBack();
  };

  const handleChangeName = (text: string) => {
    setName(text);
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
        <Text style={styles.subtitle}>
          Insira o valor total da sua receita, já somando todas caso tenha mais
          de uma
        </Text>
        <TextInput
          value={name}
          style={styles.inputName}
          placeholder="Valor total da sua receita"
          onChangeText={handleChangeName}
        />
      </View>

      <ButtonSave label="Salvar" onPress={save} />
    </View>
  );
};

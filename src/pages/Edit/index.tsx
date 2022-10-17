import { useEffect, useState } from "react";

import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase, useNavigation } from "@react-navigation/native";

import { CountsDataProps, NavigationProps } from "../../@types/interface";

import { ButtonSave } from "../../components/ButtonSave";
import { DatePicker } from "../../components/DatePicker";

import { styles } from "./styles";

type EditProps = ParamListBase & {
  route?: {
    params: {
      id: string;
    };
  };
};

export const Edit = (params: EditProps) => {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [date, setDate] = useState(new Date());
  const [previousData, setPreviousData] = useState<CountsDataProps[]>([]);

  const navigation = useNavigation<StackNavigationProp<NavigationProps>>();

  const id = params?.route?.params.id;

  const goBack = () => {
    navigation.goBack();
  };

  const handleSaveData = async () => {
    try {
      const newData = previousData.map((data) =>
        data.id === id
          ? {
              ...data,
              name: name,
              date: date.toLocaleDateString("pt-br", { timeZone: "UTC" }),
              value: value,
            }
          : { ...data }
      );

      await AsyncStorage.setItem("counts", JSON.stringify(newData));

      goBack();
    } catch (e) {
      if (e instanceof Error) {
        return e;
      }
    }
  };

  const handleChangeName = (text: string) => {
    setName(text);
  };

  const handleChangeValue = (value: string) => {
    setValue(value);
  };

  useEffect(() => {
    const getCount = async () => {
      const response = await AsyncStorage.getItem("counts");
      const previousData = response ? JSON.parse(response) : [];

      setPreviousData(previousData);

      const count = previousData.filter((count: any) => count.id === id);

      setName(count[0].name);
      setValue(count[0].value);
      setDate(new Date(count[0].date));
    };

    getCount();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <Image source={require("../../../assets/icons/arrowLeft.png")} />
        </TouchableOpacity>
        <Text style={styles.title}>Editar Gastos</Text>
        <View />
      </View>

      <View style={styles.containerText}>
        <TextInput
          value={name}
          style={styles.inputName}
          placeholder="Nome da conta"
          onChangeText={handleChangeName}
        />
        <DatePicker date={date} setDate={(event) => setDate(event)} />
        <TextInput
          value={value}
          style={styles.inputName}
          placeholder="Valor da conta"
          onChangeText={handleChangeValue}
        />
      </View>
      <ButtonSave label="Salvar" onPress={handleSaveData} />
    </View>
  );
};

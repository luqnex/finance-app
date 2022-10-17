import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { Image, Text, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { StackNavigationProp } from "@react-navigation/stack";

import Icon from "react-native-vector-icons/FontAwesome";

import BouncyCheckbox from "react-native-bouncy-checkbox";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { CountsDataProps, NavigationProps } from "../../@types/interface";

import { styles } from "./styles";

type CardProps = {
  id: string;
  name: string;
  date: string;
  value: string;
  counts: CountsDataProps[];
  check: boolean | undefined;
  setCounts: Dispatch<SetStateAction<CountsDataProps[]>>;
};

export const Card = ({
  id,
  name,
  date,
  check,
  value,
  counts,
  setCounts,
}: CardProps) => {
  const [checkValue, setCheckValue] = useState(check);

  const navigation = useNavigation<StackNavigationProp<NavigationProps>>();

  const handleRemove = async (id: string) => {
    const removeNameCount = counts.filter((count) => count.id !== id);

    setCounts(removeNameCount);

    try {
      await AsyncStorage.setItem("counts", JSON.stringify(removeNameCount));
    } catch (e) {
      console.log(e);
    }
  };

  const handleNavigateToEdit = () => {
    navigation.navigate("Edit", {
      id: id,
    });
  };

  const handleCheck = () => {
    setCheckValue(!checkValue);
  };

  useEffect(() => {
    try {
      const changeCheck = counts.map((count) =>
        count.name === name ? { ...count, check: checkValue } : { ...count }
      );

      setCounts(changeCheck);
    } catch (e) {
      console.log(e);
    }
  }, [checkValue]);

  useEffect(() => {
    setCheckValue(check);
  }, [check]);

  return (
    <View
      style={[styles.container, check ? styles.borderGreen : styles.borderRed]}
    >
      <View style={styles.containerInfoCard}>
        <BouncyCheckbox
          onPress={handleCheck}
          isChecked={checkValue}
          fillColor={check ? "transparent" : "#F06322"}
          iconStyle={check ? styles.iconChecked : styles.iconNotChecked}
        />
        <TouchableOpacity onPress={handleNavigateToEdit}>
          <Text style={styles.title}>
            {name} - R$ {value}
          </Text>
          <Text style={styles.subtitle}>Vencimento: {date}</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => handleRemove(id)}>
          <Icon name="trash" style={styles.iconTrash} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

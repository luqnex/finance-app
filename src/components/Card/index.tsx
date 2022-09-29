import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { Image, Text, TouchableOpacity, View } from "react-native";

import BouncyCheckbox from "react-native-bouncy-checkbox";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { CountsDataProps } from "../../@types/interface";

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
  // const getNameCount = counts.find((count) => count.name === name);

  console.log(check);
  const [checkValue, setCheckValue] = useState(check);

  const handleRemove = async (id: string) => {
    const removeNameCount = counts.filter((count) => count.id !== id);

    setCounts(removeNameCount);

    try {
      await AsyncStorage.setItem("counts", JSON.stringify(removeNameCount));
    } catch (e) {
      console.log(e);
    }
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
    <View style={styles.container}>
      <View>
        <BouncyCheckbox onPress={handleCheck} isChecked={checkValue} />
        <Text style={styles.title}>
          {name} - R$ {value}
        </Text>
        <Text style={styles.subtitle}>
          <Image source={require("../../../assets/icons/timer.png")} />{" "}
          Vencimento: {date}
        </Text>
      </View>

      <View>
        <TouchableOpacity onPress={() => handleRemove(id)}>
          <Image
            source={require("../../../assets/icons/trash.png")}
            style={{ width: 30 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

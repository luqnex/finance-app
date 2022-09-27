import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { Image, Text, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import BouncyCheckbox from "react-native-bouncy-checkbox";

import { styles } from "./styles";

type CountsDataProps = {
  id: number;
  name: string;
  date: string;
  value: string;
  check: boolean;
};

type CardProps = {
  name: string;
  date: string;
  value: string;
  type?: "COUNT" | "INCOME";
  /* counts: CountsDataProps[];
  setCounts: Dispatch<SetStateAction<CountsDataProps[]>>; */
};

export const Card = ({
  type,
  name,
  date,
  value,
}: /* counts,
  setCounts, */
CardProps) => {
  const [check, setCheck] = useState(false);

  const handleCheck = () => {
    setCheck(!check);
  };

  /* useEffect(() => {
    const getNameCount = counts.find((count) => count.name === name);
    const removeNameCount = counts.filter((count) => count.name !== name);

    for (let count in getNameCount) {
      console.log(count);
    }

    if (getNameCount) {
      const newDate = {
        id: getNameCount.id,
        name: getNameCount.name,
        value: getNameCount.value,
        date: getNameCount.date,
        check: check,
      };

      setCounts([...removeNameCount, newDate]);
    }
  }, [check]); */

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          {name} - R$ {value}
        </Text>
        <Text style={styles.subtitle}>
          <Image source={require("../../../assets/icons/timer.png")} />{" "}
          Vencimento: {date}
        </Text>
      </View>

      <View>
        <BouncyCheckbox isChecked={check} onPress={handleCheck} />
      </View>
    </View>
  );
};

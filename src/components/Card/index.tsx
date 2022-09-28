import { Dispatch, SetStateAction, useState } from "react";

import { Image, Text, TouchableOpacity, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { CountsDataProps } from "../../@types/interface";

import { styles } from "./styles";

type CardProps = {
  id: string;
  name: string;
  date: string;
  value: string;
  counts: CountsDataProps[];
  setCounts: Dispatch<SetStateAction<CountsDataProps[]>>;
};

export const Card = ({
  id,
  name,
  date,
  value,
  counts,
  setCounts,
}: CardProps) => {
  const handleRemove = async (id: string) => {
    const removeNameCount = counts.filter((count) => count.id !== id);

    setCounts(removeNameCount);

    try {
      await AsyncStorage.setItem("counts", JSON.stringify(removeNameCount));
    } catch (e) {
      console.log(e);
    }
  };

  // TODO: pensar em algum modo de marcar como pago a conta.
  // const [check, setCheck] = useState(false);

  /* const handleCheck = () => {
    setCheck(!check);
  }; */

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

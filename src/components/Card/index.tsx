import { Image, Text, View } from "react-native";

import { styles } from "./styles";

type CardProps = {
  name: string;
  date: string;
  value: string;
  type?: "COUNT" | "INCOME";
};

export const Card = ({ type, name, date, value }: CardProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{name} - R$ {value}</Text>
        <Text style={styles.subtitle}>
          <Image source={require("../../../assets/icons/timer.png")} />{" "}
          Vencimento: {date}
        </Text>
      </View>

      <View>
        <Image source={require("../../../assets/icons/icon.png")} />
      </View>
    </View>
  );
};

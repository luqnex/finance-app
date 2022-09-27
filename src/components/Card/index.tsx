import { Image, Text, View } from "react-native";

import { styles } from "./styles";

type CardProps = {
  title: string;
  subtitle: string;
  type?: "COUNT" | "INCOME";
};

export const Card = ({ type, title, subtitle }: CardProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>
          <Image source={require("../../../assets/icons/timer.png")} />{" "}
          Vencimento: {subtitle}
        </Text>
      </View>

      <View>
        <Image source={require("../../../assets/icons/icon.png")} />
      </View>
    </View>
  );
};

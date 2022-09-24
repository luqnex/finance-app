import { StatusBar } from "expo-status-bar";
import { Image, Text, View } from "react-native";

import { ButtonFab } from "../../components/ButtonFab";

import { styles } from "./styles";

export const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.containerHeader}>
        <Text style={styles.titlePage}>Saldo</Text>
        <Text style={styles.subtitlePage}>R$ 3500,00</Text>
      </View>

      <View style={styles.cardRelative}>
        <View style={styles.containerImageCard}>
          <View style={styles.containerArrowGreen}>
            <Image source={require("../../../assets/icons/arrowGreen.png")} />
          </View>
          <View>
            <Text style={styles.title}>Receita</Text>
            <Text style={styles.subtitle}>$6,650</Text>
          </View>
        </View>
        <View style={styles.containerImageCard}>
          <View style={styles.containerArrowRed}>
            <Image source={require("../../../assets/icons/arrowRed.png")} />
          </View>
          <View>
            <Text style={styles.title}>Gastos</Text>
            <Text style={styles.subtitle}>$6,650</Text>
          </View>
        </View>
      </View>

      <View style={styles.containerAmount}>
        <Text style={styles.textAmount}>Contas</Text>
        <View style={styles.containerListCounts}>
          <Image
            source={require("../../../assets/icons/symbol.png")}
            style={styles.imageNotCounts}
          />
          <Text style={styles.textNotCounts}>
            Você ainda não tem nenhum gasto cadastrado
          </Text>
        </View>
      </View>
      <ButtonFab />
    </View>
  );
};

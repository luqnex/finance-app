
import { StatusBar } from "expo-status-bar";

import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  View,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { ButtonFab } from "../../components/ButtonFab";
import { Card } from "../../components/Card";

import { styles } from "./styles";
import { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

type CountsDataProps = {
  id: number;
  title: string;
  subtitle: string;
};

type RenderItemProps = {
  item: CountsDataProps;
};

const mockData: CountsDataProps[] = [
  {
    id: 1,
    title: "Patrimônio 147456",
    subtitle: "10/07/2022",
  },
  {
    id: 2,
    title: "Patrimônio 147456",
    subtitle: "10/07/2022",
  },
  {
    id: 3,
    title: "Patrimônio 147456",
    subtitle: "10/07/2022",
  },
  {
    id: 4,
    title: "Patrimônio 147456",
    subtitle: "10/07/2022",
  },
  {
    id: 5,
    title: "Patrimônio 147456",
    subtitle: "10/07/2022",
  },
  {
    id: 6,
    title: "Patrimônio 147456",
    subtitle: "10/07/2022",
  },
  {
    id: 7,
    title: "Patrimônio 147456",
    subtitle: "10/07/2022",
  },
  {
    id: 8,
    title: "Patrimônio 147456",
    subtitle: "10/07/2022",
  },
  {
    id: 9,
    title: "Patrimônio 147456",
    subtitle: "10/07/2022",
  },
];

export const Home = () => {
  const [balance, setBalance] = useState("");
  const [counts, setCounts] = useState<any>();

  const renderItem = ({ item }: RenderItemProps) => (
    <Card key={item.id} title={item.title} subtitle={item.subtitle} />
  );

  useFocusEffect(useCallback(() => {
    const getIncomeValue = async () => {
      try {
        const data = await AsyncStorage.getItem("income");
        if (data) {
          setBalance(data);
        }
      } catch (e) {
        console.log(e);
      }
    };

    getIncomeValue();
  }, []));

  useFocusEffect(useCallback(() => {
    const getCountsValue = async () => {
      try {
        const response = await AsyncStorage.getItem("counts");
        const data = response ? JSON.parse(response) : []
        console.log(data)
        //setCounts(data);
      } catch (e) {
        console.log(e);
      }
    };

    getCountsValue();
  }, []));

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.containerHeader}>
        <Text style={styles.titlePage}>Saldo</Text>
        <Text style={styles.subtitlePage}>R$ {balance}</Text>
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

      <Text style={styles.textAmount}>Contas</Text>
      {mockData.length ? (
        <SafeAreaView style={styles.safeAreaView}>
          <FlatList
            data={mockData}
            renderItem={renderItem}
            style={{ paddingBottom: 150 }}
          />
        </SafeAreaView>
      ) : (
        <View style={styles.containerAmount}>
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
      )}

      <ButtonFab />
    </View>
  );
};

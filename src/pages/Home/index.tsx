import { useCallback, useState } from "react";

import { View, Text, Image, FlatList, SafeAreaView } from "react-native";

import { StatusBar } from "expo-status-bar";

import { useFocusEffect } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { Card } from "../../components/Card";
import { ButtonFab } from "../../components/ButtonFab";

import { CountsDataProps, RenderItemProps } from "../../@types/interface";

import { styles } from "./styles";

export const Home = () => {
  const [balance, setBalance] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [incomes, setIncomes] = useState(0);
  const [counts, setCounts] = useState<CountsDataProps[]>([]);

  const renderItem = ({ item }: RenderItemProps) => (
    <Card
      key={item.id}
      id={item.id}
      counts={counts}
      name={item.name}
      date={item.date}
      value={item.value.toString()}
      setCounts={setCounts}
    />
  );

  useFocusEffect(
    useCallback(() => {
      const data = counts.map((count) => {
        return count.value;
      });

      const sumCounts = data.reduce((acc, count) => {
        return Number(acc) + Number(count);
      }, 0);

      setIncomes(sumCounts);
    }, [counts])
  );

  useFocusEffect(
    useCallback(() => {
      const getIncomeValue = async () => {
        try {
          const data = await AsyncStorage.getItem("income");
          if (data) {
            setRevenue(Number(data));
          }
        } catch (e) {
          console.log(e);
        }
      };

      getIncomeValue();
    }, [])
  );

  useFocusEffect(
    useCallback(() => {
      const getCountsValue = async () => {
        try {
          const response = await AsyncStorage.getItem("counts");
          const data = response ? JSON.parse(response) : [];
          setCounts(data);
        } catch (e) {
          console.log(e);
        }
      };

      getCountsValue();
    }, [])
  );

  useFocusEffect(
    useCallback(() => {
      setBalance(revenue - incomes);
    }, [revenue, incomes])
  );

  const clearAllCounts = async () => {
    await AsyncStorage.removeItem("counts");
    setCounts([]);
  };

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
            <Text style={styles.subtitle}>R$ {revenue}</Text>
          </View>
        </View>
        <View style={styles.containerImageCard}>
          <View style={styles.containerArrowRed}>
            <Image source={require("../../../assets/icons/arrowRed.png")} />
          </View>
          <View>
            <Text style={styles.title}>Gastos</Text>
            <Text style={styles.subtitle}>R$ {incomes}</Text>
          </View>
        </View>
      </View>

      <Text style={styles.textAmount}>Contas</Text>

      {counts.length ? (
        <SafeAreaView style={styles.safeAreaView}>
          <FlatList
            data={counts}
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

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../pages/Home";
import { Counts } from "../pages/Counts";
import { Income } from "../pages/Income";
import { Edit } from "../pages/Edit";

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Counts"
          component={Counts}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Income"
          component={Income}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Edit"
          component={Edit}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

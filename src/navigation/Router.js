import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import Main from "../screens/Main";
import QuotesDetails from "../screens/QuotesDetails";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="QuotesDetails"
        component={QuotesDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;

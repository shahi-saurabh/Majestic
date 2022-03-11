import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screen/Home";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
   /*  <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator> */
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      {/* //<Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});

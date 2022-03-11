import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Screen/Login";
import ForgotPassword from "./Screen/ForgotPassword";
import DrawerNav from "./navigation/DrawerNav"
//import 'react-native-gesture-handler

import Home from "./Screen/Home";

/* import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerNavigator from "./Drawer/DrawerNavigator";
 */
//const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();
LogBox.ignoreAllLogs();

const Auth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: true }}
      />

       <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />   
    </Stack.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
          <Stack.Screen name="Auth" component={Auth} />  

          <Stack.Screen
          name="Drawer"
          component={DrawerNav}
          options={{
            headerShown: false,
          }}/>


        {/* <Stack.Screen name="Drawer" component={DrawerNavigator}  /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

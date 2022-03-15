import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNav from "./src/navigation/DrawerNav";
import Main from "./src/screens/Main";
import Login from "./src/screens/Login";
import ForgotPassword from "./src/screens/ForgotPassword"
import Home from "./src/screens/Home"

const Stack = createNativeStackNavigator();

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
        options={{ headerShown:false }}
      />

       {/* <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />    */}
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Auth" component={Auth}
      options={{ headerShown: false, }}
       />
      {/* <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />         */}
        <Stack.Screen
          name="Drawer"
          component={DrawerNav}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

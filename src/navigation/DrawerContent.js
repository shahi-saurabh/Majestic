import { View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Platform,
  UIManager,
  LayoutAnimation,
  StatusBar,
  TouchableHighlight} from "react-native";
import React from "react";
import Main from "../screens/Main"
import AsyncStorage from "@react-native-async-storage/async-storage";

const DrawerContent = ({ props,navigation }) => {
  return (
    <View style={{marginTop:'20%',}}>
   {/*    <Text
        style={{
          fontSize: 30,
          marginTop: 100,
        }}
      >
        DrawerContent
      </Text> */}

          <TouchableOpacity
              style={styles.content}
              onPress={() => {
                navigation.navigate("Main");
              }}
            >
              <Text style={{ fontSize: 24, padding: 5 }}>Quotes</Text>
              <View style={styles.separator} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.content}
              onPress={() => {
                //navigation.navigate("ViewProducts", { intentFromWomen: true });
              }}
            >
              <Text style={{ fontSize: 24, padding: 5 }}
               onPress={() => {
                 AsyncStorage.clear();
                navigation.navigate("Login");
              }}
              >Logout</Text>
              <View style={styles.separator} />
            </TouchableOpacity>
            {/* <TouchableOpacity
              style={styles.content}
              onPress={() => {
                navigation.navigate("ViewProducts", { intentFromKid: true });
              }}
            >
              <Text style={{ fontSize: 14, padding: 5 }}>Kids Glasses</Text>
              <View style={styles.separator} />
            </TouchableOpacity> */}
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({});

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Settings = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}
        style={{
          width: "50%",
          height: 50,
          backgroundColor: "#f4f4",
          marginTop: 100,
          justifyContent: "center",
          borderRadius: 50,
          alignSelf: "center",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "#000",
            textAlign: "center",
          }}
        >
          Open the silly drawer
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});

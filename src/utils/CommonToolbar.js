import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";

const CommonToolbar = ({ navigation, toolbarTitle }) => {
  return (
    <View>
      <View style={styles.toolbar}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            source={{
              uri: "https://img.icons8.com/ios-glyphs/2x/back.png",
            }}
            style={styles.back}
          />
        </TouchableOpacity>
        <Text style={styles.cart}>{toolbarTitle}</Text>
      </View>
      {/* <View style={styles.separator} /> */}
    </View>
  );
};

export default CommonToolbar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "white",
    flexDirection: "column",
  },

  back: {
    tintColor: "white",
    width: 30,
    height: 30,
    justifyContent: "flex-start",
    marginStart: 10,
    alignSelf: "center",
    alignItems: "center",
  },
  cart: {
    flex: 1,
    fontSize: 16,
    marginEnd: 25,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  toolbar: {
    height: 56,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#31679B",
    justifyContent: "center",
    alignItems: "center",
    marginTop:5
  },
  separator: {
    height: 2,
    backgroundColor: "#808080",
    width: "100%",
  },
});

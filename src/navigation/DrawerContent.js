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
import Main from "../screens/Main";
import Meeting from "../screens/Meeting";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DrawerContent = ({ props,navigation }) => {
  return (
    <View style={{ backgroundColor: "#31679B",flex: 1,marginTop: StatusBar.currentHeight,}}>
   {/*    <Text
        style={{
          fontSize: 30,
          marginTop: 100,
        }}
      >
        DrawerContent
      </Text> */}
            <View style={{flexDirection:"row", marginTop:"15%"}}>
            <Image
                /* source={{
                  uri:
                    "data:image/png;base64,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"
                }} */
                source={require("../../assets/meeting.png")}
                style={{ width: 15, height: 20,alignSelf:'center',marginTop:22,marginLeft:20}}
              />
            <TouchableOpacity
              style={styles.content}
              onPress={() => {
                navigation.navigate("Meeting");
              }}
              //</View>onPress={() => {
                //navigation.navigate("ViewProducts", { intentFromWomen: true });
             // }}

            >
              <Text style={{ marginTop:'20%',fontSize: 24, paddingLeft: 10,color:'white'}}>Meeting</Text>
           {/*    <View style={styles.separator} /> */}
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row",marginTop:5}}>
            <Image
                /* source={{
                  uri:
                    "data:image/png;base64,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"
                }} */
                source={require("../../assets/quotes.png")}
                style={{ width: 15, height: 25,alignSelf:'center',marginTop:10,marginLeft:20}}
              />
          <TouchableOpacity
              style={styles.content}
              onPress={() => {
                navigation.navigate("Main");
              }}
            >
              <Text style={{ fontSize: 24, paddingLeft: 12,color:'white',marginTop:5}}>Quotes</Text>
            {/*   <View style={styles.separator} /> */}
            </TouchableOpacity>
         </View>


         <View style={{flexDirection:"row", position:'absolute',bottom:30
        //ho gya
        }}>
            <Image
                /* source={{
                  uri:
                    "data:image/png;base64,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"
                }} */
                source={require("../../assets/logout.png")}
                style={{ width: 17, height: 17,alignSelf:'center',marginTop:5,marginLeft:20}}
              />
            <TouchableOpacity
              style={styles.content}
              onPress={() => {
                //navigation.navigate("ViewProducts", { intentFromWomen: true });
              }}
            >
              <Text style={{ fontSize: 24, paddingLeft: 10,color:'white',}}
               onPress={() => {
                 AsyncStorage.clear();
                navigation.navigate("Login");

              }}
              >Logout</Text>
          {/*     <View style={styles.separator} /> */}
            </TouchableOpacity>
            </View>
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

const styles = StyleSheet.create({
  separator: {
    height: 0.5,
    backgroundColor: "#808080",
    width: "90%",
  },
  back: {
    //tintColor: "white",
    width: 25,
    height:25,
    marginLeft:"30%",
    justifyContent: "flex-start",
    marginStart: 10,
    alignSelf: "flex-end",
    alignItems: "flex-end",
  },
 
});

import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  StatusBar,
  Platform,
  ToastAndroid
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { Checkbox } from "react-native-paper";
import OutlineInput from "react-native-outline-input";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/FontAwesome5";
import Loader from "../utils/Loader";
import Home from "./Home";

//import Loader from "../utils/Loader";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked3, setChecked3] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [hidePass, setHidePass] = useState(true);

 
  




  function login(userEmail, userPassword) {
    //var params = new FormData();
    if (userEmail === "") {
      Platform.OS === "android"
        ? ToastAndroid.showWithGravity(
            "Please fill email",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM
          )
        : null;
    } else if (userPassword === "") {
      Platform.OS === "android"
        ? ToastAndroid.showWithGravity(
            "Please fill the password",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM
          )
        : null;
    } else {
      const params = new FormData();
      params.append("email", "rahul29tech@gmail.com");
      params.append("password", "iSy4lEwJ");
      setLoading(true);

      const url = "http://api.segwik-development.com/api/v2/staffLogin";

      setTimeout(() => {
        fetch(url, {
          method: "POST",
          body: params,
          redirect: "follow"
        })
          .then(response => response.json())
          .then(result => {
            console.log("APi respponse -> ", JSON.stringify(result));
            //navigation.navigate("Drawer");
            // AsyncStorage.setItem("user_ID", email);
             AsyncStorage.setItem("user_id", JSON.stringify(result.data.user_id));
          AsyncStorage.setItem("user_fname", result.data.user_fname);
          AsyncStorage.setItem("user_lname", result.data.user_lname);
          AsyncStorage.setItem("email", result.data.email);
          AsyncStorage.setItem("token", result.data.token);  
           console.log("response token data",result.data.token);
             navigation.navigate("Home");
            //run karo
          })
          .catch(error => {
            console.log("APi errro -> ", JSON.stringify(error));
          })
        .finally(() => setLoading(false))
      .finally(() => {
        setTimeout(() => {
          setLoading.bind(undefined, false);
        }, 2000);
      });
      }, 1000);
    }
  }

  return (
    <View
      style={{ backgroundColor: "#0000ff", flex: 1, justifyContent: "center", }}
    >
       <Loader loading={loading} /> 

      <ScrollView>
        <Image
          //     source={require("../../../../assets/icon.png")}
          style={styles.image}
        />
        <Text
          style={{
            justifyContent: "center",
            alignItems: "center",
            fontSize: 24,
            marginLeft: "30%",
            color: "#fff",
            marginTop: "45%"
          }}
        >
          Welcome Back!
        </Text>

        <View
          style={{
            height: "50%",
            width: "75%",
            backgroundColor: "#fff",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            marginTop: "5%",
            marginLeft: "15%",
            marginBottom: "55%"
          }}
        >
          <View>
            {/*  <View style={{
              flexDirection:"row"
          }}>
             <Image
             source={{uri:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fdownload%2Fwhite%2Fmail-256.png&imgrefurl=https%3A%2F%2Fwww.iconsdb.com%2Fwhite-icons%2Fmail-icon.html&tbnid=tD1Up7EnArNSDM&vet=12ahUKEwi4vMaHwbP2AhVwXmwGHQ3nBPwQMygDegUIARCKAQ..i&docid=_PBmxStIpK8U0M&w=256&h=256&q=mail%20icon.png&hl=en&client=firefox-b-d&ved=2ahUKEwi4vMaHwbP2AhVwXmwGHQ3nBPwQMygDegUIARCKAQ"}}
             />            
            <TextInput
              value={email}
              onChangeText={(e) => {
                setEmail(e);
              }}
              
              style={{height: 40, width: "95%", borderColor: 'black', borderWidth: 1,  marginBottom: 20,borderRadius:5}}
              placeholder="Email ID"
               
            />
          </View>

          <Text style={{color:'gray',fontsize:18}}>Password</Text>
          <View>
            <TextInput
              value={password}
              onChangeText={(e) => {
                setPassword(e);
              }}
              placeholder="Password"
              
              style={{height: 40, width: "95%", borderColor: 'black', borderWidth: 1,  marginBottom: 20,borderRadius:5}}
             
            />
          </View> */}

            <View style={styles.outline_editText1}>
              <OutlineInput
                value={email}
                onChangeText={e => {
                  setEmail(e);
                }}
                label="Email ID"
                activeValueColor="#252c4a"
                activeBorderColor="#252c4a"
                activeLabelColor="#252c4a"
                passiveBorderColor="#DDD"
                passiveLabelColor="#252c4a"
                passiveValueColor="#252c4a"
              />
            </View>

            <Text style={{ color: "gray", fontsize: 18 }}>Password</Text>

            <View style={styles.outline_editText2}>
              {/* <OutlineInput
                value={password}
                onChangeText={e => {
                  setPassword(e);
                  
                }}
                label="Password"
                activeValueColor="#252c4a"
                activeBorderColor="#252c4a"
                activeLabelColor="#252c4a"
                passiveBorderColor="#DDD"
                passiveLabelColor="#252c4a"
                passiveValueColor="#252c4a"
              /> */}
              <TextInput
                style={styles.outline_editText}
                placeholder="Password"
                onChangeText={e => {
                  setPassword(e);
                }}
                value={password}
                autoCompleteType="password"
                secureTextEntry={hidePass ? true : false}
              />
              <Icon
                name={hidePass ? "eye-slash" : "eye"}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "10%"
                }}
                size={15}
                color="grey"
                onPress={() => setHidePass(!hidePass)}
              />
            </View>

            <View
              style={{
                flexDirection: "row"
              }}
            >
              <Checkbox
                status={checked3 ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked3(!checked3);
                  setTimeout(() => {
                    if (checked3) {
                      AsyncStorage.setItem("user_ID", email);
                      AsyncStorage.setItem("password", password);
                    } else {
                      AsyncStorage.removeItem("user_iD");

                      AsyncStorage.removeItem("password");
                    }
                  }, 1000);
                }}
                color={"blue"}
              />

              <Text style={styles.forgot}>Remember Me </Text>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  navigation.navigate("ForgotPassword");
                }}
              >
                <Text style={styles.forgot}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.btnLogin}
              activeOpacity={0.9}
              onPress={() => {
                login(email, password);
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  justifyContent: "center",
                  alignItem: "center"
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={{
            justifyContent: "center",
            alignItems: "center",
            fontSize: 24,
            marginLeft: "30%",
            //color: "#000",
            marginTop: "45%"
          }}
        >
          Privacy Policy!
        </Text>
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    marginTop: StatusBar.currentHeight,
    flexDirection: "column"
  },
  btnLogin: {
    margin: 30,
    width: 225,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  btnSignUp: {
    height: 48,
    margin: 20,
    width: "90%",
    borderRadius: 30,
    color: "white",
    borderColor: "#252c4a",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderWidth: 1
  },

  login: {
    flex: 1,
    fontSize: 16,
    marginEnd: 25,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "red"
  },
  image: {
    height: "10%",
    width: "50%",
    alignSelf: "center",
    padding: 15,
    justifyContent: "center"
  },
  editText: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    height: 48,
    margin: 10,
    fontSize: 16
  },
  forgot: {
    color: "#252c4a",
    fontSize: 14,
    textAlign: "center",
    margin: 10
  },
  line: {
    width: 100,
    marginStart: 10,
    marginEnd: 10,
    height: 1,
    borderColor: "grey",
    borderWidth: 0.5
  },

  outline_editText: {
    margin: 10,
    height: 40,
    width: "85%",
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 5
  },
  outline_editText1: {
    margin: 10
  },
  outline_editText2: {
    margin: 10,
    flexDirection: "row"
  },
  cart: {
    flex: 1,
    fontSize: 16,
    // marginEnd: 25,
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  toolbar: {
    height: 56,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#252c4a",
    justifyContent: "center",
    alignItems: "center"
  },
  separator: {
    height: 2,
    backgroundColor: "#808080",
    width: "100%"
  }
});

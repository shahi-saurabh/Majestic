import React, { useState } from "react";
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ScrollView,
    StatusBar,
    Platform,
    ToastAndroid,TextInput,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios";
//import CommonToolbar from "./utils/CommonToolbar";
//import NavigationBar from 'react-native-navigation-bar';

const ForgotPassword = ({ navigation }) => {

    const [email, setEmail] = useState("");

    function forgotPassword(userEmail) {
        var params = new FormData();
        if (userEmail === "") {
            Platform.OS === 'android' ?
                (
                    ToastAndroid.showWithGravity(
                        "Please fill email",
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM
                    )
                ) : null
        }
         else {
            params.append("email", userEmail);
           // setLoading(true);
        }
        //const url = "http://api.segwik-development.com/api/v2/forgot_password";
        var config = {
            method: 'post',
            url: 'http://api.segwik-development.com/api/v2/forgot_password?email=segwik-admin-1@majesticawning.com',
            headers: { 
              Accept: 'application/json',
              "Content-Type": "application/json"
            }
          };
        axios(config)
                        .then((response) => {
                console.log("json forgot password data", JSON.stringify(response));
                if (response.data.response === true) {
                    Platform.OS === 'android' ?
                        (
                            ToastAndroid.showWithGravity(
                                "Email Verified",
                                ToastAndroid.SHORT,
                                ToastAndroid.BOTTOM
                            )
                        ) : (
                            null
                        )
                    
                } else {
                    Platform.OS === 'android' ?
                        (
                            ToastAndroid.showWithGravity(
                                "Forgot password failed.",
                                ToastAndroid.SHORT,
                                ToastAndroid.BOTTOM
                            )
                        ) : (
                            null
                        )
                }
            }).catch((error) => {
                console.log("Error in forgot password api -> ", error)
            })
            //.finally(() => setLoading(false))
            .finally(() => {
                setTimeout(() => {
                 //   setLoading.bind(undefined, false)
                }, 2000)
            });

    }

    return (
        <View style={styles.container}>{/* 
          // <CommonToolbar navigation={navigation} toolbarTitle="Forgot Password" /> */}
          {/*   <Loader loading={loading} />  */}
         {/*  <View>
          <NavigationBar 
          title='Main title'
          height={50}
          leftButtonTitle='back'
          />
        <Text>ForgotPassword</Text>

        </View> */}

            <ScrollView>
                <View
                    style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
                >




            <View  style={{
            height:"50%",width:"75%",backgroundColor:"#fff",flex: 1, alignItems: "center", justifyContent: "center",marginTop: "55%",marginLeft:"15%",marginBottom:"55%"
                 }}>



                    
                   {/*  <Image
                        source={{
                            uri: "https://alphafirms.in/wp-content/uploads/2020/12/lenskart-logo.png",
                        }}
                        style={styles.image}
                    /> */}
                    <View style={styles.outline_editText}>
                        <TextInput
                            value={email}
                            onChangeText={(e) => {
                                setEmail(e);
                            }}
                            label="Email Id"
                            activeValueColor="#252c4a"
                            activeBorderColor="#252c4a"
                            activeLabelColor="#252c4a"
                            passiveBorderColor="#DDD"
                            passiveLabelColor="#252c4a"
                            passiveValueColor="#252c4a"
                        />
                    </View>
                    <TouchableOpacity style={styles.btnLogin}
                        activeOpacity={0.9}
                        onPress={() => {
                            forgotPassword(email);
                        }}>
                        <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
                            Forgot Password
                        </Text>
                    </TouchableOpacity>
                </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default ForgotPassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "blue",
        marginTop: StatusBar.currentHeight,
        flexDirection: "column",
    },
    btnLogin: {
        height: 48,
        margin: 20,
        width: "90%",
        borderRadius: 30,
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "#252c4a",
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
        borderWidth: 1,
    },

    login: {
        flex: 1,
        fontSize: 16,
        marginEnd: 25,
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    image: {
        height: 200,
        width: "50%",
        alignSelf: "center",
        padding: 15,
        justifyContent: "center",
    },
    editText: {
        borderBottomColor: "grey",
        borderBottomWidth: 1,
        height: 48,
        margin: 10,
        fontSize: 16,
    },
    forgot: {
        color: "#252c4a",
        fontSize: 14,
        textAlign: "center",
        margin: 10,
    },
    line: {
        width: 100,
        marginStart: 10,
        marginEnd: 10,
        height: 1,
        borderColor: "grey",
        borderWidth: 0.5,
    },
    or: {
        borderRadius: 50,
        elevation: 10,
        height: 40,
        width: 40,
        textAlign: "center",
        textAlignVertical: 'center',
        backgroundColor: "white",
        color: "#252c4a",
    },
    outline_editText: {
        margin: 10,
        width: "90%",
    },
});

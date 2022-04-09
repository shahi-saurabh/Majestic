import { StyleSheet, Text, View,StatusBar,ScrollView,TextInput,TouchableOpacity,Image} from 'react-native'
import React,{useState} from 'react'
import CommonToolbar from "../utils/CommonToolbar";

import AsyncStorage from "@react-native-async-storage/async-storage";


const ForgotPassword = ({navigation}) => {
    const [email, setEmail] = useState("");

    function forgotPassword(userEmail) {
      // var params = new FormData();
      // if (userEmail === "") {
      //   Platform.OS === "android"
      //     ? ToastAndroid.showWithGravity(
      //         "Please fill email",
      //         ToastAndroid.SHORT,
      //         ToastAndroid.BOTTOM
      //       )
      //     : null;
      // } else {
      //   params.append("email", userEmail);
      //   // setLoading(true);
      // }
      const params = new FormData();
      params.append("email", userEmail);
      const url = "http://api.segwik-development.com/api/v2/forgot_password";
  
      setTimeout(() => {
        fetch(url, {
          method: "POST",
          body: params,
          redirect: "follow"
        })
          .then(response => response.json())
          .then(result => {
            // console.log("APi respponse -> ", JSON.stringify(result));
          })
          .catch(error => {
            // console.log("APi errro -> ", JSON.stringify(error));
          });
      }, 2000);
  
      // var config = {
      //     method: 'post',
      //     url: 'http://api.segwik-development.com/api/v2/forgot_password?email=segwik-admin-1@majesticawning.com',
      //     headers: {
      //       Accept: 'application/json',
      //       "Content-Type": "application/json"
      //     }
      //   };
      // axios(config)
      //                 .then((response) => {
      //         console.log("json forgot password data", JSON.stringify(response));
      //         if (response.data.response === true) {
      //             Platform.OS === 'android' ?
      //                 (
      //                     ToastAndroid.showWithGravity(
      //                         "Email Verified",
      //                         ToastAndroid.SHORT,
      //                         ToastAndroid.BOTTOM
      //                     )
      //                 ) : (
      //                     null
      //                 )
  
      //         } else {
      //             Platform.OS === 'android' ?
      //                 (
      //                     ToastAndroid.showWithGravity(
      //                         "Forgot password failed.",
      //                         ToastAndroid.SHORT,
      //                         ToastAndroid.BOTTOM
      //                     )
      //                 ) : (
      //                     null
      //                 )
      //         }
      //     }).catch((error) => {
      //         console.log("Error in forgot password api -> ", error)
      //     })
      //     //.finally(() => setLoading(false))
      //     .finally(() => {
      //         setTimeout(() => {
      //          //   setLoading.bind(undefined, false)
      //         }, 2000)
      //     });
    }




  return (
    <View style={styles.container}>
      <CommonToolbar style={{marginTop:"-10%",}}
toolbarTitle={"Forgot Password"}
navigation={navigation}
/>
      
        <View
          style={{ flex: 1,}}
        >
          <Image
           // source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2m70XvXrD7ul53OLgkffMayDv4eGDdqi3RC9gBsCHpwBVFCkNHSPywNG_E8KdAZnIBLo&usqp=CAU"}}
           source={require("../../assets/Logo.png")}
           style={styles.image}
      /> 
          <View
          style={{
            // height: "78%",
            width: "60%",
            borderRadius: 10, padding: 5, elevation:10,
            backgroundColor: "#ffffffff",
            // flex: 1,
           alignSelf:'center',
            alignItems: "center",
            // justifyContent: "center",
           marginTop:"3%",height: "auto",
          }}
        >
            {/*  <Image
                        source={{
                            uri: "https://alphafirms.in/wp-content/uploads/2020/12/lenskart-logo.png",
                        }}
                        style={styles.image}
                    /> */}

         <Text style={{alignSelf:"center", fontSize:18}}>Forgot Password</Text>

<View style={{ height:50,width: "95%", borderColor: 'black', borderWidth:1,flexDirection:"row" ,borderRadius:10, marginTop:10}} >
  <>
<Image
               /*  source={{
                  uri:
                    "data:image/png;base64,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"
                }} */
                source={require("../../assets/icons8-mail.png")}
                style={{ width: 15, height: 15,alignSelf:'center',marginStart:10}}
              />
               <TextInput
                style={{width:"90%", alignSelf:'center', marginStart:10}}
                placeholder="Email Id"
                onChangeText={e => {
                  setEmail(e);
                  //setErrortext(false)
                }}
                value={email}
              /></>
            </View>
            <TouchableOpacity
              style={styles.btnLogin}
              activeOpacity={0.9}
              onPress={() => {
                forgotPassword(email);
              }}
            >
              <Text
                style={{ fontSize: 16,fontWeight: "bold", color: "white" }}
              >
                Verify Email Id
              </Text>
            </TouchableOpacity>
          </View>

          <Text
          style={{
            alignSelf: "center",
            fontSize: 12,
            color:"#ffff",
            
            //color: "#000",
            marginTop: "5%",marginLeft:"17%",marginRight:"17%",
                             
          }}
        >
          95 Romaine Avenue Suite 5 | Jersey City, 07306 
        </Text>
         
        <Text
          style={{
            alignSelf: "center",
            fontSize: 12,
            color:"#ffff",
            
            //color: "#000",
 //            marginTop: "5%"
          }}
        >
          (201)591-1973 | Segwik 
        </Text>

        </View>
    
    </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#31679B",
        marginTop:StatusBar.currentHeight,
        flexDirection: "column"
      },
      btnLogin: {
        height: 48,
        margin: 20,
        width: "90%",
        borderRadius: 10,
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "orange"
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
        textAlign: "center"
      },
      image: {
        height: "25%",
        width: "70%",
        alignSelf: "center",
        padding: 15,
        justifyContent: "center",
        marginTop:"10%"
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
      or: {
        borderRadius: 50,
        elevation: 10,
        height: 40,
        width: 40,
        textAlign: "center",
        textAlignVertical: "center",
        backgroundColor: "white",
        color: "#252c4a"
      },
      outline_editText: {
        margin: 10,
    height: 40,
    width:"95%",
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 5
      },

      outline_editText2: {
        margin: 10,
        flexDirection: "row"
      },
})
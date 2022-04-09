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
import Home from "./Home";
import ForgotPassword from "./ForgotPassword";
import { Dimens } from "../utils/Dimension";
import Loader from "../utils/Loader";
//import CardView from 'react-native-cardview';
// import { gloableData } from "../Redux/Action";
// import { useDispatch } from 'react-redux';

const Login = ({ navigation }) => {
  // const dispatch=useDispatch()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked3, setChecked3] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [hidePass, setHidePass] = useState(true);
  //const [invalidemail, setInvalidEmail] = useState(true);
  const [errortext, setErrortext] = useState(false)


  function login(userEmail, userPassword) {
    //var params = new FormData();
      //setErrortext('');
    if (userEmail === "") {
      setErrortext(true)
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
      params.append("email","rahul29tech@gmail.com");//userEmail //"rahul29tech@gmail.com"
      params.append("password","iSy4lEwJ"); //userPassword  //"iSy4lEwJ"
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
            AsyncStorage.setItem(
              "user_id",
              JSON.stringify(result.data.user_id)
            );
            AsyncStorage.setItem("user_fname", result.data.user_fname);
            AsyncStorage.setItem("user_lname", result.data.user_lname);
            AsyncStorage.setItem("email", result.data.email);
            AsyncStorage.setItem("token", result.data.token);
            AsyncStorage.setItem("encrypted_customer_id",result.data.encrypted_customer_id);
            console.log("response token data", result.data.token);
            navigation.navigate("Drawer");
            //run karo
          })
          .catch(error => {
            setErrortext(true);
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
      style={{ backgroundColor: "#31679B", flex: 1,}}
    >
      <Loader loading={loading} />

      
        <Image
        source={require("../../assets/Logo.png")}//D:\DrawerNavi\assets\Logo.png
           //source={require("../assets/Logo.png")}
          style={styles.image}
        />

        <Text
          style={{
            justifyContent: "center",
            alignItems: "center",
            fontSize: 24,
            alignSelf: "center",
            color: "#fff"
          }}
        >
          Welcome Back!
        </Text>

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
           marginTop:10
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

            <Text style={{ color: "gray", fontSize: 16,marginStart:"15%",marginTop:5}}>
              Login Email
            </Text>
         {/*    <CardView
                //style={styles.cardStyle}
                cardElevation={2}
                cardMaxElevation={2}
                cornerRadius={5}
              > */}
<View style={{ height:50,marginStart:"15%",width: "90%", borderColor: "black",borderWidth:1,flexDirection:"row" ,borderRadius:10, marginTop:10,
    }} >
  <>
<Image
                /* source={{
                  uri:
                    "data:image/png;base64,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"
                }} */
                source={require("../../assets/icons8-mail.png")}
                style={{ width: 15, height: 15,alignSelf:'center',marginStart:10}}
              />
               <TextInput
                style={{width:"90%", alignSelf:'center', marginStart:10,textcolor:'gray'}}
                placeholder="Email Id"
                onChangeText={e => {
                  setEmail(e);
                  setErrortext(false)
                }}
                value={email}
              /></>
            </View>
{/* </CardView> */}

           {/*  <View style={styles.outline_editText1}>
              <Image
                source={{
                  uri:
                    "data:image/png;base64,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"
                }}
                style={{ width: 10, height: 15, marginTop: "7%" }}
              />

              {<OutlineInput style={{width:"250%"}}
              value={email}
              onChangeText={e => {
                setEmail(e);
               // setInvalidEmail(!invalidemail)
              }}
              label="Email ID"
              activeValueColor="#252c4a"
              activeBorderColor="#252c4a"
              activeLabelColor="#252c4a"
              passiveBorderColor="#DDD"
              passiveLabelColor="#252c4a"
              passiveValueColor="#252c4a"
            /> /}
              <TextInput
                style={styles.outline_editText}
                placeholder="Email Id"
                onChangeText={e => {
                  setEmail(e);
                }}
                value={email}
              />
            </View> */}
            {/* {errortext?<Text style={{color: 'red',
              textAlign: 'center',
              fontSize: 14,}}>Email Must be Valid Email Address</Text>
            // {setInvalidEmail(!invalidemail)}
           :""
          }  */}
          {errortext? (
            <Text style={{color: 'red',
           
            fontSize: 14,}}>Email must be valid</Text>
          ) :null}

            <Text style={{ color: "gray", fontSize: 16 ,marginStart:"15%",marginTop:5 }}>
              Password
            </Text>
            <View style={{ height:50,width: "95%", marginStart:"15%",borderColor: 'black', borderWidth:1,flexDirection:"row" ,borderRadius:10, marginTop:10}} >
  <>
<Image
               /*  source={{
                  uri:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEUAAAD////Y2NjKysrz8/Pv7+/d3d3i4uL5+fn6+vqtra3y8vKAgICmpqaqqqqYmJhcXFzR0dFoaGhLS0u4uLhXV1cxMTFmZmaKiookJCQ8PDwVFRW0tLS/v78ODg7o6OhJSUkdHR10dHQnJyd5eXmQkJA7Ozuenp6FhYUuLi4TExMTQ84JAAAIH0lEQVR4nO2deVsiORCHm0sbBAdFPAY5PBCZ7/8BF8d1Z4RKXanqpPfJ78993HS903RSSeqoOk2ovuiNdu/T+f6lqqqn/ex6vJvcrOtGnl25P2Hd284rWJvX3dWF9/N9CYe98SxA96Wn6eWZqw2ehL1ngu4/ynHXzwo3wu47E+9Tb5cDJ0OcCJfUjxPQ65WLKS6Eozc534fmHj9WB8KJDs+L0ZywdxsBeND03NggY8Lzuzi+D/2wNcmW8D6e76Bb05+qJeH5gwngQWNDh86Q8NKK76C9nZ9jRlgbfIF/a2RlmBVhd2ULeHAAjCwzIlxa8x30tjYxzYYwZpEP65cJognh1gWwqlYW840FIXeTpJCBM25A6AhYVb0MCMeegFUV7d9EE9o4amGtYqebWMIfzoBV9RB5VhVJOHIHrKqfKQm7DQBW1V06wnrRCGG1S0Y4bQYwbkKNIfSfZb60j9gvRhBeyay83o26df+g86ubybNws3ydhFBg4N3j6arWu98LRnhMQMhe6mej0HH22faJO8iir7VTTXjGNG2KOs/1zU/mOPdaQ9WEvGP7Db3/WTLfo3YnpSVkHTutLu3GquZKS5WENcemKfc6ac1aWJc6U5WEO4ZFkrNrjn/7ojNVRzhkGCTbu3Z/0SPqXqKOkPZmFlJHa0BPqhuVrSrCPulxLxT7Vnp2Vh1pqAjpr1B1RUYiTjWjagiHL5Qpyr0AiagZV0PYowxRzuudmvLHNY6NhvDawY5Pka6gYkzF/0Ot9lrn40M3xNiKuUZBSDlZUYExxPHys3xEBSGxcE3kI/6lC3zlX8k3+3LCcxxQtyz/EfE7lU9icsJH3ITou5QNOrz83lROiM+kMdPMp/DjH/nxsJiwxk9XDAJF8HVf7A6KCfElK/4VUg6F+EMUE+I+qdab+SZ0sh5LRxMTop/h7VA6HCQ0KkD8IYoJUdfRJiRtgD2ikv4jSgn76NONAtJCke+/JZ1qpIToNKA8STkRemoj/dSlhKhTuhUOFhLqNkm9QikhekJjMpP+tgrRu3Qs4d+j8XlmMZPYhC11fKWEWIz6g3CssLBfyko4lpQQ29xYRRMS3r1wLPHfI7IL0EZdQ6nF0r9HZBb02rlIR4ge59vlvKCEwrtSISF6CmUT8foh1HMSPkZIiLqMdqmENTahCc/T8yQcYok3Cd+hOpjgVNg+XzhUpoRI0OqbcKhMCZEtjLPn3RQhcpIhdX5zJQzGdYqDo3IlDOWoyLeg2RJ2usA25ulGPk6+hIfX+Pzt9Pnh+lKzAc2Z8ODb9C/6/+qir9xf501ooUJ4pEKYoQrhkQphhiqERyqEGaoQHqkQZqhCeKRCmKGEhJZXJg2JQ1ivu19CQzGuug1rzfk3pQjXEzS4JblmOyqnDSfsKUrnNa4NHgKCEXYby9WO1By7m0UIm0vVjheSABEmNK5s5ax58KwxRDjcpLZZqJ+heTVESOXF5KdQ2leA0Kvyk6cC0cMwYTM1S6wFpwzBhG1YBk8F33+DhB715ZoQeHsKEm5Sm6oUGEgPEXILQuQnyLeBCNvkzHwX5NpAhG1xR08FJWMAhEPzQp3NCfgQAUJWzYtMBcS8AYTr1GZGCJhqAMJ2OjSfAtyaQtgyFcJCmL8KYSHMX4WwEOavQlgI81chLIT5qxA6E65m49Gyt3wcz9xquSclvFv+KeQ2WDrdTyYkPGmKd+Zy7pyMcAVd7V2xi3nzlYpwBt+x1/bBSIkIw/UyzHvUpCHEKsdaTzhJCPGaLsqOpSElIcRLIAxsL7pSEFIlXWxbtiUgJLs2oAUixEpASNcHoArripSAkJG8y6g3z1bzhJz+MLIG3riaJ+Tkz1vGJzVPyKklw2m0wFXzhAxAUdMhSo0TLliE3GY6DDVOeMsiNNxiFEJzwl8sQkPvO9OZxtD5bp6QU1vNMsoszxWfbAgiUPOEnG4Nlt1o8/S8LffACQjpzmumYfMJCPdkgfGN5eNSnGJQL9E28yHJSRS+vei3/ySqmqGExjmAaU6EsRLR1n3LE53qh1tSmKfIpbqZmQZuZojmTgolu11bQDlXS7JBnVwJb0hPs+aJvlE6FcJCGKFCaKRCWAgjVAiNVAgLYYSyInRJx8+KEG9dZ/Zol58KLw/YJZf7tJcY3b5cIeAWoSnCl5NTxY3HY4CtNlRxwOPR1e7oKUTTXaWAI3aIkOpwrtP3H5DLx86tqeBUF2PxdyshoueuVlANHojQPK71X/0J9T5zCtaHrrogQpdZ7kPjz/PvgVudLW71FssryyPNx5N3x+IwUG87iLC9pT+gS/X/VZ2oPXQfCxJ6TTXeAiMhQULHD9FV/GpmTsuxu8DYFjimp12VPb+0AVlgwnYW3YP7oAbislIbqxIc2RIgbONsehd4WfB/djlicFagXHIoerB9c808QBIibF+6c6iqdzACtG3FE4NBLUHCtn2JwaLl4Shey1QWf4XDPJE4ZbekeQ+FU+QQwjY5NkhbdyzWvD3LPpZAhkbTGyfpuukJi0RGCduyi0KbeOAZEe34FJGPkCTsXKa2niEil5rKasm/8nU4tpNHmP3CT2Z00JlJeb9FpP0KmzDrb/H4zk5HmPHhIietipU/t86z38UbJzOO23fNOqbeQq9kOo6E0KXkUZzgnit6wtzm1C3bbj5hZ22fPKDVNesLFBMeGPPYTz0L+ISEnU7/R+rv8Wk7oM2MIDyoO3bIBGHq4RXrkmdF2OnUZ7sUTcvudl1NH1AN4YeG695kO3978T+uWrzczu8nyzVv9TvVP4lli/JixN2pAAAAAElFTkSuQmCC"
                }} */
                source={require("../../assets/icons8-unlock.png")}
                style={{ width: 15, height: 15,alignSelf:'center',marginLeft:5 }}
              />
               <TextInput
                                style={{width:"90%", alignSelf:'center', marginStart:10}}

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
                  
              position:"absolute",
              right:10,alignSelf:'center'
                  
                }}
                size={15}
                color="grey"
                onPress={() => setHidePass(!hidePass)}
              />
             </>
            </View>
            {/* <View style={styles.outline_editText2}>
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
            /> }

              <Image
                source={{
                  uri:
                    "data:image/png;base64,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"
                }}
                style={{ width: 10, height: 15, marginTop: "7%" }}
              />
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
 */}
 
            <View
              style={{
                flexDirection: "row",marginLeft:30
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
                <Text style={styles.forgot1}>Forgot Password?</Text>
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
                  color:"#fff",
                  alignItems:"center",margin:5                  
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
            
          
        </View>
        
        
      </View>
      <Text
          style={{
            alignSelf: "center",
            fontSize: 16,
            color:"#ffff",
            
            //color: "#000",
            marginTop: "5%"
          }}
        >
          Privacy Policy!
        </Text>
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
    margin: 10,
    height:40,
    width: "auto",
    backgroundColor: "orange",
    borderRadius:5,
    alignItems: "center",
    marginLeft: "15%",
    marginRight: "15%"     
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
    
    fontSize: 16,
    textAlignVertical:'center',
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "red"
  },
  image: {
    height: "20%",
    width: "60%",
    alignSelf: "center",
    padding: 15,
    justifyContent: "center",
    marginLeft: "15%",
    marginTop: "15%",marginRight: "15%",
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
    marginTop:7
  },
  forgot1: {    color: "#252c4a",
    fontSize: 14,
    textAlign:"center",
    alignSelf:"flex-end",
    marginTop:7,
    marginRight:5,
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
    // margin: 10,
    height: 40,
    width: "85%",
    borderColor: "black",
    borderWidth: 1,
    // marginBottom: 20,
    borderRadius: 5
  },
  outline_editText1: {
    flexDirection: "row",
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
    height: 4,
    backgroundColor: "#808080",
    width: "100%"
  }
});

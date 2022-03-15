import { StyleSheet, Text, View, TouchableOpacity, StatusBar,Image } from "react-native";

import React,{useState,useEffect} from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";


const Home = ({ navigation }) => {
 
  const [token, setToken] = useState("");
  const [data,setData]=useState([]);
  
  useEffect(() => {
    getUserFromStorage();
    
  }, [2000]);




  const getUserFromStorage = async () => {
    try {
      AsyncStorage.getItem("token",(error, value) => {
        if (error) {
          console.log(
            "Error in if condition getting user from async storage -> ",
            error
          );
        } else {
          if (value !== null) {
            setToken(value);
  
            console.log("hhhiririr->",token)
           // getUserDetails(value);
          } else {
            setToken(null);
          }
        }
        // 578461877 - any desk id
      });
    } catch (error) {
      console.log("Error in get user on splash -> ", error);
    }
  };
 
  
  const getApitoken = (token) =>{
        
    const params = new FormData();

   // console.log("hfhfhfhfhfh->",token);
      params.append("token",token);
      

      const url = "http://api.segwik-development.com/api/v2/transaction/list?quote_type=0";

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
            setData(result.data);
           //  navigation.navigate("Home");
            //run karo
          })
          .catch(error => {
            console.log("APi errro -> ", JSON.stringify(error));
          });
      }, 1000);



   }


   const renderItem = ({ item }) => {
    return (

     
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          //           navigation.navigate("ViewProductsDetails", { item }) ;
        }}
      >
        <Text style={{ fontSize: 10, padding: 5 }}>
          {item.quote_date}
        </Text>
        <View style={styles.separator} />

        <Text style={{ fontSize: 10, padding: 5 }}>
          {item.created_on}
        </Text>
        <View style={styles.separator} />

        <Text style={{ fontSize: 10, padding: 5 }}> 
          {item.firstname}
        </Text>
        <View style={styles.separator} />

        <Text style={{ fontSize: 10, padding: 5 }}>
          {item.lastname}
        </Text>
        <View style={styles.separator} />

        <Text style={{ fontSize: 10, padding: 5 }}>
          {item.email}
        </Text>
        <View style={styles.separator} />

        <Text style={{ fontSize: 10, padding: 5 }}>
          {item.company_name}
        </Text>
        <View style={styles.separator} />

        {/* <Text style={{ fontSize: 10, padding: 5 }}>
          {item.quote_date}
        </Text>
        <View style={styles.separator} />

        <Text style={{ fontSize: 10, padding: 5 }}>
          {item.quote_date}
        </Text>
        <View style={styles.separator} /> */}
        
      </TouchableOpacity>
    );
  };





  return (
    <View
      style={{
        flex: 1,
        marginTop:StatusBar.currentHeight,
      }}
    >
      <View
        style={{
          height: 56,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor:"#fff",
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
          style={{
            position: 'absolute',
            left: 15,
          }}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/1828/1828859.png',
            }}
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            color: "#fff",
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Home
        </Text>
        </View>
      
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

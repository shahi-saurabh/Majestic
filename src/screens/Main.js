import { StyleSheet, Text, View, TouchableOpacity,FlatList,Image,ScrollView} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React,{useState,useEffect} from "react";
import CommonToolbar from "../utils/CommonToolbar";
import QuotesDetails from "./QuotesDetails";



const Main = ({ navigation }) => {

  const [token, setToken] = useState("");
  const [data,setData]=useState([]);
  
  useEffect(() => {
    getUserFromStorage();

  }, []);




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
            getApitoken(value);
            console.log("token->",token)
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
    
 //   var timestemp = new Date( {item.})
//var formatted = timestemp.format("dd/mm/yyyy hh:MM:ss");
    return (
     
     /*  <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>{
        console.log("hello")
        navigation.navigate("QuotesDetails");
        console.log("world")
      }}
      > */

      

      
         <View style={{
        flexDirection:"row",
      }}>
        <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>{
        console.log("hello")
        AsyncStorage.setItem("quote_id", JSON.stringify(item.quote_id));
        navigation.navigate("QuotesDetails");
        console.log("world")
      }}
     style={{flexDirection:"row",}}  
      >
        
          <Text style={{ fontSize: 10, padding: 5 }}>
         {item.quote_id}
        </Text>

        <Text style={{ fontSize: 10, padding: 5 }}>

        
         {item.quote_date}
        </Text>
        

        <Text style={{ fontSize: 10, padding: 5 }}>
         {item.created_on}
        </Text>
        

        <Text style={{ fontSize: 10, padding: 5 }}>
         {item.firstname}
        </Text>
        

        <Text style={{ fontSize: 10, padding: 5 }}>
          {item.lastname}
        </Text>
        

        <Text style={{ fontSize: 10, padding: 5 }}>
         {item.email}
        </Text>
        

        <Text style={{ fontSize: 10, padding: 5 }}>
          {item?.company_name}
        </Text>

        <Text style={{ fontSize: 10, padding: 5 }}>
         {item?.total_amout} 
        </Text>

        <Text style={{ fontSize: 10, padding: 5 }}>
        {item?.quote_status} 
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
        
        </View>
       /*  </TouchableOpacity> */
      
      
    );
  };







  return (
    <View style={{
      flex:1
    }}>
<CommonToolbar
toolbarTitle={"Main Screen"}
navigation={navigation}
/>
       
     {/*  <TouchableOpacity
         onPress={() => {
          getApitoken(token);
          //on press
        }} 
        // style={{
        //   position: "absolute",
        //   left: 15
        // }}
      >
        
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/128/1828/1828859.png"
          }}
          style={{ height: 30, width: 30 }}
        />
      </TouchableOpacity> */}

   <View>
    <ScrollView
        horizontal={true}
      >
        
        <Text style={{ fontSize: 10, padding: 5 }}>
          Quote No
        </Text>


        <Text style={{ fontSize: 10, padding: 5 }}>
          Issue Date:
        </Text>
        

        <Text style={{ fontSize: 10, padding: 5 }}>
          created ON
        </Text>
        

        <Text style={{ fontSize: 10, padding: 5 }}>
          firstname
        </Text>
        

        <Text style={{ fontSize: 10, padding: 5 }}>
          lastname
        </Text>
        

        <Text style={{ fontSize: 10, padding: 5 }}>
          email 
        </Text>
        

        <Text style={{ fontSize: 10, padding: 5 }}>
         Organization: 
        </Text>

        <Text style={{ fontSize: 10, padding: 5 }}>
         Total: 
        </Text>
        <Text style={{ fontSize: 10, padding: 5 }}>
        Status: 
        </Text>
        
       

        </ScrollView>
      <ScrollView horizontal={true}>
      
      <FlatList
       data={data}
       renderItem={renderItem}
       keyExtractor={item => item.id +""}
// horizontal={true}
     /> 
       </ScrollView>
       </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  separator: {
    height: 2,
    backgroundColor: "#808080",
    width: "100%"
  }
});

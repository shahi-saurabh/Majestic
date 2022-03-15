import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CommonToolbar from "../utils/CommonToolbar";
import axios from "axios";

const QuotesDetails = ({ navigation }) => {
  const [token, setToken] = useState("");
  const [quotes, setQuotes] = useState("");
  const [data, setData] = useState([]);

  useEffect(
    () => {
      getUserFromStorage();
    },
    [quotes]
  );

  const getUserFromStorage = async () => {
    try {
      // setQuotes(AsyncStorage.getItem("quote_id"));
      // console.log("quotes_id ->", quotes);

      await AsyncStorage.getItem("quote_id", (err, value) => {
        if (err) {
        } else {
          if (value !== null) {
            setQuotes(value);
            console.log("quotes_id ->", value);
          }
        }
      });

      await AsyncStorage.getItem("token", (error, value) => {
        if (error) {
          console.log(
            "Error in if condition getting user from async storage -> ",
            error
          );
        } else {
          if (value !== null) {
            setToken(value);

            getApitoken(value);
            console.log("qoutes Details ->", value);
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

  const getApitoken = token => {
    const params = new FormData();

    // console.log("hfhfhfhfhfh->",token);
    /*  params.append("token",token);

      const api = "http://api.segwik-development.com/api/v2/editTransactions/"+quotes; 
const token = JSON.parse(sessionStorage.getItem('data'));
const token = user.data.id; //ake only token and save in token variable
axios.get(api , { headers: {"Authorization" : `Bearer ${token}`} })
.then(res => {
console.log(res.data);
},
.catch((error) => {
  console.log(error)
});  */

    var config = {
      method: "get",
      url: "http://api.segwik-development.com/api/v2/editTransactions/",
      headers: {
        'Authorization':
          `Bearer ${token}`
      }
    };

    const url =
      "http://api.segwik-development.com/api/v2/editTransactions/" + quotes
    console.log("Main url id -> ", url);

    axios(config)
      .then(response =>
        console.log("hii from detail", response.data)
        /* console.log(
          "response of get token api =-> ",
          response + ">> now data is " + response.data.data 
        )*/
      )
      .catch(error => console.log("error of get token api =-> ", error));
  };

  return (
    <View style={styles.container}>
      <CommonToolbar toolbarTitle={"QuotesDetails"} navigation={navigation} />
      <Text style={{ style: "bold", fontSize: 20 }}>Quotes Pete Romano </Text>

      <ScrollView
        style={{
          height: "25%",
          width: "90%",
          backgroundColor: "gray"
        }}
      >
        <Text>Pete Romano</Text>
        <Text
          style={{
            alignSelf: "flex-end"
          }}
        >
          Grand total
        </Text>
      </ScrollView>

      <Text style={{ style: "bold", fontSize: 20 }}>Details </Text>
      <View
        flexDirection="row"
        style={{
          width: "100%"
        }}
      >
        <Text style={{ fontSize: 10, padding: 5 }}>Item</Text>

        <Text style={{ fontSize: 10, padding: 5 }}>Unit Price</Text>

        <Text style={{ fontSize: 10, padding: 5 }}>Quantity</Text>

        <Text style={{ fontSize: 10, padding: 5 }}>Discount(%)</Text>

        <Text style={{ fontSize: 10, padding: 5 }}>Tax(%)</Text>

        <Text style={{ fontSize: 10, padding: 5 }}>SubTotal(s)</Text>
      </View>
      <ScrollView
        style={{
          height: "50%",
          width: "100%"
        }}
      >
        <Text>View 2</Text>
      </ScrollView>

      <TouchableOpacity alignSelf="flex-start">
        <Text style={{ backgroundColor: "blue", color: "white", width: "10%" }}>
          Add
        </Text>
      </TouchableOpacity>

      <Text
        style={{
          alignSelf: "flex-end"
        }}
      >
        Sub Total:
      </Text>

      <Text style={{ style: "bold", fontSize: 20 }}>Payment Terms </Text>

      <View
        flexDirection="row"
        style={{
          width: "100%"
        }}
      >
        <Text style={{ fontSize: 10, padding: 5 }}>Event Name</Text>

        <Text style={{ fontSize: 10, padding: 5 }}>Amount</Text>

        <Text style={{ fontSize: 10, padding: 5 }}>Milestone</Text>

        <Text style={{ fontSize: 10, padding: 5 }}>PaymentTerms</Text>
      </View>
      <ScrollView
        style={{
          height: "15%",
          width: "100%"
        }}
      >
        <Text>View 3</Text>
      </ScrollView>

      <TouchableOpacity alignSelf="flex-start">
        <Text style={{ backgroundColor: "blue", color: "white", width: "25%" }}>
          Invoice Event
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuotesDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

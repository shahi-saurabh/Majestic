import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  Button,
  StatusBar,
  Dimensions,
  Modal,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import CommonToolbar from "../utils/CommonToolbar";
//import ModalToolbar from "../utils/Globaldata";
import QuotesDetails from "./QuotesDetails";
import axios from "axios";

import SelectDropdown from "react-native-select-dropdown";
// import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
const ListFooter = () => {
  return (
    <ActivityIndicator
      size="large"
      color="orange"
      style={{
        padding: 15,
      }}
    />
  );
};

const Main = ({ navigation }) => {
  const [token, setToken] = useState("");
  const [data, setData] = useState([
    // {
    //   modified_on: null,
    //   quote_date: 1647422731,
    //   quote_status: null,
    //   total_amout: 46.82,
    //   quote_id: 41905,
    //   types: 0,
    //   company_id: null,
    //   account_id: 4935,
    //   created_on: 1647422731,
    //   customer_id: 1996499,
    //   firstname: "Lead One",
    //   lastname: "Check",
    //   email: "Leadxyz001@yopmail.com",
    //   company_name: null,
    // },
    // {
    //   modified_on: null,
    //   quote_date: 1647411127,
    //   quote_status: null,
    //   total_amout: 110,
    //   quote_id: 41901,
    //   types: 0,
    //   company_id: null,
    //   account_id: 4935,
    //   created_on: 1647411127,
    //   customer_id: 1996500,
    //   firstname: "Lead Two",
    //   lastname: "Check",
    //   email: "Leadxyz002@yopmail.com",
    //   company_name: null,
    // },
    // {
    //   modified_on: null,
    //   quote_date: 1647410090,
    //   quote_status: null,
    //   total_amout: 30,
    //   quote_id: 41900,
    //   types: 0,
    //   company_id: null,
    //   account_id: 4935,
    //   created_on: 1647410090,
    //   customer_id: 1996499,
    //   firstname: "Lead One",
    //   lastname: "Check",
    //   email: "Leadxyz001@yopmail.com",
    //   company_name: null,
    // },
    // {
    //   modified_on: null,
    //   quote_date: 1647086370,
    //   quote_status: null,
    //   total_amout: 1,
    //   quote_id: 41875,
    //   types: 0,
    //   company_id: null,
    //   account_id: 4935,
    //   created_on: 1647086370,
    //   customer_id: 1996494,
    //   firstname: "Shawn",
    //   lastname: "Jacob",
    //   email: "shawn@yopmail.com",
    //   company_name: null,
    // },
    // {
    //   modified_on: null,
    //   quote_date: 1647086328,
    //   quote_status: null,
    //   total_amout: 30.36,
    //   quote_id: 41874,
    //   types: 0,
    //   company_id: null,
    //   account_id: 4935,
    //   created_on: 1647086328,
    //   customer_id: 1996494,
    //   firstname: "Shawn",
    //   lastname: "Jacob",
    //   email: "shawn@yopmail.com",
    //   company_name: null,
    // },
    // {
    //   modified_on: null,
    //   quote_date: 1646890705,
    //   quote_status: null,
    //   total_amout: 0,
    //   quote_id: 41827,
    //   types: 0,
    //   company_id: null,
    //   account_id: 4935,
    //   created_on: 1646890705,
    //   customer_id: 1996494,
    //   firstname: "Shawn",
    //   lastname: "Jacob",
    //   email: "shawn@yopmail.com",
    //   company_name: null,
    // },
    // {
    //   modified_on: null,
    //   quote_date: 1647422731,
    //   quote_status: null,
    //   total_amout: 46.82,
    //   quote_id: 41905,
    //   types: 0,
    //   company_id: null,
    //   account_id: 4935,
    //   created_on: 1647422731,
    //   customer_id: 1996499,
    //   firstname: "Lead One",
    //   lastname: "Check",
    //   email: "Leadxyz001@yopmail.com",
    //   company_name: null,
    // },
    // {
    //   modified_on: null,
    //   quote_date: 1647411127,
    //   quote_status: null,
    //   total_amout: 110,
    //   quote_id: 41901,
    //   types: 0,
    //   company_id: null,
    //   account_id: 4935,
    //   created_on: 1647411127,
    //   customer_id: 1996500,
    //   firstname: "Lead Two",
    //   lastname: "Check",
    //   email: "Leadxyz002@yopmail.com",
    //   company_name: null,
    // },
    // {
    //   modified_on: null,
    //   quote_date: 1647410090,
    //   quote_status: null,
    //   total_amout: 30,
    //   quote_id: 41900,
    //   types: 0,
    //   company_id: null,
    //   account_id: 4935,
    //   created_on: 1647410090,
    //   customer_id: 1996499,
    //   firstname: "Lead One",
    //   lastname: "Check",
    //   email: "Leadxyz001@yopmail.com",
    //   company_name: null,
    // },
    // {
    //   modified_on: null,
    //   quote_date: 1647086370,
    //   quote_status: null,
    //   total_amout: 1,
    //   quote_id: 41875,
    //   types: 0,
    //   company_id: null,
    //   account_id: 4935,
    //   created_on: 1647086370,
    //   customer_id: 1996494,
    //   firstname: "Shawn",
    //   lastname: "Jacob",
    //   email: "shawn@yopmail.com",
    //   company_name: null,
    // },
    // {
    //   modified_on: null,
    //   quote_date: 1647086328,
    //   quote_status: null,
    //   total_amout: 30.36,
    //   quote_id: 41874,
    //   types: 0,
    //   company_id: null,
    //   account_id: 4935,
    //   created_on: 1647086328,
    //   customer_id: 1996494,
    //   firstname: "Shawn",
    //   lastname: "Jacob",
    //   email: "shawn@yopmail.com",
    //   company_name: null,
    // },
    // {
    //   modified_on: null,
    //   quote_date: 1646890705,
    //   quote_status: null,
    //   total_amout: 0,
    //   quote_id: 41827,
    //   types: 0,
    //   company_id: null,
    //   account_id: 4935,
    //   created_on: 1646890705,
    //   customer_id: 1996494,
    //   firstname: "Shawn",
    //   lastname: "Jacob",
    //   email: "shawn@yopmail.com",
    //   company_name: null,
    // },
    // {
    //   modified_on: null,
    //   quote_date: 1647422731,
    //   quote_status: null,
    //   total_amout: 46.82,
    //   quote_id: 41905,
    //   types: 0,
    //   company_id: null,
    //   account_id: 4935,
    //   created_on: 1647422731,
    //   customer_id: 1996499,
    //   firstname: "Lead One",
    //   lastname: "Check",
    //   email: "Leadxyz001@yopmail.com",
    //   company_name: null,
    // },
    // {
    //   modified_on: null,
    //   quote_date: 1647411127,
    //   quote_status: null,
    //   total_amout: 110,
    //   quote_id: 41901,
    //   types: 0,
    //   company_id: null,
    //   account_id: 4935,
    //   created_on: 1647411127,
    //   customer_id: 1996500,
    //   firstname: "Lead Two",
    //   lastname: "Check",
    //   email: "Leadxyz002@yopmail.com",
    //   company_name: null,
    // },
    // {
    //   modified_on: null,
    //   quote_date: 1647410090,
    //   quote_status: null,
    //   total_amout: 30,
    //   quote_id: 41900,
    //   types: 0,
    //   company_id: null,
    //   account_id: 4935,
    //   created_on: 1647410090,
    //   customer_id: 1996499,
    //   firstname: "Lead One",
    //   lastname: "Check",
    //   email: "Leadxyz001@yopmail.com",
    //   company_name: null,
    // },
    // {
    //   modified_on: null,
    //   quote_date: 1647086370,
    //   quote_status: null,
    //   total_amout: 1,
    //   quote_id: 41875,
    //   types: 0,
    //   company_id: null,
    //   account_id: 4935,
    //   created_on: 1647086370,
    //   customer_id: 1996494,
    //   firstname: "Shawn",
    //   lastname: "Jacob",
    //   email: "shawn@yopmail.com",
    //   company_name: null,
    // },
    // {
    //   modified_on: null,
    //   quote_date: 1647086328,
    //   quote_status: null,
    //   total_amout: 30.36,
    //   quote_id: 41874,
    //   types: 0,
    //   company_id: null,
    //   account_id: 4935,
    //   created_on: 1647086328,
    //   customer_id: 1996494,
    //   firstname: "Shawn",
    //   lastname: "Jacob",
    //   email: "shawn@yopmail.com",
    //   company_name: null,
    // },
    // {
    //   modified_on: null,
    //   quote_date: 1646890705,
    //   quote_status: null,
    //   total_amout: 0,
    //   quote_id: 41827,
    //   types: 0,
    //   company_id: null,
    //   account_id: 4935,
    //   created_on: 1646890705,
    //   customer_id: 1996494,
    //   firstname: "Shawn",
    //   lastname: "Jacob",
    //   email: "shawn@yopmail.com",
    //   company_name: null,
    // },
    // {
    //   modified_on: null,
    //   quote_date: 1647422731,
    //   quote_status: null,
    //   total_amout: 46.82,
    //   quote_id: 41905,
    //   types: 0,
    //   company_id: null,
    //   account_id: 4935,
    //   created_on: 1647422731,
    //   customer_id: 1996499,
    //   firstname: "Lead One",
    //   lastname: "Check",
    //   email: "Leadxyz001@yopmail.com",
    //   company_name: null,
    // },
    // {
    //   modified_on: null,
    //   quote_date: 1647411127,
    //   quote_status: null,
    //   total_amout: 110,
    //   quote_id: 41901,
    //   types: 0,
    //   company_id: null,
    //   account_id: 4935,
    //   created_on: 1647411127,
    //   customer_id: 1996500,
    //   firstname: "Lead Two",
    //   lastname: "Check",
    //   email: "Leadxyz002@yopmail.com",
    //   company_name: null,
    // },
    // {
    //   modified_on: null,
    //   quote_date: 1647410090,
    //   quote_status: null,
    //   total_amout: 30,
    //   quote_id: 41900,
    //   types: 0,
    //   company_id: null,
    //   account_id: 4935,
    //   created_on: 1647410090,
    //   customer_id: 1996499,
    //   firstname: "Lead One",
    //   lastname: "Check",
    //   email: "Leadxyz001@yopmail.com",
    //   company_name: null,
    // },
    // {
    //   modified_on: null,
    //   quote_date: 1647086370,
    //   quote_status: null,
    //   total_amout: 1,
    //   quote_id: 41875,
    //   types: 0,
    //   company_id: null,
    //   account_id: 4935,
    //   created_on: 1647086370,
    //   customer_id: 1996494,
    //   firstname: "Shawn",
    //   lastname: "Jacob",
    //   email: "shawn@yopmail.com",
    //   company_name: null,
    // },
    // {
    //   modified_on: null,
    //   quote_date: 1647086328,
    //   quote_status: null,
    //   total_amout: 30.36,
    //   quote_id: 41874,
    //   types: 0,
    //   company_id: null,
    //   account_id: 4935,
    //   created_on: 1647086328,
    //   customer_id: 1996494,
    //   firstname: "Shawn",
    //   lastname: "Jacob",
    //   email: "shawn@yopmail.com",
    //   company_name: null,
    // },
    // {
    //   modified_on: null,
    //   quote_date: 1646890705,
    //   quote_status: null,
    //   total_amout: 0,
    //   quote_id: 41827,
    //   types: 0,
    //   company_id: null,
    //   account_id: 4935,
    //   created_on: 1646890705,
    //   customer_id: 1996494,
    //   firstname: "Shawn",
    //   lastname: "Jacob",
    //   email: "shawn@yopmail.com",
    //   company_name: null,
    // },
    // {
    //   modified_on: null,
    //   quote_date: 1647422731,
    //   quote_status: null,
    //   total_amout: 46.82,
    //   quote_id: 41905,
    //   types: 0,
    //   company_id: null,
    //   account_id: 4935,
    //   created_on: 1647422731,
    //   customer_id: 1996499,
    //   firstname: "Lead One",
    //   lastname: "Check",
    //   email: "Leadxyz001@yopmail.com",
    //   company_name: null,
    // },
    // {
    //   modified_on: null,
    //   quote_date: 1647411127,
    //   quote_status: null,
    //   total_amout: 110,
    //   quote_id: 41901,
    //   types: 0,
    //   company_id: null,
    //   account_id: 4935,
    //   created_on: 1647411127,
    //   customer_id: 1996500,
    //   firstname: "Lead Two",
    //   lastname: "Check",
    //   email: "Leadxyz002@yopmail.com",
    //   company_name: null,
    // },
    // {
    //   modified_on: null,
    //   quote_date: 1646890705,
    //   quote_status: null,
    //   total_amout: 0,
    //   quote_id: 41827,
    //   types: 0,
    //   company_id: null,
    //   account_id: 4935,
    //   created_on: 1646890705,
    //   customer_id: 1996494,
    //   firstname: "Shawn",
    //   lastname: "Jacob",
    //   email: "shawn@yopmail.com",
    //   company_name: null,
    // },
  ]);



  const [visible, setVisible] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [start, setStart] = useState(0);
  const [length, setLength] = useState("");
  const weightDropdown = ["1", "5 ", "10 ", "20 "];
  const [addNew, setAddNew] = useState([]);
  const [variationDropDown2 , setVaritionDropDown2] = useState(['Select...']);
  const [ProductData, setProductData] = useState([]);

  const [selectedProductID, setSelectedProductID] = useState('')
const [attributeColor, setAttributeColor] = useState(['Select...'])
const [attributeColorPresent, setAttributeColorPresent] = useState(false)

const [attributeSize, setAttributeSize] = useState(['Select...'])
const [attributeSizePresent, setAttributeSizePresent] = useState(false)

  useEffect(
   
    async () => {
      
      await getUserFromStorage().then(() => {
      callWithToken1();
      });
      callWithToken1();
    },
    [token]

    /*   async () => {
    //let { quoteIdFromItem } = route.params;
    //console.log(" <<>> " + quoteIdFromItem, "token from item");
    //setQuotes(quoteIdFromItem);
    // setQuotes(quoteIdFromItem);
    //getUserFromStorage();
    //await getUserFromStorage().then(() => {
    //  getApitoken(quoteIdFromItem, "");
    //});
    //(quoteIdFromItem, "");
  },
  [token] */
  );
  const getUserFromStorage = async () => {
    try {
      AsyncStorage.getItem("token", (error, value) => {
        if (error) {
          console.log(
            "Error in if condition getting user from async storage -> ",
            error
          );
        } else {
          if (value !== null) {
            setToken(value);
            getApitoken(value);

            // console.log("token->", token);
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

  axios.interceptors.request.use(
    (config) => {
      config.headers.authorization = `Bearer ${token}`;
      console.log("config object -> ", config);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  const baseURL3 =
    "http://api.segwik2dev.com/api/v2/productwithvariations/list";

  const authAxios2 = axios.create({
    baseURL: baseURL3,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const callWithToken1 = async () => {
    /* const url =
      "http://api.segwik-development.com/api/v2/editTransactions/41874";
    console.log("coming id  =->? ", id + " >>>>" + value); */
    authAxios2
      .get(`http://api.segwik2dev.com/api/v2/productwithvariations/list`)
      .then((response) => {
        //console.log("Api with product list-> ", response.data.data);
        // setData(response.data.data);
        //setDetails(response.data.details);
        //setInvoices(response.data.invoicing_event_list);
        // GlobalData(response.data.data);

        setProductData(response.data.data.products);
        //console.log(response.data.data.products);
        
      })
      .catch((error) => {
        console.log("Error -> ", error);
      });
  };

  const refinedProduct = () =>{
  console.log("refined product =-- entered ",'refined product ')
    
 ProductData.map((item, index) => {
  console.log("hello data recommedned ",item.prod_title)
  variationDropDown2.push(item.prod_title)
 })

  }



  
axios.interceptors.request.use(
  (config) => {
    config.headers.authorization = `Bearer ${token}`;
    console.log("config object -> ", config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
const baseURL21 =
  `http://api.segwik-development.com/api/v2/getVariationByProductId?prod_id=3198&search=[]&attribute_title="Color"`;

const authAxios21 = axios.create({
  baseURL: baseURL21,
  headers: {
    Authorization: `Bearer ${token}`
  }
});



const callWithToken21 = async (selectedColor) => {
  /* const url =
    "http://api.segwik-development.com/api/v2/editTransactions/41874";
  console.log("coming id  =->? ", id + " >>>>" + value); */
  authAxios21
    .post(`http://api.segwik-development.com/api/v2/getVariationByProductId?prod_id=${selectedProductID}&search=[${selectedColor}]&attribute_title=Size`)
    .then((response) => {
      if(response.data.success === true){
        console.log("Api with product list-> callWithToken12 fun=-> ", response.data.data.attribute_value);
        
        setAttributeSize(response.data.data.attribute_value)
        if(response.data.data.attribute_value.length > 0){
          setAttributeSizePresent(true)
        }
      }
      // setData(response.data.data);
      //setDetails(response.data.details);
      //setInvoices(response.data.invoicing_event_list);
      // GlobalData(response.data.data);
      // setProductData(response.data.data.products);
    })
    .catch((error) => {
      console.log("Error -> ", error);
    });
};
  const getSelectedItemProductId = (selected) => {
    ProductData.map((item, index) =>{
      if(item.prod_title === selected) {
        console.log(`Selected dropdown =-> ${item.prod_title} and ${item.product_id} `)
        setSelectedProductID(item.product_id)
        callWithToken12(item.product_id)
      }
    })
  }

  axios.interceptors.request.use(
    (config) => {
      config.headers.authorization = `Bearer ${token}`;
      console.log("config object -> ", config);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  const baseURL13 =
    `http://api.segwik-development.com/api/v2/getVariationByProductId?prod_id=3198&search=[]&attribute_title="Color"`;
  
  const authAxios12 = axios.create({
    baseURL: baseURL13,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  
  
  
  const callWithToken12 = async (prod_id) => {
    /* const url =
      "http://api.segwik-development.com/api/v2/editTransactions/41874";
    console.log("coming id  =->? ", id + " >>>>" + value); */
    authAxios12
      .post(`http://api.segwik-development.com/api/v2/getVariationByProductId?prod_id=${prod_id}&search=[]&attribute_title=Color`)
      .then((response) => {
        if(response.data.success === true){
          console.log("Api with product list-> callWithToken12 fun=-> ", response.data.data.attribute_value);
          
          setAttributeColor(response.data.data.attribute_value)
          if(response.data.data.attribute_value.length > 0){
            setAttributeColorPresent(true)
          }else{
            setAttributeColorPresent(false);
             setAttributeSizePresent(false);
  
          }
  
  
        }
        // setData(response.data.data);
        //setDetails(response.data.details);
        //setInvoices(response.data.invoicing_event_list);
        // GlobalData(response.data.data);
       // setProductData(response.data.data.products);
      })
      .catch((error) => {
        console.log("Error -> ", error);
      });
  };

  const handleAllOnEndReached = () => {
    if (loadingMore) {
      getApitoken(token);
    }
  };

  const getApitoken = (token) => {
    const params = new FormData();

    // console.log("hfhfhfhfhfh->",token);
    params.append("token", token);
    params.append("length", "20");
    params.append("start", start);

    const url =
      "http://api.segwik-development.com/api/v2/transaction/list?quote_type=0";
    setLoadingMore(true);

    setTimeout(() => {
      fetch(url, {
        method: "POST",
        body: params,
        redirect: "follow",
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(
            "SAURABH CALLING API RESULT.DATA -> ",
            JSON.stringify(result.data)
          );
          //navigation.navigate("Drawer");
          setData([...data, ...result.data]);
          //setData(result.data);
          setStart(start + 20);

          //  navigation.navigate("Home");
          //run karo
        })
        .catch((error) => {
          console.log("APi errro -> ", JSON.stringify(error));
        })
        .finally(() => {
          setLoadingMore(false);
        })
        .finally(() => {
          setLoadingMore.bind(undefined, false);
        });
    }, 1000);
  };

  const renderScrollView2 = () => {
    return (
      <View style={{ flexDirection: "row" }}>
        <Text
          style={[
            styles.boxBorder,
            {
              width: 100,
              textAlignVertical: "center",
              backgroundColor: "#fff",
            },
          ]}
        >
          Quote No.
        </Text>

        <Text
          style={[
            styles.boxBorder,
            {
              width: 120,
              textAlignVertical: "center",
              backgroundColor: "#fff",
            },
          ]}
        >
          Issue Date
        </Text>
        <Text
          style={[
            styles.boxBorder,
            {
              width: 100,
              textAlignVertical: "center",
              backgroundColor: "#fff",
            },
          ]}
        >
          Created On
        </Text>
        <Text
          style={[
            styles.boxBorder,
            {
              width: 120,
              textAlignVertical: "center",
              backgroundColor: "#fff",
            },
          ]}
        >
          First Name
        </Text>
        {/* <Text
          style={[
            styles.boxBorder,
            { width: 120, textAlignVertical: "center" }
          ]}
        >
         Tax
        </Text>
      
        <Text
          style={[
            styles.boxBorder,
            { width: 120, textAlignVertical: "center" }
          ]}
        >
        Sub Total
        </Text>S

 */}
        <Text
          style={[
            styles.boxBorder,
            {
              width: 120,
              textAlignVertical: "center",
              backgroundColor: "#fff",
            },
          ]}
        >
          Last Name
        </Text>

        <Text
          style={[
            styles.boxBorder,
            {
              width: 120,
              textAlignVertical: "center",
              backgroundColor: "#fff",
            },
          ]}
        >
          Email
        </Text>

        <Text
          style={[
            styles.boxBorder,
            {
              width: 120,
              textAlignVertical: "center",
              backgroundColor: "#fff",
            },
          ]}
        >
          Organization
        </Text>

        <Text
          style={[
            styles.boxBorder,
            {
              width: 120,
              textAlignVertical: "center",
              backgroundColor: "#fff",
            },
          ]}
        >
          Total
        </Text>

        <Text
          style={[
            styles.boxBorder,
            {
              width: 120,
              textAlignVertical: "center",
              backgroundColor: "#fff",
            },
          ]}
        >
          Status
        </Text>
      </View>
    );
  };

  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }) => {
    const paddingToBottom = 10;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  const renderItem = ({ item }) => {
    console.log("DATA ARRAY LENGTH -> ", data.length);
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

      <View
        style={{
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            console.log("hello");
            // AsyncStorage.setItem("quote_id", JSON.stringify(item.quote_id));
            // navigation.navigate("Home", { quoteId: item.quote_id });
            navigation.navigate("QuotesDetails", {
              quoteIdFromItem: item.quote_id,
            });
            console.log("world");
          }}
          style={{ flexDirection: "row" }}
        >
          <Text style={[styles.boxInnerBorder, { width: 100 }]}>
            {item.quote_id}
          </Text>

          <Text style={[styles.boxInnerBorder, { width: 120 }]}>
            {item.quote_date}
          </Text>

          <Text style={[styles.boxInnerBorder, { width: 100 }]}>
            {item.created_on}
          </Text>

          <Text style={[styles.boxInnerBorder, { width: 120 }]}>
            {item.firstname}
          </Text>

          <Text style={[styles.boxInnerBorder, { width: 120 }]}>
            {item.lastname}
          </Text>

          <Text style={[styles.boxInnerBorder, { width: 120 }]}>
            {item.email}
          </Text>

          <Text style={[styles.boxInnerBorder, { width: 120 }]}>
            {item?.company_name}
          </Text>

          <Text style={[styles.boxInnerBorder, { width: 120 }]}>
            {item?.total_amout}
          </Text>

          <Text style={[styles.boxInnerBorder, { width: 120 }]}>
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
    <View
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
      }}
    >
      <CommonToolbar toolbarTitle={"Quotes Lists"} navigation={navigation} />

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
        {/*  <TextInput
                    style={{width:"90%",height:"7%",alignSelf:'center',borderColor: 'black', borderWidth:1,}}
           placeholder="start"
           onChangeText={e => {setStart(e)}}
          >


          </TextInput>
          style={{width:"90%",height:"7%",alignSelf:'center',borderColor: 'black', borderWidth:1,}}

          <TextInput
           placeholder="length"
           onChangeText={e => {setLength(e)}}
          >


          </TextInput>

               
          <TouchableOpacity
              style={styles.btnLogin}
              activeOpacity={0.9}
              onPress={() =>{}}
            >
              <Text
                style={{ fontSize: 16,fontWeight: "bold", color: "white",backgroundColor:"Orange" }}
              >
                Fetch Data
              </Text>
            </TouchableOpacity> */}

        <TouchableOpacity
          style={styles.btnLogin}
          activeOpacity={0.9}
          onPress={() => {
            setVisible(true);
          refinedProduct();
          }}
        >
          
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "white",
              backgroundColor: "orange",
              alignSelf: "flex-end",
            }}
          >
            Add Quotes
          </Text>
        </TouchableOpacity>

        <Modal
          animationType={"slide"}
          transparent={true}
          visible={visible}
          onRequestClose={() => {
            setVisible(false);
            console.log("Modal has been closed.");
          }}
        >
          <View style={styles.modalBackground}>
            <View style={styles.activityIndicatorWrapper}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.toolbar}>
                  <Text
                    style={{
                      marginLeft: 20,
                      color: "#fff",
                      width: "30%",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "center",
                    }}
                  >
                    ADD Quotes
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                      setVisible(false);
                    }}
                  >
                    <Image
                      source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgutRDlMRXvJnyyQ5G1F-U4MRlLjSbOumTaym_WtbNpKK0MCDQmbLQVWdPco93_lpd2oc&usqp=CAU",
                      }}
                      style={styles.back}
                    />
                  </TouchableOpacity>
                  {/*  <Image
            source={require("../../../../assets/icon.png")}
            style={styles.logo}
          />{/*  */}
                  {/* <Text style={styles.user_id}>Hi, {user.data.name}</Text> */}

                  {/* <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate("Search");
              // navigation.navigate("ViewProducts");
            }}
          >
            <Image
              source={{
                uri: "https://img.icons8.com/ios-glyphs/2x/search.png",
              }}
              style={styles.search}
            />
            
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              // navigation.navigate("ViewProductsDetails");
              // navigation.navigate("Login");
              // navigation.navigate("SignUp");
              navigation.navigate("Notifications");
              // navigation.navigate("Filter");
              // navigation.navigate("OrderHistory");
              // navigation.navigate("OrderHistoryDetails");
              // navigation.navigate("PaymentMethod");
              // navigation.navigate("SelectAddress");
              // navigation.navigate("PrivatePolicy");
              // navigation.navigate("TermsAndConditions");
              // navigation.navigate("ViewProducts");
              // navigation.navigate("ViewProductsDetails");
              // navigation.navigate("AddAddressFragment");
              // navigation.navigate("GetAddressFragment");
              // navigation.navigate("AllCategories");
              // navigation.navigate("UserDetails");
            }}
          >
            <Image
              source={{
                uri: "https://img.icons8.com/material-rounded/2x/appointment-reminders.png",
              }}
              style={styles.notification}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate("Cart");
            }}
          >
            <Image
              source={{
                uri: "https://img.icons8.com/material-rounded/2x/shopping-cart.png",
              }}
              style={styles.cart}
            />
          </TouchableOpacity> */}
                </View>
              </View>

              <ScrollView>
                <View style={{ flexDirection: "row",margin:"1%"}}>
                  <Text
                    style={{
                      color: "gray",
                      width: "auto",
                      fontSize: 20,
                      //alignSelf: "center",
                      marginLeft: "5%",
                    }}
                  >
                    Contact
                  </Text>

                  <Text
                    style={{
                      color: "gray",
                      width: "auto",
                      fontSize: 20,
                      //alignSelf: "center",
                      marginLeft: "35%",
                    }}
                  >
                    Organization
                  </Text>
                </View>

                <View style={{ flexDirection: "column", padding: 5 }}>
                  <View style={{ flexDirection: "row", marginLeft: "3%" }}>
                    <SelectDropdown
                      data={weightDropdown}
                      onSelect={(selectedItem, index) => {}}
                      buttonStyle={{
                        borderRadius: 10,
                        borderWidth: 0.5,
                        borderColor: "#000000",
                        width: "45%",
                        margin: 10,
                        //marginLeft:,
                      }}
                      defaultButtonText="Select..."
                      buttonTextStyle={{
                        textAlign: "left",
                        fontSize: 16,
                      }}
                      dropdownIconPosition="right"
                      renderDropdownIcon={() => {
                        return (
                          <View>
                            <Image
                              source={{
                                uri: "https://cdn-icons-png.flaticon.com/128/57/57055.png",
                              }}
                              style={{
                                height: 10,
                                width: 10,
                                marginEnd: 10,
                              }}
                            />
                          </View>
                        );
                      }}
                    />

                    <SelectDropdown
                      data={weightDropdown}
                      onSelect={(selectedItem, index) => {}}
                      buttonStyle={{
                        borderRadius: 10,
                        borderWidth: 0.5,
                        borderColor: "#000000",
                        width: "45%",
                        margin: 10,
                      }}
                      defaultButtonText="Select..."
                      buttonTextStyle={{
                        textAlign: "left",
                        fontSize: 16,
                      }}
                      dropdownIconPosition="right"
                      renderDropdownIcon={() => {
                        return (
                          <View>
                            <Image
                              source={{
                                uri: "https://cdn-icons-png.flaticon.com/128/57/57055.png",
                              }}
                              style={{
                                height: 10,
                                width: 10,
                                marginEnd: 10,
                              }}
                            />
                          </View>
                        );
                      }}
                    />
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      color: "gray",
                      width: "auto",
                      fontSize: 20,
                      //alignSelf: "center",
                      marginLeft: "5%",
                    }}
                  >
                    Item
                  </Text>
{/*

*/}
                  {addNew.map((item, index) => {
                    return (
                      <View
                        style={
                          // width:'80%',
                          {
                            color: "gray",
                            //width: "auto",
                            fontSize: 20,

                            //alignSelf: "center",
                            marginLeft: "3%",
                          }
                          // backgroundColor:"#fff"
                        }
                      >
                        {/* <SelectDropdown
                          data={weightDropdown}
                          onSelect={(selectedItem, index) => {}}
                          buttonStyle={{
                            borderRadius: 10,
                            borderWidth: 0.5,
                            borderColor: "#000000",

                            margin: 10,
                          }}
                          defaultButtonText="Select..."
                          buttonTextStyle={{
                            textAlign: "left",
                            fontSize: 16,
                          }}
                          dropdownIconPosition="right"
                          renderDropdownIcon={() => {
                            return (
                              <View>
                                <Image
                                  source={{
                                    uri: "https://cdn-icons-png.flaticon.com/128/57/57055.png",
                                  }}
                                  style={{
                                    height: 10,
                                    width: 10,
                                    marginEnd: 10,
                                  }}
                                />
                              </View>
                            );
                          }}
                        /> */}

<SelectDropdown
      data={variationDropDown2}
      onSelect={(selectedItem, index) => {
      console.log("SELECTED ITEM IN DROPWOWN => ",selectedItem +"index -> "+index)
      getSelectedItemProductId(selectedItem)
      }}
      buttonStyle={{
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: "#000000",
        width: '50%',
        // marginLeft: "-2%",
        // padding:"4%",
      }}
      defaultButtonText="Select..."
      buttonTextStyle={{
        textAlign: 'left',
        fontSize: 16,
        color:'#000000',

      }}
      dropdownIconPosition="right"
      renderDropdownIcon={() => {
        return (
          <View>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/57/57055.png',
              }}
              style={{
                height: 10,
                width: 10,
                marginEnd: 10,
              }}
            />
          </View>
        );
      }}
    />
         {
           attributeColorPresent ? (
             <>
             <Text style={{
               color: "gray",
               fontSize: 16,
               alignSelf: "flex-start",
               marginLeft: "5%"
             }}
              
             >Colors</Text>
             <SelectDropdown
      data={attributeColor}
      onSelect={(selectedItem, index) => {
      // console.log("SELECTED ITEM IN DROPWOWN => ",selectedItem +"index -> "+index)
      // getSelectedItemProductId(selectedItem)
      callWithToken21(selectedItem)
      }}
      buttonStyle={{
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: "#000000",
        width: '50%',
        // marginLeft: "-2%",
        // padding:"4%","
      }}
      defaultButtonText="Select..."
      buttonTextStyle={{
        textAlign: 'left',
        fontSize: 16,
      }}
      dropdownIconPosition="right"
      renderDropdownIcon={() => {
        return (
          <View>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/57/57055.png',
              }}
              style={{
                height: 10,
                width: 10,
                marginEnd: 10,
              }}
            />
          </View>
        );
      }}
    />
             </>
           ) :null
         } 
{
  attributeSizePresent ? (
    <>
    <Text
    
    style={{
      color: "gray",
      fontSize: 16,
      alignSelf: "flex-start",
      marginLeft: "5%"
    }}>Size</Text>
    <SelectDropdown
      data={attributeSize}
      onSelect={(selectedItem, index) => {
      console.log("SELECTED ITEM IN DROPWOWN => ",selectedItem +"index -> "+index)
      // getSelectedItemProductId(selectedItem)
      }}
      buttonStyle={{
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: "#000000",
        width: '50%',
        // marginLeft: "-2%",
        // padding:"4%",
      }}
      defaultButtonText="Select..."
      buttonTextStyle={{
        textAlign: 'left',
        fontSize: 16,
      }}
      dropdownIconPosition="right"
      renderDropdownIcon={() => {
        return (
          <View>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/57/57055.png',
              }}
              style={{
                height: 10,
                width: 10,
                marginEnd: 10,
              }}
            />
          </View>
        );
      }}
    />
    </>
  ) :null
}




                      </View>
                    );
                  })}

                  <TouchableOpacity
                    onPress={() => {
                      setAddNew([...addNew, {}]);
                      setAttributeColorPresent(false);
                      setAttributeSizePresent(false);
                      console.log("add new Array length -> ", addNew.length);
                    }}
                  >
                    <Image
                      source={{
                        uri: "data:image/png;base64,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",
                      }}
                      style={{
                        height: 30,
                        width: 30,
                        alignSelf: "center",
                        marginLeft: "70%",
                        padding: 15,
                      }}
                    />
                  </TouchableOpacity>

                  <Text
                    style={{
                      color: "gray",
                      width: "auto",
                      fontSize: 20,
                      //alignSelf: "center",
                      marginLeft: "5%",
                    }}
                  >
                    Description
                  </Text>

                  {/*   <TextInput
            placeholder="DesCription"
        style={{borderColor:"black",}}
         
        //value={this.state.value}
        onChangeText={{}}
        multiline={true}
        numberOfLines={4}
   /> */}
                  <TextInput
                    style={{
                      width: "90%",
                      height: "15%",
                      alignSelf: "center",
                      borderColor: "black",
                      borderWidth: 1,
                    }}
                    placeholder="Description"
                    onChangeText={(e) => {}}
                    multiline={true}
                    numberOfLines={4}
                    //value={email}
                  />

                  <TouchableOpacity >
                    <Text
                      style={{
                        color: "orange",
                        fontSize: 16,
                        fontWeight: "bold",
                        alignSelf: "center",
                      }}
                    >
                      Add Quotes
                    </Text>
                  </TouchableOpacity>
                  {/* <Text>
                  The standard Lorem Ipsum passage, used since the 1500s "Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  
                  ever undertakes laborious physical exercise, except to obtain
     
                  neces
                </Text> */}
                </View>
              </ScrollView>
            </View>
          </View>
        </Modal>

        {/* <ScrollView
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
       </ScrollView> */}

        <ScrollView
          style={{
            margin: 15,
            bottom: 10,
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          onScroll={({ nativeEvent }) => {
            if (isCloseToBottom(nativeEvent)) {
              // setVisible(false);
              // setChecked(true);
              // setLoadingMore(true);
            }
          }}
        >
          {/*  <FlatList
       data={data}
       renderItem={renderItem}
       keyExtractor={item => item.id +""}
// horizontal={true}    
        onEndReached={() => {
      handleAllOnEndReached();
      }}
      ListFooterComponent={() => (loadingMore ? <ListFooter /> : null)}
  
     />  */}
          <FlatList
            ListHeaderComponent={renderScrollView2()}
            onScroll={({ nativeEvent }) => {
              if (isCloseToBottom(nativeEvent)) {
                // setVisible(false);
                // setChecked(true);
                setLoadingMore(true);
              }
            }}
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            stickyHeaderIndices={[0]}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              handleAllOnEndReached();
            }}
            ListFooterComponent={() => (loadingMore ? <ListFooter /> : null)}
          />
          {/* </View> */}
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
    width: "100%",
  },
  modalBackground: {
    flex: 1,
    flexDirection: "column",

    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#00000040",
  },

  activityIndicatorWrapper: {
    backgroundColor: "#FFFFFF",
    height: Dimensions.get("window").width + 100,
    width: Dimensions.get("window").width - 30,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  boxInnerBorder: {
    borderWidth: 1,
    borderColor: "#000",
    textAlign: "center",
    fontWeight: "bold",
    width: 63,
    height: 40,
    textAlignVertical: "center",
    fontWeight: "normal",
    color: "#000",
    fontSize: 14,
  },
  boxBorder: {
    width: "auto",
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  toolbar: {
    height: 50,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#252c4a",
  },

  back: {
    //tintColor: "white",
    width: 25,
    height: 25,
    marginLeft: "30%",
    justifyContent: "flex-start",
    marginStart: 10,
    alignSelf: "flex-end",
    alignItems: "flex-end",
  },
});

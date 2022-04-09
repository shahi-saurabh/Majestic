import { StyleSheet, Text, TextInput,View, TouchableOpacity,FlatList,Image,ScrollView, Button,StatusBar,
  Dimensions,
  Modal,  ActivityIndicator, } from "react-native";

import React,{useState,useEffect} from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
//import GlobalData from "./";
import GlobalData from "../utils/GlobalData";

// import { useSelector } from 'react-redux';

const Home = ({ navigation }) => {
  const [token, setToken] = useState("");
  const [data,setData]=useState([]);
  const [data1,setData1] = useState([]);
  const [visible, setVisible] = useState(false);
//  const dataredux = useSelector(state => state.gloableData)
  useEffect(
   /*  getUserFromStorage()*/
//  console.log("Redux data===================",dataredux),
    //getUserFromStorage();
    async () => {
      
      await getUserFromStorage().then(() => {
      callWithToken1();
      callWithToken2();
      });
      callWithToken1();
     // callWithToken2();
    },
    [token]

  );




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
          // getApitoken(value);
            console.log("hhhiririr->",value);
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
    config => {
      config.headers.authorization = `Bearer ${token}`;
      console.log("config object -> ", config);
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
  const baseURL2 = "http://api.segwik2dev.com/api/v2/productwithvariations/list";

  const authAxios1 = axios.create({
    baseURL: baseURL2,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const callWithToken1 = async () => {
    /* const url =
      "http://api.segwik-development.com/api/v2/editTransactions/41874";
    console.log("coming id  =->? ", id + " >>>>" + value); */
    authAxios1
      .get(`http://api.segwik2dev.com/api/v2/productwithvariations/list`)
      .then(response => {
        //console.log("Api with product list-> ", JSON.stringify(response));
       // setData(response.data.data);
        //setDetails(response.data.details);
        //setInvoices(response.data.invoicing_event_list);
        // GlobalData(response.data.data);
      })
      .catch(error => {
        console.log("Error -> ", error);
      });
  };


  const renderItem1 = ({ item,index }) => {
      
    console.log("item->>>",item);
   return(
     <View
     style={{
         flexDirection: "row",margin:"3%",
     }}
     //   

  > 

  <View
  
  style={[styles.boxInnerBorder, { width:"75%",height:"100%"}]}
  >
        <Text >{item.subject}</Text>

   <Text >Start Date :-{item.start_date}</Text>
   <Text >End Date:-{item.end_date}</Text>
         
   </View>
      <View
      
      style={[styles.boxInnerBorder, { width:"25%",height:"100%"}]}
      >
       <TouchableOpacity        
       onPress={() => { /* EditModal(item.product_id); 
        //          console.log(item.product_id);  
                   setEditIndex(index);          
        setVisible2(true)
         */
        setVisible(true)
                  
                }}>
     
              <Text style={{justifyContent: "center",alignSelf: "center",alignItems: "center",padding:14}}>Details</Text>

       </TouchableOpacity>


      </View>

      


    </View>
   
   )
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
const baseURL3 ="http://api.segwik-development.com/api/v2/meetingCalendarGetEvents";
 // "http://api.segwik2dev.com/api/v2/productwithvariations/list";

const authAxios2 = axios.create({
  baseURL: baseURL3,
  headers: {
    Authorization: `Bearer ${token}`
  }
});

const callWithToken2 = async () => {
  /* const url =
    "http://api.segwik-development.com/api/v2/editTransactions/41874";
  console.log("coming id  =->? ", id + " >>>>" + value); */
  authAxios2
    .post(`http://api.segwik-development.com/api/v2/meetingCalendarGetEvents`)
    .then((response) => {
      console.log("Api with product Data calendar list-> ", response.data.data);
      setData1(response.data.data);
      //setDetails(response.data.details);
      //setInvoices(response.data.invoicing_event_list);
      // GlobalData(response.data.data);
      //setProductData(response.data.data.products);
    })
    .catch((error) => {
      console.log("Error -> ", error);
    });
};




  const getApitoken = (token) =>{
        
    const params = new FormData();

   // console.log("hfhfhfhfhfh->",token);
      params.append("token",token);
      

      const url = "http://api.segwik2dev.com/api/v2/productwithvariations/list";

      setTimeout(() => {
        fetch(url, {
          method: "GET",
          body: params,
          redirect: "follow"
        })
          .then(response => response.json())
          .then(result => {
            console.log("APi respponse product list-> ", JSON.stringify(result));
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
            color: "#000",
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
         Majestic
        </Text>
        </View>


        <FlatList
    data={data1}
    renderItem={renderItem1}
    keyExtractor={(item, index) => index.toString()}

   />

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
          <View style={styles.activityIndicatorWrapper}>{/* 
            <View style={{ flexDirection: "row", marginTop: "-3%" }}> */}
              <View style={[styles.toolbar,{marginTop:"-7%"}]}>
                <Text
                  style={{
                    color: "#fff",
                    width: "18%",
                    fontSize: 20,
                    alignSelf: "center",
                    marginLeft: "3%",
                    flex:1,

                  }}
                >
                 Attendees
                </Text>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    setVisible(false);
                  }}
                >
                  <Image
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgutRDlMRXvJnyyQ5G1F-U4MRlLjSbOumTaym_WtbNpKK0MCDQmbLQVWdPco93_lpd2oc&usqp=CAU"
                    }}
                    style={styles.back}
                  />
                </TouchableOpacity>
              </View>
                {   
                data.map((item, index) =>(
                
                    item.attendees.map((item1, i) =>
                  (
                        console.log("hiii",item1.cont_name),
                        <>
                        <View style={{
                            flexDirection: "row",
                        }}>
                       <Text style={{padding:5,fontSize:16}}>{item1.cont_name}</Text>
                       <Text style={{padding:5,fontSize:16}}>{item1.cont_lname}</Text>
                      
                       </View>
                        <View style={styles.separator} /> 
                        </>
                     ) )
                ))
                
                
                
                
}
                
             
          </View>
        </View>
      </Modal>

     

    </View>
      
    
  );
};

export default Home;

const styles = StyleSheet.create({
  boxInnerBorder: {
    borderWidth: 1,
    borderColor: "#000",
    textAlign: "center",
    fontWeight: "bold",
    //width: 63,
    height: 40,
    textAlignVertical: "center",
    fontWeight: "normal",
    color: "#000",
    fontSize: 14,
  },
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#00000040"
  },

  activityIndicatorWrapper: {
    backgroundColor: "#FFFFFF",
    height: Dimensions.get("window").height/3-100,
    //height: Dimensions.get("window").width-100,
    width: Dimensions.get("window").width/2,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    marginRight: 15
  },
  toolbar: {
    height: 70,
    // flex: 1,
    // width:'100%',
    flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#252c4a",
    marginTop:-5,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
  },
  back: {
    //tintColor: "white",
    width: 25,
    height:25,
    // position: "absolute",
    right:15,alignSelf:'center',
    marginLeft:'auto',
    marginTop:'auto',
    marginBottom:'auto',
    // marginLeft:"30%",
    // justifyContent: "flex-start",
    // marginStart: 10,
    // alignSelf: "flex-end",
    // alignItems: "flex-end",
      },
      separator: {
        height: 0.5,
        backgroundColor: "#808080",
        width: "90%",
      },
});

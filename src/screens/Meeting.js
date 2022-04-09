import { StyleSheet, Text, TextInput,View, TouchableOpacity,FlatList,Image,ScrollView, Button,StatusBar,
    Dimensions,
    Modal,  ActivityIndicator,} from "react-native";
  import AsyncStorage from "@react-native-async-storage/async-storage";
  import React,{useState,useEffect} from "react";
  import CommonToolbar from "../utils/CommonToolbar";
  //import ModalToolbar from "../utils/Globaldata";
  import QuotesDetails from "./QuotesDetails";
  import axios from "axios";

const Meeting = ({ navigation }) => {
    const [token, setToken] = useState("");
    const [data,setData]=useState([]);
    const [visible, setVisible] = useState(false);



    useEffect(
        
        async () => {
         
            //getUserFromStorage();
            await getUserFromStorage().then(() => {
             // callWithToken1(quoteIdFromItem, "");
              callWithToken2();
             
            });
           // callWithToken1(quoteIdFromItem, "");
           // callWithToken2();
         
          },
          [token],
          


    
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
          AsyncStorage.getItem("token",(error, value) => {
            if (error) {
              console.log(
                "Error in if condition getting user from async storage -> ",
                error
              );
            } else {
              if (value !== null) {
                setToken(value);
                //callWithToken2();
              //  console.log("token->",token)
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
            console.log("Api with product list-> ", response.data.data);
            setData(response.data.data);
            //setDetails(response.data.details);
            //setInvoices(response.data.invoicing_event_list);
            // GlobalData(response.data.data);
            //setProductData(response.data.data.products);
          })
          .catch((error) => {
            console.log("Error -> ", error);
          });
      };


      const renderItem = ({ item,index }) => {
      
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

  return (
    <View style={{
        flex:1,
        marginTop:StatusBar.currentHeight,
      }}>
  <CommonToolbar
  toolbarTitle={"Meeting"}
  navigation={navigation}
  />
   <FlatList
    data={data}
    renderItem={renderItem}
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
  )
}

export default Meeting

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
})
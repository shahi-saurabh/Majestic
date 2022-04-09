import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
  Button,
  Dimensions,
  TouchableOpacity,
  Modal,
  Image,
  Linking,
  StatusBar
} from "react-native";

import React, { useState, useEffect, useRef } from "react";
//import {TouchableOpacity  } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CommonToolbar from "../utils/CommonToolbar";
import SelectDropdown from "react-native-select-dropdown";
//import RNPopover from 'react-native-popover-menu';
import Popover from "react-native-popover-view";
import { WebView } from "react-native-webview";
import axios from "axios";
import { useIsFocused } from "@react-navigation/native";
import GlobalData from "../utils/GlobalData";
import Loader from "../utils/Loader";
// import Modal from "react-native-simple-modal";

const QuotesDetails = ({ route, navigation }) => {
  const touchable = useRef();
  const [token, setToken] = useState("");
  const [CustomerId, setCustomerId] = useState("");
  const [FormId, setFormId] = useState("");
  const [DetailID, setDetailID] = useState("");
  const [ProductID, setProductID] = useState("");
  const [VariantionID, setVariantionID] = useState("");
  const [ValueID, setValueID] = useState("");
  const [ProductData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  const[formseperator,setformseperator]=useState(false);
  // const variationDropDown = ["1", "5 ", "10 ", "20 "];
const [variationDropDown , setVaritionDropDown] = useState(['Select...']);
const [variationDropDown1 , setVaritionDropDown1] = useState(['Select...']);
const [variationDropDown2 , setVaritionDropDown2] = useState(['Select...']);

const [selectedProductID, setSelectedProductID] = useState('')
const [selectedColor, setSelectedColor] = useState('')

const[selectedit,setSelectedEdit]=useState('');

const [selectedSize, setSelectedSize] = useState('')
const [selectedProductPrice, setSelectedProductPrice] = useState('')
const [attributeColor, setAttributeColor] = useState(['Select...'])
const [attributeColorPresent, setAttributeColorPresent] = useState(false)

const [attributeSize, setAttributeSize] = useState(['Select...'])
const [attributeSizePresent, setAttributeSizePresent] = useState(false)

let abc =[];
  const [refineProductid, setRefineProductid] = useState([]);

  //const[]

  const [isModalVisible, setModalVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const[,setrefineids]=useState(false);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const[detailid,setdetailID] = useState('');

  const [Editindex,setEditIndex] = useState(0);
  
  
  const[AddDiscount,setAddDiscount] = useState("");
  const[AddQuantity,setAddQuantity] = useState("");
  const[AddPrice,setAddPrice] = useState("");
  const[AddTax,setAddTax]=useState("");


  const[updateDiscount,setUpdateDiscount] = useState("");
  const[updateQuantity,setUpdateQuantity] = useState("");
  const[updatePrice,setUpdatePrice] = useState("");
  const[updateTax,setUpdateTax]=useState("");

  const[VaraiableID,setVariableID]=useState("");

  let defaultIndex = 0;
  const [formVisible, setFormVisible] = useState(false);
  const [recommendedVisible, setRecommendedVisible] = useState(false);
  const [EditVisible, setEditVisible] = useState(false);
  const [EditVisible2, setEditVisible2] = useState(false);

  const [updateVariableid, setUpdateVariableid] = useState('');

  const [cnfrmData, setCnfrmData] = useState([]);
  const [variationData, setVariationData] = useState(false);
  const [recommendedData, setRecommendedData] = useState([]);
  const [webView, setwebView] = useState(false);
  const [webTitle, setwebTitle] = useState("");
  //const [count, setCount] = useState(0);
  const [quotes, setQuotes] = useState("");
  const [data, setData] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [details, setDetails] = useState([]);
  const isFocused = useIsFocused();
  const [itemToken, setItemToken] = useState("");
  const [title, setTitle] = useState("");
 const [price,setPrice]=useState("");
 const[qty,setquantity] = useState("");
 const [tax,setTax] = useState("");
 const[subtotal,setSubtotal] = useState("");
 const[discount,setdiscount]=useState("");
 const[variation,setVariation] = useState("");
 
 const[id1,setid1] = useState("");
 const [title1, setTitle1] = useState("");
 const [price1,setPrice1]=useState("");
 const[qty1,setquantity1] = useState("");
 const [tax1,setTax1] = useState("");
 const[subtotal1,setSubtotal1] = useState("");
 const[discount1,setdiscount1] = useState("");
 const[variation1,setVariation1] = useState("");
  /*
      setTitle(item.title);
    setPrice(item.price);
    setquantity(item.qty);
    setTax(item.tax);
    setSubtotal(item.tax);
  
  
  useEffect(async () => {
    let { quoteId } = route.params;
    console.log("qoute id os  -> ", quoteId);
    setId(quoteId);
    await getUserFromStorage().then(() => {
      callWithToken(quoteId, "");
    });
    
    callWithToken(quoteId, "");
  }, [token]); */

  useEffect(
    async () => {
      let {quoteIdFromItem} = route.params;
      //console.log(" <<>> " + quoteIdFromItem, "token from item");
      setQuotes(quoteIdFromItem);
      // setQuotes(quoteIdFromItem);
      //getUserFromStorage();
      await getUserFromStorage().then(() => {
        callWithToken1(quoteIdFromItem, "");
        callWithToken2();
       
      });
      callWithToken1(quoteIdFromItem, "");
      callWithToken2();
   
    },
    [token ,refineProductid],
    
  );
  const consoleProduct = (item) => {
    {setProductID(item.product_id)}
    {setDetailID(item.detail_id)}
    {setValueID(item.value_id)}
    {/* {setProductID(item.product_id)} */}
    {setVariantionID(item.variation_id)}

  }

  const EditModal = (itemid) => {

     details.map((item1, index) => {
    
    if(item1.product_id===itemid){
      
      setTitle(item1.prod_title);
    setPrice(item1.price);
    setquantity(item1.qty);
    setdiscount(item1.discount)
    setTax(item1.tax);
    setSubtotal(item1.tax);
    setVariation(item1.variation_id);

    

    {ProductData.map((item, index) => {
      if(item.variations) {

      item.variations.map((variation1, index) => {
        //console.log("EDIT MODEL rec id -> ",'1')
        //console.log("EDIT MODEL rec id -> ",variation1.variation_id === variation  + "with id ->",variation1.variation_id +" out id -> ",variation)

        if(variation1.variation_id === item1.variation_id){
        // console.log("EDIT MODEL rec id -> ",'2')

          if(variation1.recommended_products){
        // console.log("EDIT MODEL rec id -> ",'3')

            variation1.recommended_products.map((recommendedProduct, index) => {
        // console.log("EDIT MODEL rec id -> ",'4')

              // console.log("EDIT MODEL rec id -> ",recommendedProduct.variation_ids)
              
              setVaritionDropDown([...variationDropDown, recommendedProduct.variation_ids])
            })
          }
        }
      })
    }
  })}
    }
    {
      variation ?
      <>
      {/*  Variation Data Lagana hai */}
      
      </>:null
    }
     


    });



   
  
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
const baseURL22 =
  `http://api.segwik-development.com/api/v2/getVariationByProductId?prod_id=${selectedProductID}&search=[${selectedColor},${selectedSize}]&attribute_title=`;

const authAxios22 = axios.create({
  baseURL: baseURL22,
  headers: {
    Authorization: `Bearer ${token}`
  }
});

const callWithToken22 = async (selectsize) => {
  /* const url =
    "http://api.segwik-development.com/api/v2/editTransactions/41874";
  console.log("coming id  =->? ", id + " >>>>" + value); */
  authAxios22
    .post(`http://api.segwik-development.com/api/v2/getVariationByProductId?prod_id=${selectedProductID}&search=[${selectedColor},${selectedSize}]`)
    .then((response) => {
      if(response.data.success === true){
        // console.log("Api with product list-> without  fun=-> ", response.data);
        console.log("Api with product list-> with fun=-> ", response.data.data?.variation_id);
        setVariableID(response.data.data?.variation_id)
       /* // setAttributeSize(response.data.data.attribute_value)
        if(response.data.data.attribute_value.length > 0){
          setAttributeSizePresent(true)
        } */
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
      // console.log(`Selected dropdown =-> ${item.prod_title} and ${item.product_id} `)
      setSelectedProductID(item.product_id)
      setSelectedProductPrice(item.price)
      callWithToken12(item.product_id)
    }
  })
}


const getSelectedItemColor = (selected) => {
  setSelectedColor(selected);
}

const   getSelectedItemSize = (selected) => {
  setSelectedSize(selected);
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
const baseURL37 =
`https://api.segwik2dev.com/api/v2/updateTransactionDetails?amount=1&discount=${discount}&price=${price}&quantity=${qty}&quote_id=${quotes}&quote_type=0&region=0&tax=${tax}&variable_id=${selectedit}&vintage=""`;

const authAxios37 = axios.create({
  baseURL: baseURL37,
  headers: {
    Authorization: `Bearer ${token}`
  }
});


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
const baseURL17 =
  `http://api.segwik-development.com/api/v2/getVariationByProductId?prod_id=${selectedProductID}&search=[${selectedColor}]&attribute_title=${selectedSize}`;

const authAxios17 = axios.create({
  baseURL: baseURL17,
  headers: {
    Authorization: `Bearer ${token}`
  }
});

const getEDITdropdown=(selectedItem)=>{
  setSelectedEdit(selectedItem); 
}

const EDITAPI =()=>{
  authAxios37
  .post(`https://api.segwik2dev.com/api/v2/updateTransactionDetails?amount=1&discount=${discount}&price=${price}&quantity=${qty}&quote_id=${quotes}&quote_type=0&region=0&tax=${tax}&variable_id=${selectedit}&vintage=""`)
  .then((response) => {
    if(response.data.success === true){
       console.log("Api with EDIT list-> without  fun=-> ",response.data);
      
    }
  
  })
  .catch((error) => {
    console.log("Error -> ", error);
  });
  
  
}

 const deleteAPI=(itemid)=>{
  
  authAxios17
  .post(`https://api.segwik2dev.com/api/v2/updateTransactionDetails?details_id=${itemid}&quote_type=0`)
  .then((response) => {
    if(response.data.success === true){
       console.log("Api with delete list-> without  fun=-> ", response.data);
      
    }
  
  })
  .catch((error) => {
    console.log("Error -> ", error);
  });
  

 }



 const recommendedEdit = (itemid) => {

 ProductData.map((item, index) => {
  console.log("hello data recommedned ",item.prod_title)
  variationDropDown2.push(item.prod_title)
  if(item.product_id === itemid){
    
    setTitle1(item.prod_title);
  setPrice1(item.price);
  setid1(item.product_id);

  setquantity1(item?.qty);
  setdiscount1(item?.discount)
  setTax1(item?.tax);
  setSubtotal1(item?.tax);
  if(item.variations === undefined || item.variations.length == 0){
    console.log("HII VAriation index not ZFOUND  ->>>>>>>","");
  }
  else{
  setVariation1(item.variations[index].variation_id);
  console.log("HII VAriation index  ->>>>>>>",item.variations[index].variation_id)
  }
}
   
  
 {ProductData.map((item, index) => {
  if(item.product_id === itemid){
      if(item.variations) {

      item.variations.map((variation1, index) => {
        //console.log("EDIT MODEL rec id -> ",'1')
        //console.log("EDIT MODEL rec id -> ",variation1.variation_id === variation  + "with id ->",variation1.variation_id +" out id -> ",variation)

        /* if(variation1.variation_id === item1.variation_id){
        console.log("EDIT MODEL rec id -> ",'2') */

          if(variation1.recommended_products){
        //console.log("EDIT MODEL rec id -> ",'3')

            variation1.recommended_products.map((recommendedProduct, index) => {
        //console.log("EDIT MODEL rec id -> ",'4')

          //    console.log("EDIT MODEL rec id -> ",recommendedProduct.variation_ids)
              
              setVaritionDropDown1([...variationDropDown1, recommendedProduct.variation_ids])
            })
          }
       /*  }  */

        /* variation1.map((result, index)=>{
          result.recommended_products.length>0?
           
            result.recommended_products.map((recommendedProduct,index)=>{
              
              setVaritionDropDown1([...variationDropDown, recommendedProduct.variation_ids])

            })
           
          :null
        }) */
      })
    }
    }
  })} 
  
  });



 

}
    








  /* setTimeout(() => {
  callWithToken(quoteIdFromItem);

}, 2000)








  if(isFocused) {
    callWithToken(quoteIdFromItem);

  }

  axios.interceptors.request.use(
    (config) => {
      config.headers.authorization = `Bearer ${token}`;
      console.log("config object -> ",config);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  ); */
  // }, []);

  /*  state = { open: false };

  modalDidOpen = () => console.log("Modal did open.");

  modalDidClose = () => {
   { open: false} 
    console.log("Modal did close.");
  };

  moveUp = () => { offset: -100 }

  resetPosition = () => { offset: 0 }

  openModal = () => { open: true }

  closeModal = () =>{ open: false } */

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

  const callWithToken2 = async () => {
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
      })
      .catch((error) => {
        console.log("Error -> ", error);
      });
  };

  const refined = () => {
    {
      ProductData.map((item, index) =>
        item.product_id === ProductID
          ? item.variations
            ? item.variations.map((variation, index) =>
                variation.variation_id === VariantionID
                  ? variation.recommended_products
                    ? variation.recommended_products.map(
                        (recommendedProduct, index) => {

                          //console.log("kkkkkkkkkkkkkkk->>>>>>>>>>>>  ", recommendedProduct);
                          refineProductid.push(recommendedProduct)
                          // setRefineProductid([...refineProductid,recommendedProduct])
                         /*  setRefineProductid([

                            ...refineProductid,
                            recommendedProduct.product_id
                          ]); */
                          // console.log(
                          //   "saurabh refined data method -> ",
                          //   recommendedProduct.product_id
                          // );
                          // console.log("our own refine product arrary ->  ",refineProductid)
                      /* setRefineProductid(() =>{
                        // console.log(

                        //   "saurabh refined data method -> ",
                        //   recommendedProduct.product_id
                        // );
                        //console.log("our own refine product arrary ->  ",prevState);
                        console.log("kkkkkkkkkkkkkkk->>>>>>>>>>>>  ", refineProductid);
                        // refineProductid.find(recommendedProduct.product_id)
                    // for(const item of prevState){
                      const newData = refineProductid.find(data => data === recommendedProduct.product_id);
                      // console.log(newData, '<--nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn')
                      // refineProductid.map((refine, index) =>{
                        if(newData === undefined){
                          console.log("IF STATEMAENT CALLED IN PMAP FUNCTION");
                         return [...refineProductid,recommendedProduct.product_id]
                          
                        }else{
                          console.log("ELSE STATEMAENT CALLED IN PMAP FUNCTION");
                          return refineProductid;

                        //  return [[...refineProductid,recommendedProduct.product_id]]
                        }
                      // })

// }
                    
                      }) */
                        

                          //]);
                          //                       return (
                          //                         <View>
                          //                             <TouchableOpacity
                          //     onPress={() => {
                          //       setRecommendedVisible(true);
                          //       refined();
                          //       /*  console.log("CustomerId:-",CustomerId);
                          // console.log("FormId:-",FormId);
                          // console.log("DetailID:-",DetailID);
                          // console.log("quotes ID:-",quotes); */
                          //     }}>
                          //                           <Text>Recommended</Text>
                          //                           </TouchableOpacity>
                          //                         </View>
                          //                       );
                        }
                      )
                    : null
                  : null
              )
            : null
          : null
      );
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
  const baseURL51 =
    "https://api.segwik2dev.com/api/v2/updateTransactionDetails";

  const authAxios51 = axios.create({
    baseURL: baseURL51,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const addDetails = () => {
    // console.log("receiveed item is  ->? ", item);
    authAxios51
    .post(`https://api.segwik2dev.com/api/v2/updateTransactionDetails?amount=4.995&discount=${AddDiscount}&price=${selectedProductPrice}&product_id=${selectedProductID}&quantity=${AddQuantity}&quote_id=${quotes}&quote_type=0&region=""&tax=${AddTax}&variable_id=${VaraiableID}&vintage=""`)
    .then((response) => {
      console.log("Api with Sucess -> ",response.data.success);
      callWithToken1(quotes, "");
      // setData(response.data.data);
      //setDetails(response.data.details);
      //setInvoices(response.data.invoicing_event_list);
      // GlobalData(response.data.data);
      //setProductData(response.data.data.products);
    })
    .catch((error) => {
      console.log("Error -> ",error);
    });
   
  };

  const recommendedUpdateDetails = () => {
    // console.log("receiveed item is  ->? ", item);
    authAxios51
    .post(`https://api.segwik2dev.com/api/v2/updateTransactionDetails?amount=4.995&discount=${updateDiscount}&parent_detail_id=72300&price=${price1}&product_id=${id1}&quantity=${updateQuantity}&quote_id=${quotes}&quote_type=0&region=""&tax=${updateTax}&variable_id=${updateVariableid}&vintage=""`)
    .then((response) => {
      console.log("Api with Sucess -> ",response.data.success);
     // callWithToken1(quotes, "");
      // setData(response.data.data);
      //setDetails(response.data.details);
      //setInvoices(response.data.invoicing_event_list);
      // GlobalData(response.data.data);
      //setProductData(response.data.data.products);
    })
    .catch((error) => {
      console.log("Error -> ", error);
    });
   
  };
  const getUserFromStorage = async () => {
    try {
      // setQuotes(AsyncStorage.getItem("quote_id"));
      // console.log("quotes_id ->", quotes);

      // await AsyncStorage.getItem("quote_id", (err, value) => {
      //   if (err) {
      //   } else {
      //     if (value !== null) {
      //       setQuotes(value);
      //       console.log("quotes_id ->", value);
      //     }
      //   }
      // });

      await AsyncStorage.getItem("token", (error, value) => {
        if (error) {
          console.log(
            "Error in if condition getting user from async storage -> ",
            error
          );
        } else {
          if (value !== null) {
            //setCount(2*3)
            setToken(value);
            //setCount(2*3)
            //callWithToken(quotes);
            //getApitoken(value);
            console.log("Token ->", value);

            // setTimeout(() => {

            // }, 1000);
            // getUserDetails(value);
          } else {
            setToken(null);
          }
        }
        return value; // 578461877 - any desk id
      });

      await AsyncStorage.getItem("encrypted_customer_id", (error, value) => {
        if (error) {
          console.log(
            "Error in if condition getting user from async storage -> ",
            error
          );
        } else {
          if (value !== null) {
            //setCount(2*3)
            setCustomerId(value);
            //setCount(2*3)
            //callWithToken(quotes);
            //getApitoken(value);
            //console.log("Token ->", value);

            // setTimeout(() => {

            // }, 1000);
            // getUserDetails(value);
          } else {
            setCustomerId(null);
          }
        }
        return value; // 578461877 - any desk id
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
  const baseURL2 = "http://api.segwik-development.com/api/v2";

  const authAxios1 = axios.create({
    baseURL: baseURL2,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const callWithToken1 = (id, value) => {
    /* const url =
      "http://api.segwik-development.com/api/v2/editTransactions/41874";
    console.log("coming id  =->? ", id + " >>>>" + value); */
    setLoading(true);
    authAxios1
   
      .get(`http://api.segwik-development.com/api/v2/editTransactions/${id}`)
      .then((response) => {
        //console.log("Api with Token -> ", JSON.stringify(response));
       // 
        setData(response.data.data);
        setDetails(response.data.details);

        setInvoices(response.data.invoicing_event_list);

        const newData = response.data.details;
        newData.map((item, index) => {
          setCnfrmData([...cnfrmData, item?.crmform_data]);
        });
      })
      .catch((error) => {
        console.log("Error -> ", error);
      })
      .finally(() => setLoading(false));
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const ModalTester = () => {
    // const toggleModal = () => {
    //   setModalVisible(!isModalVisible);
    // };

    return (
      <View style={{ flex: 1 }}>
        <Button title="Show modal" onPress={() => toggleModal()} />

        <Modal isVisible={isModalVisible}>
          <View style={{ flex: 1 }}>
            <Text>Hello!</Text>

            <Button title="Hide modal" onPress={() => toggleModal()} />
          </View>
        </Modal>
      </View>
    );
  };

  const baseURL = "http://api.segwik-development.com/api/v2";

  // const authAxios = axios.create({
  //   baseURL: baseURL,
  //   headers: {
  //     Authorization: `Bearer ${data?.token}`,
  //   },
  // });

  /*  const callWithToken = id => {

    console.log("coming id  =-> ", id);
    setTimeout(() => {
      axios
        .get(`http://api.segwik-development.com/api/v2/editTransactions/${id}`)
        .then(response => {
          console.log(
            "Api with Token at 6 : 30 pm -> ",
            JSON.stringify(response)
          );
          // setTokenData(response.data.details);
        })
        .catch(error => {
          console.log("Error -> ", error);
        });
    }, 1000);
  };
  axios.interceptors.request.use(
    (config) => {
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  ); */
  const baseURL1 = "http://api.segwik-development.com/api/v2";

  const authAxios = axios.create({
    baseURL: baseURL1,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const callWithToken = (id) => {
    const url =
      "http://api.segwik-development.com/api/v2/editTransactions/41874";
    //console.log("coming id  =->? ",id);
    authAxios
      .get(`/editTransactions/${id}`)
      .then((response) => {
        // console.log("Api with Token -> ", JSON.stringify(response));
        setTokenData(response.data.details);
      })
      .catch((error) => {
        console.log("Error -> ", error);
      });
  };

  /* const getApitoken = token => {
    const params = new FormData();
    var config = {
      method: "get",
      url: `http://api.segwik-development.com/api/v2/editTransactions/41874`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    /* console.log("ZZZZZtoken->", token);
    console.log("ZZZZZconfig->", config.url); 

    const url =
      "http://api.segwik-development.com/api/v2/editTransactions/41874" +
      quotes;
    //console.log("ZZZZMain url id -> ", config.url);
    //console.log("ZZZBearertoken->", config.headers.Authorization);
    axios(config)
      .then(
        response => {
          // console.log("ZZZhii from detail", response.data),
          setData(response.data.data);
          console.log(
            "ZZZhii from detail->>>>>>>",
            response.data.invoicing_event_list
          ), setInvoices(response.data.invoicing_event_list), setDetails(
            response.data.details
          );
        }
        //console.log(
        //"response of get token api =-> ",
        //response + ">> now data is " + response.data.data
      )
    
      .catch(
        error => console.log("ZZZZerror of get token api =-> ", error)
        //console.log("ZZZZhii from detail", response.data)
      );
  };
 */
  <Popover
    from={touchable}
    isVisible={visible2}
    onRequestClose={() => setVisible2(false)}
    verticalOffset={20}
    popoverStyle={{}}
    // placement={"right"}
  >
    <View>
      <TouchableOpacity
        onPress={() => {
          setEditVisible(true);
        }}

        //style={[styles.boxInnerBorder, { width: 120}]}
      >
        <Text>Edit</Text>
      </TouchableOpacity>

      <Text>Delete</Text>


 
   <View>
   <TouchableOpacity
   onPress={() => {
     setFormVisible(true);
     /*  console.log("CustomerId:-",CustomerId);
console.log("FormId:-",FormId);
console.log("DetailID:-",DetailID);
console.log("quotes ID:-",quotes); */
   }}

   //style={[styles.boxInnerBorder, { width: 120}]}
 >
   <Text>Form</Text>
 </TouchableOpacity>
 </View>

   
 ):null
 
 )
     
      
  {/*   //  <Text>Recommended</Text> */}
  
      {/*  {ProductData.map((item, index) =>
        item.product_id === ProductID
          ? item.variations
            ? item.variations.map((variation, index) => {
                variation.variation_id === VariantionID
                  ? variation.recommended_products
                    ? variation.recommended_products.map(
                        (recommendedProduct, index) => {
                          // setRefineProductid([
                          // TOD...refineProductid,recommendedProduct.product_id

                          //]);
                          return (
                            <View>
                              <Text>Recommended</Text>
                            </View>
                          );
                        }
                      )
                    : null
                  : null;
              })
            : null
          : null
      )} */}
     
     


    </View>
  </Popover>;

  const renderItem2 = ({ item, index }) => {
    

    return (
      <View style={{ flexDirection: "row" }}>
        <Text style={[styles.boxInnerBorder, { width: 100}]}>

         
          {item.title}
        </Text>
        <Text style={[styles.boxInnerBorder, { width: 100 }]}>
          {item.price}
        </Text>
        <Text style={[styles.boxInnerBorder, {width: 100 }]}>{item.qty}</Text>
        <Text style={[styles.boxInnerBorder, {width: 100}]}>
          {item.discount}
        </Text>
        <Text style={[styles.boxInnerBorder, {width: 100 }]}>{item.tax}</Text>
        <Text style={[styles.boxInnerBorder, {width: 100 }]}>{item.tax}</Text>

        {/* <TouchableOpacity
          onPress={() => {
            setVisible2(true);
                   }}
          
                   style={[styles.boxInnerBorder, { width: 120}]}
                   >
             
            
          <Image
            source={{
              uri: 'https://is1-ssl.mzstatic.com/image/thumb/Purple111/v4/80/cd/4b/80cd4bae-490b-9622-c2a7-8c3adcfd7946/source/256x256bb.jpg',
            }}
           style={{height:30,width: 30 ,alignSelf:"center"}}
          />
        </TouchableOpacity> */}
        {/* 
        */}

        <TouchableOpacity
          style={[styles.boxInnerBorder, {width: 100 }]}
          ref={touchable}
          onPress={() => { EditModal(item.product_id); 
//          console.log(item.product_id);  
           setEditIndex(index);
           setdetailID(item.detail_id)  ;        
           setVisible2(true)
          consoleProduct(item);
          
        }}
        >
      {/*     
          {setDetailID(item.detail_id)}
          {setValueID(item.value_id)}
          {/* {setProductID(item.product_id)} *}
          {setVariantionID(item.variation_id)}
          { console.log("product id ",ProductID)}  */}
          <Image
            ref={touchable}
            source={{
              uri: "https://is1-ssl.mzstatic.com/image/thumb/Purple111/v4/80/cd/4b/80cd4bae-490b-9622-c2a7-8c3adcfd7946/source/256x256bb.jpg"
            }}
            style={{ height: 30, width: 30, alignSelf: "center" }}
          />
        </TouchableOpacity>

        {/*  

 return (
                      <View
                        style={{
                          // width:'80%',
                          backgroundColor: "#fff"
                        }}
                      >
                        <TouchableOpacity
                          onPress={() => {
                            setRecommendedVisible(true);
                            /*  console.log("CustomerId:-",CustomerId);
                               console.log("FormId:-",FormId);
                               console.log("DetailID:-",DetailID);
                               console.log("quotes ID:-",quotes); 
                              }}

                              //style={[styles.boxInnerBorder, { width: 120}]}
                            >
                              <Text>Recommended</Text>
                            </TouchableOpacity>
                          </View>
                        );


        <Popover
       // style={styles.activityIndicatorWrapper1}
      isVisible={visible2}
      transparent={true}
      onRequestClose={() => setVisible2(false)}
      from={(
        <TouchableOpacity
        onPress={() => {
          setVisible2(true);
                 }}
                 
        
                 style={[styles.boxInnerBorder, { width: 120}]}
                 >
           
          
        <Image
          source={{
            uri: 'https://is1-ssl.mzstatic.com/image/thumb/Purple111/v4/80/cd/4b/80cd4bae-490b-9622-c2a7-8c3adcfd7946/source/256x256bb.jpg',
          }}
         style={{height:30,width: 30 ,alignSelf:"center"}}
        />
      </TouchableOpacity> 
      <Text>hiii</Text>
      )}>

      <TouchableOpacity
          onPress={() => {
            setEditVisible(true);
                   }}
          
                   //style={[styles.boxInnerBorder, { width: 120}]}
                  >
               <Text>Edit</Text>
              </TouchableOpacity> 
               
               <Text>Delete</Text>
              
               <TouchableOpacity
          onPress={() => {
            setFormVisible(true);
                   }}
          
                   //style={[styles.boxInnerBorder, { width: 120}]}
                  >
             
               <Text>Form</Text>
               </TouchableOpacity>
      
    </Popover> 
 */}



 

        
        {/*     <Modal
          animationType={'slide'}
          transparent={true}
          visible={formVisible}
          onRequestClose={() => {
            setFormVisible(false);
            console.log('Modal has been closed.');
          }}>
          <View style={styles.modalBackground}>
            <View style={styles.activityIndicatorWrapper}>
           
            <View style={{ flexDirection: "row" }}>
            <View style={styles.toolbar}>
           
          <Text style={{color:"#fff",width: "30%",marginLeft:"25%"}}>Form Details</Text> 
           <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                setFormVisible(false);
              }}
            > 
  
  
              <Image
                source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgutRDlMRXvJnyyQ5G1F-U4MRlLjSbOumTaym_WtbNpKK0MCDQmbLQVWdPco93_lpd2oc&usqp=CAU" }}
                style={styles.back}
              />
            </TouchableOpacity>
           
           </View>
          </View>
          <ScrollView>
        
 
        <TouchableOpacity
              activeOpacity={0.8}
              
                onPress={() => {
                  setwebView(true);
                  console.log('Modal has been true closed.');
                }}
              //  onPress={() => Linking.openURL('https://www.motorola.com')}
              
            > 
  
        <Text
          style={[
            styles.boxBorder,
            { width: 150, textAlignVertical: "center" }
          ]} 
        >
        {item.crmform_data[index]?.form_title}
        </Text>

        </TouchableOpacity>
        </ScrollView>
               
            </View>
            </View>
        </Modal> */}

        <Modal
          animationType={"slide"}
          transparent={true}
          visible={formVisible}
          onRequestClose={() => {
            setFormVisible(false);
            console.log("Modal has been closed.");
          }}
        >
          <View style={styles.modalBackground}>
            <View style={styles.activityIndicatorWrapper2}>
              {/* <View style={{ flexDirection: "row", marginTop: "-1%" }}> */}
                <View style={styles.toolbar}>
                  <Text
                    style={{
                      color: "#fff",
                      width: "auto",
                      flex: 1,
                      fontSize: 20,
                      alignSelf: "center",
                      marginLeft: "5%"
                    }}
                  >
                    Form Details
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                      setFormVisible(false);
                    }}
                  >
                    <Image
                      source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw5sm_tK-aXfZPbY_tLMs56mOgOxpaRaHn0nqI_sfgGn4cCE2mLB5Tvcc1EujQioE3b0E&usqp=CAU"
                      }}
                      style={styles.back}
                    />
                  </TouchableOpacity>
               {/*  </View> */}
              </View>
              {formVisible?(
              <ScrollView>
                {cnfrmData.map((item, index) => (
                 
                  item.map((item, index) => (
                    console.log("item is in details object:-",item.form_title===null),
                  
item.form_title===null?( {/* <Text
style={{
  // width: "100%", 
  // alignSelf: "flex-start",
  // marginLeft: "5%",
  fontSize: 14
}}
>

</Text>  */}):(
                
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => {
                        setwebTitle(item?.form_title);
                        setFormId(item[index]?.id);
                        setwebView(true);
                       

                        console.log("CustomerId:-", CustomerId);
                        console.log("FormId:-", FormId);
                        console.log("DetailID:-", DetailID);
                        console.log("ValueID:-", ValueID);
                        console.log("quotes ID:-", quotes);
                        console.log("Modal has been true closed.");
                      }}
                      //  onPress={() => Linking.openURL('https://www.motorola.com')}
                    >
                      <Text
                        style={{
                          // width: "100%",
                          // alignSelf: "flex-start",
                          // marginLeft: "5%",
                          fontSize: 14
                        }}
                      >
                        {item?.form_title}
                      </Text>
                      {/* //<View style={styles.separator} /> */}
                    </TouchableOpacity>
                  )
                  )))
                )}

                {/* <Text
           style={[
            styles.boxBorder,
            { width: 100, textAlignVertical: "center" }
          ]} 
        >
          Form title
        </Text> */}

                {/*              map lagana hai */}

                {/* {setCnfrmData(item.crmform_data[index])} */}

                {/*  { cnfrmData.map((item, index) => {
                  
                  return (
                    <View>
                          <TouchableOpacity
              activeOpacity={0.8}
              
              onPress={() => {
                setwebView(true);
                console.log('Modal has been true closed.');
              }}
              //  onPress={() => Linking.openURL('https://www.motorola.com')}
              
            > 
  
        <Text
          style={[
            styles.boxBorder,
            { width: 150, textAlignVertical: "center" }
          ]} 
        >
        {item.crmform_data[index]?.form_title}
        </Text>

        </TouchableOpacity>
                    </View>
                  )}
                  
                  )
                  } */}
              </ScrollView>

    )
:null}</View>
          </View>
        </Modal>

        <Modal
          animationType={"slide"}
          transparent={true}
          visible={recommendedVisible}
          onRequestClose={() => {
            setRecommendedVisible(false);
            console.log("Modal has been closed.");
          }}
        >
          <View style={styles.modalBackground}>
            <View style={styles.activityIndicatorWrapper2}>
              {/* <View style={{ flexDirection: "row", marginTop: "-5%" }}> */}
                <View style={styles.toolbar}>
                  <Text
                    style={{
                      color: "#fff",
                      width: "auto",
                      fontSize: 20,
                      flex:1,
                      alignSelf: "center",
                      marginLeft: "5%"
                    }}
                  >
                    Recommended
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                      setRecommendedVisible(false);
                      setRefineProductid(abc);
                      //refinedProductid.splice(0,refineProductid.length);
                    }}
                  >
                    <Image
                      source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw5sm_tK-aXfZPbY_tLMs56mOgOxpaRaHn0nqI_sfgGn4cCE2mLB5Tvcc1EujQioE3b0E&usqp=CAU"
                      }}
                      style={styles.back}
                    />
                  </TouchableOpacity>
              {/*   </View> */}
              </View>
              {/* Text>HIII</Text>
              <Text>helllo 2</Text> */}

              {/* /map lagana hai*/}

              <FlatList
            data={refineProductid}

            renderItem={({item,index}) =>{
              //console.log("Flatlist refined data----->>>>",item)

           return(   ProductData.map((details1, index) =>{


if(details1.product_id === item.product_id) {
            //console.log("Flatlist refined details data----->>>>",details1.product_id === item.product_id)
   
            /* details1.variations.map((lastitem,index)=>
            (
            lastitem.variation_id===item.variation_ids?
            <>
             <Text>
                   {item.variation_details}

             </Text>
            
            </>
            :
            null;


            )) */

  return(
    
  <View>
                     <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                      recommendedEdit(item.product_id);
                      setEditVisible2(true);
                      setUpdateVariableid(item.variation_ids);               
                   }}
                  >
                      <Text style={{fontSize: 16, padding: 5 }}>{details1.prod_title}</Text>
                
                  {/*     //<Text style={{fontSize: 16, padding: 5 }}>{item.variation_ids}</Text> */}
                {
                 details1.variations.map((lastitem,index)=>
                 (
                 lastitem.variation_id===item.variation_ids?
                 <>
                  <Text>
                        {lastitem.variation_details}
     
                  </Text>
                 
                 </>
                 :
                 null
     
     
                 )) 
                }
                      <View style={styles.separator}/>
                     
                      </TouchableOpacity>
              </View>
  )
}else{
  
}
              })
           )      
                
            }}
            keyExtractor={item => item.id + ""}
            // horizontal={true}
          
          />



              {/* {refineProductid.map((item2, index) => (
                console.log("recomnded item id", item2),
                ProductData.map((item1, index) => (
                  //console.log("recomnded item",item1.product_id === item2),
                  item1.product_id === item2 ? (
                    <View>
                     <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                  
                      recommendedEdit(item1.product_id);
                     
                      
                      setEditVisible2(true);
                    
                    }}
                  >
                      <Text>{item1.prod_title}</Text>
                      </TouchableOpacity>
                    </View>
                  ) : null
                // <View>
                //    <Text>Hello !@#@$</Text>
                //   </View>
                 ))
                //n item.product_id.map()
                
                 
                
              ))} */}
            </View>
          </View>
        </Modal>

        <Modal
          animationType={"slide"}
          transparent={true}
          visible={webView}
          onRequestClose={() => {
            setwebView(false);
            console.log("Modal has been closed.");
          }}
        >
          <View style={styles.modalBackground}>
            <View style={styles.activityIndicatorWrapper}>
              {/* <View style={{ flexDirection: "row" }}> */}
                <View style={styles.toolbar}>
                  <Text
                    style={{
                      color: "#fff",
                      width: "auto",
                      flex:1,
                      fontSize: 14,
                      alignSelf: "center",
                      marginLeft: "5%"
                    }}
                  >
                    {webTitle}
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                      setwebView(false);
                    }}
                  >
                    <Image
                      source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw5sm_tK-aXfZPbY_tLMs56mOgOxpaRaHn0nqI_sfgGn4cCE2mLB5Tvcc1EujQioE3b0E&usqp=CAU"
                      }}
                      style={styles.back}
                    />
                  </TouchableOpacity>
                {/* </View> */}
              </View>

              <WebView
                source={{
                  uri: `https://it-majestic-user-app.segwik2dev.com/transaction-form/${FormId}?customer_id=${CustomerId}&quote_id=${quotes}&detail_id=${DetailID}&value_id=${ValueID}`
                }}
                style={{ marginTop: 10, height: 100, width: 300 }}
              />
            </View>
          </View>
        </Modal>

        {/* <WebView
        source={{
          uri:'http://addas.co.in:3000/page/6210a6097ca8de1ba2e957c7/61e91f280112bd48f093010d'
        }}
        style={{marginTop:10,height:100,width:100 }}
        /> */}
      </View>
    );
  };

  const renderScrollView2 = () => {
    return (
      <View style={{ flexDirection: "row" }}>
        <Text
          style={[
            styles.boxBorder,
            { width: "25%", textAlignVertical: "center" }
          ]}
        >
          Event Name
        </Text>

        <Text
          style={[
            styles.boxBorder,
            { width:"25%", textAlignVertical: "center" }
          ]}
        >
          Amount
        </Text>
        <Text
          style={[
            styles.boxBorder,
            { width: "25%", textAlignVertical: "center" }
          ]}
        >
          Milestone
        </Text>
        <Text
          style={[
            styles.boxBorder,
            { width: "25%", textAlignVertical: "center" }
          ]}
        >
          PaymentTerms
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
      </View>
    );
  };

  const renderScrollView = () => {
    return (
      <View style={{ flexDirection: "row" }}>
        <Text
          style={[
            styles.boxBorder,
            { width: 100, textAlignVertical: "center" }
          ]}
        >
          Item
        </Text>

        <Text
          style={[
            styles.boxBorder,
            { width:100, textAlignVertical: "center" }
          ]}
        >
          Unit Price
        </Text>
        <Text
          style={[
            styles.boxBorder,
            { width: 100, textAlignVertical: "center" }
          ]}
        >
          Quantity
        </Text>
        <Text
          style={[
            styles.boxBorder,
            {width: 100, textAlignVertical: "center" }
          ]}
        >
          Discount
        </Text>
        <Text
          style={[
            styles.boxBorder,
            {width: 100, textAlignVertical: "center" }
          ]}
        >
          Tax
        </Text>

        <Text
          style={[
            styles.boxBorder,
            { width: 100, textAlignVertical: "center" }
          ]}
        >
          Sub Total
        </Text>
      </View>
    );
  };

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

      <View
        style={{
          flexDirection: "row"
        }}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            console.log("hello");
            // AsyncStorage.setItem("quote_id", JSON.stringify(item.quote_id));
            //navigation.navigate("QuotesDetails", {quoteIdFromItem:item.quote_id });
            console.log("world");
          }}
          style={{ flexDirection: "row" }}
        >
          <Text style={{ fontSize: 15, padding: 5 }}>{item.event_name}</Text>

          <Text style={{ fontSize: 15, padding: 5 }}>{item.amount}</Text>

          <Text style={{ fontSize: 15, padding: 5 }}>
            {item.milestone_type}
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

  const renderItem1 = ({ item }) => {
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

      <View style={{ flexDirection: "row" }}>
        <Text style={[styles.boxInnerBorder, { width: "25%" }]}>
          {item.event_name}
        </Text>
        <Text style={[styles.boxInnerBorder, { width: "25%" }]}>
          {item.amount}
        </Text>
        <Text style={[styles.boxInnerBorder, { width: "25%" }]}>
          {item.milestone_type}
        </Text>
        <Text style={[styles.boxInnerBorder, { width: "25%"}]}>
          {item.recpayment_id}
        </Text>
        {/* <Text style={[styles.boxInnerBorder, { width: 120 }]}>
             {item.tax}
           </Text>    
       <Text style={[styles.boxInnerBorder, { width: 120 }]}>
       {item.tax} 
     </Text>*/}
      </View>
      /*  </TouchableOpacity> */
    );
  };

  return (
    <View style={styles.container}>
        <Loader loading={loading} />
      <CommonToolbar toolbarTitle={"Quotes Details"} navigation={navigation} />
      <Text style={{ style: "bold", fontSize: 20, marginLeft: "3%" }}>
        Quotes {data.cont_name} {data.cont_lname}
      </Text>

      <View
        style={{
          height: "12%",
          width: "95%",
          backgroundColor: "gray",
          margin: "3%"
        }}
      >
        <ScrollView>
          <Text>
            {data.cont_name} {data.cont_lname}
          </Text>
          <Text
            style={{
              alignSelf: "flex-start"
            }}
          >
            Grand total :{data.total_amout}
          </Text>
          <Text>{data.primary_email}</Text>

          <Text>owner:{data.owner}</Text>
          <Text>QuotesStart:{data.quote_date}</Text>
          <Text
            style={{
              alignSelf: "flex-end"
            }}
          >
            QuotesEnd:{data.created_on}
          </Text>
        </ScrollView>
      </View>
      <Text style={{ style: "bold", fontSize: 20, marginLeft: "3%" }}>
        Details{" "}
      </Text>

      <View
        style={{
          height: "35%",
          width: "100%"
        }}
      >
        <ScrollView>
          <ScrollView style={{ margin: 10 }} horizontal={true}>
            <FlatList
              style={{
                margin: 10
              }}
              // stickyHeaderIndices={[ 6, 13]}
              ListHeaderComponent={renderScrollView()}
              stickyHeaderIndices={[0]}
              data={details}
              //renderItem={(item, index) => {renderItem2(item, index)}}
              renderItem={renderItem2}
              keyExtractor={(item) => {
                item.id + "";
              }}
            />
          </ScrollView>

        {/*   <Popover
            from={touchable}
            isVisible={visible2}
            onRequestClose={() => setVisible2(false)}
            verticalOffset={20}
            popoverStyle={{} }
            // placement={"right"}
          >
            <View>
              <TouchableOpacity
                onPress={() => {
                  setEditVisible(true);
                }} 

                //style={[styles.boxInnerBorder, { width: 120}]}
              >
                <Text>Edit</Text>
              </TouchableOpacity>

              <Text>Delete</Text>

              <TouchableOpacity
                onPress={() => {
                  setFormVisible(true);
                  /*  console.log("CustomerId:-",CustomerId);
            console.log("FormId:-",FormId);
            console.log("DetailID:-",DetailID);
            console.log("quotes ID:-",quotes); 
                }}

                //style={[styles.boxInnerBorder, { width: 120}]}
              >
                <Text>Form</Text>
              </TouchableOpacity>
              {/*   //  <Text>Recommended</Text> }
              {ProductData.map((item, index) =>
                item.product_id === ProductID
                  ? item.variations
                    ? item.variations.map((variation, index) =>
                        variation.variation_id === VariantionID
                          ? variation.recommended_products
                            ? variation.recommended_products.map(
                                (recommendedProduct, index) => {
                                  // setRefineProductid( recommendedProduct[index]);
                                  //]);
                                  return (
                                    <View>
                                      <TouchableOpacity
                                        onPress={() => {
                                          setRecommendedVisible(true);
                                          refined();
                                          /*  console.log("CustomerId:-",CustomerId);
            console.log("FormId:-",FormId);
            console.log("DetailID:-",DetailID);
            console.log("quotes ID:-",quotes); 
                                        }}
                                      >
                                        <Text>Recommended</Text>
                                      </TouchableOpacity>
                                    </View>
                                  );
                                }
                              )
                            : null
                          : null
                      )
                    : null
                  : null
              )}
            </View>
          </Popover> */}

          {/* <FlatList
            data={details}
            renderItem={renderItem1}
            keyExtractor={item => item.id + ""}
            // horizontal={true}
          
          /> */}

          <Modal
          animationType={'slide'}
          transparent={true} 
          visible={visible2}
          onRequestClose={() => {
            setVisible2(false);
            console.log('Modal has been closed.');
          }}>
          <View style={styles.modalBackground} >
            <View style={styles.activityIndicatorWrapper2}>

           {/*  <View style={{ flexDirection: "row", marginTop: "-1%" }}> */}
                <View style={[styles.toolbar,{marginTop:"-5%"}] }>
                  <Text
                    style={{
                      color: "#fff",
                      
                      fontSize: 20,
                      alignSelf: "center",
                      marginLeft: "5%",
                      flex:1,
                    }}
                  >
                    Variations
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                      setVisible2(false);
                    }}
                  >
                    <Image
                      source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw5sm_tK-aXfZPbY_tLMs56mOgOxpaRaHn0nqI_sfgGn4cCE2mLB5Tvcc1EujQioE3b0E&usqp=CAU"
                      }}
                      style={styles.back}
                    />
                  </TouchableOpacity>
              {/*   </View> */}
              </View>

            <TouchableOpacity
          onPress={() => {
            setEditVisible(true);
            EDITAPI();
                   }}
          
                   //style={[styles.boxInnerBorder, { width: 120}]}
                  >
               <Text style={{fontSize:16,padding:15,justifyContent: 'center',alignItems: 'center'}}>Edit</Text>
              
              </TouchableOpacity> 
              <View style={styles.separator} />
              
            <TouchableOpacity
          onPress={() => {
            console.log("Delete API detail ID",detailid);
           deleteAPI(detailid);
          }}
          
                   //style={[styles.boxInnerBorder, { width: 120}]}
                  >
               <Text style={{fontSize:16,padding:15,justifyContent: 'center',alignItems: 'center' }}>Delete</Text>
              
              
        </TouchableOpacity>
        <View style={styles.separator}/>
               {details.map((item,index)=>(
   Editindex === index ?
  (
    
  item.crmform_data.map((item,index)=>(
    
    item.form_title === null ? null :(

     
    <TouchableOpacity     style={{width:"95%" ,
  // alignSelf: "center",
  alignItems: "center",
height: 50,
justifyContent: "center",
// padding:5
}}
onPress={() => {
 setFormVisible(true);
    setEditIndex(defaultIndex)
        }}
       
        
       >
<>
    <Text style={{fontSize:16,textAlignVertical: "center", textAlign:'center' }}>Form</Text>
    <View style={styles.separator} />
    </>  
      </TouchableOpacity>
    

)
  ))):null
          
   
                ) )}

   {/* 
               {ProductData.map((item, index) =>
                item.product_id === ProductID
                  ? item.variations
                    ? item.variations.map((variation, index) =>
                        variation.variation_id === VariantionID
                          ? variation.recommended_products                                
                            ? variation.recommended_products.map(
                                (recommendedProduct, index) => {
                                  // setRefineProductid( recommendedProduct[index]);
                                  //]);
                                //  setRefineProductid(recommendedProduct[index].product_id);
                                //    setrefineids(true);
                                    //setRecommendedProducts(tr
                                  
                                  return (
                                    <View>
                                      <TouchableOpacity

                                        onPress={() => {
                                          setRecommendedVisible(true);
                                          refined();
                                           
                                        }}
                                      >
                                        <Text>{recommendedProduct.product_id}</Text>
                                      </TouchableOpacity>
                                    </View>
                                  ); R
                                }
                              )
                            : null
                          : null
                      )
                    : null
                  : null
              )} */}
 
{/*  {ProductData.map((item, index) =>
 //console.log("product ID",ProductID),
                item.product_id === ProductID
                ? item.variations
                ? item.variations.map((variation, index) =>
                    
                        variation.variation_id === VariantionID?
                            
                        variation.recommended_products.length>0? 
                                           
                       // // refineProductid.length>0
                          <>
                           {console.log("Variation inside the loop ID", variation.variation_id)} 
                          
                                    <View>
                                      <TouchableOpacity

                                        onPress={() => {
                                          setRecommendedVisible(true);
                                          refined();
                                           
                                        }}
                                      >
                                          
                                        <Text style={{fontSize:16, padding:15,justifyContent: 'center',alignItems: 'center'}}>Recommended</Text>
                                        
                                      </TouchableOpacity>
                                    
                                    </View>
                            </>
                                   
                        : null

                        
                        :null):null
             
                : null                                      
  ) } */}
                
        {ProductData.map((item, index) =>
          ( (item.product_id === ProductID) ? (
            item.variations?
            item.variations.map((variation, index) =>
              variation.variation_id === VariantionID? 
              <>
               {/* <Text style={{fontSize:16, padding:15,justifyContent: 'center',alignItems: 'center'}}>Recommended</Text> */}


               <View>
                                      <TouchableOpacity

                                        onPress={() => {
                                          setRecommendedVisible(true);
                                          refined();
                                           
                                        }}
                                      >
                                          
                                        <Text style={{fontSize:16, padding:15,justifyContent: 'center',alignItems: 'center'}}>Recommended</Text>
                                        
                                      </TouchableOpacity>
                                    
                                    </View>
              </>

               
              
              :null    
            ):null
                    
            
            
            
          

          ):null



          )
        
        )
        }


                  </View>
          </View>
        </Modal> 

<Modal
  animationType={"slide"}
  transparent={true}
  visible={EditVisible}
  onRequestClose={() => {
    setEditVisible(false);
    console.log("Modal has been closed.");
  }}
>
  <View style={styles.modalBackground}>
    <View style={styles.activityIndicatorWrapper}>
    {/*   <View style={{ flexDirection: "row", marginTop: "-1%" }}> */}
        <View style={styles.toolbar}>
          <Text
            style={{
              color: "#fff",
              width: "10%",
              flex:1,
              fontSize: 20,
              alignSelf: "center",
              marginLeft: "5%"
            }}
          >
            Edit
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              setEditVisible(false);
            }}
          >
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgutRDlMRXvJnyyQ5G1F-U4MRlLjSbOumTaym_WtbNpKK0MCDQmbLQVWdPco93_lpd2oc&usqp=CAU"
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
  {/*     </View> */}

      <Text
        style={{
          color: "gray",
          fontSize: 16,
          alignSelf: "flex-start",
          marginLeft: "5%"
        }}
      >
        Item
      </Text>

      <TextInput
        style={{
          width: "90%",
          height: "7%",
          alignSelf: "center",
          borderColor: "black",
          borderWidth: 1,
          color: "black"
        }}
        placeholder={title}
        onChangeText={(e) => {}}
        value={title}
      />

      {variation?
         <>
         <View>
    
         <SelectDropdown
      data={
        variationDropDown[0]==='' ? 
        variationDropDown.shift() : variationDropDown}
      onSelect={(selectedItem, index) => {
      getEDITdropdown(selectedItem);
      }}
      buttonStyle={{
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: "#000000",
        width: '90%',
        marginLeft: "-2%",
     //  padding:"4%"
      }}
      defaultButtonText="Variations..."
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
    
         </View>
         </>
        
        :null

      } 

      <Text
        style={{
          color: "gray",
          fontSize: 16,
          alignSelf: "flex-start",
          marginLeft: "5%"
        }}
      >
        Unit Price
      </Text>

      <TextInput
        style={{
          width: "90%",
          height: "7%",
          alignSelf: "center",
          borderColor: "black",
          borderWidth: 1
        }}
        placeholder={price}
        onChangeText={(e) => {
          // setEmail(e);
          //setErrortext(false)
        }}
        //value={email}
      />

      <Text
        style={{
          color: "gray",
          fontSize: 16,
          alignSelf: "flex-start",
          marginLeft: "5%"
        }}
      >
        Quantity
      </Text>

      <TextInput
        style={{
          width: "90%",
          height: "7%",
          alignSelf: "center",
          borderColor: "black",
          borderWidth: 1
        }}
        placeholder={qty}
        onChangeText={(e) => {
          // setEmail(e);
          //setErrortext(false)
        }}
        //value={email}
      />

      <Text
        style={{
          color: "gray",
          fontSize: 16,
          alignSelf: "flex-start",
          marginLeft: "5%"
        }}
      >
        Discount
      </Text>

      <TextInput
        style={{
          width: "90%",
          height: "7%",
          alignSelf: "center",
          borderColor: "black",
          borderWidth: 1
        }}
        placeholder={discount}
        onChangeText={(e) => {
          // setEmail(e);
          //setErrortext(false)
        }}
        //value={email}
      />

      <Text
        style={{
          color: "gray",
          fontSize: 16,
          alignSelf: "flex-start",
          marginLeft: "5%"
        }}
      >
        Tax
      </Text>

      <TextInput
        style={{
          width: "90%",
          height: "7%",
          alignSelf: "center",
          borderColor: "black",
          borderWidth: 1
        }}
        placeholder={tax}
        onChangeText={(e) => {
          // setEmail(e);
          //setErrortext(false)
        }}
        //value={email}
      />

      <Text
        style={{
          color: "gray",
          fontSize: 16,
          alignSelf: "flex-start",
          marginLeft: "5%"
        }}
      >
        Sub Total
      </Text>

      <TextInput
        style={{
          width: "90%",
          height: "7%",
          alignSelf: "center",
          borderColor: "black",
          borderWidth: 1
        }}
        placeholder={tax}
        onChangeText={(e) => {
          // setEmail(e);
          //setErrortext(false)
        }}
        //value={email}
      />

      <TouchableOpacity
        alignSelf="center"
        style={{
          width: "75%",
          height: "7%",
          justifyContent: "center",
          alignItems: "center"

        }}
        onPress={() => {
          //setEditVisible2(false);
         // recommendedUpdateDetails("");
        }}
      >
        <Text
          style={{
            backgroundColor: "#1d2951",
            color: "white",
            padding: 5
          }}
        >
          Update
        </Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>

<Modal
  animationType={"slide"}
  transparent={true}
  visible={EditVisible2}
  onRequestClose={() => {
    setEditVisible2(false);
    console.log("Modal has been closed.");
  }}
>
  <View style={styles.modalBackground}>
    <View style={styles.activityIndicatorWrapper}>
      {/* <View style={{ flexDirection: "row", marginTop: "-1%" }}> */}
        <View style={styles.toolbar}>
          <Text
            style={{
              color: "#fff",
              width: "10%",
              fontSize: 20,flex:1,
              alignSelf: "center",
              marginLeft: "5%"
            }}
          >
            Recommendeds
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              setEditVisible2(false);
              recommendedEdit("");
            }}
          >
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgutRDlMRXvJnyyQ5G1F-U4MRlLjSbOumTaym_WtbNpKK0MCDQmbLQVWdPco93_lpd2oc&usqp=CAU"
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
       {/*  </View> */}
      </View>

      <Text
        style={{
          color: "gray",
          fontSize: 16,
          alignSelf: "flex-start",
          marginLeft: "5%"
        }}
      >
        Item
      </Text>

      <TextInput
        style={{
          width: "90%",
          height: "7%",
          alignSelf: "center",
          borderColor: "black",
          borderWidth: 1,
          color: "black"
        }}
        placeholder={title1}
        onChangeText={(e) => {}}
        value={title1}
      />

     {/*  {variation1?
         <>
         <View>
    
         <SelectDropdown
      data={variationDropDown1}
      onSelect={(selectedItem, index) => {
      
      }}
      buttonStyle={{
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: "#000000",
        width: '45%',
        margin: 10,
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
    
         </View>
         </>
        
        :null

      }  */}

      <Text
        style={{
          color: "gray",
          fontSize: 16,
          alignSelf: "flex-start",
          marginLeft: "5%"
        }}
      >
        Unit Price
      </Text>

      <TextInput
        style={{
          width: "90%",
          height: "7%",
          alignSelf: "center",
          borderColor: "black",
          borderWidth: 1
        }}
        placeholder={price1}
        onChangeText={(e) => {
           setUpdatePrice(e);
          //setErrortext(false)
        }}
        value={updatePrice}
      />

      <Text
        style={{
          color: "gray",
          fontSize: 16,
          alignSelf: "flex-start",
          marginLeft: "5%"
        }}
      >
        Quantity
      </Text>

      <TextInput
        style={{
          width: "90%",
          height: "7%",
          alignSelf: "center",
          borderColor: "black",
          borderWidth: 1
        }}
        placeholder={qty1}
        onChangeText={(e) => {
           setUpdateQuantity(e);
          //setErrortext(false)
        }}
        value={updateQuantity}
      />

      <Text
        style={{
          color: "gray",
          fontSize: 16,
          alignSelf: "flex-start",
          marginLeft: "5%"
        }}
      >
        Discount
      </Text>

      <TextInput
        style={{
          width: "90%",
          height: "7%",
          alignSelf: "center",
          borderColor: "black",
          borderWidth: 1
        }}
        placeholder={discount1}
        onChangeText={(e) => {
        setUpdateDiscount(e);
          //setErrortext(false)
        }}
        value={updateDiscount}
      />

      <Text
        style={{
          color: "gray",
          fontSize: 16,
          alignSelf: "flex-start",
          marginLeft: "5%"
        }}
      >
        Tax
      </Text>

      <TextInput
        style={{
          width: "90%",
          height: "7%",
          alignSelf: "center",
          borderColor: "black",
          borderWidth: 1
        }}
        placeholder={tax1}
        onChangeText={(e) => {
          setUpdateTax(e);
          //setErrortext(false)
        }}
        value={updateTax}
      />
 {/*
      <Text
        style={{
          color: "gray",
          fontSize: 16,
          alignSelf: "flex-start",
          marginLeft: "5%"
        }}
      >
        Sub Total
      </Text>

      <TextInput
        style={{
          width: "90%",
          height: "7%",
          alignSelf: "center",
          borderColor: "black",
          borderWidth: 1
        }}
        placeholder={tax1}
        onChangeText={(e) => {
          // setEmail(e);
          //setErrortext(false)
        }}
        //value={email}
      /> */}

      <TouchableOpacity
        alignSelf="center"
        style={{
          width: "75%",
          height: "7%",
          justifyContent: "center",
          alignItems: "center"
        }}
        onPress={() => {
        recommendedUpdateDetails(); 
        }}
      >
        <Text
          style={{
            backgroundColor: "#1d2951",
            color: "white",
            padding: 5
          }}
        >
          Update
        </Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>


        </ScrollView>
      </View>
      <TouchableOpacity
        style={{
          marginLeft: "3%"
        }}
        onPress={() => {
          recommendedEdit()
          setVisible(true);
        }}
      >
        <Text
          style={{
            backgroundColor: "#252c4a",
            color: "white",
            justifyContent: "center",
            alignItems: "center",
           width: 100,
            padding: "1.5%",
          
            //alignSelf:"center",
          }}
        >
          Add
        </Text>
      </TouchableOpacity>

      <Modal
        animationType={"slide"}
        transparent={true}
        visible={visible}
         onRequestClose={() => {
          
          setAttributeColorPresent(false);
          setAttributeSizePresent(false);
          console.log("Modal has been closed.");
          setVisible(false);
        }}
        /* onbackPress={() => {
          setAttributeColorPresent(false);
          setAttributeSizePresent(false);
          console.log("Modal has been closed.");
          setVisible(false);
        }} */
      >
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper}>
            {/* <View style={{ flexDirection: "row", }}> */}
              <View style={[styles.toolbar,{marginTop:"-5%"}] }>
                <Text
                  style={{
                    color: "#fff",
                    // width: "auto",
                    flex:1,
                    fontSize: 20,
                    alignSelf: "center",
                    marginLeft: "5%"
                  }}
                >
                  Add
                </Text>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    setVisible(false);
                    setAttributeColorPresent(false);
                    setAttributeSizePresent(false);
                    setVaritionDropDown2(abc);
                  }}
                >
                  <Image
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgutRDlMRXvJnyyQ5G1F-U4MRlLjSbOumTaym_WtbNpKK0MCDQmbLQVWdPco93_lpd2oc&usqp=CAU"
                    }}
                    style={styles.back}
                  />
                </TouchableOpacity>
                {/* </View>s */}
            </View>

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
              
            <Text
              style={{
                color: "gray",
                fontSize: 16,
                alignSelf: "flex-start",
                marginLeft: "5%"
              }}
            >
              Item
            </Text>
            
        
            <SelectDropdown
      data={variationDropDown2}
      onSelect={(selectedItem, index) => {
      // console.log("SELECTED ITEM IN DROPWOWN => ",selectedItem +"index -> "+index)
      getSelectedItemProductId(selectedItem)
      setAttributeColorPresent(false);
      setAttributeSizePresent(false);

      }}
      buttonStyle={{
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: "#000000",
        width: '90%',
        marginLeft: "-2%",
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
     getSelectedItemColor(selectedItem)
      callWithToken21(selectedItem)
      }}
      buttonStyle={{
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: "#000000",
        width: '90%',
        marginLeft: "-2%",
        //padding:"4%"
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
       getSelectedItemSize(selectedItem)
       callWithToken22(selectedItem);
      }}
      buttonStyle={{
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: "#000000",
        width: '90%',
        marginLeft: "-2%",
        //padding:"4%"
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

           {/*
                 dropdown lagana hai 
           
           <TextInput
              style={{
                width: "90%",
                height: "7%",
                alignSelf: "center",
                borderColor: "black",
                borderWidth: 1
              }}
              placeholder="Item"
              onChangeText={(e) => {}}
              //value={email}
            /> */}

            <Text
              style={{
                color: "gray",
                fontSize: 16,
                alignSelf: "flex-start",
                marginLeft: "5%"
              }}
            >
              Unit Price
            </Text>

            <TextInput
              style={{
                width: "90%",
                height: "7%",
                alignSelf: "center",
                borderColor: "black",
                borderWidth: 1
              }}
              placeholder="1"
              onChangeText={(e) => {
                //setAddPrice(e);
                //setErrortext(false)
              }}
              value={selectedProductPrice}
            />

            <Text
              style={{
                color: "gray",
                fontSize: 16,
                alignSelf: "flex-start",
                marginLeft: "5%"
              }}
            >
              Quantity
            </Text>

            <TextInput
              style={{
                width: "90%",
                height: "7%",
                alignSelf: "center",
                borderColor: "black",
                borderWidth: 1
              }}
              placeholder="Quantity"
              onChangeText={(e) => {
                setAddQuantity(e);
                //setErrortext(false)
              }}
              value={AddQuantity}
            />

            <Text
              style={{
                color: "gray",
                fontSize: 16,
                alignSelf: "flex-start",
                marginLeft: "5%"
              }}
            >
              Discount
            </Text>

            <TextInput
              style={{
                width: "90%",
                height: "7%",
                alignSelf: "center",
                borderColor: "black",
                borderWidth: 1
              }}
              placeholder="Discount"
              onChangeText={(e) => {
                setAddDiscount(e);
                // setEmail(e);
                //setErrortext(false)
              }}
              value={AddDiscount}
            />

            <Text
              style={{
                color: "gray",
                fontSize: 16,
                alignSelf: "flex-start",
                marginLeft: "5%"
              }}
            >
              Tax
            </Text>

            <TextInput
              style={{
                width: "90%",
                height: "7%",
                alignSelf: "center",
                borderColor: "black",
                borderWidth: 1
              }}
              placeholder="Tax"
              onChangeText={(e) => {
                 setAddTax(e);
                //setErrortext(false)
              }}
               value={AddTax}
            />
{/*
            <Text
              style={{
                color: "gray",
                fontSize: 16,
                alignSelf: "flex-start",
                marginLeft: "5%"
              }}
            >
              Sub Total
            </Text>

            <TextInput
              style={{
                width: "90%",
                height: "7%",
                alignSelf: "center",
                borderColor: "black",
                borderWidth: 1
              }}
              placeholder="Sub Total"
              onChangeText={(e) => {
                // setEmail(e);
                //setErrortext(false)
              }}
              //value={email}
            />
 */}
            <TouchableOpacity
              alignSelf="center"
              onPress={() => {
                addDetails();
              }}
            >
              <Text
                style={{
                  backgroundColor: "#252c4a",
                  color: "white",
                  width: "100%",
                  padding: 5
                }}
              >
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Text
        style={{
          alignSelf: "flex-end",
          marginRight: "5%"
        }}
      >
        Sub Total:
      </Text>

      <Text style={{ style: "bold", fontSize: 20, marginLeft: "3%" }}>
        Payment Terms{" "}
      </Text>

      <View
        style={{
          height: "20%",
          width: "100%"
        }}
      >
        <View>
          <ScrollView horizontal={true} style={{ margin: 10 }}>
            {/* <FlatList
              data={invoices}
              renderItem={renderItem}
              keyExtractor={item => item.id + ""}
              // horizontal={true}
            /> */}

            <FlatList
              style={{
                margin: 10,
                padding: 5
              }}
              ListHeaderComponent={renderScrollView2()}
              data={invoices}
              renderItem={renderItem1}
            />
          </ScrollView>
        </View>
      </View>
      <TouchableOpacity
        style={{
          marginLeft: "3%"
        }}
        onPress={() => {
          setVisible1(true);
        }}
      >
        <Text
          style={{
            backgroundColor: "#252c4a",
            color: "white",
            width: "30%",
            padding: "1.5%"
          }}
        >
          Invoice Event
        </Text>
      </TouchableOpacity>

      <Modal
        animationType={"slide"}
        transparent={true}
        visible={visible1}
        onRequestClose={() => {
          setVisible1(false);
          console.log("Modal has been closed.");
        }}
      >
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper}>{/* 
            <View style={{ flexDirection: "row", marginTop: "-3%" }}> */}
              <View style={[styles.toolbar,{marginTop:"-5%"}] }>
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
                  Invoice
                </Text>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    setVisible1(false);
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
            {/* </View> */}

            <Text
              style={{
                color: "gray",
                fontSize: 16,
                alignSelf: "flex-start",
                marginLeft: "5%"
              }}
            >
              Event Name
            </Text>

            <TextInput
              style={{
                width: "90%",
                height: "7%",
                alignSelf: "center",
                borderColor: "black",
                borderWidth: 1
              }}
              placeholder="Event Name"
              onChangeText={(e) => {}}
              //value={email}
            />

            <Text
              style={{
                color: "gray",
                fontSize: 16,
                alignSelf: "flex-start",
                marginLeft: "5%"
              }}
            >
              Amount
            </Text>

            <TextInput
              style={{
                width: "90%",
                height: "7%",
                alignSelf: "center",
                borderColor: "black",
                borderWidth: 1
              }}
              placeholder="Amount"
              onChangeText={(e) => {
                // setEmail(e);
                //setErrortext(false)
              }}
              //value={email}
            />

            <Text
              style={{
                color: "gray",
                fontSize: 16,
                alignSelf: "flex-start",
                marginLeft: "5%"
              }}
            >
              MileStone
            </Text>

            <TextInput
              style={{
                width: "90%",
                height: "7%",
                alignSelf: "center",
                borderColor: "black",
                borderWidth: 1
              }}
              placeholder="MileStone"
              onChangeText={(e) => {
                // setEmail(e);
                //setErrortext(false)
              }}
              //value={email}
            />

            <Text
              style={{
                color: "gray",
                fontSize: 16,
                alignSelf: "flex-start",
                marginLeft: "5%"
              }}
            >
              Payment Terms
            </Text>

            <TextInput
              style={{
                width: "90%",
                height: "7%",
                alignSelf: "center",
                borderColor: "black",
                borderWidth: 1
              }}
              placeholder="Payment Terms"
              onChangeText={(e) => {
                // setEmail(e);
                //setErrortext(false)
              }}
              //value={email}
            />

            <TouchableOpacity alignSelf="center">
              <Text
                style={{
                  backgroundColor: "#252c4a",
                  color: "white",
                  width: "100%",
                  padding: 5
                }}
              >
                Save
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
        </View>
      </Modal>
    </View>
  );
};

export default QuotesDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  boxBorder: {
    width: "auto",
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#000"
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
    fontSize: 14
  },
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#00000040"
  },
  modalBackground2: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#00000040"
  },

  activityIndicatorWrapper2: {
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


  activityIndicatorWrapper: {
    backgroundColor: "#FFFFFF",
    height: Dimensions.get("window").width + 150,
    width: Dimensions.get("window").width - 40,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    marginRight: 15
  },

  modalBackground1: {
    flex: 1,
    height: "auto",
    alignItems: "center",
    marginTop: "-15%",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#00000040"
  },
  activityIndicatorWrapper1: {
    backgroundColor: "#FFFFFF",
    height: "auto",
    width: Dimensions.get("window").width - 230,
    // width: "auto",
    // marginTop:"",
    display: "flex",
    alignItems: "center",
    alignSelf: "flex-end",
    justifyContent: "space-around"
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

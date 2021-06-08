import React,{useState,useEffect} from 'react';
import { Card,Container,Header,Left,Icon } from 'native-base';
import { Dimensions,StyleSheet, Text, View,Button,TouchableOpacity,TextInput,StatusBar,KeyboardAvoidingView,Keyboard} from "react-native"
import { useNavigation } from '@react-navigation/native';
import KeyboardSpacer from 'react-native-keyboard-spacer';



import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font';
var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;


import {NavigationContainer} from "@react-navigation/native"
import {createDrawerNavigator,DrawerActions} from "@react-navigation/drawer"
import {createStackNavigator} from "@react-navigation/stack"  
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs"
import {createMaterialTopTabNavigator, MaterialTopTabBar} from "@react-navigation/material-top-tabs"

import loggedIn from "./components/loggedIn"





const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const BottomTab= createMaterialBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();




export default function App(props) {

  const [keyOpen,setKeyOpen] = useState(false)

 
  let [fontsLoaded] = useFonts({
    "bpg-banner-caps-webfont" : require('./assets/fonts/bpg-banner-caps-webfont.ttf')
  });
  

  

  createLoginStack = (props) =>(
 
    
      <View style={styles.container}>
        <StatusBar  backgroundColor="#EA7A9A"  />
      
        <Card style={styles.card}>
          <View styles={styles.ITWEBlog}>
              <Text style={styles.ITWEB}>IT<Text style={{color:"black"}}>WEB</Text>.GE</Text>
              <Text style={{textAlign:"center",color:"white",fontFamily:"bpg-banner-caps-webfont"}}>ავტორიზაცია</Text>
          </View>
          <View style={styles.inputView}>
            <View style={styles.loginInput}>
              <View style={styles.txtView}>
              <Text style={styles.inputTxt}> ელ.ფოსტა</Text>
              </View>
              <TextInput style={styles.loginInputtxt} placeholder="ელ.ფოსტა"/>
            </View>
            <View style={styles.loginInput}>
            <View style={styles.txtView}>
              <Text style={styles.inputTxt}> პაროლი</Text>
              </View>
              <TextInput style={styles.loginInputtxt} placeholder="პაროლი"/>
            </View>
            <View style={styles.loginBtnView}>
              <TouchableOpacity style={styles.loginBtnOpacity} onPress={()=> props.navigation.navigate(' ')}>
                <Text style={styles.loginBtnTxt}>ავტორიზაცია</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Card> 
        
        <KeyboardSpacer topSpacing={-500}/>
      </View>
      
     
  )
  
  if (!fontsLoaded) {
    return <AppLoading />;
  }else{
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login Page" children={createLoginStack}
          options={{
            header: () => null
          }}/>
        <Stack.Screen
        options={{
          header : () => null
        }}
        name =" " component={loggedIn}/>
      </Stack.Navigator>
      </NavigationContainer>
      
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    position: "relative"
  },
  card:{
    borderRadius:15,
    height:deviceHeight*6/10,
    width:deviceWidth*8/10,
    backgroundColor: "#EA7A9A",
    alignItems: 'center',
    
  },
  logOut:{
    marginHorizontal:10,
    padding:10,
    color:"white",
    backgroundColor:"#EA7A9A",
    borderRadius:20
  },
  ITWEB:{
    color:"white",
    fontSize:30,
    marginVertical:20
  },
  inputView:{
    width:"100%",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  loginInput:{
    width:"100%",
    justifyContent:"center",
    alignItems: 'center',
  },
  loginInputtxt:{
    height:40,
    backgroundColor:"white",
    width:"80%",
    borderRadius: 25,
    fontFamily: "bpg-banner-caps-webfont",
    paddingLeft: 20
  },
  inputTxt:{
    color:"white",
    marginTop:15,
    marginBottom:5,
    fontFamily: "bpg-banner-caps-webfont",
  },
  ITWEBlog:{
  width:"100%",
  height:"30%",
  },
  loginBtnView:{
    marginTop:20,
    width:"100%",
    justifyContent:"center",
    alignItems: 'center',
  },
  loginBtnOpacity:{
    borderRadius:25,
    width:"80%",
    height: 40,
    backgroundColor:"white",
    justifyContent:"center",
    alignItems: 'center',
    color: "#EA7A9A"
  },
  loginBtnTxt:{
    color: "#EA7A9A",
    fontFamily: "bpg-banner-caps-webfont",
  },
  txtView:{
    width:"80%"
  }
});

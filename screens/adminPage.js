import React from 'react';
import { Dimensions,StyleSheet, Text, View,Button,TouchableOpacity,TextInput,StatusBar,KeyboardAvoidingView,Keyboard} from "react-native"
import { Card,Container,Header,Left,Icon } from 'native-base';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import HeaderContent from "../components/HeaderContent"


var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;


const profilePage = (props) => (
    <View style={styles.container}>
        <StatusBar  backgroundColor="#EA7A9A"  />
        <HeaderContent {...props}/>
        <View style={{width:"100%",height:"100%",alignItems:"center",marginTop:0}}>
        <Card style={styles.card}>
          <View styles={styles.ITWEBlog}>
              <Text style={styles.ITWEB}>ადმინები</Text>
          </View>
          <View style={styles.inputView}>
          <View style={styles.loginInput}>
              <View style={styles.txtView}>
              <Text style={styles.inputTxt}> სახელი</Text>
              </View>
              <TextInput style={styles.loginInputtxt} placeholder="სახელი"/>
            </View>
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
            <View style={styles.loginInput}>
            <View style={styles.txtView}>
              <Text style={styles.inputTxt}> კოდი პაროლის შესაცვლელად</Text>
              </View>
              <TextInput style={styles.loginInputtxt} placeholder="კოდი"/>
            </View>
            <View style={styles.loginBtnView}>
              <TouchableOpacity style={styles.loginBtnOpacity} onPress={()=> props.navigation.navigate(' ')}>
                <Text style={styles.loginBtnTxt}>დამატება</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Card>
        </View>
        <KeyboardSpacer topSpacing={-500}/>
      </View>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    card:{
        marginTop:15,
      borderRadius:15,
      height:deviceHeight*7.6/10,
      width:deviceWidth*8.5/10,
      backgroundColor: "white",
      alignItems: 'center',
    },
    logOut:{
      marginHorizontal:10,
      padding:10,
      color:"black",
      backgroundColor:"#EA7A9A",
      borderRadius:20
    },
    ITWEB:{
      color:"black",
      fontSize:20,
      marginVertical:10
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
      borderColor:"#EA7A9A",
      borderWidth:1,
      fontFamily: "bpg-banner-caps-webfont",
      paddingLeft: 20
    },
    inputTxt:{
      color:"black",
      marginTop:15,
      marginBottom:5,
      fontFamily: "bpg-banner-caps-webfont",
    },
    ITWEBlog:{
    width:"100%",
    alignItems:"flex-start",
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
      backgroundColor:"#EA7A9A",
      justifyContent:"center",
      alignItems: 'center',
    },
    loginBtnTxt:{
      color: "white",
      fontFamily: "bpg-banner-caps-webfont",
    },
    txtView:{
      width:"80%"
    }
  });
  

export default profilePage;

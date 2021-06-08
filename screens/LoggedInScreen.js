import React,{useState}from 'react';
import {FlatList,Dimensions,Text, View,TextInput, StyleSheet,TouchableOpacity,StatusBar,Image, Keyboard, Alert } from 'react-native';
import { Card,Container,Header,Left,Icon,Right,Body,Title } from 'native-base';
import RNPickerSelect from "react-native-picker-select";
import PropTypes from 'prop-types'



import KeyboardSpacer from 'react-native-keyboard-spacer';

import  HeaderContent from "../components/HeaderContent";


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;



const LoggedInScreen = (props) => {

    const [inputText,setInputText] = useState('')
    const [inputTextArray,setInputTextArray] = useState([])
    const [EditView,setEditView] = useState(false)
    const [pickerText,setPickerText] = useState("სტატუსი")
    const [exactArray,setExactArray] = useState([])


    const object={
        "backgroundColor": "red",
        "data": "ჯდჯდჯკდკდ",
        "key": "0.37776586818138747",
      }
   const colors = (txt)=> {
           switch(txt){
            case "მიმდინარე" :
                return "#1EA7C5";
            case "სამომავლო":
                return "#2BC155";
            case "დასრულებული":
                return "#FF6D4D";
            case "გაუქმებული":
                return "#F94687";
        }
    }

    const addButtonChange = () =>{
        if(inputText.length > 0 ){
            setInputTextArray((inputTextArray)=> [...inputTextArray,
                {key : Math.random().toString(), data: inputText, backgroundColor : colors(pickerText) }])
            setInputText('')
            Keyboard.dismiss()
        } else{
            Alert.alert(
                "გთხოვთ მიუთითოთ პროექტის დასახელება",
                "",
                [
                    {
                        text: 'დახურვა',
                        onDismiss: () =>{}
                    }
                    
                ]
            )
        }
        
        
    }
    const updateButtonChange =() =>{
        setEditView(false)
        inputTextArray.map(obj => obj.key === exactArray.item.key && 
            Object.assign(obj, {...exactArray.item,data: inputText, backgroundColor : colors(pickerText)}))
            setInputText('')
            setPickerText("სტატუსი")
    }

    const removeItem = (id) => {
    Alert.alert(
        "ნამდვილად გსურთ პროექტის წაშლა ?",
        "",
        [
            {
                text: 'კი',
                onPress: () =>   {
                let newArray = inputTextArray.filter((item) => item.key != id.item.key)
                setInputTextArray(newArray)
            }
            },
            {
                text: 'არა',
                onDismiss: () =>{}
            }
            
        ]
    )
    }

    return(
        <Container style={{flex:1}} >
           <HeaderContent {...props}/>
            <View style={styles.cardView}>
                {EditView ? 
                <Card style={styles.card}>
                <View style={styles.screen}>
                    <View style={{flexDirection:"row",height:"100%",width:"100%",}}>
                        <View style={{width:"80%",justifyContent: 'center',alignItems:"center",}}>
                            <View style={styles.viewQuarterLeft}>
                            <TextInput placeholderTextColor={'black'} 
                             value={inputText}
                             onChangeText={(e)=> setInputText(e)} 
                             style={styles.inputTxt} 
                             placeholder={exactArray.item.data}/>
                            </View>
                            <View style={styles.pickerViewStyle}>
                            <RNPickerSelect
                                onValueChange={(value)=>{
                                    setPickerText(value)
                                }}
                                style={{placeholder:{color:"black",opacity:0.6},inputAndroid: {
                                    color: 'black',opacity:0.6
                                    },}}
                                 placeholder={{
                                    label: pickerText,
                                    value: pickerText,
                                }}
                                    items={[
                                        { label: "მიმდინარე", value: "მიმდინარე"},
                                        { label: "სამომავლო", value: "სამომავლო" },
                                        { label: "დასრულებული", value: "დასრულებული" },
                                        { label: "გაუქმებული", value: "გაუქმებული" },
                                    ]}
                                />
                            </View>
                        </View>
                        <View style={{width:"20%",height:"100%",justifyContent:"center",alignItems:"center"}}>
                            <View style={{...styles.btnTxtView,backgroundColor:"#FF6D4D"}}>
                                    <TouchableOpacity onPress = {updateButtonChange}>
                                        <Icon style={{color:"white"}}type="FontAwesome" android="exchange" ios="exchange"/>
                                    </TouchableOpacity>
                                </View> 
                            </View>
                        </View>
                </View>
                <KeyboardSpacer topSpacing={-500}/>
            </Card> :
            <Card style={styles.card}>
            <View style={styles.screen}>
                <View style={{flexDirection:"row",height:"100%",width:"100%",}}>
                    <View style={{width:"80%",justifyContent: 'center',alignItems:"center",}}>
                        <View style={styles.viewQuarterLeft}>
                        <TextInput placeholderTextColor={'black'} value={inputText} onChangeText={(e)=> setInputText(e)} style={styles.inputTxt} placeholder="ახალი პროექტი"/>
                        </View>
                        <View style={styles.pickerViewStyle}>
                        <RNPickerSelect
                            onValueChange={(value)=>{
                                setPickerText(value)
                            }}
                            style={{placeholder:{color:"black",opacity:0.6},inputAndroid: {
                                color: 'black',opacity:0.6
                                },}}
                             placeholder={{
                                label: pickerText,
                                value: pickerText,
                            }}
                                items={[
                                    { label: "მიმდინარე", value: "მიმდინარე"},
                                    { label: "სამომავლო", value: "სამომავლო" },
                                    { label: "დასრულებული", value: "დასრულებული" },
                                    { label: "გაუქმებული", value: "გაუქმებული" },
                                ]}
                            />
                        </View>
                    </View>
                    <View style={{width:"20%",height:"100%",justifyContent:"center",alignItems:"center"}}>
                        <View style={styles.btnTxtView}>
                                <TouchableOpacity onPress = {addButtonChange}>
                                    <Icon style={{color:"white"}}type="Ionicons" android="add-circle-sharp" ios="add-circle-sharp"/>
                                </TouchableOpacity>
                            </View> 
                        </View>
                    </View>
            </View>
            <KeyboardSpacer topSpacing={-500}/>
        </Card> }
            
                <Card style={styles.CardList}>
                            <FlatList
                            style={styles.scrollView}
                            data={inputTextArray}
                            renderItem = {(itemData)=>(
                                <View  style={{...listItem.listItem,backgroundColor: itemData.item.backgroundColor}}>
                                <View style={styles.projectView}>
                                    <Text style={{color:"white",fontFamily: "bpg-banner-caps-webfont"}}>
                                        {itemData.item.data}
                                    </Text>
                                </View>
                               <View style={styles.btnView}>
                                <TouchableOpacity onPress={()=>{setEditView(true),setExactArray(itemData)}}>
                                <Icon  style={styles.icon} ios='edit' android="edit" type="AntDesign"  size={30} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=> removeItem(itemData)}>
                                <Icon style={styles.icon} ios='delete' android="delete" type="AntDesign"  size={30} />
                                </TouchableOpacity>
                                
                               </View>
                            </View>
                            )}
                            />
                </Card>
            </View>
          
            
            
            
        </Container>
        
    );
}

const listItem = StyleSheet.create({
    listItem:{
        flexDirection:"row",
        marginVertical:10,
        justifyContent: 'center',
        width:"100%",
        padding:10,
        borderRadius:15,
    },
});

const styles=StyleSheet.create({
    screen:{
        flex:1,
        height:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    cardView:{
        marginVertical:deviceHeight*2.3/10,
        height:deviceHeight*4/10,
        width:"100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    card:{
    elevation:5,
    borderRadius:15,
    borderWidth:1,
    borderColor:"#EA7A9A",
    height:"40%",
    width:"95%",
    alignItems: 'center',
    justifyContent:"center"
    },
    CardList:{
        marginVertical:deviceHeight*1.8/10,
        height:"160%",
        width:"95%",
        elevation:5,
        justifyContent: 'center',
        alignItems:"center",
        borderRadius:15,
        borderWidth:1,
        borderColor:"#EA7A9A",
    },
    viewQuarterLeft:{
        height:"50%",
        justifyContent: 'center',
        alignItems: 'center',
        width:"100%"
    },
    viewQuarterRight:{
        height:"50%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputTxt:{
        borderBottomWidth: 1,
        borderColor:"#EA7A9A",
        borderRadius:10,
        fontSize:16.5,
        width:"90%",
        height:"80%",
        padding:8,
        opacity:0.6
    },
    btnText:{
         color: "white"
    },
    btnTxtView:{
        alignItems:"center",
        justifyContent:"center",
        fontFamily: "bpg-banner-caps-webfont",
        backgroundColor: "#EA7A9A",
        borderRadius:10,
        padding:10,
        height:"90%"
    },
    btnView:{
        justifyContent: 'center',
        alignItems: 'center',
        height:"45%",
        width:"100%",
        textAlign:"left",
    },
    
    scrollView:{
        width:"90%"
    },
   
    icon:{
        color:"white"
    },
    btnView:{
        flexDirection:"row",
        paddingHorizontal:10,
        width:"30%",
        alignItems:"center",
        justifyContent:"space-between"
    },
    projectView:{
        width:"70%",
        justifyContent: 'center',
    },
    pickerStyle:{
        borderWidth:1,
        borderColor:"red",
        justifyContent: 'center',
        alignItems:"center"
       },
    pickerViewStyle:{
        justifyContent: 'center',
        alignItems:"center",
        borderRadius:10,
        width:"90%",
        height:"40%"
    }
})


export default LoggedInScreen;

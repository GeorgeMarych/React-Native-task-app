import React from 'react';
import { Dimensions,Text, View, StyleSheet,StatusBar,TouchableOpacity} from 'react-native';
import { Card,Container,Header,Left,Icon,Right,Body,Title } from 'native-base';
import {DrawerActions} from '@react-navigation/native';

const deviceHeight = Dimensions.get('window').height;

const HeaderContent = (props) => (
   
        <Header style={styles.header}>
        <StatusBar  backgroundColor="#EA7A9A"  />
            <Left style={styles.left}>
                <TouchableOpacity onPress={() => props.navigation.openDrawer()}> 
                <Icon style={styles.icon} ios='menu' android="menu" type="Ionicons"  size={30} />
                </TouchableOpacity>
            </Left>
            <Right style={styles.right}>
                <TouchableOpacity  onPress={() => props.navigation.navigate("Profile",{...props})}> 
                <View style={styles.touch}>
                    <Icon style={styles.icon} ios='account' android="account" type="MaterialCommunityIcons"  size={30} />
                    <Text style={styles.txt}>გიორგი ჯირკველიშვილი</Text>
                </View>
                </TouchableOpacity>
            </Right>
        </Header>
   
    
);

const styles= StyleSheet.create({
    header:{
        backgroundColor: "white",
      
    },
    left : {
        flex:1,
        justifyContent: 'center',
        marginLeft: 10,
        height:30,
    },
    right:{
        flex:3,
        borderWidth:1,
        borderRadius: 10,
        borderColor:"#EA7A9A",
        flexDirection:"row",
        marginRight: 10,
    },
    icon:{
        color: "#EA7A9A",
        width: "20%",
        textAlign:"center"
    },
    txt:{
        width:"80%",
        textAlign:"center",
        fontFamily: "bpg-banner-caps-webfont",
    },
    touch:{
        flexDirection:"row",
        width:"100%",
        justifyContent:"center",
        alignItems: 'center',
    },
})

export default HeaderContent;

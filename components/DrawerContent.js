import React,{useState} from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    TouchableRipple,
    Switch,
} from "react-native-paper"
import {
    DrawerContentScrollView,
    DrawerItem,
} from "@react-navigation/drawer"
import {Icon} from "native-base"
import { TouchableOpacity } from 'react-native-gesture-handler';

const DrawerContent = (props) => {

    const [showAdmins,setShowAdmins] = useState(false)

    return(
    <View style={styles.screen}>
        <Drawer.Section style={styles.section1}>
            <Image source={require("../assets/logo.png")}/> 
        </Drawer.Section>
        <Drawer.Section>
        <DrawerItem
            icon ={ () =>(
                <Icon
                style={{color:"#EA7A9A"}}
                type="MaterialCommunityIcons"
                name="home-outline"
                />
            )}
            label = "მთავარი"
            labelStyle={{fontFamily: "bpg-banner-caps-webfont"}}
            onPress={()=> props.navigation.navigate("Home")}
            />
        <DrawerItem
            icon ={ () =>(
                <Icon
                style={{color:"#EA7A9A"}}
                type="MaterialCommunityIcons"
                name="account"
                />
            )}
            label = "ადმინები"
            labelStyle={{fontFamily: "bpg-banner-caps-webfont"}}
            onPress = {()=> setShowAdmins(!showAdmins) }
            />
            {showAdmins && 
            <Drawer.Section style={{paddingLeft: 20}}>
                <DrawerItem
            icon ={ () =>(
                <Icon
                style={{color:"#EA7A9A"}}
                type="AntDesign"
                name="adduser"
                />
            )}
            label = "დამატება"
            labelStyle={{fontFamily: "bpg-banner-caps-webfont"}}
            onPress = {() => props.navigation.navigate("adminPage",{...props}) }
            />
            <DrawerItem
            icon ={ () =>(
                <Icon
                style={{color:"#EA7A9A"}}
                type="MaterialCommunityIcons"
                name="format-list-bulleted-square"
                />
            )}
            label = "სია"
            labelStyle={{fontFamily: "bpg-banner-caps-webfont"}}
            onPress = {()=> setShowAdmins(!showAdmins) }
            />
            </Drawer.Section>} 
            <DrawerItem
            icon ={ () =>(
                <Icon
                style={{color:"#EA7A9A"}}
                type="MaterialCommunityIcons"
                name="exit-to-app"
                />
            )}
            label = "გასვლა"
            labelStyle={{fontFamily: "bpg-banner-caps-webfont"}}
            onPress={()=> props.navigation.navigate("Login Page")}
            />
        </Drawer.Section>
    </View>
);
}

const styles=StyleSheet.create({
    screen:{
        flex:1
    },
    section1:{
        marginTop:15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    admins:{
        paddingLeft: 78,
        paddingVertical: 5
    }
})

export default DrawerContent;

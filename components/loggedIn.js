import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import LoggedInScreen from "../screens/LoggedInScreen"
import  HeaderContent from "../components/HeaderContent";
import profilePage from "../screens/profilePage"
import adminPage from "../screens/adminPage"



import {createDrawerNavigator} from "@react-navigation/drawer"
import DrawerContent from "./DrawerContent"

const Drawer = createDrawerNavigator();

const loggedIn = () => (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/> }>
            <Drawer.Screen name="Home" component={LoggedInScreen} />
            <Drawer.Screen name="Profile" component={profilePage} />
            <Drawer.Screen name="adminPage" component={adminPage} />
        </Drawer.Navigator>
);


export default loggedIn;

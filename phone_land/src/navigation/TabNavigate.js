import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text, ScrollView  } from "react-native";

//screens
import HomeScreen from "../screen/HomeScreen";
import Brand from "../screen/BrandScreen";
import Setting from "../screen//SettingScreen";
import Others from "../screen/OtherScreen";
import Category from "../screen/CategoryScreen"

// Icons

import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';






const Tab = createBottomTabNavigator();
function TabNavigate() {
  return (
    <Tab.Navigator
    screenOptions={{ 
        tabBarShowLabel: false,
        tabBarStyle :{
        position: 'absolute',
        bottom:14,
        left:20,
        right:20,
        elevation:0,
        backgroundColor:'#FFFF',
        borderRadius:15,
        height: 60,
        backfaceVisibility: "visible",
        
        
        ...styeles.shadow
      }
     }}

     initialRouteName="HomeScreen"
  >
       <Tab.Screen name="Category" component={Category} options={{ headerShown: false,
      tabBarIcon:({focused}) =>(
        <View>
         
         <MaterialIcons name="category" size={24}  style={{ color: focused ?  "#5CE1E6" : "#000",}} />
        </View>
      ) }} />
      <Tab.Screen name="Brand" component={Brand} options={{ headerShown: false,
      tabBarIcon:({focused}) =>(
        <View>
          <Feather name="shopping-bag" size={24}  style={{ color: focused ?  "#5CE1E6" : "#000",}} />
        </View>
      ) }} />
     
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false,
        tabBarIcon:({focused}) =>(
          <View>
          <AntDesign name="home" size={24}  style={{ color: focused ?  "#5CE1E6" : "#000",}} />  
          </View>
        ) }}/>
      <Tab.Screen name="Others" component={Others } options={{ headerShown: false,
      tabBarIcon:({focused}) =>(
        <View>
          <MaterialCommunityIcons name="cart-plus" size={24} style={{ color: focused ?  "#5CE1E6" : "#000",}} />
        </View>
      ) }} />
       <Tab.Screen name="Setting" component={Setting } options={{ headerShown: false,
      tabBarIcon:({focused}) =>(
        <View>
          <Ionicons name="ios-settings-outline" size={24}  style={{ color: focused ?  "#5CE1E6" : "#000" }} />
        </View>
      ) }} />
      
    </Tab.Navigator>
  );
}

const styeles = StyleSheet.create({
  shadow:{
    shadowColor: '#5CE1E6',
    shadowOffset:{
      width:0,
      height:10
    },
    shadowOpacity: 0.25,
    shadowRadius:3.5,
    elevation:10,
    backfaceVisibility: 'hidden',
   
  }
})

export default TabNavigate;
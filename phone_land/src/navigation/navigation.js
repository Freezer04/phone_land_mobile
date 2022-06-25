import React from'react';
import{NavigationContainer}from'@react-navigation/native';
import {createStackNavigator}from'@react-navigation/stack';
import { View , StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

import OnboardingScreen from'../onboarding/Onbording';
import LoginScreen from'../screen/LoginScreen';
import StartPage from '../screen/StartPage'
import RegisterScreen from '../screen/RegisterScreen'
import TabNavigate from './TabNavigate';
import DviceDetails from '../screen/DviceDetails'
import ProfileScreen from "../screen/Profile"
import ProductList from '../screen/productList';

const AppStack = createStackNavigator();
const Navigation = () => {
 return(
   <View style={styles.container} >
     <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="Onboarding"component={OnboardingScreen} options={{ headerShown: false }}/>
        <AppStack.Screen name="StartPage"component={StartPage} options={{ headerShown: false }}/>
        <AppStack.Screen name="Login"component={LoginScreen} options={{ headerShown: false }}/>
        <AppStack.Screen name="Register"component={RegisterScreen} options={{ headerShown: false }}/>
        <AppStack.Screen name="Home"component={TabNavigate} options={{ headerShown: false }}/>
        <AppStack.Screen name="Dvice"component={DviceDetails} options={{ headerShown: false }}/>
        <AppStack.Screen name="Profile"component={ProfileScreen} options={{ headerShown: false }}/>
        <AppStack.Screen name="Product"component={ProductList} options={{ headerShown: false }}/>
      </AppStack.Navigator>
    </NavigationContainer>
   </View>
   
 );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width:"100%",
    
  },
});
export default  Navigation;
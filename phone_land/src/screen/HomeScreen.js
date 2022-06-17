
import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Header from '../utils/Header';
import Crard  from '../utils/Card';
import ScrollCaty from '../utils/ScrollCaty';
export default function Home({navigation}) {
 

  return (
    <ScrollView style={{padding: 20}}>
    <SafeAreaView  style={{flex: 1}}>
      
      <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 40 ,
            
          }}>
          <Text style={{fontSize: 18, fontFamily: 'poppin-bold' , color: '#400C56'}}>
            Hello John Doe
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <ImageBackground 
              source={require('../../assets/Logo.png')}
                style={{width: 40, height: 40}}
                imageStyle={{borderRadius: 25}}
              backgroundColor= '#000'
            />
          </TouchableOpacity>
        </View  >
        <Text  style={{fontSize: 14, fontFamily: 'poppin-regular' , color: '#A386AF',marginBottom: 5 }}>what do you wanna buy today?</Text>
        <Header/>
        <Crard />
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
           
  
          }}>
        <Text  style={{fontSize: 18, fontFamily: 'poppin-bold' , color: '#400C56' }}>Buy now with cash</Text>
        <Text  style={{fontSize: 14, fontFamily: 'poppin-meduim' , color: '#A386AF' }}>See All</Text>
        </View>

   <View style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginTop: 10,
          }} >
        <View
                    style={{
                      felxDerection: 'row',
                      justifyContent: 'space-between',
                      borderColor: '#A386AF',
                      backgroundColor: "#fff",
                      borderWidth: 1,
                      borderRadius: 5,
                      width: 165,
                      height: 70,
                      marginVertical: 5,
              }}>
                  <Text style={{  top: 22,
                        left: 100,
                        fontSize: 16,
                        fontFamily: "poppin-meduim",
                        color: "#A386AF", }}>Phone</Text>
                  <ImageBackground 
                      source={require('../assets/image/phone.png')}
                      style={{width: 50, height: 60, marginLeft: 10, bottom: 20}}/>
                
        </View>
       
        <View
                    style={{
                      felxDerection: 'row',
                      justifyContent: 'space-between',
                      borderColor: '#A386AF',
                      backgroundColor: "#fff",
                      borderWidth: 1,
                      borderRadius: 5,
                      width: 165,
                      height: 70,
                      marginVertical: 5,
              }}>
                  <Text style={{  top: 22,
                        left: 100,
                        fontSize: 16,
                        fontFamily: "poppin-meduim",
                        color: "#A386AF", }}>Tablet</Text>
                  <ImageBackground 
                      source={require('../assets/image/phone.png')}
                      style={{width: 50, height: 60, marginLeft: 10, bottom: 20}}/>
                
        </View>
        <View
                    style={{
                      felxDerection: 'row',
                      justifyContent: 'space-between',
                      borderColor: '#A386AF',
                      backgroundColor: "#fff",
                      borderWidth: 1,
                      borderRadius: 5,
                      width: 165,
                      height: 70
              }}>
                  <Text style={{  top: 22,
                        left: 100,
                        fontSize: 16,
                        fontFamily: "poppin-meduim",
                        color: "#A386AF", }}>Pc</Text>
                  <ImageBackground 
                      source={require('../assets/image/phone.png')}
                      style={{width: 50, height: 60, marginLeft: 10, bottom: 20}}/>
                
        </View>
        <View
                    style={{
                      felxDerection: 'row',
                      justifyContent: 'space-between',
                      borderColor: '#A386AF',
                      backgroundColor: "#fff",
                      borderWidth: 1,
                      borderRadius: 5,
                      width: 165,
                      height: 70
              }}>
                  <Text style={{  top: 22,
                        left: 100,
                        fontSize: 16,
                        fontFamily: "poppin-meduim",
                        color: "#A386AF", }}>Watch</Text>
                  <ImageBackground 
                      source={require('../assets/image/phone.png')}
                      style={{width: 50, height: 60, marginLeft: 10, bottom: 20}}/>
                
        </View>
  </View>
  <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop:10
            
            
          }}>
        <Text  style={{fontSize: 18, fontFamily: 'poppin-bold' , color: '#400C56' }}>Popular Brands</Text>
        <Text  style={{fontSize: 14, fontFamily: 'poppin-meduim' , color: '#A386AF' }} onPress={() => navigation.navigate("Brand")}>See All</Text>
        </View>
        <ScrollCaty/>
        </SafeAreaView>
      </ScrollView>
  
  );
}




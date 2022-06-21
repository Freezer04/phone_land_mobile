import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';


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
              source={require('../assets/image/profile1.jpg')}
                style={{width: 40, height: 40}}
                imageStyle={{borderRadius: 25}}
              backgroundColor= '#000'
            />
          </TouchableOpacity>
        </View >
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
                      source={require('../assets/image/tablet.png')}
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
                        color: "#A386AF", }}>Earpud</Text>
                  <ImageBackground 
                      source={require('../assets/image/earbud.png')}
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
                      source={require('../assets/image/watch.png')}
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
        <SafeAreaView style={{ flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
             }} >
        <View style={styles.container} >
      <LinearGradient
          colors={['#35F0C0', '#E89A69' ]}
          style={styles.linearGradient}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 2, y: 0.5 }}
        />
        <Text style={styles.titel}  >Xiaomi</Text>
        <Text style= {styles.descrption}>Mi Band 6</Text>
        <ImageBackground 
                      source={require('../assets/image/watch.png')}
                      style={{width: 80, height: 60, marginLeft: 10, position:'absolute',top: 65, left: 22}}/>
        
    </View>
    <View style={styles.container} >
      <LinearGradient
          colors={['#007BEB', '#E89A69' ]}
          style={styles.linearGradient}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 2, y: 0.5 }}
        />
        <Text style={styles.titel}  >Apple</Text>
        <Text style= {styles.descrption}>Iphone 12</Text>
        <ImageBackground 
                      source={require('../assets/image/phone.png')}
                      style={{width: 75, height: 60, marginLeft: 10, position:'absolute',top: 65, left: 22}}/>
        
    </View>
        </SafeAreaView>
       
      </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container:{
    alignItems: "flex-start",
    position: 'relative',
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    marginVertical: 15,
    height:150,
    borderRadius: 20
  },
  titel: {
    position:'absolute',
    top: 25,
    left: 50,
    fontSize: 12,
    fontFamily: "poppin-regular",
    color: "#fff",
  },
  descrption: {
    position:'absolute',
    top: 40,
    left: 35,
    fontSize: 15,
    width:200,
    fontFamily: "poppin-bold",
    color: "#fff",
    
  }
})




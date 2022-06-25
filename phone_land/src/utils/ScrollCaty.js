import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {View, StyleSheet, ScrollView, Text, TouchableOpacity, ImageBackground} from 'react-native';
import Sony from "../../assets/image/sony.svg"

const ScrollCaty = ({navigation}) => {

     
  return (
    <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false} >
    
     <TouchableOpacity style={{
          alignItems:"center",
          justifyContent: "center",    
          borderColor: '#A386AF',
          backgroundColor: "#fff",
          borderWidth: 0.5,
          borderRadius: 16,
          width: 150,
          height: 40, 
          marginHorizontal: 5 }} onPress={() => navigation.navigate('Brand')} >
            <ImageBackground source={require('../assets/image/Apple.png')} style={{ width:20, height:25 }}/>
                    {/* <Text style={{  
                      fontSize: 14,
                      fontFamily: "poppin-meduim",
                      color: "#400C56",
                       }}>Apple
                    </Text>       */}
      </TouchableOpacity>
      <TouchableOpacity style={{
          alignItems:"center",
          justifyContent: "center",    
          borderColor: '#A386AF',
          backgroundColor: "#fff",
          borderWidth: 0.5,
          borderRadius: 16,
          width: 150,
          height: 40, 
          marginHorizontal: 5 }} onPress={() => navigation.navigate('Brand')} >
            <ImageBackground source={require('../assets/image/Xiaomi.png')} style={{ width:28, height:25 }}/>
                    {/* <Text style={{  
                      fontSize: 14,
                      fontFamily: "poppin-meduim",
                      color: "#400C56",
                       }}>Xiaomi
                    </Text>       */}
      </TouchableOpacity>
      <TouchableOpacity style={{
          alignItems:"center",
          justifyContent: "center",    
          borderColor: '#A386AF',
          backgroundColor: "#fff",
          borderWidth: 0.5,
          borderRadius: 16,
          width: 150,
          height: 40, 
          marginHorizontal: 5 }} onPress={() => navigation.navigate('Brand')} >
                <ImageBackground source={require('../assets/image/samsung.png')} style={{ width:45, height:35 }}/>
                    {/* <Text style={{  
                      fontSize: 14,
                      fontFamily: "poppin-meduim",
                      color: "#400C56",
                       }}>Sammsung
                    </Text>       */}
      </TouchableOpacity>
      <TouchableOpacity style={{
          alignItems:"center",
          justifyContent: "center",    
          borderColor: '#A386AF',
          backgroundColor: "#fff",
          borderWidth: 0.5,
          borderRadius: 16,
          width: 150,
          height: 40, 
          marginHorizontal: 5 }} onPress={() => navigation.navigate('Brand')} >
                <ImageBackground source={require('../assets/image/oppo.png')} style={{ width:50, height:34 }}/>
                    {/* <Text style={{  
                      fontSize: 14,
                      fontFamily: "poppin-meduim",
                      color: "#400C56",
                       }}>Oppo
                    </Text>       */}
      </TouchableOpacity>
      <TouchableOpacity style={{
           flexDirection: 'row',
          //  justifyContent: ,
          alignItems:"center",
          justifyContent: "center",    
          borderColor: '#A386AF',
          backgroundColor: "#fff",
          borderWidth: 0.5,
          borderRadius: 16,
          width: 150,
          height: 40, 
          marginHorizontal: 5 }} onPress={() => navigation.navigate('Brand')} >
              <ImageBackground source={require('../assets/image/sony.png')} style={{ width: 45, height:25 }}/>
                    {/* <View>
                    <Text style={{  
                      fontSize: 10,
                      fontFamily: "poppin-meduim",
                      color: "#400C56",
                       }}>One Pluss
                    </Text>
                    </View> */}
                   
      </TouchableOpacity>
        
  </ScrollView>
  );
}

const styles = StyleSheet.create({})

export default ScrollCaty;

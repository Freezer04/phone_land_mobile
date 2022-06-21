import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import Sony from "../../assets/image/sony.svg"

const ScrollCaty = () => {
  
  const [ Data, setData ] = useState([])
  
    useEffect(() => {
      axios.get('http://192.168.137.1:3000/api/brand')
      .then(res => {
          // console.log(res.data);
          setData(res.data);
      }).catch (err => {
          console.log(err);
          console.log('makin walo');
      }) 
  },[]) 
     
  return (
    <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false} >
    
     <View style={{
          alignItems:"center",
          justifyContent: "center",    
          borderColor: '#A386AF',
          backgroundColor: "#fff",
          borderWidth: 1,
          borderRadius: 16,
          width: 150,
          height: 40, 
          marginHorizontal: 5 }} >
                    
                    <Text style={{  
                      fontSize: 14,
                      fontFamily: "poppin-meduim",
                      color: "#400C56",
                       }}>Apple
                    </Text>      
      </View>
      <View style={{
          alignItems:"center",
          justifyContent: "center",    
          borderColor: '#A386AF',
          backgroundColor: "#fff",
          borderWidth: 1,
          borderRadius: 16,
          width: 150,
          height: 40, 
          marginHorizontal: 5 }} >
                    
                    <Text style={{  
                      fontSize: 14,
                      fontFamily: "poppin-meduim",
                      color: "#400C56",
                       }}>Xiaomi
                    </Text>      
      </View>
      <View style={{
          alignItems:"center",
          justifyContent: "center",    
          borderColor: '#A386AF',
          backgroundColor: "#fff",
          borderWidth: 1,
          borderRadius: 16,
          width: 150,
          height: 40, 
          marginHorizontal: 5 }} >
                    
                    <Text style={{  
                      fontSize: 14,
                      fontFamily: "poppin-meduim",
                      color: "#400C56",
                       }}>Sammsung
                    </Text>      
      </View>
      <View style={{
          alignItems:"center",
          justifyContent: "center",    
          borderColor: '#A386AF',
          backgroundColor: "#fff",
          borderWidth: 1,
          borderRadius: 16,
          width: 150,
          height: 40, 
          marginHorizontal: 5 }} >
                    
                    <Text style={{  
                      fontSize: 14,
                      fontFamily: "poppin-meduim",
                      color: "#400C56",
                       }}>Oppo
                    </Text>      
      </View>
      <View style={{
          alignItems:"center",
          justifyContent: "center",    
          borderColor: '#A386AF',
          backgroundColor: "#fff",
          borderWidth: 1,
          borderRadius: 16,
          width: 150,
          height: 40, 
          marginHorizontal: 5 }} >
                    
                    <Text style={{  
                      fontSize: 14,
                      fontFamily: "poppin-meduim",
                      color: "#400C56",
                       }}>One Plus
                    </Text>      
      </View>
        
  </ScrollView>
  );
}

const styles = StyleSheet.create({})

export default ScrollCaty;

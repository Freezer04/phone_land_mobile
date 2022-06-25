 import React, {useEffect, useState} from 'react';
 import {View, StyleSheet, ScrollView, SafeAreaView,ImageBackground, Text, TouchableOpacity} from 'react-native';
 import axios from 'axios';
 
 const ListBrand = ({navigation}) => {
  const [ Data, setData ] = useState([])

  useEffect(() => {
    axios.get('http://192.168.137.1:3000/api/brand')
    .then(res => {
        // console.log( "data",res.data);
        setData(res.data);
    }).catch (err => {
        console.log(err);
    }) 
},[])
   return (
    <ScrollView>
     <SafeAreaView style={{ flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginTop: 50, }}>
      {Data.map((items, index) =>(
     <TouchableOpacity 
      key={index} 
      style={{
        backgroundColor: "#fff",
        shadowColor: "#000",
        justifyContent: "center",
        alignItems: "center",
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        borderRadius: 10,
        width: 165,
        height: 95,
        marginBottom: 10}}   
        onPress={() => {
          navigation.navigate('Product', {
            itemId: items.brand_id,
          });
        }}
        >
  
  <ImageBackground source={require('../assets/image/Xiaomi.png')}
    style={{ 
      width: 50,
      height: 50,
      }} >
  </ImageBackground>
  <Text>{items.name}</Text>
     </TouchableOpacity>
    ))}
     </SafeAreaView>
    </ScrollView>
    
   );
 }
 
 const styles = StyleSheet.create({})
 
 export default ListBrand;
 
import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import {View, StyleSheet, ScrollView, Text, ImageBackground} from 'react-native';



const ScrollingBrand = () => {

    const [ Data, setData ] = useState([])
  
    useEffect(() => {
      axios.get('http://192.168.137.1:3000/api/category')
      .then(res => {
          console.log(res.data);
          setData(res.data);
      }).catch (err => {
          console.log(err);
          console.log('makin walo');
      }) 
  },[]) 
  
  return (
    <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false} >
      {Data.map((items, index) =>(
       <View key={index} style={{
            
            alignItems:"center",
            justifyContent: "center",    
            borderColor: '#A386AF',
            backgroundColor: "#fff",
            borderWidth: 1,
            borderRadius: 16,
            width: 100,
            height: 40, 
            marginHorizontal: 10 }} >
                      <Text style={{  
                        fontSize: 14,
                        fontFamily: "poppin-meduim",
                        color: "#400C56",
                         }}>{items.name}
                      </Text>
                    
                       
        </View>
       ))}    

      

    </ScrollView>
  );
}

const styles = StyleSheet.create({})

export default ScrollingBrand;

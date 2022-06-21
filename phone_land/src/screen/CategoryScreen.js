import React from 'react';
import { useEffect, useState } from 'react';
import {View, StyleSheet, Text, ScrollView, TouchableOpacity, ImageBackground, Pressable, TextInput, } from 'react-native';
import {  Card, Title,  } from 'react-native-paper';
import axios from 'axios';

import ScrollingBrand from '../utils/scrollingBrand';

const CategoryScreen = ({navigation}) => {
  const [ Data, setData ] = useState([])

  useEffect(() => {
    axios.get('http://192.168.137.1:3000/api/product')
    .then(res => {
        // console.log(res.data);
        setData(res.data);
    }).catch (err => {
        console.log(err);
        console.log('makin walo');
    }) 
},[])

  
  return (
   <ScrollView >
     <View style={styles.header} >
     <View 
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 40 ,
            height: 80,
            padding: 20

            
          }}>
          <Text style={{fontSize: 18, fontFamily: 'poppin-bold' , color: '#400C56'}}>
            Selelct Dvice
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <ImageBackground 
              source={require('../assets/image/profile1.jpg')}
                style={{width: 40, height: 40}}
                imageStyle={{borderRadius: 25}}
              backgroundColor= '#000'
            />
          </TouchableOpacity>
        </View>
        <ScrollingBrand/>
     </View>
     
      <View style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginTop: 10,
            
          }}>
            {Data.map((item, index) =>(
            <Card  key={index} style={{ borderColor: '#A386AF',
                   backgroundColor: "#fff",
                   borderWidth: 1,
                   borderRadius: 5,
                   width: 170,
                   height: 300,
                   marginHorizontal:10,
                   marginVertical: 5}}  onPress={() => {
                    navigation.navigate('Dvice', {
                      itemId: item.porduct_id,
                      
                    });
                  }}>
                <Card.Content>
                  <Title style={{ fontSize: 15, fontFamily: 'poppin-bold' , color: '#400C56' }}>{item.name}</Title>
                </Card.Content >
              <Card.Cover source={require('../assets/image/phone.png')}/>
             <Text style={{ fontSize: 15, fontFamily: 'poppin-bold' , color: '#400C56' , marginVertical: 5, paddingHorizontal: 6 }} >{item.price} DH</Text>
     
    
  </Card>
    ))}
    </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#fff",
    height: 200,
    shadowColor: '#666',
    shadowOffset:{
      width:0,
      height:10
    },
  }
})



export default CategoryScreen;

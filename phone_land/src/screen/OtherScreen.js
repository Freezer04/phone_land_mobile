import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';
import {  Card, Title,  } from 'react-native-paper';
import axios from 'axios';
const DviceScreen = ({navigation}) => {
  const [ Data, setData ] = useState([])

  useEffect(() => {
    axios.get('http://192.168.137.1:3000/api/category/4')
    .then(res => {
        console.log(res.data);
        setData(res.data.products);
    }).catch (err => {
        console.log(err);
    }) 
},[])
// console.log("idddddddddd",Data[0].porduct_id)
  return (
    <ScrollView style={{ padding: 20 }}>
      <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 40 ,
          }}>
          <Text style={{fontSize: 18, fontFamily: 'poppin-bold' , color: '#400C56'}}>
            More Things
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
        <View style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginTop: 10,
            backgroundColor: "000"
          }}>
            {Data.map((items, index) =>(
            <Card  key={index} style={{ borderColor: '#A386AF',
                   backgroundColor: "#fff",
                   borderWidth: 1,
                   borderRadius: 5,
                   width: 170,
                   height: 300,
                   marginHorizontal:2,
                   marginVertical: 5}} onPress={() => {
                    navigation.navigate('Dvice', {
                      itemId: items.porduct_id,
                    });
                  }}  >
                <Card.Content>
                  <Title style={{ fontSize: 15, fontFamily: 'poppin-bold' , color: '#400C56' }}>{items.name}</Title>
                </Card.Content >
                <Card.Cover source={require('../assets/image/earbud.png')}/>
                <Text style={{ fontSize: 15, fontFamily: 'poppin-bold' , color: '#400C56' , marginVertical: 5, paddingHorizontal: 6 }} >{items.price} DH</Text>
             </Card>
    ))}
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

})

export default DviceScreen;

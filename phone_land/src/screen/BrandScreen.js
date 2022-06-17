import React from 'react';
import {View, StyleSheet, ScrollView, Text, TouchableOpacity, ImageBackground} from 'react-native';
import Header from '../utils/Header';
import BrandList from '../utils/ListBrand';

const BrandScreen = () => {
  return (
   <ScrollView padding= {20}>
     <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 40 ,
            marginVertical: 10
            
          }}>
          <Text style={{fontSize: 18, fontFamily: 'poppin-bold' , color: '#400C56'}}>
            All Brands
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
        <Header/>
        <BrandList/>
   </ScrollView>
  );
}

const styles = StyleSheet.create({})

export default BrandScreen;


import React from 'react';
import {View, StyleSheet, ScrollView, Text, TouchableOpacity, ImageBackground} from 'react-native';
import Header from '../utils/Header';
import BrandList from '../utils/ListBrand';

const BrandScreen = ({navigation}) => {
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
          <TouchableOpacity onPress={() => navigation.navigate('Product')}>
            <ImageBackground 
              source={require('../assets/image/profile1.jpg')}
                style={{width: 40, height: 40}}
                imageStyle={{borderRadius: 25}}
                
              backgroundColor= '#000'
            />
          </TouchableOpacity>
        </View  >
        <Header/>
        <BrandList navigation={navigation}/>
   </ScrollView>
  );
}

const styles = StyleSheet.create({})

export default BrandScreen;


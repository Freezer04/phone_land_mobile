 import React from 'react';
 import {View, StyleSheet, ScrollView, SafeAreaView,ImageBackground} from 'react-native';
 import ImgBrand from '../assets/image/Xiaomi.png';
 
 const ListBrand = () => {
   return (
    <ScrollView>
     <SafeAreaView style={{ flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginTop: 50, }}>
     <View
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
        marginBottom: 10 
}}>
  <ImageBackground source={require('../assets/image/Xiaomi.png')}
    style={{ 
      width: 75,
      height: 75,
      }}>
  </ImageBackground>
     </View>
     </SafeAreaView>
    </ScrollView>
   );
 }
 
 const styles = StyleSheet.create({})
 
 export default ListBrand;
 
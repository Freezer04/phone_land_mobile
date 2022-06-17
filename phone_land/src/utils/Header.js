import React from 'react';
import { ImageBackground, StyleSheet, Text, View, TextInput } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';


 
 const Header = () => {
   return (
     
    <View
    style={{
      flexDirection: 'row',
      borderColor: '#A386AF',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 10,
      paddingVertical: 8,
    }}>
     <Feather
            name="search"
            size={20}
            color="#C6C6C6"
            style={{marginRight: 5}}
          />
    <TextInput placeholder="Search phones, watch, earbuds & tablets" />
  </View>
    
    
   );
 }

//  const styeles = StyleSheet.create({
//       container:{
//         flex: 1,
//         height: 80,
//         paddingTop: 50,
//         backgroundColor: "#F2C978"
//       },

    
//       texteHeder:{
//         textAlign: 'center',
//         color: '#bc8c4c',
//         fontSize: 20,
//         fontFamily: 'poppin-bold',
//         marginLeft:20,
       
        
//       },
//       header:{
//         flexDirection: 'row',
//         justifyContent: 'space-between',
        
        
//       },
//  })
 
 export default Header;
 
import React from 'react';
import {  StyleSheet, View, Text, ImageBackground  } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const Cards = () => {
 

  return (
    <View style={styles.container} >
      
      <LinearGradient
          colors={['#F5B300', '#F7CB53' ]}
          style={styles.linearGradient}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 5, y: 1 }}
        />
        <Text style={styles.titel}  >Buy Phones</Text>
        <Text style= {styles.descrption}>Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.</Text>
        <ImageBackground 
                      source={require('../assets/image/phone.png')}
                      style={{width: 100, height: 120, marginLeft: 10, position:"absolute", right: 25, top: 35}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    position: 'relative'
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 330,
    marginVertical: 15,
    height:150,
    borderRadius: 20
  },
  titel: {
    position:'absolute',
    top: 35,
    left: 30,
    fontSize: 18,
    fontFamily: "poppin-bold",
    color: "#fff",
  },
  descrption: {
    position:'absolute',
    top: 65,
    left: 30,
    fontSize: 12,
    width:200,
    fontFamily: "poppin-meduim",
    color: "#fff",
  }
 
 



})

export default Cards;

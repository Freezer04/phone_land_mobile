import React from 'react';
import {View, StyleSheet, Text, ScrollView, TouchableOpacity, ImageBackground} from 'react-native';


const SettingScreen = ({navigation}) => {
  return (
    <ScrollView  padding= {20}>
        <View
          style={{
            flexDirection: 'row',
            
            marginTop: 40 ,
            marginVertical: 15
          }}>
          <Text style={{fontSize: 18, fontFamily: 'poppin-bold' , color: '#400C56', paddingHorizontal:10,}}>
            Setting
          </Text>
          
        </View  >
        <View style={styles.details} >
            <TouchableOpacity style={styles.memory} onPress={() => navigation.navigate('Profile')}>
            <ImageBackground source={require("../assets/image/profile.png")} 
             style={{width: 20, height: 24}}
             imageStyle={{borderRadius: 25}} />
            <Text style={styles.text}>Profile</Text>
            </TouchableOpacity>
            <View style={styles.content}>
              
            </View>
            <TouchableOpacity style={styles.memory}>
            <ImageBackground source={require("../assets/image/info.png")} 
             style={{width: 24, height: 24}}
             imageStyle={{borderRadius: 25}} />
            <Text style={styles.text} >Info</Text>
            </TouchableOpacity>
            <View style={styles.content}>
              
            </View>
            <TouchableOpacity style={styles.memory}>
            <ImageBackground source={require("../assets/image/help.png")} 
             style={{width: 26, height: 24}}
             imageStyle={{borderRadius: 25}} />
            <Text style={styles.text} >Help</Text>
            </TouchableOpacity>
            <View style={styles.content}>
              
            </View>
            <TouchableOpacity style={styles.memory}>
            <ImageBackground source={require("../assets/image/about.png")} 
             style={{width: 28, height: 25}}
             imageStyle={{borderRadius: 25}} />
            <Text style={styles.text}>About</Text>
            </TouchableOpacity>
            <View style={styles.content}>
              
            </View>
            <TouchableOpacity style={styles.memory}>
            <ImageBackground source={require("../assets/image/sign-out.png")} 
             style={{width: 28, height: 25}}
             />
            <Text style={styles.text}>Logout</Text>
            </TouchableOpacity>
            
            
            
          </View>
    </ScrollView>    
  );
}

const styles = StyleSheet.create({
  details:{
    marginVertical: 25,
    marginHorizontal: 25,
    height: 270,
    flexDirection: "column",
    justifyContent:"space-around",
    paddingHorizontal: 5,
    
  },
  memory:{
    flexDirection: 'row',
    justifyContent: "flex-start",
    color:"#400C56",
    paddingVertical: 10,
  },
  text:{
    fontSize: 16,
    fontFamily: 'poppin-regular',
    color: '#400C56',
    marginHorizontal: 20,
  },
  content:{
    borderBottomColor: '#400C56',
    borderBottomWidth: 0.5,
    
   
  }
})

export default SettingScreen;

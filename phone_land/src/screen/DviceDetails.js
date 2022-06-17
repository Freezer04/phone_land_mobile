import React from 'react';
import {View, StyleSheet, ScrollView, Text, TouchableOpacity, ImageBackground} from 'react-native';




//Svg
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';





const DviceDetails = ({navigation}) => {
  return (
      
    <ScrollView >
      <View 
          style={{
            flexDirection: 'row',
            marginTop: 40 ,
            height: 80,
            padding: 20,
            position: 'relative',
          }} >
           <Ionicons name="ios-chevron-back" size={24} color="black" onPress={() => navigation.navigate('Category')}  />
          <Text style={{fontSize: 18, fontFamily: 'poppin-bold' , color: '#400C56'}}>
            Selelct Dvice
          </Text>
        </View>
        { <ImageBackground 
              source={require('../assets/image/Apple.png')}
                style={{ height: 450,  opacity: 0.1, position: 'absolute', transform:[{rotate: '-20deg'}]}}
            /> }
           <View 
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 320,
            padding: 10,
          }}>
          <TouchableOpacity>
            <ImageBackground 
              source={require('../assets/image/phone.png')}
                style={{width: 140, height: 340}}
            />
          </TouchableOpacity>
          <View marginVertical={130} width={250} height={100}  >
          <Text style={{fontSize: 25, fontFamily: 'poppin-bold' , color: '#400C56',  alignSelf: 'center', bottom: 50}}>
            Iphone Pro Max
          </Text>
          <Text style={{fontSize: 14, fontFamily: 'poppin-regular' , color: '#400C56', width: 240, bottom: 25  }}>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis saepe aliquid sunt, architecto consequuntur sint est tempore,
           Lorem ipsum dolor sit,

          </Text>
          </View>
         
        </View>
          <View style={styles.details} >
            <TouchableOpacity style={styles.memory}>
            <MaterialIcons name="sd-storage" size={24} color="#A386AF" />
            <Text style={{ marginHorizontal: 5, color:'#A386AF' }}>Memory</Text>
            </TouchableOpacity>
            <View style={styles.content}>
              <Text style={styles.text}>128GB / 256GB   </Text>
            </View>
            <TouchableOpacity style={styles.memory}>
            <MaterialCommunityIcons name="memory" size={24} color="#A386AF" />
            <Text style={{ marginHorizontal: 5, color:'#A386AF' }}>Ram</Text>
            </TouchableOpacity>
            <View style={styles.content}>
              <Text style={styles.text}>128GB / 256GB   </Text>
            </View>
            <TouchableOpacity style={styles.memory}>
            <Entypo name="camera" size={24} color="#A386AF" />
            <Text style={{ marginHorizontal: 5,color:'#A386AF'}}>Camera</Text>
            </TouchableOpacity>
            <View style={styles.content}>
              <Text style={styles.text}>128GB / 256GB   </Text>
            </View>
            <TouchableOpacity style={styles.memory}>
            <Feather name="battery" size={24} color="#A386AF" />
            <Text style={{ marginHorizontal: 5, color:'#A386AF' }}>Battery</Text>
            </TouchableOpacity>
            <View style={styles.content}>
              <Text style={styles.text}>128GB / 256GB   </Text>
            </View>
            <TouchableOpacity style={styles.memory}>
            <Ionicons name="color-filter" size={24} color="#A386AF" />
            <Text style={{ marginHorizontal: 5, color:'#A386AF' }}>Battery</Text>
            </TouchableOpacity>
            <View style={styles.content}>
              <Text style={styles.text}>128GB / 256GB   </Text>
            </View>
            
            
          </View>

        </ScrollView>
     
      
    
  );
}

const styles = StyleSheet.create({
  details:{
    // backgroundColor: "red",
    marginHorizontal: 25,
    height: 270,
    flexDirection: "column",
    justifyContent:"space-around"
    // paddingHorizontal: 5
  },
  memory:{
    flexDirection: 'row',
    justifyContent: "flex-start",
    color:"#400C56",
  },
  text:{
    color: "#A386AF"
  },
  content:{
    width:200, 
    height: 30,
    borderRadius: 15,
    marginHorizontal: 25, 
    justifyContent: "center",  
    paddingLeft: 15,
    backgroundColor: "#DCDBDB",
   
  }
})

export default DviceDetails;

import React, {useEffect,useState} from 'react';
import {View, StyleSheet, ScrollView, Text, TouchableOpacity, ImageBackground} from 'react-native';
import axios from 'axios';




//Svg
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const DviceDetails = ({navigation, route}) => {
  const { itemId } = route.params;
  console.log('itemId', itemId);
  const [data, setData] = useState()
  
  const getdata =  async() => {
    await axios.get('http://192.168.137.1:3000/api/product/'+itemId)
    .then(res => {
        setData([res.data]);
    }).catch (err => {
        console.log(err);
        console.log('makin walo');
    }) 
  }

  useEffect(() => {
    getdata()
  
},[])
console.log('dataaaa', data && data.map((item, index) => item.name));
// const test = data && data[0]?.map(e=>e.name);
// console.log('dataaaa', data[0].price);
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
           <Ionicons name="ios-chevron-back" size={24} color="black" onPress={() => navigation.goBack()}  />
          <Text style={{fontSize: 18, fontFamily: 'poppin-bold' , color: '#400C56'}}>
            Selelct Dvice
          </Text>
        </View>
            { <ImageBackground 
              source={require('../assets/image/Apple.png')}
                style={{ height: 450,  opacity: 0.1, position: 'absolute', transform:[{rotate: '-20deg'}]}}
            /> }
          {data && data.map((item, index) => <View key={index}
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
            {item.name}
          </Text>
          <Text style={{fontSize: 14, fontFamily: 'poppin-regular' , color: '#400C56', width: 240, bottom: 25  }}>
           {item.description}

          </Text>
          </View>
         
        </View>)}
        {data && data.map((item, index) =>
          <View key={index} style={styles.details} >
            <TouchableOpacity style={styles.memory}>
            <MaterialIcons name="sd-storage" size={24} color="#A386AF" />
            <Text style={{ marginHorizontal: 5, color:'#A386AF' }}>Memory</Text>
            </TouchableOpacity>
            <View style={styles.content}>
              <Text style={styles.text}>{item.memory}GB  </Text>
            </View>
            <TouchableOpacity style={styles.memory}>
            <MaterialCommunityIcons name="memory" size={24} color="#A386AF" />
            <Text style={{ marginHorizontal: 5, color:'#A386AF' }}>Ram</Text>
            </TouchableOpacity>
            <View style={styles.content}>
              <Text style={styles.text}>{item.ram}GB   </Text>
            </View>
            <TouchableOpacity style={styles.memory}>
            <Entypo name="camera" size={24} color="#A386AF" />
            <Text style={{ marginHorizontal: 5,color:'#A386AF'}}>Camera</Text>
            </TouchableOpacity>
            <View style={styles.content}>
              <Text style={styles.text}>{item.camera}</Text>
            </View>
            <TouchableOpacity style={styles.memory}>
            <Feather name="battery" size={24} color="#A386AF" />
            <Text style={{ marginHorizontal: 5, color:'#A386AF' }}>Battery</Text>
            </TouchableOpacity>
            <View style={styles.content}>
              <Text style={styles.text}>{item.battery}</Text>
            </View>
            <TouchableOpacity style={styles.memory}>
            <Ionicons name="color-filter" size={24} color="#A386AF" />
            <Text style={{ marginHorizontal: 5, color:'#A386AF' }}>Color</Text>
            </TouchableOpacity>
            <View style={styles.content}>
              <Text style={styles.text}>{item.color}</Text>
            </View>
            
            
          </View>
        )}
        </ScrollView>
    
      
    
  );
}

const styles = StyleSheet.create({
  details:{
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

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import axios from 'axios';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';



import CustomButton from '../utils/CusttumButton';
import InputField from '../utils/InputField';
import Google from '../assets/Icon/google.svg';
import Facebook  from  '../assets/Icon/facebook1.svg'

const RegisterScreen = ({navigation}) => {
  const[name , setName]= useState("")
  const[email , setEmail]= useState("")
  const[password , setPassword]= useState("")
  const [number, setNumber] = useState('')
  const [success, setSuccess] = useState('')



  const handleName = (e)=>{
    return setName(e)
  }
 
  const handleEmail = (e)=>{
    return setEmail(e)
  }
  const handlePassword = (e)=>{
    return setPassword(e)
  }
  const handleNumber = (e)=>{
    return setNumber(e)
  }
  const API_URL = 'http://192.168.137.1:5000/api/signup';
  const regesterHandler = async ()=>{
    const 
    _user={
     name,
      email,
      password,
      number
    }
   try {
     const result = await axios.post(API_URL , _user)
     console.log(result)
     setSuccess(result.data.msg)
     navigation.navigate('Login')
   } catch (error) {
     console.log(error)
   }
  }

  return (
    <ImageBackground source={require('../assets/image/register.png')}  style={{flex: 1, justifyContent: 'center'}}>
      <SafeAreaView >
      <ScrollView
        
        style={{paddingHorizontal: 25, paddingVertical: 150}}>
        

        <Text
          style={{
            fontFamily: 'poppin-bold',
            fontSize: 40,
            fontWeight: '500',
            color: '#fff',
            marginBottom: 30,
          }}>
          Sign Up
        </Text>

        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-around',
            marginBottom: 30,
          }}>
       
         
          <TouchableOpacity
            onPress={() => {}}
            style={{
              backgroundColor: '#fff',
              justifyContent : 'center',
              alignContent: 'center',
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
              marginBottom: 10
              
            }}>
            <Google height={35} width={35}  style= {{  left : 120 }}/>
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={() => {}}
            style={{
              backgroundColor: '#1877F2',
              justifyContent : 'center',
              alignContent: 'center',
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
              
            }}>
            <Facebook height={35} width={35}  style= {{  left : 120 }}/>
          </TouchableOpacity>
        </View>

        <Text style={{textAlign: 'center', color: '#fff', marginBottom: 30}}>
          Or, register with email ...
        </Text>

        <InputField
          onChangeText= {handleName}
          label={'Full Name'} 
          icon={
            <Ionicons
              name="person-outline"
              size={20}
              color="#fff"
              style={{marginRight: 5}}
            />
          }
        />

<InputField
          onChangeText= {handleEmail}
          label={'Email ID'}
          icon={
            <MaterialIcons
            name="alternate-email"
            size={20}
            color="#fff"
            style={{marginRight: 5}}
          />
          }
          
        />

        <InputField
          onChangeText= {handlePassword}
          label={'Password'}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#fff"
              style={{marginRight: 5}}
            />
          }
          inputType="password"
        />

      

        <CustomButton label={'Register'} onPress={regesterHandler} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text style={{color: '#fff'}}>Already registered?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text onPress={() => navigation.navigate('Login')} style={{color: '#5CE1E6', fontWeight: '700'}}> Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
    </ImageBackground>
    
  );
};

export default RegisterScreen;
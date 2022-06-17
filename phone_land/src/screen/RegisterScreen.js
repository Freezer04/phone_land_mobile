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
  
  const [success, setSuccess] = useState('')



  const handleName = (e)=>{
    console.log(e , "name");
    return setName(e)
  }
 
  const handleEmail = (e)=>{
    console.log(e , "email");
    return setEmail(e)
  }
  const handlePassword = (e)=>{
    console.log(e , "password");
    return setPassword(e)
  }
  
  const API_URL = 'http://192.168.137.1:3000/api/user/signup';
  const regesterHandler = async (values)=>{
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (values.setName.length < 6 || values.firstname.length > 15) {
          setDataErrors({setName: "first name must be between 6 and 15 characters."})
        }else if(!values.setEmail.match(emailRegex)) {
          setDataErrors({ setEmail: "invalid email format."})
        }else if(values.setPassword.length < 4 || values.password.length > 30) {
          setDataErrors({ setPassword: "password must be between 4 and 30 characters."})
        }else if (values.password !== values.repeatpassword) {
          setDataErrors({ repeatpassword: "passwords are not identical."})
        }else {
            await setDataErrors({})    
            await register(values);
            await navigation.goBack();
        }
    const 
    _user={
      user_name,
      email,
      password,
    
    }
   try {
     const result = await axios.post(API_URL , _user)
     console.log(result)
     setSuccess(result.data.msg)
     navigation.navigate('Home')
   } catch (error) {
     console.log(error)
   }
  }

  return (
    <ImageBackground source={require('../assets/image/register.png')}  style={{flex: 1, justifyContent: 'center'}}>
      <SafeAreaView >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 25}}>
        

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
          keyboardType="email-address"
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
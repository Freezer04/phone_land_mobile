import {useState, useEffect} from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Text, SafeAreaView, ScrollView} from 'react-native';
import {Login} from '../service/Authentication'
import * as SecureStore from 'expo-secure-store';
import loginAction from "../Action/authAction"

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';



import CustomButton from '../utils/CusttumButton';
import InputField from '../utils/InputField';
import Google from '../assets/Icon/google.svg';
import Facebook  from  '../assets/Icon/facebook1.svg'
import axios from 'axios';
import { useDispatch } from 'react-redux';



function LoginScreen  ({ navigation }) {

  const [data, setData] = useState({email: "" , password: ""});
    const [error, setError] = useState({email: null , password: null});


    const [submitted, setSubmitted] = useState(false);
    const dispatch = useDispatch()

    const Login = (data) => {
      return axios.post('http://192.168.137.1:3000/api/user/login', data)
    }

  
    const handleEmail = (email) => {
     
        setData({...data, email})
    }

    const handlePassword = (password) => {
      
        setData({...data, password})
    }

    const handleLogin = () => {
      // console.log(data);
      Login(data).then(res => {
        (async () => {
          await dispatch(loginAction())
        })()
        navigation.navigate('Home')
         
      }).catch((err) => console.log('err', err.response.data.message ));
      setSubmitted(true)
  }
   

    
    
  return (
   <ImageBackground source={require('../assets/image/login1.png')}  style={{flex: 1, justifyContent: 'center'}}>

    <SafeAreaView >
      <ScrollView>
    <View style={{paddingHorizontal: 25}}>
       

        <Text
          style={{
            fontFamily: 'poppin-bold',
            fontSize: 40,
            fontWeight: '500',
            color: '#fff',
            marginBottom: 30,
          }}>
          Sign In
        </Text>

        <InputField
          onChangeText= {handleEmail}
          email={data.email}
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
        <Text style={{...styles.error_text, display: error.email ? 'flex' : 'none'}}>email invalid</Text> 
        <InputField
          onChangeText= {handlePassword}
          label={'Password'}
          password= {data.password}
          icon={
            <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#fff"
            style={{marginRight: 5}}
          />
          }
          inputType="password"
          fieldButtonLabel={"Forgot?"}
          fieldButtonFunction={() => {}}
        />
        <Text style={{...styles.error_text, display: error.password ? 'flex' : 'none'}}>password inccorect!</Text>
        <CustomButton label={"Login"} onPress={handleLogin} />

        <Text style={{textAlign: 'center', color: '#fff', marginBottom: 30}}>
          Or, login with ...
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
            <Facebook height={30} width={30}  style= {{  left : 120 }}/>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text style={{color: '#fff'}}>New to the app?</Text>
          <TouchableOpacity >
            <Text  onPress={() => navigation.navigate('Register') }  style={{color: '#5CE1E6', fontWeight: '700', textDecorationLine: 'underline'}}> Register</Text> 
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
      
    </SafeAreaView>
   </ImageBackground>


  )
}

const styles = StyleSheet.create({
  error_text: {
    fontFamily: 'poppin-meduim',
    fontSize: 14,
    paddingTop: 5,
    color: '#bd1a1a'
}
})

export default LoginScreen;
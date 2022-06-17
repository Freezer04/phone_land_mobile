import React from'react';
import{View,Text,Button,StyleSheet,Image, ImageBackground, Dimensions } from'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import Onboarding1 from '../../assets/image/onboarding.svg'
import Onboarding2 from '../../assets/image/onboarding2.svg'
import Onboarding3 from '../../assets/image/onboarding1.svg'

const {width, height} = Dimensions.get('window');

const OnboardingScreen=({navigation})=> {
    return(
      
      <Onboarding
      onSkip={() => navigation.navigate("Login")}
      onDone={() => navigation.navigate("Login")}
      pages={[
        {
          backgroundColor: '#9DECEF',
          image: <Onboarding1
          height={300}
          width={300}
          />,
          title: 'Onboarding1',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#CC97E3',
          image: <Onboarding2
          height={300}
          width={300}
          />,
          title: 'Onboarding2',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#807CCB',
          image: <Onboarding3
          height={300}
            width={300}
            />,
          title: 'Onboarding3',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
   );
};  
export default OnboardingScreen;
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    height: 100,
    
    justifyContent:'center'
  },
})
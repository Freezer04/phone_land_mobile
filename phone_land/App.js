import React from'react';
import 'react-native-gesture-handler';
import {  StyleSheet, View, } from 'react-native';
import { useFonts } from 'expo-font';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import {persistStore,persistReducer} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PersistGate } from 'redux-persist/integration/react';
import Navigation from './src/navigation/navigation'
import allReducers from './src/AuthReducer';




// const store = createStore(allReducers);  
// const Stack = createNativeStackNavigator();
const persistedReducer = persistReducer({key: 'persist-key', storage: AsyncStorage }, allReducers);
const store = createStore(
  persistedReducer,
  window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
  );

const persistor = persistStore(store);

const App = () => {

  //Font Family
  const [loaded] = useFonts({
    'poppin-regular': require('./src/assets/font_family/Poppins-Regular.ttf'),
    'poppin-meduim' : require('./src/assets/font_family/Poppins-Medium.ttf'),
    'poppin-bold'   : require('./src/assets/font_family/Poppins-Bold.ttf'),
    
});

if (!loaded) {
    return null;
}
 return(
   <Provider store={store}>
     <StatusBar backgroundColor='#5CE1E6' />  
     <PersistGate persistor={persistor}>
    <View style={styles.container}>
      <Navigation/>
    </View>
     </PersistGate>
   
   </Provider>
   
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F4F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default  App;
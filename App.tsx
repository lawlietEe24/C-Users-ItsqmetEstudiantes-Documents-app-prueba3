import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/Screens/HomeScreen';
import { Screen } from 'react-native-screens';
import AboutScreen from './src/Screens/AboutScreen';
import ImageScreen from './src/Screens/ImageScreen';
import Image2Screen from './src/Screens/Image2Screen';
import Calculo from './src/Screens/Calculo';


const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  //React.FC es una avrebiatura de React.FunctionComponent
  return (
    <NavigationContainer>
      {/* //permite la posibilidad para poder viajar entre las paguinas  */}
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="Screen2" Component={Screen2} /> */}
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Imagen" component={ImageScreen}/>
        <Stack.Screen name="Imagen2" component={Image2Screen}/>
        <Stack.Screen name="Calculo" component={Calculo}/>
        
      </Stack.Navigator>
      {/* //stack navigator funciona para definir el tipo de biaje entre pantallas ante lo cual se debe colocar el nombre y 
      //componnente con el noombre de la screen a la que vamos a viajar */}
    </NavigationContainer>
  );
};

export default App;
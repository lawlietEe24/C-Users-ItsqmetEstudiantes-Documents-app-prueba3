import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';
import ImageScreen from './ImageScreen';

interface NavigationInterface {
  navigate: (screen: string) => void;
}

const HomeScreen = ({ navigation }: { navigation: NavigationInterface }) => {
  const handlePress1 = () => {
    navigation.navigate('About');
  };
  const handlePress2 = () => {
        navigation.navigate('Imagen');
      };
const handlePress3 = () => {
        navigation.navigate('Imagen2');
      };
      const handlePress4 = () => {
        navigation.navigate('Calculo');
      };
  const imageStyles = StyleSheet.create({
    image: {
      width: 200,
      height: 200,
      marginBottom: 16,
    },
  });

  const titleStyles = StyleSheet.create({
    title: {
      fontSize: 24,
      color: 'white',
      marginTop: 16,
    },
  });

  const containerStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'Black',
    },
  });

  return (
    <View style={containerStyles.container}>
      <Image style={imageStyles.image} source={{ uri: 'https://iconecta.es/blog/wp-content/uploads/2019/12/2.jpg' }} />
      <Text style={titleStyles.title}>Bienvenido</Text>
      <CustomButton text="mayor Igual" onPress={handlePress1} />
      <CustomButton text="Ir a la imagen2" onPress={handlePress2} />
      <CustomButton text="Ir a la imagen" onPress={handlePress3} />
      <CustomButton text="Calculo" onPress={handlePress4} />
      {/* <CustomButton text="Ir a mayor igual" onPress={} />
      <CustomButton text="Ir a menor igual" onPress={} />
       */}
    </View>
    
  );
};

export default HomeScreen;

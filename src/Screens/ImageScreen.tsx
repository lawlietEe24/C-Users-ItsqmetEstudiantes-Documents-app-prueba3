import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ImageScreen = () => {
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
      <Text style={titleStyles.title}>Imagen</Text>
    </View>
  );
};

export default ImageScreen;
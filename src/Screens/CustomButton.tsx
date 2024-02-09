import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface CustomButtonProps {
  text: string;
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};


export default CustomButton;


const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ADD8E6',
    padding: 10,
    borderRadius: 5,
    width: '70%',
  },
  buttonText: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 18,
  },
});

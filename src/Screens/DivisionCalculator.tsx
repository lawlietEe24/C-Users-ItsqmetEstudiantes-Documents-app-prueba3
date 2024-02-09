import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

interface ComparisonCalculatorProps {
  title: string;
}

const ComparisonCalculator: React.FC<ComparisonCalculatorProps> = ({ title }) => {
  const [number1, setNumber1] = useState<string>('');
  const [number2, setNumber2] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const compareNumbers = (number1: string, number2: string) => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (num1 > num2) {
      return 'El número 1 es mayor';
    } else if (num1 < num2) {
      return 'El número 2 es mayor';
    } else {
      return 'Los números son iguales';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input}
        placeholder="Campo número 1"
        value={number1}
        onChangeText={setNumber1}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Campo número 2"
        value={number2}
        onChangeText={setNumber2}
        keyboardType="numeric"
      />
      <Button
        title="Comparar"
        color="#ADD8E6"
        onPress={() => {
          const resultado = compareNumbers(number1, number2);
          setResult(resultado);
        }}
      />
      {result && <Text style={styles.result}>{`Resultado: ${result}`}</Text>}
    </View>
  );
};



export default ComparisonCalculator;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      marginBottom: 20,
      width: '70%',
    },
    result: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 20,
    },
  });
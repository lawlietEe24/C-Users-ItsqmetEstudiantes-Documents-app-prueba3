import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Calculo = () => {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularMinimo = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if (!isNaN(num1) && !isNaN(num2)) {
      const minimo = Math.min(num1, num2);
      setResultado(`El número menor es ${minimo}`);
    } else {
      setResultado('Por favor, ingrese dos números válidos.');
    }
  };

  return (
    <View>
      <TextInput
        value={numero1}
        onChangeText={setNumero1}
        placeholder="Ingrese el primer número"
        keyboardType="numeric"
      />
      <TextInput
        value={numero2}
        onChangeText={setNumero2}
        placeholder="Ingrese el segundo número"
        keyboardType="numeric"
      />
      <Button title="Calcular" onPress={calcularMinimo} />
      <Text>{resultado}</Text>
    </View>
  );
};

export default Calculo;


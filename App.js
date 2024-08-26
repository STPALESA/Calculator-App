import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleOperation = (operation) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || (isNaN(n2) && operation !== 'sqrt')) {
      setError('Please enter valid numbers');
      setResult(null);
      return;
    }

    setError('');
    let res = 0;

    switch (operation) {
      case 'add':
        res = n1 + n2;
        break;
      case 'subtract':
        res = n1 - n2;
        break;
      case 'multiply':
        res = n1 * n2;
        break;
      case 'divide':
        if (n2 === 0) {
          setError('Division by zero is not allowed');
          return;
        }
        res = n1 / n2;
        break;
      case 'power':
        res = Math.pow(n1, n2);
        break;
      case 'sqrt':
        res = Math.sqrt(n1);
        break;
      default:
        return;
    }

    setResult(res);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter number 1"
        keyboardType="numeric"
        onChangeText={(text) => setNum1(text)}
        value={num1}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter number 2"
        keyboardType="numeric"
        onChangeText={(text) => setNum2(text)}
        value={num2}
      />
      
      {error ? <Text style={styles.error}>{error}</Text> : null}

      <View style={styles.buttons}>
      <View style= {styles.buttonWrapper}>
        <Button title="Add" onPress={() => handleOperation('add')} />
        <View style= {styles.buttonWrapper}>
        </View>
        <Button title="Subtract" onPress={() => handleOperation('subtract')} />       <View style= {styles.buttonWrapper}>
        </View>
        <Button title="Multiply" onPress={() => handleOperation('multiply')} />        <View style= {styles.buttonWrapper}>
        </View>
        <Button title="Divide" onPress={() => handleOperation('divide')} />
        <View style= {styles.buttonWrapper}>
        </View>
        <Button title="Power" onPress={() => handleOperation('power')} />
        <View style= {styles.buttonWrapper}>
        </View>
        <Button title="Square Root" onPress={() => handleOperation('sqrt')} />
      </View>
      </View>

      {result !== null ? <Text style={styles.result}>Result: {result}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttons: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  buttonWrapper:{
    marginBottom: 10,
  },
  result: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 10,
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
});

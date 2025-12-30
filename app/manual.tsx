// app/manual.tsx
import { itrans_to_devanagari } from 'indic-transliteration';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ManualScreen() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleTransliterate = () => {
    try {
      const output = itrans_to_devanagari(input || '');
      setResult(output || ''); // show empty if nothing
    } catch (error) {
      setResult('Could not transliterate this text.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transliteration Tool</Text>

      <Text style={styles.label}>Input (ITRANS / Roman)</Text>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="Type, e.g., namaste"
      />

      <TouchableOpacity style={styles.button} onPress={handleTransliterate}>
        <Text style={styles.buttonText}>TRANSLITERATE</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Result (Devanagari)</Text>
      <Text style={styles.result}>{result || 'Result will appear here'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    marginTop: 12,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  button: {
    marginTop: 16,
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  result: {
    marginTop: 12,
    fontSize: 22,
  },
});

import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const SCRIPTS = [
  { label: 'Hindi (हिंदी)', value: 'hi' },
  { label: 'Tamil (தமிழ்)', value: 'ta' },
  { label: 'Telugu (తెలుగు)', value: 'te' },
  { label: 'Gujarati (ગુજરાતી)', value: 'gu' },
  { label: 'Malayalam (മലയാളം)', value: 'ml' }
];

const COMMON_WORDS: { [key: string]: { [key: string]: string } } = {
  hi: {
    'namaste': 'नमस्ते', 'bharat': 'भारत', 'delhi': 'दिल्ली',
    'mumbai': 'मुंबई', 'bengaluru': 'बेंगलुरु', 'sadak': 'सड़क',
    'market': 'बाजार', 'hotel': 'होटल', 'stop': 'रुकें', 'road': 'रास्ता'
  },
  ta: {
    'namaste': 'வணக்கம்', 'bharat': 'இந்தியா', 'delhi': 'டெல்லி',
    'sadak': 'சாலை', 'market': 'சந்தை', 'hotel': 'ஹோட்டல்'
  },
  te: {
    'namaste': 'నమస్కారం', 'bharat': 'భారత్', 'delhi': 'దెల్హీ'
  },
  gu: {
    'namaste': 'નમસ્તે', 'bharat': 'ભારત', 'delhi': 'દિલ્હી'
  },
  ml: {
    'namaste': 'നമസ്കാരം', 'bharat': 'ഭാരതം', 'delhi': 'ദില്ലി'
  }
};

const lookupTranslation = (word: string, script: string): string => {
  return COMMON_WORDS[script]?.[word.toLowerCase()] || '';
};

export default function ManualScreen() {
  const [input, setInput] = useState('');
  const [targetScript, setTargetScript] = useState('hi');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTransliterate = async () => {
    if (!input.trim()) return;
    
    setLoading(true);
    try {
      let output = lookupTranslation(input.toLowerCase(), targetScript);
      
      // If not in dictionary, use REAL Google Translate API
      if (!output) {
        const response = await axios.post(
          'https://translate.googleapis.com/translate_a/single',
          `client=gtx&sl=en&tl=${targetScript}&dt=t&q=${encodeURIComponent(input)}`
        );
        output = response.data[0][0][0];
      }
      
      setResult(output);
    } catch (error) {
      setResult('Network error. Try: namaste, bharat');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transliteration Tool</Text>

      <Text style={styles.label}>Input (English)</Text>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="Type any word: namaste, apple, delhi..."
      />

      <Text style={styles.label}>Target Script</Text>
      <View style={styles.scriptButtons}>
        {SCRIPTS.map(script => (
          <TouchableOpacity
            key={script.value}
            style={[
              styles.scriptButton,
              targetScript === script.value && styles.scriptButtonActive
            ]}
            onPress={() => setTargetScript(script.value)}
          >
            <Text style={[
              styles.scriptButtonText,
              targetScript === script.value && styles.scriptButtonTextActive
            ]}>
              {script.label.split(' ')[0]}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity 
        style={[styles.button, loading && styles.buttonDisabled]} 
        onPress={handleTransliterate}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'TRANSLATING...' : 'TRANSLITERATE'}
        </Text>
      </TouchableOpacity>

      {result ? (
        <>
          <Text style={styles.label}>Result</Text>
          <Text style={styles.result}>{result}</Text>
        </>
      ) : (
        <Text style={styles.hint}>Try "apple", "hello", "namaste"</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#ffffff' },
  title: { fontSize: 20, fontWeight: '600', marginBottom: 16 },
  label: { fontSize: 14, marginTop: 12, marginBottom: 4 },
  input: {
    borderWidth: 1, borderColor: '#cccccc', borderRadius: 8,
    paddingHorizontal: 12, paddingVertical: 8,
  },
  scriptButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
    gap: 8,
  },
  scriptButton: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  scriptButtonActive: {
    backgroundColor: '#2196F3',
    borderColor: '#2196F3',
  },
  scriptButtonText: {
    fontSize: 12,
    color: '#333',
    fontWeight: '500',
  },
  scriptButtonTextActive: {
    color: 'white',
  },
  button: {
    marginTop: 16, backgroundColor: '#2196F3', paddingVertical: 12,
    borderRadius: 8, alignItems: 'center',
  },
  buttonDisabled: { backgroundColor: '#cccccc' },
  buttonText: { color: '#ffffff', fontSize: 16, fontWeight: '500' },
  result: { marginTop: 12, fontSize: 22, textAlign: 'center' },
  hint: { marginTop: 16, fontSize: 14, color: '#666', textAlign: 'center' },
});

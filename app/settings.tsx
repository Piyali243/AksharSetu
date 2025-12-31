// app/settings.tsx
import * as Speech from 'expo-speech';
import React, { useState } from 'react';
import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

export default function SettingsScreen() {
  const [offlineMode, setOfflineMode] = useState(true);
  const [ttsEnabled, setTtsEnabled] = useState(false);

  const speakSample = () => {
    Speech.speak('नमस्ते, आपका स्वागत है अक्षरसेतु में', {
      language: 'hi',
      pitch: 1,
      rate: 0.8,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Offline transliteration mode</Text>
        <Switch value={offlineMode} onValueChange={setOfflineMode} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Text-to-speech (pronunciation)</Text>
        <Switch value={ttsEnabled} onValueChange={setTtsEnabled} />
      </View>

      <TouchableOpacity style={styles.testButton} onPress={speakSample}>
        <Text style={styles.testText}>🗣️ Test Hindi pronunciation</Text>
      </TouchableOpacity>

      <Text style={styles.note}>
        Tap button to hear "Namaste, welcome to AksharSetu"
      </Text>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  label: {
    fontSize: 15,
    flex: 1,
    marginRight: 8,
  },
  testButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
  },
  testText: {
    color: 'white',
    fontSize: 16,
  },
  note: {
    marginTop: 16,
    fontSize: 13,
    color: '#555555',
  },
});

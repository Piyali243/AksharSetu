// app/index.tsx
import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to AksharSetu!</Text>

      <Link href="/manual" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>⌨️ Manual Input</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/camera" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>📷 Camera Transliteration</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/settings" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>⚙️ Settings</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/about" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>📄 About / Help</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 32,
  },
  button: {
    width: '100%',
    backgroundColor: '#2196F3',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
});

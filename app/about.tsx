// app/about.tsx
import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About AksharSetu</Text>

      <Text style={styles.paragraph}>
        AksharSetu is inspired by the Smart India Hackathon problem statement
        “Transliteration tool for street signs”. It aims to help travellers read
        Indian road signs and public information even when they do not know the
        local script.
      </Text>

      <Text style={styles.subtitle}>Key features</Text>
      <Text style={styles.bullet}>• Camera‑based street sign transliteration</Text>
      <Text style={styles.bullet}>• Manual input for any short text</Text>
      <Text style={styles.bullet}>• Support for multiple Indian scripts</Text>
      <Text style={styles.bullet}>• Offline‑friendly design with simple UI</Text>

      <Text style={styles.subtitle}>Mission</Text>
      <Text style={styles.paragraph}>
        The idea is to bridge India&apos;s script diversity and make important
        information accessible to citizens and visitors, regardless of the
        script used on signboards.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 16,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 15,
    marginBottom: 8,
  },
  bullet: {
    fontSize: 15,
    marginBottom: 4,
  },
});

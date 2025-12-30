// app/camera.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CameraScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Camera Transliteration</Text>
      <Text style={styles.text}>
        In the final version this screen will open the camera, detect text on
        street signs, and transliterate it into your chosen script.
      </Text>
      <Text style={styles.text}>
        For now, this placeholder keeps the flow simple and shows the idea
        clearly for your resume and SIH statement.
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
    marginBottom: 12,
  },
  text: {
    fontSize: 15,
    marginBottom: 8,
  },
});

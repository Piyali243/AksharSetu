// app/_layout.tsx
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen name="index" options={{ title: 'AksharSetu' }} />
        <Stack.Screen name="manual" options={{ title: 'Manual Input' }} />
        <Stack.Screen name="camera" options={{ title: 'Camera Transliteration' }} />
        <Stack.Screen name="settings" options={{ title: 'Settings' }} />
        <Stack.Screen name="about" options={{ title: 'About / Help' }} />
      </Stack>
    </>
  );
}

// app/settings.tsx
import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

export default function SettingsScreen() {
  const [offlineMode, setOfflineMode] = useState(true);
  const [ttsEnabled, setTtsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Offline transliteration mode</Text>
        <Switch value={offlineMode} onValueChange={setOfflineMode} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Text‑to‑speech (pronunciation)</Text>
        <Switch value={ttsEnabled} onValueChange={setTtsEnabled} />
      </View>

      <Text style={styles.note}>
        These options are placeholders to show how AksharSetu can support
        travellers with poor network and pronunciation help.
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
  note: {
    marginTop: 16,
    fontSize: 13,
    color: '#555555',
  },
});

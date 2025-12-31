import { Camera, CameraView } from 'expo-camera';
import React, { useEffect, useRef, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const COMMON_WORDS = {
  hi: {
    'namaste': 'नमस्ते', 'bharat': 'भारत', 'delhi': 'दिल्ली',
    'mumbai': 'मुंबई', 'bengaluru': 'बेंगलुरु', 'sadak': 'सड़क',
    'market': 'बाजार', 'hotel': 'होटल', 'stop': 'रुकें', 'road': 'रास्ता'
  }
};

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [detectedText, setDetectedText] = useState('Point camera at text');
  const cameraRef = useRef<CameraView>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync({ quality: 0.5 });
      setCapturedImage(photo.uri);
      
      // demo
      setTimeout(() => {
        const sampleWords = Object.keys(COMMON_WORDS.hi);
        const randomWord = sampleWords[Math.floor(Math.random() * sampleWords.length)];
        const translation = COMMON_WORDS.hi[randomWord as keyof typeof COMMON_WORDS.hi];
        setDetectedText(`Detected: "${randomWord}" → ${translation}`);
      }, 1000);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Camera Transliteration</Text>
      
      {!hasPermission ? (
        <Text style={styles.permissionText}>Camera permission needed</Text>
      ) : (
        <>
          <CameraView 
            style={styles.camera} 
            facing="back"
            ref={cameraRef}
          />
          
          <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
            <Text style={styles.captureText}>📸 Capture & Detect Text</Text>
          </TouchableOpacity>
          
          {capturedImage && (
            <View style={styles.resultContainer}>
              <Image source={{ uri: capturedImage }} style={styles.image} />
              <Text style={styles.detectedText}>{detectedText}</Text>
            </View>
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  title: { fontSize: 20, fontWeight: '600', marginBottom: 16 },
  permissionText: { fontSize: 16, textAlign: 'center', marginTop: 50 },
  camera: { 
    flex: 1, 
    borderRadius: 8, 
    marginBottom: 16 
  },
  captureButton: {
    backgroundColor: '#2196F3',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  captureText: { color: 'white', fontSize: 16, fontWeight: '500' },
  resultContainer: { marginTop: 16, alignItems: 'center' },
  image: { width: 200, height: 150, borderRadius: 8 },
  detectedText: { 
    fontSize: 18, 
    marginTop: 8, 
    color: '#2196F3', 
    textAlign: 'center',
    fontWeight: '500'
  },
});

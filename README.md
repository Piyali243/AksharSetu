# AksharSetu
AksharSetu is a small mobile app that grew out of my work on the Smart India Hackathon problem statement **"Transliteration tool for street signs"**. The idea is simple: make it easier for travellers to read Indian street signs and short texts when they don't know the local script.

## Features
- Home screen with clear navigation to all tools
- Manual input transliteration (Roman / ITRANS → Devanagari using a JS library)
- Camera transliteration screen prepared for future OCR integration
- Settings screen with offline-mode and text-to-speech toggles
- About / Help screen explaining the problem statement and design goals

## Tech stack
- React Native with Expo
- Expo Router for navigation
- TypeScript
- Tested with Expo Go on Android

## Running the app
```bash
# clone the repo
git clone https://github.com/Piyali243/AksharSetu.git
cd AksharSetu

# install dependencies
npm install

# start development server
npm start

**Open the project in the Expo Go app on an Android device by scanning the QR code from the terminal or Expo dev tools.**

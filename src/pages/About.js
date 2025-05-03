import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Audio } from 'expo-av'; 
import backgroundImage from '../images/background.png';

export default function About() {
  useEffect(() => {
    let sound;

    const playSound = async () => {
      try {
        sound = new Audio.Sound(); 
        await sound.loadAsync(require('../audio/Star-Wars.mp3'));
        await sound.playAsync();
      } catch (error) {
        console.error('Erro ao tocar áudio:', error);
      }
    };

    playSound();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Desenvolvedores</Text>
        <Text style={styles.text}>RA: 1134890</Text>
        <Text style={styles.text}>Nome: Gabriel Duarte</Text>
        <Text style={styles.text}>Email: gabriel.anpedu@gmail.com</Text>
        <Text style={[styles.text, { marginTop: 12 }]}>RA: 1135161</Text>
        <Text style={styles.text}>Nome: Vinicius Casturino</Text>
        <Text style={styles.text}>Email: 1135161@atitus.edu.br</Text>
        <Text style={[styles.text, { marginTop: 12 }]}>RA: 1126648</Text>
        <Text style={styles.text}>Nome: Kevin Bourckhardt</Text>
        <Text style={styles.text}>Email: 1126648@atitus.edu.br</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 16,
  },
  text: {
    color: '#FFD700',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 4,
    fontWeight: 'bold',
  },
});

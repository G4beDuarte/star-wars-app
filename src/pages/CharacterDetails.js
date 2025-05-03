import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import backgroundImage from '../images/background.png';

export default function CharacterDetails({ route, navigation }) {
  const { character } = route.params;
  console.log(character);

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>{character.name}</Text>
        <Text style={styles.text}>Altura: {character.height} cm</Text>
        <Text style={styles.text}>Peso: {character.mass} kg</Text>
        <Text style={styles.text}>Cabelo: {character.hair_color}</Text>
        <Text style={styles.text}>Pele: {character.skin_color}</Text>
        <Text style={styles.text}>Olhos: {character.eye_color}</Text>
        <Text style={styles.text}>Gênero: {character.gender}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Naves', { character })}>
            <Text style={styles.buttonText}>Naves</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Filmes', { character })}>
            <Text style={styles.buttonText}>Filmes</Text>
          </TouchableOpacity>
        </View>
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
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    color: '#FFD700',
    fontSize: 16,
    marginBottom: 6,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    shadowColor: '#000',
    shadowOpacity: 0.7,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

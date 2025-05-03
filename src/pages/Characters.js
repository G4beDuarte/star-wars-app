import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';
import CharacterCard from '../../components/CharacterCard';
import { getCharacter } from '../../services/swapi';
import CharacterData from '../data/CharacterData.json';
import backgroundImage from '../images/background.png';

const ids = [1, 4, 13, 20, 14];

export default function Characters({ navigation }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const results = await Promise.all(ids.map(id => getCharacter(id)));
        const enrichedCharacters = results.map(character => {
          const characterId = parseInt(character.url.match(/\/people\/(\d+)\//)[1]);
          const extra = CharacterData.find(c => c.id === characterId);
          return {
            ...character,
            ...extra,
          };
        });
        setCharacters(enrichedCharacters);
      } catch (error) {
        console.error('Erro ao buscar personagens:', error);
      }
    };
    fetchCharacters();
  }, []);

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <FlatList
          data={characters}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <CharacterCard
              character={item}
              onPress={() => navigation.navigate('Detalhes', { character: item })}
            />
          )}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sobre')}>
            <Text style={styles.buttonText}>Sobre</Text>
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
  overlay: {
    flex: 1,
    backgroundColor: '#0000',
    padding: 16,
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFD700',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 10,
    borderRadius: 8,
    backgroundColor: '#111',
    padding: 10,
    borderColor: '#FFD700',
    borderWidth: 1,
  }
});

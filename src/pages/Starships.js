import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ImageBackground, StyleSheet } from 'react-native';
import { getResource } from '../../services/swapi';
import backgroundImage from '../images/background.png';

export default function Starships({ route }) {
  const { character } = route.params;
  console.log(character)
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      const data = await Promise.all(character.starships.map(url => getResource(url)));
      setStarships(data);
    };

    if (character.starships.length) {
      fetchStarships();
    }
  }, []);

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={{ padding: 16 }}>
        {character.starships.length === 0 ? (
          <Text style={styles.text}>Este personagem não possui naves.</Text>
        ) : (
          <FlatList
            data={starships}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <View style={{ marginBottom: 12 }}>
                <Text style={[styles.backgroundImage, styles.text,{ fontWeight: 'bold' }]}>{item.name}</Text>
                <Text style={styles.text}>Modelo: {item.model}</Text>
                <Text style={styles.text}>Passageiros: {item.passengers}</Text>
              </View>
            )}
          />
        )}
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
  text: {
    color: '#FFD700',
    fontSize: 16,
    marginBottom: 6,
    fontWeight: 'bold',
  },
});

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ImageBackground, StyleSheet } from 'react-native';
import { getResource } from '../../services/swapi';
import backgroundImage from '../images/background.png';

export default function Films({ route }) {
  const { character } = route.params;
  console.log(character)
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      const data = await Promise.all(character.films.map(url => getResource(url)));
      setFilms(data);
    };

    if (character.films.length) {
      fetchFilms();
    }
  }, []);

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={{ padding: 16 }}>
        {character.films.length === 0 ? (
          <Text>Este personagem não aparece em filmes.</Text>
        ) : (
          <FlatList
            data={films}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <View style={{ marginBottom: 12 }}>
                <Text style={[styles.backgroundImage, styles.text,{ fontWeight: 'bold' }]}>{item.title}</Text>
                <Text style={styles.text}>Diretor: {item.director}</Text>
                <Text style={styles.text}>Data de lançamento: {item.release_date}</Text>
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
    fontStyle: 'bold',
    fontWeight: 'bold',
  },
});

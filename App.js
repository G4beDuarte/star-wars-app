import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Characters from './src/pages/Characters';
import CharacterDetails from './src/pages/CharacterDetails';
import Starships from './src/pages/Starships';
import Films from './src/pages/Films';
import About from './src/pages/About';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Personagens">
        <Stack.Screen name="Personagens" component={Characters} />
        <Stack.Screen name="Detalhes" component={CharacterDetails} />
        <Stack.Screen name="Naves" component={Starships} />
        <Stack.Screen name="Filmes" component={Films} />
        <Stack.Screen name="Sobre" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
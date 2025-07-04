// Landing screen with camera access button
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a MathTutor</Text>
      <Text style={styles.subtitle}>
        Toma una foto de tu ejercicio de matemáticas y aprende paso a paso
      </Text>
      
      <View style={styles.buttonContainer}>
        <Button 
          title="Configurar Perfil" 
          onPress={() => navigation.navigate('ProfileSetup')} 
        />
        <Button 
          title="Tomar Foto de Ejercicio" 
          onPress={() => navigation.navigate('Camera')} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#666',
  },
  buttonContainer: {
    width: '100%',
    gap: 15,
  },
});

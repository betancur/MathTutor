// Age and grade input form
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type ProfileSetupNavigationProp = StackNavigationProp<RootStackParamList, 'ProfileSetup'>;

export default function ProfileSetupScreen() {
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');
  const navigation = useNavigation<ProfileSetupNavigationProp>();

  const handleSave = () => {
    const ageNum = parseInt(age);
    
    if (!age || !grade) {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }
    
    if (ageNum < 6 || ageNum > 18) {
      Alert.alert('Error', 'La edad debe estar entre 6 y 18 años');
      return;
    }

    // TODO: Aquí se guardaría el perfil del usuario usando UserService
    Alert.alert('Perfil guardado', 'Tu perfil ha sido guardado exitosamente', [
      { text: 'OK', onPress: () => navigation.navigate('Home') }
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurar Perfil</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Edad (6-18 años):</Text>
        <TextInput
          keyboardType="numeric"
          value={age}
          onChangeText={setAge}
          style={styles.input}
          placeholder="Ej: 12"
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Curso/Grado:</Text>
        <TextInput
          value={grade}
          onChangeText={setGrade}
          style={styles.input}
          placeholder="Ej: 6to grado"
        />
      </View>
      
      <Button title="Guardar Perfil" onPress={handleSave} />
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
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    backgroundColor: 'white',
  },
});

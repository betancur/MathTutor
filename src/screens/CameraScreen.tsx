// Camera interface for photo capture
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type CameraScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Camera'>;

export default function CameraScreen() {
  const navigation = useNavigation<CameraScreenNavigationProp>();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleTakePhoto = () => {
    setIsProcessing(true);
    
    // TODO: Implementar captura de cámara real
    // Simulación de procesamiento
    setTimeout(() => {
      setIsProcessing(false);
      Alert.alert(
        'Foto procesada', 
        '¿Quieres continuar con el tutorial?',
        [
          { text: 'Cancelar', style: 'cancel' },
          { 
            text: 'Continuar', 
            onPress: () => navigation.navigate('Tutorial', { mathExpression: '2x + 5 = 15' })
          }
        ]
      );
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Captura de Ejercicio</Text>
      <Text style={styles.subtitle}>
        Coloca el ejercicio de matemáticas en el centro de la pantalla
      </Text>
      
      <View style={styles.cameraPlaceholder}>
        <Text style={styles.placeholderText}>
          📷 Aquí irá la vista de la cámara
        </Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <Button 
          title={isProcessing ? "Procesando..." : "Tomar Foto"} 
          onPress={handleTakePhoto}
          disabled={isProcessing}
        />
        <Button 
          title="Volver" 
          onPress={() => navigation.goBack()}
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
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#666',
  },
  cameraPlaceholder: {
    width: '100%',
    height: 300,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 30,
  },
  placeholderText: {
    fontSize: 18,
    color: '#666',
  },
  buttonContainer: {
    width: '100%',
    gap: 15,
  },
});

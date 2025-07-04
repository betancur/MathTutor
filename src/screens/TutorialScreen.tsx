// Step-by-step explanation interface
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';

type TutorialScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Tutorial'>;
type TutorialScreenRouteProp = RouteProp<RootStackParamList, 'Tutorial'>;

export default function TutorialScreen() {
  const navigation = useNavigation<TutorialScreenNavigationProp>();
  const route = useRoute<TutorialScreenRouteProp>();
  const [currentStep, setCurrentStep] = useState(0);
  
  const mathExpression = route.params?.mathExpression || 'Ejercicio no encontrado';
  
  // Pasos de ejemplo para el tutorial
  const tutorialSteps = [
    {
      hint: "Observa la ecuación. ¿Qué operación necesitamos hacer para aislar x?",
      explanation: "Tenemos 2x + 5 = 15. Para encontrar x, necesitamos dejarlo solo."
    },
    {
      hint: "¿Qué deberíamos hacer con el +5 para quitarlo del lado izquierdo?",
      explanation: "Restamos 5 de ambos lados de la ecuación."
    },
    {
      hint: "Ahora tenemos 2x = 10. ¿Cómo podemos encontrar el valor de x?",
      explanation: "Dividimos ambos lados entre 2."
    },
    {
      hint: "¡Excelente! ¿Cuál es el resultado final?",
      explanation: "x = 5. ¡Has resuelto la ecuación!"
    }
  ];

  const handleNextStep = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinish = () => {
    navigation.navigate('Home');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Tutorial Paso a Paso</Text>
        <Text style={styles.expression}>Ejercicio: {mathExpression}</Text>
        
        <View style={styles.stepContainer}>
          <Text style={styles.stepNumber}>Paso {currentStep + 1} de {tutorialSteps.length}</Text>
          <Text style={styles.hint}>{tutorialSteps[currentStep].hint}</Text>
          <Text style={styles.explanation}>{tutorialSteps[currentStep].explanation}</Text>
        </View>
        
        <View style={styles.buttonContainer}>
          <Button 
            title="Anterior" 
            onPress={handlePreviousStep}
            disabled={currentStep === 0}
          />
          {currentStep < tutorialSteps.length - 1 ? (
            <Button title="Siguiente" onPress={handleNextStep} />
          ) : (
            <Button title="Finalizar" onPress={handleFinish} />
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  expression: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 30,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  stepContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
  stepNumber: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  hint: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 15,
    color: '#2196F3',
  },
  explanation: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
  },
});

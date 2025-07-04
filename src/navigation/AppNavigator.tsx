// Navigation configuration
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileSetupScreen from '../screens/ProfileSetupScreen';
import CameraScreen from '../screens/CameraScreen';
import TutorialScreen from '../screens/TutorialScreen';

export type RootStackParamList = {
  Home: undefined;
  ProfileSetup: undefined;
  Camera: undefined;
  Tutorial: { mathExpression?: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProfileSetup" component={ProfileSetupScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
      <Stack.Screen name="Tutorial" component={TutorialScreen} />
    </Stack.Navigator>
  );
}

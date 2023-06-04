import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './navigation/appNavigation';
import 'react-native-gesture-handler';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
  <>
    <AppNavigation />
  </>
  );
}



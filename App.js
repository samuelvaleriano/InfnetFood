import { StatusBar } from 'expo-status-bar';
import AppNavigator from './navigation/AppNavigator';
import { CartProvider } from '../infnetFood/context/CardContext';

export default function App() {
  return (
    <CartProvider>
      <StatusBar style="auto" />
      <AppNavigator />
    </CartProvider>
  );
}



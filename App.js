import { StatusBar } from 'expo-status-bar';
import AppNavigator from './navigation/AppNavigator';
import { CartProvider } from '../infnetFood/context/CardContext';
import { UserProvider } from './context/UserContext';

export default function App() {
  return (
    <UserProvider>
      <CartProvider>
        <StatusBar style="auto" />
        <AppNavigator />
      </CartProvider>
    </UserProvider>
  );
}



import { StatusBar } from 'expo-status-bar';
import AppNavigator from './navigation/AppNavigator';
import { CartProvider } from '../infnetFood/context/CardContext';
import { UserProvider } from './context/UserContext';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <CartProvider>
          <StatusBar style="auto" />
          <AppNavigator />
        </CartProvider>
      </UserProvider>
    </ThemeProvider>
  );
}



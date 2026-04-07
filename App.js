import { StatusBar } from 'expo-status-bar';
import AppNavigator from './navigation/AppNavigator';
import { CartProvider } from '../infnetFood/context/CardContext';
import { UserProvider } from './context/UserContext';
import { ThemeProvider } from './context/ThemeContext';
import { OrderProvider } from './context/OrderContext';

export default function App() {
  return (
    <ThemeProvider>
      <OrderProvider>
        <UserProvider>
          <CartProvider>
            <StatusBar style="auto" />
            <AppNavigator />
          </CartProvider>
        </UserProvider>
      </OrderProvider>
    </ThemeProvider>
  );
}



import React, { useContext } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native"; 
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import SigninScreen from "../screens/SigninSreen";
import ProdutosDaCategoriaScreen from "../screens/ProdutosDaCategoriaScreen";
import CartScreen from '../screens/CardScreen';
import PerfilScreen from "../screens/PerfilScreen";
import PedidosScreen from "../screens/PedidosScreen";
import DetalhesRestScreen from "../screens/DetalhesRestScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import Configuracoes from "../screens/Configuracoes";
import { useUser } from "../context/UserContext";
import { ThemeContext } from '../context/ThemeContext'; 


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const icons = {
    HomeTab: { active: 'home', inactive: 'home-outline' },
    CartTab: { active: 'cart', inactive: 'cart-outline' },
    SigninTab: { active: 'person', inactive: 'person-outline' },
    PedidosTab: { active: 'receipt', inactive: 'receipt-outline' },
    ConfiguracoesTab: { active: 'settings', inactive: 'settings-outline' }, 
};

function MainTabs() {
    const { darkMode } = useContext(ThemeContext);

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    const icon = icons[route.name] ?? {
                        active: 'help-circle',
                        inactive: 'help-circle-outline',
                    };
                    const iconName = focused ? icon.active : icon.inactive;
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#EB0033',
                tabBarInactiveTintColor: darkMode ? '#888888' : 'gray',
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: darkMode ? '#1E1E1E' : '#FFFFFF',
                    borderTopColor: darkMode ? '#333333' : '#E0E0E0',
                }
            })}
        >
            <Tab.Screen name="HomeTab" component={HomeScreen} />
            <Tab.Screen name="CartTab" component={CartScreen} options={{ title: 'Carrinho' }} />
            <Tab.Screen name="SigninTab" component={PerfilScreen} options={{ title: 'Perfil' }} />
            <Tab.Screen name="PedidosTab" component={PedidosScreen} options={{ title: 'Pedidos' }} />
            <Tab.Screen name="ConfiguracoesTab" component={Configuracoes} options={{ title: 'Configurações' }} />
        </Tab.Navigator>
    );
}

export default function AppNavigator() {
    const { user } = useUser();
    const { darkMode } = useContext(ThemeContext);

    return (

        <NavigationContainer theme={darkMode ? DarkTheme : DefaultTheme}>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { 
                        backgroundColor: darkMode ? '#1E1E1E' : '#890019', 
                        height: 120 
                    },
                    headerTintColor: '#FFF',
                    headerTitleStyle: { fontWeight: 'bold', fontSize: 24, elevation: 0, shadowOpacity: 0, borderBottomWidth: 0 }
                }}
            >
                {user == null ? (
                    <Stack.Screen
                        name="InfntFood"
                        component={SigninScreen}
                        options={{ headerShown: true, headerTitle: 'InfntFood' }}
                    />
                ) : (
                    <>
                        <Stack.Screen
                            name="Main"
                            component={MainTabs}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="ProdutosDaCategoria"
                            component={ProdutosDaCategoriaScreen}
                            options={({ route }) => ({ title: route.params.item.nome })}
                        />
                        <Stack.Screen
                            name="DetalhesRestaurante"
                            component={DetalhesRestScreen}
                            options={{ title: 'Detalhes do Restaurante' }}
                        />
                        <Stack.Screen
                            name="Checkout"
                            component={CheckoutScreen}
                            options={{ title: 'Finalizar Compra' }}
                        />
                 

                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
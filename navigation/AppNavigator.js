import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import SigninScreen from "../screens/SigninSreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const icons = {
    HomeTab: { active: 'home', inactive: 'home-outline' },
    SigninTab: { active: 'person', inactive: 'person-outline' },
};


function MainTabs() {


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
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
            })}
        >
            <Tab.Screen name="HomeTab" component={HomeScreen} />
        </Tab.Navigator>
    );
}

export default function AppNavigator() {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: '#890019' },
                    headerTintColor: '#FFF',
                    headerTitleStyle: { fontWeight: 'bold', fontSize: 24 ,     elevation: 0,  shadowOpacity: 0,   borderBottomWidth: 0,}
                }}
            >
                <Stack.Screen name="InfntFood" component={SigninScreen} />
                <Stack.Screen
                    name="Main"
                    component={MainTabs}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
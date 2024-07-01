import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup'
import { UserProvider } from './UserContext';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <UserProvider>
             <StatusBar hidden />
            <NavigationContainer independent={true}>
                <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
                    <Stack.Screen name='Home' component={Home} />
                    <Stack.Screen name='Login' component={Login} />
                    <Stack.Screen name='Signup' component={Signup} />
                </Stack.Navigator>
            </NavigationContainer>

        </UserProvider>
    );
};

export default App;

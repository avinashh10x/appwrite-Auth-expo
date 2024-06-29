import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup'
import { UserProvider } from './UserContext';
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <UserProvider>
            <StatusBar barStyle={'dark-content'} />
           
                <NavigationContainer independent={true}>
                    <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
                        <Stack.Screen name='Home' component={Home} />
                        <Stack.Screen name='Login' component={Login} />
                        <Stack.Screen name='Signup' component={Signup} />
                    </Stack.Navigator>
                </NavigationContainer>
           
        </UserProvider>
    );
};

export default App;

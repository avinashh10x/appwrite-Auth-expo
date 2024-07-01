import React, { useContext } from 'react';
import { logout } from '../services/AppwriteService';
import { UserContext } from '../UserContext';
import Joke from './Tabs/Joke';
import QuoteBox from './Tabs/Qoutes';
import Profile from './Tabs/Profile';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

const Home = ({ navigation }) => {
    const { user } = useContext(UserContext);

    

    return (
        <Tab.Navigator
            initialRouteName='Joke'
        >
            <Tab.Screen
                name="Joke"
                component={Joke}
                options={{
                    tabBarLabel: 'Joke',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon name="gamepad" color={focused ? '#337ab7' : color} size={focused ? 28 : 26} />
                    ),
                }}
            />

            <Tab.Screen
                name="Quote"
                component={QuoteBox}
                options={{
                    tabBarLabel: 'Quote',
                    tabBarIcon: ({ color, focused }) => (
                        <Icon name="lightbulb-on-outline" color={focused ? '#337ab7' : color} size={focused ? 28 : 26} />
                    ),
                    tabBarColor:'transparent'
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, focused }) => (
                        <Icon name="account" color={focused ? '#337ab7' : color} size={focused ? 28 : 26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default Home;

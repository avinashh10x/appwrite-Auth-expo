import React from 'react';
import { SafeAreaView, View, Text, StatusBar } from 'react-native';
import App from './App';
import { PaperProvider } from 'react-native-paper';

const Index = () => {
    return (
        <PaperProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <App />
            </SafeAreaView>
        </PaperProvider>
    );
};

export default Index;

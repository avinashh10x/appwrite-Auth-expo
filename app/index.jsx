import React from 'react';
import { SafeAreaView, View, Text, StatusBar } from 'react-native';
import App from './App';
import { PaperProvider } from 'react-native-paper';

// client id : 953508666027-to4gvge07h4lnghtplicua1lv3qh8h2n.apps.googleusercontent.com
// 953508666027-7v9qvm36vnvfg8m9cgnc27t54ogp75eg.apps.googleusercontent.com

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

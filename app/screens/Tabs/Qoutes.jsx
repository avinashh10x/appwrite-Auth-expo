// import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const QuoteBox = () => {
    const [quote, setQuote] = useState('loading...');
    const [author, setAuthor] = useState('loading...');

    const getQuote = async () => {
        try {
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            setQuote(data.content);
            setAuthor(data.author);
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getQuote()
    }, [])


    return (
        <View style={styles.container}>
            {/* <StatusBar style="light" translucent={true} backgroundColor="transparent" />  */}
            <View style={styles.quoteBox}>
                <Text style={styles.header}>Quote of the Day</Text>
                <Text style={styles.quote}>
                    <Text>&quot;</Text>
                    {quote}
                    <Text>&quot;</Text>
                </Text>
                <Text style={styles.author}>- {author}</Text>
                <View style={styles.buttonContainer}>
                    <Button style={styles.btn} title="New Quote" onPress={getQuote} color="#177CE5" />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bbc6fa',
        justifyContent: 'center',
        alignItems: 'center',
    },
    quoteBox: {
        backgroundColor: '#fff',
        width: '85%',
        padding: 40,
        borderRadius: 15,
        textAlign: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 20,
        elevation: 20, // This property is for Android
    },
    header: {
        fontSize: 25,
        marginBottom: 40,
        position: 'relative',
        margin: 'auto',
        fontWeight: '900'
    },
    quote: {
        fontSize: 26,
        minHeight: 110,
    },
    author: {
        fontSize: 20,
        marginTop: 10,
        textAlign: 'right',
        position: 'relative',
        color: '#604CC3'
    },
    buttonContainer: {
        marginTop: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#177CE5',
        color: '#fff',
        // borderRadius: 50,
        borderWidth: 1,
        borderColor: '#177CE5',
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        borderRadius: 100,
    }
});

export default QuoteBox;

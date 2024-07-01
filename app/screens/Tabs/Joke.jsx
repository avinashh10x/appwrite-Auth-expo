import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, Pressable, Platform, StatusBar } from 'react-native';

const Joke = () => {
    const [joke, setJoke] = useState({ text: 'So you wanna hear some jokes!', category: '' });


    const apiCall = async () => {
        try {
            const response = await fetch('https://v2.jokeapi.dev/joke/Any');
            const data = await response.json();

            if (data.joke) {
                setJoke({ text: data.joke, category: data.category });
                console.log(data);
            } else if (data.setup && data.delivery) {
                setJoke({ text: `${data.setup}\n${data.delivery}`, category: data.category });
                console.log(data);
            }

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#c6e2ff'} barStyle="light-content" />
            <View style={styles.jokebox}>
                <View style={styles.jokeContainer}>
                    <Text style={styles.jokeText}>{joke.text}</Text>
                    <Text style={styles.categoryText}>{joke.category}</Text>
                </View>
            </View>

            <Pressable onPress={apiCall} style={styles.button}>
                <Text style={styles.buttonText}>Hit me</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        gap: 50,
        backgroundColor: '#D8EFD3',
    },
    jokebox: {
        width: '85%',
        marginTop: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%',
        borderRadius: 15,
        padding: 15,
        ...Platform.select({
            android: {
                elevation: 5,
                shadowColor: 'black',
                shadowOpacity: 0.5,
                shadowRadius: 5,
                shadowOffset: { width: 0, height: 2 },
            },
        }),
    },
    button: {
        backgroundColor: '#003366',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginBottom: 100,
    },
    jokeContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'space-between'
    },
    jokeText: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        fontWeight: '500',
    },
    categoryText: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Joke;
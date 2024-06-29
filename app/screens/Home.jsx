import React, { useContext } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { logout } from '../services/AppwriteService';
import { UserContext } from '../UserContext';
import { Button } from 'react-native-paper';

const Home = ({ navigation }) => {

    const { user } = useContext(UserContext)

    const handleLogout = async () => {
        try {
            await logout()
            navigation.navigate('Login')
        } catch (error) {
            console.log('error while logut :: ', error)
        }
    }

    return (
        <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1603346133929-24265debae88?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} // Replace with your background image URI
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <Text style={styles.greetingText}>Welcome to Our App!</Text>
                {
                    user && <Text style={styles.greetingText}>Hello {user.name}</Text>
                }

            </View>

            <Button mode="contained" onPress={handleLogout}>
                Log out
            </Button>

        </ImageBackground>
    );
};

export default Home;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4c669f', // Fallback color if image fails to load
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
    },
    greetingText: {
        fontSize: 30,
        fontWeight: '800', // Increased boldness here
        textAlign: 'center',
        color: 'white',
        marginBottom: 40,
        textShadowColor: 'rgba(0, 0, 0, 0.75)', // Shadow color
        textShadowOffset: { width: 0, height: 5 }, // Shadow offset
        textShadowRadius: 10, // Shadow radius
        elevation: 5, // Android elevation (not applicable to text, use shadow instead)
    },
    customButton: {
        backgroundColor: '#ff6f61',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 25,
        elevation: 3,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

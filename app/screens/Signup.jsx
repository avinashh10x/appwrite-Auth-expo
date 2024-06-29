import React, { useContext, useState } from 'react';
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { register } from '../services/AppwriteService';
import { UserContext } from '../UserContext';
import { Snackbar } from 'react-native-paper';


const Signup = ({ navigation }) => {
    const { setUser } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const [error, setError] = useState('');

    const handleSignUp = async () => {
        try {
            const userData = await register(email, password, name);
            setUser(userData);
            if (userData) {
                console.log('User registered and logged in successfully');
                navigation.replace('Home');
            }
        } catch (error) {
            console.log('Error while signing up:', error.message);
            setError(error.message);
            setSnackbarVisible(true);
        }
    };



    return (


        <View style={styles.container}>
            <Text style={styles.heading}>Sign up</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <Button title="Sign Up" onPress={handleSignUp} />
            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Already have an account?{' '}</Text>
                <Pressable onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.linkText}>Login here</Text>
                </Pressable>
            </View>
            <Snackbar
                visible={snackbarVisible}
                duration={3000}  // Snackbar will automatically dismiss after 3000ms
                action={{
                    label: 'Undo',
                    onPress: () => setSnackbarVisible(false),
                }}
            >
                {error}  // Display the error message in the Snackbar
            </Snackbar>

        </View>


    );
};

export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    loginContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    loginText: {
        fontSize: 16,
        color: '#888',
    },
    linkText: {
        fontSize: 16,
        color: 'blue',
    },
});

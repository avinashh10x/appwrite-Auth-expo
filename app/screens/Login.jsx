import React, { useContext, useState } from 'react';
import { Button, StyleSheet, Text, View, Pressable } from 'react-native';
import { login } from '../services/AppwriteService';
import { UserContext } from '../UserContext';
import { Snackbar, TextInput } from 'react-native-paper';

const Login = ({ navigation }) => {
    const { setUser } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const user = await login(email, password);
            setUser(user);
            navigation.replace("Home");
        } catch (error) {
            console.log("Error during login:", error);
            setError(error.message);
            setSnackbarVisible(true); // Show Snackbar on error
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
            />

            <Button title="Login" onPress={handleLogin} />
            <View style={styles.signupContainer}>
                <Text style={styles.signupText}>Don't have an account?{' '}</Text>
                <Pressable onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.linkText}>Sign up here</Text>
                </Pressable>
            </View>

           
            <Snackbar
                visible={snackbarVisible}
                duration={3000} 
                action={{
                    label: 'Undo',
                    onPress: () => setSnackbarVisible(false),
                }}
            >
                {error} 
            </Snackbar>
        </View>
    );
};

export default Login;

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
    signupContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    signupText: {
        fontSize: 16,
        color: '#888',
    },
    linkText: {
        fontSize: 16,
        color: 'blue',
    },
});

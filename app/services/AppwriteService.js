import { Client, Account, ID } from 'react-native-appwrite';

let client = new Client();
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('667ff563003cf3c80ce8')
    .setPlatform('com.monkey2app.app');

let account = new Account(client);

async function login(email, password) {
    try {
        await account.createEmailPasswordSession(email, password);
        console.log('User logged in successfully');
        return await account.get(); // Return user data after successful login
    } catch (error) {
        console.log('Error while logging in: ' + error.message);
        throw error;
    }
}
async function register(email, password, name) {
    try {
        await account.create(ID.unique(), email, password, name);
        const userData = await login(email, password); // Login and get user data
        console.log('User registered and logged in successfully');
        return userData;
    } catch (error) {
        console.log('Error while registering: ' + error.message);
        throw error;
    }
}

async function logout() {
    try {
        await account.deleteSessions();
        console.log('User logged out successfully');
    } catch (error) {
        console.log('Error while logging out: ' + error.message);
    }
}

const handleGoogleLogin = async () => {
    // Get the Google OAuth access token
    const accessToken = await getGoogleAccessToken();

    // Call the loginWithGoogle function
    const userData = await loginWithGoogle(accessToken);

    // Use the user data as needed
    console.log(userData);
};

const getGoogleAccessToken = async () => {
    // Redirect the user to the Google OAuth authorization URL
    const authorizationUrl = `(link unavailable)`;
    const response = await fetch(authorizationUrl);
    const authorizationCode = await response.text();

    // Exchange the authorization code for an access token
    const tokenUrl = `(link unavailable)`;
    const tokenResponse = await fetch(tokenUrl);
    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    return accessToken;
};

export {
    login,
    register,
    logout,
    loginWithGoogle
};

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

// get user loggedin user data
const getUserData = async () => {
    try {
        const userData = await account.get();
        return userData;
    } catch (error) {
        console.log('Error while fetching data out: ' + error.message);
        return null
    }
}



export {
    login,
    register,
    logout,
    getUserData
};

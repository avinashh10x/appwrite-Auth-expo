import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Button, Title, Text } from 'react-native-paper';
import { UserContext } from '../../UserContext';
import { logout } from '../../services/AppwriteService';
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';

const Profile = ({navigation}) => {
    const { user } = useContext(UserContext);

    const handleLogout = async () => {
        try {
            await logout();
            navigation.navigate('Login');
        } catch (error) {
            console.log('error while logout :: ', error);
        }
    };

    if (!user) {
        return (
          <View style={styles.container}>
            <Text style={styles.messageText}>User does not exist or has not logged in.</Text>
            <Button
              style={styles.button}
              mode='contained'
              onPress={() => navigation.navigate('Login')}
              labelStyle={{ fontSize: 16 }}
            >
              Login
            </Button>
          </View>
        );
      }

    return (

        <View style={styles.container}>

            <Avatar.Icon size={150} icon="account" />

            <Title style={styles.title}>{user.name}</Title>
            <Text style={styles.email}>{user.email}</Text>

            <Button
                icon={({ color, size }) => (
                    <Icon name="logout" color={color} size={size} />
                )}
                mode='contained'
                onPress={handleLogout}
                style={styles.button}
            >
                Logout
            </Button>
        </View>
    );
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        marginTop: 16,
        fontSize: 30,
        color: 'black',
        fontWeight: '500',
        textTransform: 'uppercase',
    },
    email: {
        marginVertical: 8,
        fontSize: 16,
        color: 'gray',
        fontWeight: '200',
    },
    button: {
        marginTop: 16,
        width: '60%',
    },
});

import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../AuthContext';

const HomeScreen = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <View style={{ padding: 20 }}>
            <Text>Welcome, {user?.email}!</Text>
            <Button title="Sign Out" onPress={logout} />
        </View>
    );
};

export default HomeScreen;

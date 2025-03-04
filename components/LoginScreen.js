import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);

    return (
        <View style={{ padding: 20 }}>
            <Text>Email:</Text>
            <TextInput value={email} onChangeText={setEmail} style={{ borderWidth: 1, marginBottom: 10 }} />
            <Text>Password:</Text>
            <TextInput value={password} onChangeText={setPassword} secureTextEntry style={{ borderWidth: 1, marginBottom: 10 }} />
            <Button title="Sign In" onPress={() => login(email, password)} />
        </View>
    );
};

export default LoginScreen;

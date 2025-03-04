import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loadUser = async () => {
            const storedUser = await AsyncStorage.getItem('user');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        };
        loadUser();
    }, []);

    const login = async (email, password) => {
        // Giả lập quá trình xác thực, thực tế sẽ gọi API
        if (email === 'test@gmail.com' && password === '123456') {
            const userData = { email };
            setUser(userData);
            await AsyncStorage.setItem('user', JSON.stringify(userData));
        } else {
            alert("Sai thông tin đăng nhập!");
        }
    };

    const logout = async () => {
        setUser(null);
        await AsyncStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

/*
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, Button, ActivityIndicator, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [adding, setAdding] = useState(false);

  // Gọi API lấy danh sách người dùng
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(res.data.data);
    } catch (err) {
      setError('Lỗi khi lấy dữ liệu!');
    } finally {
      setLoading(false);
    }
  };

  // Gọi API thêm người dùng
  const addUser = async () => {
    if (!name || !job) {
      Alert.alert('Vui lòng nhập đủ thông tin');
      return;
    }
  
    try {
      setAdding(true);
      const res = await axios.post('https://reqres.in/api/users', {
        name,
        job
      });
  
      Alert.alert('Thêm thành công!', `ID: ${res.data.id}`);
  
      // 👇 Thêm người dùng mới vào danh sách local
      const newUser = {
        id: res.data.id,
        first_name: name,
        last_name: '',
        job: job,
      };
  
      setUsers((prevUsers) => [newUser, ...prevUsers]);
  
      // Reset form
      setName('');
      setJob('');
    } catch (err) {
      Alert.alert('Lỗi khi thêm người dùng');
    } finally {
      setAdding(false);
    }
  };
  

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📋 Danh sách người dùng</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Text style={styles.item}>
              👤 {item.first_name} {item.last_name}
              {item.job ? ` - ${item.job}` : ''}
            </Text>
          )}
        />
      )}

      <Text style={styles.title}>➕ Thêm người dùng</Text>

      <TextInput
        placeholder="Tên"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Công việc"
        style={styles.input}
        value={job}
        onChangeText={setJob}
      />
      {adding ? (
        <ActivityIndicator size="small" />
      ) : (
        <Button title="Thêm" onPress={addUser} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd'
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5
  },
  error: {
    color: 'red',
    marginBottom: 10
  }
});

*/

import React from 'react';
import SearchScreen from './components/SearchScreen'; 

export default function App() {
  return <SearchScreen />;
}
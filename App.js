/*import React from 'react'; //Bài tập 02.2
import { FlatList, View, Text, StyleSheet, Image } from 'react-native';
import {StatusBar } from 'react-native';
const notifications = [
  {
    id: '1',
    title: 'Bước 1: Xác định nhu cầu khách hàng',
    description: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
    time: '20/08/2020, 06:00',
    icon: 'check-circle', // Giả sử bạn dùng thư viện icon
  },
  {
    id: '2',
    title: 'Bạn có khách hàng mới!',
    description: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
    time: '20/08/2020, 06:00',
    icon: 'users',
  },
  {
    id: '3',
    title: 'Khách hàng được chia sẻ bị trùng',
    description: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.',
    time: '20/08/2020, 06:00',
    icon: 'users',
  },
  {
    id: '4',
    title: 'Khách hàng được thêm bị trùng',
    description: 'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống: Vui lòng thêm khách hàng.',
    time: '20/08/2020, 06:00',
    icon: 'users',
  },
  {
    id: '5',
    title: 'Công việc sắp đến hạn trong hôm nay',
    description: 'Bạn có 17 công việc sắp đến hạn trong hôm nay.',
    time: '20/08/2020, 06:00',
    icon: 'check-circle',
  },
  {
    id: '6',
    title: 'Công việc đã quá hạn',
    description: 'Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.',
    time: '20/08/2020, 06:00',
    icon: 'check-circle',
  },
];

const App = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{item.icon === 'check-circle' ? '✔️' : '👥'}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <><View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Thông báo</Text>
      </View>
    </View><></>
    <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.container} /></>
      
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  icon: {
    fontSize: 24,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
  container: {
    flex: 0,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default App;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <Text style={styles.text}>Hello, world</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Kích thước container chiếm toàn bộ màn hình
    justifyContent: 'center', // Canh giữa hình vuông theo chiều dọc
    alignItems: 'center', // Canh giữa hình vuông theo chiều ngang
    backgroundColor: '#f5f5f5', // Màu nền sáng cho toàn bộ màn hình
  },
  square: {
    width: 350, // Chiều rộng hình vuông
    height: 350, // Chiều cao hình vuông (bằng chiều rộng để thành hình vuông)
    backgroundColor: '#4CAF50', // Màu nền xanh lá cây cho hình vuông
    justifyContent: 'center', // Canh giữa chữ bên trong theo chiều dọc
    alignItems: 'center', // Canh giữa chữ bên trong theo chiều ngang
    borderRadius: 8, // Bo góc hình vuông (tùy chọn, không bắt buộc)
  },
  text: {
    color: '#fff', // Màu chữ trắng
    fontSize: 16, // Kích thước chữ
    fontWeight: 'bold', // Định dạng chữ in đậm
  },
});

export default App;
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FlatListScreen from './screens/Flatlist';
import SectionListScreen from './screens/Sectionlist';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FlatList">
        <Stack.Screen name="FlatList" component={FlatListScreen} options={{ title: 'Danh sách sản phẩm' }} />
        <Stack.Screen name="SectionList" component={SectionListScreen} options={{ title: 'Nhóm sản phẩm' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;*/
/*import React, { useState } from "react";
import { View, Button, StyleSheet, Dimensions } from "react-native";

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.buttonContainer}>
        <Button title="Green" color="#28A745" onPress={() => setBackgroundColor("#28A745")} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Blue" color="#0000FF" onPress={() => setBackgroundColor("#0000FF")} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Brown" color="#8B4513" onPress={() => setBackgroundColor("#8B4513")} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Yellow" color="#FFFF00" onPress={() => setBackgroundColor("#FFFF00")} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Red" color="#FF5733" onPress={() => setBackgroundColor("#FF5733")} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Black" color="#000000" onPress={() => setBackgroundColor("#000000")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    width: Dimensions.get("window").width, // Chiều rộng bằng màn hình
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10, // Khoảng cách giữa các nút
  },
});

export default App;*/
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';


const App = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const validatePhoneNumber = () => {
    const PhoneWithoutSpaces = phoneNumber.replace(/\s+/g, '');
    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})\b/; // Kiểm tra số điện thoại Việt Nam
    if (!phoneRegex.test(PhoneWithoutSpaces)) {
      Alert.alert("Lỗi", "Số điện thoại không đúng định dạng. Vui lòng nhập lại.");
    } else {
      navigation.navigate('OTPVerification', { phoneNumber });
    }
  };
  const formatPhoneNumber = (text) => {
    // Xóa tất cả ký tự không phải số
    let cleaned = text.replace(/\D+/g, "");
  
    // Giới hạn độ dài tối đa (10 số)
    if (cleaned.length > 10) {
      cleaned = cleaned.slice(0, 10);
    }
  
    // Áp dụng định dạng: "093 454 43 44"
    let formatted = cleaned
      .replace(/(\d{3})(\d{3})?(\d{2})?(\d{2})?/, (match, p1, p2, p3, p4) => {
        let result = p1;
        if (p2) result += " " + p2;
        if (p3) result += " " + p3;
        if (p4) result += " " + p4;
        return result;
      });
  
    return formatted;
  };
  const handleTextChange = (text) => {
    const formatted = formatPhoneNumber(text);
    setPhoneNumber(formatted); // Update lại vào TextInput
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <Text style={styles.subtitle}>Nhập số điện thoại</Text>
      <Text style={styles.description}>Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản OneHousing Pro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={handleTextChange}
        maxLength={13} // 10 số + 3 khoảng trắng
      />
      <Text style={styles.errorText}>{!/^(0[3|5|7|8|9])+([0-9]{8})\b/.test(phoneNumber.replace(/\s+/g, '')) && phoneNumber.length > 0 ? "Số điện thoại không đúng định dạng. Vui lòng nhập lại." : ""}</Text>

      <TouchableOpacity style={styles.button} onPress={validatePhoneNumber}>
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 15,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default App;
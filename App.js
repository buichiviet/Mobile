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
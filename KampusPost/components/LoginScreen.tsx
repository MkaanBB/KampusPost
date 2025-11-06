import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import CustomInput from './CustomInput';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Butona basınca çalışacak fonksiyon
  const handleLogin = () => {
    console.log('E-posta:', email);
    console.log('Şifre:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giriş Yap</Text>

      <CustomInput
        placeholder="E-posta"
        value={email}
        onChangeText={setEmail}
      />
      <CustomInput
        placeholder="Şifre"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Giriş Yap" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#01ccffff',
  },
  title: {
    fontSize: 65,
    fontWeight: 'bold',
    marginBottom: 30,
  },
});

export default LoginScreen;

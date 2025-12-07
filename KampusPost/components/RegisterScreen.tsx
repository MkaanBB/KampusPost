import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [sifre, setSifre] = useState('');
  const [sifreTekrar, setSifreTekrar] = useState('');

  const kayitOl = () => {
    if (sifre !== sifreTekrar) {
      Alert.alert('Hata', 'ŞİFRELER UYUŞMUYOO!');
      return;
    }
    console.log('Kayıt başarılı:', email);
    Alert.alert('Başarılı', 'aferim .');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.baslik}>KAMPUS POSTA KAYDOL!</Text>
      
      <TextInput 
        style={styles.input} 
        placeholder="E-posta" 
        value={email} 
        onChangeText={setEmail}
      />
      
      <TextInput 
        style={styles.input} 
        placeholder="Şifre" 
        value={sifre} 
        onChangeText={setSifre} 
        secureTextEntry 
      />
      
      <TextInput 
        style={styles.input} 
        placeholder="Şifre Tekrar" 
        value={sifreTekrar} 
        onChangeText={setSifreTekrar} 
        secureTextEntry 
      />

      <Button title="Kayıt Ol" onPress={kayitOl} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#dbd25781',
  },
  baslik: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#0026ffff',
    padding: 10,
    marginBottom: 15,
  }
});

export default RegisterScreen;

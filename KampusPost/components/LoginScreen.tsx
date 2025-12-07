import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [sifre, setSifre] = useState('');

  const girisYap = () => {
    if (email === '' || sifre === '') {
      Alert.alert('Hata', 'DOLDUR Kİ KULLANABİL.');
      return;
    }
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.baslik}>KAMPUS POST</Text>
      
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

      <View style={styles.butonKutusu}>
        <Button title="KAMPUS POST'a GİRİŞ YAP" onPress={girisYap} />
      </View>
      
      <View style={styles.butonKutusu}>
        <Button 
          title="Kayıt Ol" 
          color="red" 
          onPress={() => navigation.navigate('Register')} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#00e1ffff', 
  },
  baslik: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#92cbe2ff', 
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  butonKutusu: {
    marginBottom: 10,
    width: '100%',
  }
});

export default LoginScreen;

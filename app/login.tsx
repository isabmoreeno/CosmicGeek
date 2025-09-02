import { FontAwesome } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FormInput from '../components/FormInput';

const PRIMARY = '#2F2E7E';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Erro', 'Preencha e-mail e senha.');
      return;
    }
    Alert.alert('Sucesso', 'Login efetuado (simulação).');
    // router.replace('/home') // exemplo de pós-login
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
          <Image source={require('../assets/images/logo.png')} style={styles.logo} resizeMode="contain" />
          <Text style={styles.title}>ENTRAR</Text>
          <View style={styles.titleUnderline} />

          <FormInput
            iconName="mail-outline"
            placeholder="Digite seu e-mail..."
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <FormInput
            iconName="lock-closed-outline"
            placeholder="Digite sua senha..."
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity style={{ alignSelf: 'flex-start', marginTop: 8 }}>
            <Text style={styles.forgot}>Esqueceu sua senha?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.primaryButton} onPress={handleLogin}>
            <Text style={styles.primaryButtonText}>ENTRAR</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>Ou entre com</Text>

          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome name="google" size={22} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome name="facebook" size={22} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome name="apple" size={22} />
            </TouchableOpacity>
          </View>

          <Text style={styles.footerText}>
            Não tem uma conta? <Link href="/cadastro" style={styles.link}>Cadastre-se!</Link>
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingBottom: 50,
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 6,
    marginBottom: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 1,
  },
  titleUnderline: {
    width: 110,
    height: 4,
    backgroundColor: PRIMARY,
    borderRadius: 4,
    marginTop: 6,
    marginBottom: 25,
  },
  forgot: {
    color: '#2b2b2b',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  primaryButton: {
    width: '100%',
    backgroundColor: PRIMARY,
    borderRadius: 8,
    paddingVertical: 12,
    marginTop: 30,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: '700',
  },
  orText: {
    marginTop: 18,
    color: '#9a9a9a',
    fontSize: 14,
  },
  socialRow: { flexDirection: 'row', marginTop: 20 },
  socialButton: {
    width: 48, height: 48, borderRadius: 24, borderWidth: 1, borderColor: '#E6E6E6',
    alignItems: 'center', justifyContent: 'center', marginHorizontal: 10, backgroundColor: '#fff',
  },
  footerText: { marginTop: 20, color: '#333', fontSize: 14 },
  link: { color: PRIMARY, fontWeight: '600' },
});

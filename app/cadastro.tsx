import { FontAwesome, Ionicons } from '@expo/vector-icons';
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

export default function Cadastro() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);

  function handleRegister() {
    if (!name.trim() || !email.trim() || !password.trim()) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }
    if (!agree) {
      Alert.alert('Aviso', 'É necessário aceitar os termos.');
      return;
    }
    Alert.alert('Sucesso', 'Conta criada (simulação).');
    router.replace('/login');
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
          <Image source={require('../assets/images/logo.png')} style={styles.logo} resizeMode="contain" />
          <Text style={styles.title}>CADASTRE-SE</Text>
          <View style={styles.titleUnderline} />

          <FormInput
            iconName="person-outline"
            placeholder="Digite seu nome..."
            value={name}
            onChangeText={setName}
          />
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

          <View style={styles.row}>
            <TouchableOpacity
              style={[styles.checkbox, agree && styles.checkboxChecked]}
              onPress={() => setAgree((prev) => !prev)}
              accessibilityLabel="Aceitar termos"
            >
              {agree && <Ionicons name="checkmark" size={18} color="#fff" />}
            </TouchableOpacity>

            <Text style={styles.termsText}>
              I Agree with <Text style={styles.link}>Terms of Service</Text> and{' '}
              <Text style={styles.link}>Privacy Policy</Text>
            </Text>
          </View>

          <TouchableOpacity style={styles.primaryButton} onPress={handleRegister}>
            <Text style={styles.primaryButtonText}>CADASTRAR</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>Ou cadastre-se com</Text>

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
            Já possui uma conta? <Link href="/login" style={styles.link}>Clique aqui!</Link>
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingBottom: 40,
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
    width: 170,
    height: 4,
    backgroundColor: PRIMARY,
    borderRadius: 4,
    marginTop: 6,
    marginBottom: 18,
  },
  row: { flexDirection: 'row', alignItems: 'center', width: '100%', marginTop: 6 },
  checkbox: {
    width: 20, height: 20, borderRadius: 6, borderWidth: 1, borderColor: '#2b2b2b', marginLeft: 12,
    marginRight: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff',
  },
  checkboxChecked: { backgroundColor: PRIMARY, borderColor: PRIMARY },
  termsText: { flex: 1, color: '#333', fontSize: 12 },
  link: { color: PRIMARY, fontWeight: '600' },
  primaryButton: {
    width: '100%', backgroundColor: PRIMARY, borderRadius: 8,
    paddingVertical: 12, marginTop: 20, alignItems: 'center',
  },
  primaryButtonText: { color: '#fff', fontWeight: '700' },
  orText: { marginTop: 20, color: '#9a9a9a', fontSize: 14 },
  socialRow: { flexDirection: 'row', marginTop: 12 },
  socialButton: {
    width: 48, height: 48, borderRadius: 24, borderWidth: 1, borderColor: '#E6E6E6',
    alignItems: 'center', justifyContent: 'center', marginHorizontal: 10, backgroundColor: '#fff',
  },
  footerText: { marginTop: 20, color: '#333', fontSize: 14 },
});

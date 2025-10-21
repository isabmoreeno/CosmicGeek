import { useRouter } from 'expo-router';
import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const PRIMARY = '#2F2E7E';

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/logo2.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Bem-vindo ao CosmoGeek!</Text>

        <Text style={styles.subtitle}>
          Encontre livros, HQs e mangás para sonhar acordado.
        </Text>

        <TouchableOpacity
          style={[styles.btn, styles.btnGhost]}
          onPress={() => router.push('/cadastro')}
        >
          <Text style={styles.btnGhostText}>CRIE UMA CONTA</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ alignSelf: 'center', marginTop: 30 }} onPress={() => router.push('/login')}>
                    <Text style={styles.login}>Já possui uma conta? Entre aqui!</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2F2E7E',
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  logo: { 
    width: 200, 
    height: 200, 
    marginBottom: 20 },

  title: { 
    fontSize: 32, 
    fontWeight: '800', 
    color: '#fff', 
    marginBottom: 25 
  },
  
  subtitle: { 
    fontSize: 18, 
    fontWeight: '400', 
    color: '#ffffffff', 
    marginBottom: 40 
  },

  btn: {
    backgroundColor: '#fff', 
    width: '100%', 
    borderRadius: 10, 
    paddingVertical: 14, 
    alignItems: 'center',
  },

  login: { 
    color: '#fff', 
    fontSize: 16, 
    fontWeight: '600'
  },

  btnPrimary: { 
    backgroundColor: PRIMARY 
  },
  btnPrimaryText: { 
    color: '#fff', 
    fontWeight: '700'
   },
  btnGhost: { 
    borderWidth: 1, 
    borderColor: PRIMARY 
  },
  btnGhostText: { 
    color: PRIMARY, 
    fontWeight: '700' 
  },
});

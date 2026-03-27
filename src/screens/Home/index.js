import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.titulo}>Bem-vindo à Tech Store!</Text>
        <View style={styles.cardsContainer}>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Produtos')}>
            <Text style={styles.buttonTitle}>Produtos</Text>
            <Text style={styles.buttonText}>Veja todos os nossos produtos</Text>
          </Pressable>

          <Pressable style={styles.button} onPress={() => navigation.navigate('Contatos')}>
            <Text style={styles.buttonTitle}>Contatos</Text>
            <Text style={styles.buttonText}>Fale conosco ou veja nosso endereço</Text>
          </Pressable>
        </View>

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },

  scrollContent: {
    padding: 20,
    alignItems: 'center',
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },

  cardsContainer: {
    width: '100%',
    alignItems: 'center',
  },

  button: {
    width: '95%',
    backgroundColor: '#3b82f6',
    borderRadius: 12,
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // sombra
    elevation: 4,
  },

  buttonTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white'
  },

  buttonText: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white'
  },
});
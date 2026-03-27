import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Contatos() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Contatos</Text>
      <Text style={styles.texto}>Telefone: +55 19 2345-6780</Text>
      <Text style={styles.texto}>WhatsApp: 19 99123-4567</Text>
      <Text style={styles.texto}>Endereço: Rua da tecnologia, bairro informação, 352</Text>
      <Text style={styles.texto}>CNPJ: 23.753.123/6911-12</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6', // fundo leve
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3b82f6'
  },

  texto: {
    fontSize: 16,
    color: '#333',
    marginVertical: 5,
    textAlign: 'center'
  }
});
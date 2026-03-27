import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Contatos() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Contatos</Text>

      <View style={styles.linha}>
        <FontAwesome name="phone" size={20} color="#3b82f6" />
        <Text style={styles.texto}> +55 19 2345-6780</Text>
      </View>

      <View style={styles.linha}>
        <FontAwesome name="whatsapp" size={20} color="#25D366" />
        <Text style={styles.texto}> 19 99123-4567</Text>
      </View>

      <View style={styles.linha}>
        <MaterialCommunityIcons name="map-marker" size={20} color="#3b82f6" />
        <Text style={styles.texto}> Rua da tecnologia, bairro informação, 352</Text>
      </View>

      <View style={styles.linha}>
        <FontAwesome name="file-text-o" size={20} color="#3b82f6" />
        <Text style={styles.texto}> CNPJ: 23.753.123/6911-12</Text>
      </View>
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

  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5
  },

  texto: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  }
});
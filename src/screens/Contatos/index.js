import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Contatos() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.titulo}>Contatos</Text>

        <View style={styles.card}>
          <View style={styles.linha}>
            <View style={[styles.iconeContainer, { backgroundColor: '#3b82f6' }]}>
              <FontAwesome name="phone" size={20} color="#fff" />
            </View>
            <Text style={styles.texto}>+55 19 2345-6780</Text>
          </View>

          <View style={styles.linha}>
            <View style={[styles.iconeContainer, { backgroundColor: '#25D366' }]}>
              <FontAwesome name="whatsapp" size={20} color="#fff" />
            </View>
            <Text style={styles.texto}>19 99123-4567</Text>
          </View>

          <View style={styles.linha}>
            <View style={[styles.iconeContainer, { backgroundColor: '#3b82f6' }]}>
              <MaterialCommunityIcons name="map-marker" size={20} color="#fff" />
            </View>
            <Text style={styles.texto}>Rua da Tecnologia, Bairro Informação, 352</Text>
          </View>

          <View style={styles.linha}>
            <View style={[styles.iconeContainer, { backgroundColor: '#3b82f6' }]}>
              <FontAwesome name="file-text-o" size={20} color="#fff" />
            </View>
            <Text style={styles.texto}>CNPJ: 23.753.123/6911-12</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
  },

  scrollContent: {
    alignItems: 'center',
    paddingBottom: 20,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3b82f6',
    marginBottom: 20,
    textAlign: 'center',
  },

  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },

  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },

  iconeContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto: {
    fontSize: 16,
    color: '#111827',
    marginLeft: 15,
    flex: 1,
    flexWrap: 'wrap',
  },
});
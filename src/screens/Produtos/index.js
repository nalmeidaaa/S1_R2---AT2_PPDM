import { StyleSheet, Text, Image, Pressable, Alert, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import "../assets/memoriaRam.png"

export default function Produtos() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        {/* Produto 1 (Memória ram) */}
        <View style={styles.card}>
          <Image
            source={{ uri: "https://images.tcdn.com.br/img/img_prod/740836/memoria_8gb_ddr4_3200mhz_samsung_para_desktop_16395_1_3da6af19166e17223573b4c8c992db71.png" }}
            style={styles.imagem}
          />

          <Text style={styles.tituloProduto}>Memória RAM 8GB</Text>
          <Text style={styles.preco}>Por R$569.99</Text>
          <Text style={styles.precoPix}>No pix: R$499.99</Text>

          <Text style={styles.informacao}>Quantidade:</Text>

          <View style={styles.contador}>
            <View style={styles.botaoQtd}>
              <Text style={styles.textoQtd}>-</Text>
            </View>

            <Text style={styles.numero}>1</Text>

            <View style={styles.botaoQtd}>
              <Text style={styles.textoQtd}>+</Text>
            </View>
          </View>

          <Pressable
            style={styles.botao}
            onPress={() => Alert.alert('Sucesso', 'Produto adicionado ao carrinho')}
          >
            <Text style={styles.textoBotao}>Adicionar ao carrinho</Text>
          </Pressable>
        </View>

        {/* Produto 2 (Processador) */}
        <View style={styles.card}>
          <Image
            source={{ uri: "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/315674" }}
            style={styles.imagem}
          />

          <Text style={styles.tituloProduto}>Processador Intel Core i5 3470, 3.2GHz, 6MB, FCLGA 1155, OEM</Text>
          <Text style={styles.preco}>Por R$146,76</Text>
          <Text style={styles.precoPix}>No pix: R$110.15</Text>

          <Text style={styles.informacao}>Quantidade:</Text>

          <View style={styles.contador}>
            <View style={styles.botaoQtd}>
              <Text style={styles.textoQtd}>-</Text>
            </View>

            <Text style={styles.numero}>1</Text>

            <View style={styles.botaoQtd}>
              <Text style={styles.textoQtd}>+</Text>
            </View>
          </View>

          <Pressable
            style={styles.botao}
            onPress={() => Alert.alert('Sucesso', 'Produto adicionado ao carrinho')}
          >
            <Text style={styles.textoBotao}>Adicionar ao carrinho</Text>
          </Pressable>
        </View>

        {/* Produto 3 (Placa Mãe) */}
        <View style={styles.card}>
          <Image
            source={{ uri: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/xnoqyycn/file.png" }}
            style={styles.imagem}
          />

          <Text style={styles.tituloProduto}>Placa Mãe para Servidor Intel Xeon Gigabyte MX33-BS0 - (LGA 1200 - DDR4 ECC) - Chipset C252 - Dual LAN</Text>
          <Text style={styles.preco}>Por R$5.111,00</Text>
          <Text style={styles.precoPix}>No pix: R$4.599,90</Text>

          <Text style={styles.informacao}>Quantidade:</Text>

          <View style={styles.contador}>
            <View style={styles.botaoQtd}>
              <Text style={styles.textoQtd}>-</Text>
            </View>

            <Text style={styles.numero}>1</Text>

            <View style={styles.botaoQtd}>
              <Text style={styles.textoQtd}>+</Text>
            </View>
          </View>

          <Pressable
            style={styles.botao}
            onPress={() => Alert.alert('Sucesso', 'Produto adicionado ao carrinho')}
          >
            <Text style={styles.textoBotao}>Adicionar ao carrinho</Text>
          </Pressable>
        </View>

        {/* Produto 4 (Monitor) */}
        <View style={styles.card}>
          <Image
            source={{ uri: "https://lojagoldentec.vteximg.com.br/arquivos/ids/167785-1000-1000/monitor-gamer-goldentec-24-led-full-hd-curvo-144hz-01-min--2-.jpg?v=638762521847000000" }}
            style={styles.imagem}
          />

          <Text style={styles.tituloProduto}>Monitor Gamer 24" LED, Full HD, Curvo, 144Hz</Text>
          <Text style={styles.preco}>Por R$1192.99</Text>
          <Text style={styles.precoPix}>No pix: R$1012.39</Text>

          <Text style={styles.informacao}>Quantidade:</Text>

          <View style={styles.contador}>
            <View style={styles.botaoQtd}>
              <Text style={styles.textoQtd}>-</Text>
            </View>

            <Text style={styles.numero}>1</Text>

            <View style={styles.botaoQtd}>
              <Text style={styles.textoQtd}>+</Text>
            </View>
          </View>

          <Pressable
            style={styles.botao}
            onPress={() => Alert.alert('Sucesso', 'Produto adicionado ao carrinho')}
          >
            <Text style={styles.textoBotao}>Adicionar ao carrinho</Text>
          </Pressable>
        </View>

        {/* Produto 5 (SSD) */}
        <View style={styles.card}>
          <Image
            source={{ uri: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/400945/xlarge/SSD-Kingston-Nv2-500GB-M-2-2280-NVME-PCIE-4-0-X4-Leitura-3500MB-s-E-Grava-o-2100MB-s-Preto-Snv2s-500g_1773864898.jpg" }}
            style={styles.imagem}
          />

          <Text style={styles.tituloProduto}>SSD 8GB</Text>
          <Text style={styles.preco}>Por R$686.07</Text>
          <Text style={styles.precoPix}>No pix: R$502.21</Text>

          <Text style={styles.informacao}>Quantidade:</Text>

          <View style={styles.contador}>
            <View style={styles.botaoQtd}>
              <Text style={styles.textoQtd}>-</Text>
            </View>

            <Text style={styles.numero}>1</Text>

            <View style={styles.botaoQtd}>
              <Text style={styles.textoQtd}>+</Text>
            </View>
          </View>

          <Pressable
            style={styles.botao}
            onPress={() => Alert.alert('Sucesso', 'Produto adicionado ao carrinho')}
          >
            <Text style={styles.textoBotao}>Adicionar ao carrinho</Text>
          </Pressable>
        </View>


      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 10,
  },

  scrollContent: {
    paddingBottom: 20,
  },

  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 15,
    marginVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },

  imagem: {
    width: '100%',
    height: 250,
    borderRadius: 15,
    resizeMode: 'contain',
    marginBottom: 10,
  },

  tituloProduto: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 5,
    color: '#111827',
  },

  preco: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    marginTop: 3,
  },

  precoPix: {
    fontSize: 18,
    color: '#10b981',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 3,
  },

  informacao: {
    fontSize: 16,
    marginTop: 15,
    color: '#374151',
  },

  contador: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center',
  },

  botaoQtd: {
    backgroundColor: '#e5e7eb',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },

  textoQtd: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
  },

  numero: {
    marginHorizontal: 20,
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },

  botao: {
    backgroundColor: '#3b82f6',
    marginTop: 20,
    borderRadius: 15,
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#3b82f6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },

  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
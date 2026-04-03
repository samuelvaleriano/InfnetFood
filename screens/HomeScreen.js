import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    Image,
    Platform
} from 'react-native';
import { Dimensions } from "react-native";
import { WebView } from 'react-native-webview';




const { width } = Dimensions.get('window');
const itemWidth = width * 0.6;
const spacing = 16;

const categorias = [
    {
        id: "1",
        nome: "Lanches",
        imagem: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80",
        cor: "#ED1C16",
        corVer: "#BC1611",
    },

    {
        id: "6",
        nome: "Sobremesas",
        imagem: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=500&q=80",
        cor: "#FFB8B8",
        corVer: "#FF7B7B",
    },

    {
        id: "8",
        nome: "Bebidas",
        imagem: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=500&q=80",
        cor: "#009432",
        corVer: "#06752B",
    },
];
const mapHtml = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
      <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
      <style>
        body { padding: 0; margin: 0; }
        #map { width: 100%; height: 100vh; }
      </style>
    </head>
    <body>
      <div id="map"></div>
 <script>
        // Inicializa o mapa focado no Centro do Rio com zoom um pouco menor (15) para caber tudo
        var map = L.map('map').setView([-22.9056, -43.1761], 15);
        
        // Adiciona as imagens do mapa do OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '© OpenStreetMap'
        }).addTo(map);

        // Lista com o Infnet e os 10 restaurantes no Centro do RJ
        var locais = [
          { nome: "🎓 Instituto Infnet", lat: -22.9056, lng: -43.1761 },
          { nome: "☕ Confeitaria Colombo", lat: -22.9052, lng: -43.1776 },
          { nome: "🍲 Bistrô do Ouvidor", lat: -22.9041, lng: -43.1768 },
          { nome: "🍺 Bar Luiz", lat: -22.9071, lng: -43.1790 },
          { nome: "🍕 Amarelinho da Cinelândia", lat: -22.9114, lng: -43.1755 },
          { nome: "🍽️ Lilia Restaurante", lat: -22.9103, lng: -43.1826 },
          { nome: "🍣 Hachiko Contemporâneo", lat: -22.9030, lng: -43.1747 },
          { nome: "🥐 Casa Cave", lat: -22.9050, lng: -43.1781 },
          { nome: "🥘 Restaurante Mosteiro", lat: -22.8989, lng: -43.1782 },
          { nome: "🍷 Cais do Oriente", lat: -22.8998, lng: -43.1751 },
          { nome: "🍛 Rio Minho", lat: -22.9015, lng: -43.1765 }
        ];

        // Esse loop 'forEach' passa por cada item da lista acima e cria um marcador
        locais.forEach(function(local) {
          L.marker([local.lat, local.lng])
            .addTo(map)
            .bindPopup("<b>" + local.nome + "</b>"); // Cria o balãozinho com o nome em negrito
        });
      </script>
    </body>
  </html>
`;

export default function HomeScreen({ navigation }) {

    const renderItem = ({ item }) => (

        <TouchableOpacity style={{ height: 200, justifyContent: 'center', backgroundColor: item.cor, borderRadius: 15, marginRight: 20 }} onPress={() => navigation.navigate('ProdutosDaCategoria', { item })}>
            <View style={styles.card}>
                <Image source={{ uri: item.imagem }} style={styles.imagemCatalogo} />
                <View style={{ alignItems: 'center', width: 160, height: 200, justifyContent: 'space-evenly', padding: 10 }}>
                    <Text style={[styles.paragraphCatalogo]}>{item.nome}</Text>
                    <TouchableOpacity>
                        <Text style={[styles.botaoVerMais, { backgroundColor: item.corVer }]}>Ver mais</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>

    );

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>Categories</Text>

            <FlatList
                style={{ flexGrow: 0 }}
                data={categorias}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToAlignment="center"
                pagingEnabled={false}
                snapToInterval={itemWidth + spacing}
                decelerationRate="fast"
                contentContainerStyle={{
                    paddingHorizontal: (width - itemWidth) / 2 - spacing / 2,
                    paddingVertical: 10,
                }}
            />
<Text style={styles.paragraphMap}>Restaurantes próximos de Você</Text>
            <View style={styles.mapContainer}>
                {Platform.OS === 'web' ? (
                    <iframe
                        srcDoc={mapHtml}
                        style={{ width: '100%', height: '100%', border: 'none' }}
                    />
                ) : (
                    <WebView
                        source={{ html: mapHtml }}
                        style={styles.map}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        originWhitelist={['*']}
                        scrollEnabled={false}
                    />
                )}
            </View>
            <TouchableOpacity style={styles.botao}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.textoBotao}>Go Back</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    imagemCatalogo: {
        width: 100, height: 100, borderRadius: 50,
    },
    paragraph: {
        margin: 20,
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ED1C16'
    },
    paragraphCatalogo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
      paragraphMap: {
        margin: 20,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000000'
    },
    botao: {
        borderRadius: 10,
        backgroundColor: 'steelblue',
        marginTop: 15,
        marginBottom: 20, 
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#333',
        shadowOpacity: 0.3, 
        shadowOffset: { width: 3, height: 7 },
        shadowRadius: 5
    },
    textoBotao: {
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    botaoVerMais: {
        color: 'white',
        fontWeight: '500', 
        width: 150,
        textAlign: 'center',
        paddingVertical: 5,
        borderRadius: 10,
        marginTop: 10,
    },
    card: {
        flexDirection: 'row-reverse',
        width: 350,
        height: 170,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginHorizontal: 12,
    },
    mapContainer: {
        width: '80%', 
        height: 300,
        marginTop: 10,
        borderRadius: 15,
        overflow: 'hidden',
    },
    map: {
        flex: 1,
        width: '100%',
    },
});
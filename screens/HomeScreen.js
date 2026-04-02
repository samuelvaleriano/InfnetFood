import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    Image,
} from 'react-native';
import { Dimensions } from "react-native";




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

export default function HomeScreen({ navigation }) {

    const renderItem = ({ item }) => (

        <TouchableOpacity style={{ height: 200, justifyContent: 'center', backgroundColor: item.cor, borderRadius: 15, marginRight: 20 }} onPress={() => navigation.navigate('ProdutosDaCategoria', { item })}>
            <View style={styles.card}>
                <Image source={{ uri: item.imagem }} style={styles.imagemCatalogo} />
                <View style={{ alignItems: 'center' , width: 160 ,height: 200, justifyContent: 'space-evenly', padding: 10 }}>
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
        height: 400,
    },
    imagemCatalogo: {
        width: 100, height: 100, borderRadius: 50,
    },
    paragraph: { margin: 20, fontSize: 26, fontWeight: 'bold', textAlign: 'center', color: '#ED1C16' },
    paragraphCatalogo: { fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' },
    botao: {
        borderRadius: 10,
        backgroundColor: 'steelblue',
        marginTop: 15,
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#333',
        shadowOpacity: '0.3',
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
        fontWeight: 'medium',
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
});
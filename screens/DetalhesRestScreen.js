import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function DetalhesRestScreen({ route, navigation }) {
  
    const { restaurante } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{restaurante.nome}</Text>
            
            <View style={styles.cardInfo}>
                <Text style={styles.label}>Endereço:</Text>
                <Text style={styles.texto}>{restaurante.endereco}</Text>
                
                <Text style={[styles.label, { marginTop: 15 }]}>Exemplo do Cardápio:</Text>
                <Text style={styles.texto}>{restaurante.prato}</Text>
            </View>

            <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
                <Text style={styles.textoBotao}>Voltar para o Mapa</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center'
    },
    cardInfo: {
        backgroundColor: '#fff',
        width: '100%',
        padding: 20,
        borderRadius: 15,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        marginBottom: 30
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#666'
    },
    texto: {
        fontSize: 18,
        color: '#222',
        marginTop: 5
    },
    botaoVoltar: {
        backgroundColor: '#ED1C16',
        paddingHorizontal: 25,
        paddingVertical: 12,
        borderRadius: 8
    },
    textoBotao: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
});
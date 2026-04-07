import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";



export default function ProdutoItem({ corBotao, backGroud,quantidade, onAdd, onRemove }) {

    return (
        <View style={[styles.produtoCard, { backgroundColor: backGroud }]}>

            <TouchableOpacity style={[styles.botaoAdicionar, { backgroundColor: corBotao }]} onPress={onRemove}>
                <Ionicons name="remove" size={20} color={'#fff'} style={{
                    textShadowColor: '#fff',
                    textShadowOffset: { width: 0.5, height: 0.5 },
                    textShadowRadius: 1
                }} />
            </TouchableOpacity>
            <Text style={styles.textoQuantidade}>{quantidade}</Text>

            <TouchableOpacity style={[styles.botaoAdicionar, { backgroundColor: corBotao }]} onPress={onAdd}>
                <Ionicons name="add" size={20} color={'#fff'} style={{
                    textShadowColor: '#fff',
                    textShadowOffset: { width: 0.5, height: 0.5 },
                    textShadowRadius: 1
                }} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    produtoCard: {
        flexDirection: 'row',
        backgroundColor: '#1d0404',
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        borderRadius: 20,
        padding: 12,
        marginBottom: 16,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    textoQuantidade: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginHorizontal: 16,
    },
    botaoAdicionar: {
        borderRadius: 10,
        padding: 2,
    },

});
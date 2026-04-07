import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
} from 'react-native';
import { CartContext } from '../context/CardContext';
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext'; 

export default function PedidosScreen() {
    const { pedidosRealizados } = useContext(CartContext);
    
    const { darkMode } = useContext(ThemeContext);

    const renderCartItem = ({ item }) => (
        <View>
            <View style={[styles.cartItem, darkMode && styles.darkCartItem]}>
                <Image source={{ uri: item.imagem }} style={styles.imagem} />
                <View style={styles.info}>
                    <Text style={[styles.nome, darkMode && styles.darkNome]}>{item.nome}</Text>
                </View>
                <View style={[styles.controles, darkMode && styles.darkControles]}>
                    <Text style={[styles.quantidade, darkMode && styles.darkQuantidade]}>{item.quantidade}</Text>
                </View>
            </View>
        </View>
    );

    return (
        <View style={[styles.container, darkMode && styles.darkContainer]}>
             <Text style={styles.paragraph}>Pedidos Recente</Text>
            <FlatList
                data={pedidosRealizados}
                keyExtractor={(item) => item.toString()}
                renderItem={renderCartItem}
                contentContainerStyle={{ padding: 16 }}
                ListEmptyComponent={
                    <Text style={[styles.textoVazio, darkMode && styles.darkTextoVazio]}>
                        Lista de pedidos está vazio.
                    </Text>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f5f5' },
    darkContainer: { backgroundColor: '#121212' },
    darkCartItem: { backgroundColor: '#1E1E1E', elevation: 0 },
    darkNome: { color: '#FFFFFF' },
    darkControles: { backgroundColor: '#333' },
    darkQuantidade: { color: '#FFFFFF' },
    darkTextoVazio: { color: '#AAAAAA' },
    cartItem: { flexDirection: 'row', backgroundColor: '#fff', padding: 12, marginBottom: 12, borderRadius: 10, alignItems: 'center' },
    imagem: { width: 60, height: 60, borderRadius: 8 },
    info: { flex: 1, marginLeft: 12 },
    nome: { fontSize: 16, fontWeight: 'bold', color: '#333' },
    preco: { fontSize: 14, color: '#2E8B57', marginTop: 4 },
    controles: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#eee', borderRadius: 20, padding: 4 },
    botao: { backgroundColor: '#890019', padding: 4, borderRadius: 12 },
    quantidade: { marginHorizontal: 12, fontSize: 16, fontWeight: 'bold' },
    textoVazio: { textAlign: 'center', marginTop: 40, fontSize: 16, color: '#888' },
    footer: { flexDirection: 'row', justifyContent: 'space-between', padding: 20, backgroundColor: '#fff', borderTopWidth: 1, borderColor: '#ddd' },
    textoTotal: { fontSize: 20, fontWeight: 'bold' },
    valorTotal: { fontSize: 22, fontWeight: 'bold', color: '#890019' },
    paragraph: { marginTop: 50, fontSize: 26, fontWeight: 'bold', textAlign: 'center', color: '#ED1C16' },
});
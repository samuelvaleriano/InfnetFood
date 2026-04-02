// screens/CartScreen.js
import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { CartContext } from '../context/CardContext';
import { Ionicons } from "@expo/vector-icons";

export default function CartScreen() {
    const { cartItems, adicionar, remover, getTotal } = useContext(CartContext);

    const renderCartItem = ({ item }) => (
        <View style={styles.cartItem}>
            <Image source={{ uri: item.imagem }} style={styles.imagem} />
            <View style={styles.info}>
                <Text style={styles.nome}>{item.nome}</Text>
                <Text style={styles.preco}>{item.preco}</Text>
            </View>
            <View style={styles.controles}>
                <TouchableOpacity onPress={() => remover(item.id)} style={styles.botao}>
                    <Ionicons name="remove" size={18} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.quantidade}>{item.quantidade}</Text>
                <TouchableOpacity onPress={() => adicionar(item)} style={styles.botao}>
                    <Ionicons name="add" size={18} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={cartItems}
                keyExtractor={(item) => item.id}
                renderItem={renderCartItem}
                contentContainerStyle={{ padding: 16 }}
                ListEmptyComponent={
                    <Text style={styles.textoVazio}>Seu carrinho está vazio.</Text>
                }
            />
            <View style={styles.footer}>
                <Text style={styles.textoTotal}>Total:</Text>
                <Text style={styles.valorTotal}>
                    R$ {getTotal().toFixed(2).replace('.', ',')}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f5f5' },
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
});
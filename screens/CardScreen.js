import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { CartContext } from '../context/CardContext';
import { ThemeContext } from '../context/ThemeContext'; 
import { Ionicons } from "@expo/vector-icons";

export default function CartScreen({ navigation }) {
    const { cartItems, adicionar, remover, getTotal } = useContext(CartContext);
    
    const { darkMode } = useContext(ThemeContext); 

    const renderCartItem = ({ item }) => (
        <View style={[styles.cartItem, darkMode && styles.darkCartItem]}>
            <Image source={{ uri: item.imagem }} style={styles.imagem} />
            <View style={styles.info}>
                <Text style={[styles.nome, darkMode && styles.darkText]}>{item.nome}</Text>
                <Text style={styles.preco}>{item.preco}</Text>
            </View>
            <View style={[styles.controles, darkMode && styles.darkControles]}>
                <TouchableOpacity onPress={() => remover(item.id)} style={styles.botao}>
                    <Ionicons name="remove" size={18} color="#fff" />
                </TouchableOpacity>
                <Text style={[styles.quantidade, darkMode && styles.darkText]}>{item.quantidade}</Text>
                <TouchableOpacity onPress={() => adicionar(item)} style={styles.botao}>
                    <Ionicons name="add" size={18} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={[styles.container, darkMode && styles.darkContainer]}>
            <FlatList
                data={cartItems}
                keyExtractor={(item) => item.id}
                renderItem={renderCartItem}
                contentContainerStyle={{ padding: 16 }}
                ListEmptyComponent={
                    <Text style={[styles.textoVazio, darkMode && styles.darkTextSecondary]}>Seu carrinho está vazio.</Text>
                }
            />
            {cartItems.length > 0 && (
                <View style={[styles.footerContainer, darkMode && styles.darkFooterContainer]}>
                    <View style={styles.footer}>
                        <Text style={[styles.textoTotal, darkMode && styles.darkText]}>Total:</Text>
                        <Text style={styles.valorTotal}>
                            R$ {getTotal().toFixed(2).replace('.', ',')}
                        </Text>
                    </View>
                    
                    <TouchableOpacity 
                        style={styles.botaoCheckout}
                        onPress={() => navigation.navigate('Checkout', { 
                            itens: cartItems, 
                            total: getTotal() 
                        })}
                    >
                        <Text style={styles.textoBotaoCheckout}>Finalizar Compra</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f5f5' ,marginTop: 50},
    darkContainer: { backgroundColor: '#121212' },
    darkCartItem: { backgroundColor: '#1E1E1E' },
    darkText: { color: '#FFFFFF' },
    darkTextSecondary: { color: '#AAAAAA' },
    darkFooterContainer: { backgroundColor: '#1E1E1E', borderColor: '#333' },
    darkControles: { backgroundColor: '#333' },
    cartItem: { flexDirection: 'row', backgroundColor: '#fff', padding: 12, marginBottom: 12, borderRadius: 10, alignItems: 'center' },
    imagem: { width: 60, height: 60, borderRadius: 8 },
    info: { flex: 1, marginLeft: 12 },
    nome: { fontSize: 16, fontWeight: 'bold', color: '#333' },
    preco: { fontSize: 14, color: '#2E8B57', marginTop: 4 }, 
    controles: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#eee', borderRadius: 20, padding: 4 },
    botao: { backgroundColor: '#890019', padding: 4, borderRadius: 12 },
    quantidade: { marginHorizontal: 12, fontSize: 16, fontWeight: 'bold' },
    textoVazio: { textAlign: 'center', marginTop: 40, fontSize: 16, color: '#888' },
    footerContainer: { backgroundColor: '#fff', padding: 20, borderTopWidth: 1, borderColor: '#ddd' },
    footer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
    textoTotal: { fontSize: 20, fontWeight: 'bold' },
    valorTotal: { fontSize: 22, fontWeight: 'bold', color: '#890019' }, 
    botaoCheckout: { backgroundColor: '#009432', padding: 15, borderRadius: 10, alignItems: 'center' },
    textoBotaoCheckout: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import { useOrder } from '../context/OrderContext';
import { ThemeContext } from '../context/ThemeContext'; 
import { CartContext } from '../context/CardContext';

export default function CheckoutScreen({ route, navigation }) {

    const itens = route?.params?.itens || [];
    const total = route?.params?.total || 0;

    const [endereco, setEndereco] = useState('');
    const [pagamento, setPagamento] = useState('');
    
    const [pedidoConfirmado, setPedidoConfirmado] = useState(false);
    const [mostrarAviso, setMostrarAviso] = useState(false);

    const { darkMode } = useContext(ThemeContext);
    const { startOrderSimulation } = useOrder();
    const { finalizarPedido } = useContext(CartContext);

    const confirmarPedido = () => {
  
        if (endereco.trim() === '' || pagamento.trim() === '') {
            setMostrarAviso(true);
            
            setTimeout(() => {
                setMostrarAviso(false);
            }, 4000);
            
            return; 
        }
        setPedidoConfirmado(true);
        startOrderSimulation();
        finalizarPedido();

        setTimeout(() => {
            setPedidoConfirmado(false);
            navigation.navigate('Main');
        }, 3000);
    };

    const formatarPreco = (valor) => {
        const numero = Number(valor);
        return isNaN(numero) ? '0.00' : numero.toFixed(2).replace('.', ',');
    };


    if (mostrarAviso) {
        return (
            <View style={[styles.containerAnimacao, darkMode && styles.darkContainerAnimacao]}>
                <LottieView
                    source={require('../assets/animations/warning.json')}
                    autoPlay
                    loop={false}
                    style={styles.lottie}
                />
                <Text style={styles.textoAviso}>Atenção!</Text>
                <Text style={[styles.textoSubAviso, darkMode && styles.darkTextSecondary]}>
                    Por favor, preencha todos os campos obrigatórios (*).
                </Text>
            </View>
        );
    }


    if (pedidoConfirmado) {
        return (
            <View style={[styles.containerAnimacao, darkMode && styles.darkContainerAnimacao]}>
                <LottieView
                    source={require('../assets/animations/susseco.json')}
                    autoPlay
                    loop={false}
                    style={styles.lottie}
                />
                <Text style={styles.textoSucesso}>Pedido Confirmado! 🎉</Text>
                <Text style={[styles.textoSubSucesso, darkMode && styles.darkTextSecondary]}>
                    Preparando para entrega...
                </Text>
            </View>
        );
    }

  
    return (
        <ScrollView style={[styles.container, darkMode && styles.darkContainer]}>
            <View style={[styles.secao, darkMode && styles.darkSecao]}>
                <Text style={[styles.tituloSecao, darkMode && styles.darkTituloSecao]}>Resumo do Pedido</Text>

                {itens.map((item, index) => (
                    <View key={index} style={styles.itemResumo}>
                        <Text style={[styles.textoItem, darkMode && styles.darkTextoItem]}>{item.nome}</Text>
                        <Text style={[styles.textoPreco, darkMode && styles.darkTextoPreco]}>R$ {formatarPreco(item.preco)}</Text>
                    </View>
                ))}

                <Text style={styles.total}>Total a pagar: R$ {formatarPreco(total)}</Text>
            </View>

            <View style={[styles.secao, darkMode && styles.darkSecao]}>
                <Text style={[styles.tituloSecao, darkMode && styles.darkTituloSecao]}>Dados de Entrega</Text>
                <Text style={[styles.label, darkMode && styles.darkLabel]}>Endereço Completo *</Text>
                <TextInput
                    style={[styles.input, darkMode && styles.darkInput]}
                    placeholder="Rua, Número, Complemento, Bairro"
                    placeholderTextColor={darkMode ? '#999' : '#666'} 
                    value={endereco}
                    onChangeText={setEndereco}
                />
            </View>

            <View style={[styles.secao, darkMode && styles.darkSecao]}>
                <Text style={[styles.tituloSecao, darkMode && styles.darkTituloSecao]}>Pagamento</Text>
                <Text style={[styles.label, darkMode && styles.darkLabel]}>Forma de Pagamento *</Text>
                <TextInput
                    style={[styles.input, darkMode && styles.darkInput]}
                    placeholder="Ex: Pix, Cartão, Dinheiro"
                    placeholderTextColor={darkMode ? '#999' : '#666'}
                    value={pagamento}
                    onChangeText={setPagamento}
                />
            </View>

            <TouchableOpacity style={styles.botaoConfirmar} onPress={confirmarPedido}>
                <Text style={styles.textoBotao}>Confirmar Pedido</Text>
            </TouchableOpacity>

            <View style={{ height: 40 }} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f5f5', padding: 20 },
    darkContainer: { backgroundColor: '#121212' },
    darkSecao: { backgroundColor: '#1E1E1E', elevation: 0 },
    darkTituloSecao: { color: '#FFF', borderColor: '#333' },
    darkTextoItem: { color: '#CCC' },
    darkTextoPreco: { color: '#FFF' },
    darkLabel: { color: '#CCC' },
    darkInput: { backgroundColor: '#333', borderColor: '#444', color: '#FFF' },
    darkContainerAnimacao: { backgroundColor: '#121212' },
    darkTextSecondary: { color: '#AAA' },
    secao: { backgroundColor: '#fff', padding: 20, borderRadius: 10, marginBottom: 15, elevation: 2 },
    tituloSecao: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 15, borderBottomWidth: 1, borderColor: '#eee', paddingBottom: 5 },
    itemResumo: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
    textoItem: { color: '#555', flex: 1 },
    textoPreco: { fontWeight: 'bold', color: '#333' },
    total: { fontSize: 18, fontWeight: 'bold', color: '#890019', textAlign: 'right', marginTop: 10 },
    label: { fontSize: 14, color: '#666', marginBottom: 5, fontWeight: 'bold' },
    input: { backgroundColor: '#f9f9f9', borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12, fontSize: 16, marginBottom: 10 },
    botaoConfirmar: { backgroundColor: '#009432', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 10 },
    textoBotao: { color: '#fff', fontSize: 18, fontWeight: 'bold' },

    containerAnimacao: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    lottie: {
        width: 250,
        height: 250,
    },
    textoSucesso: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#009432',
        marginTop: 20,
    },
    textoSubSucesso: {
        fontSize: 16,
        color: '#666',
        marginTop: 10,
    },
    textoAviso: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#F29C11',
        marginTop: 20,
    },
    textoSubAviso: {
        fontSize: 16,
        color: '#666',
        marginTop: 10,
        textAlign: 'center'
    }
});
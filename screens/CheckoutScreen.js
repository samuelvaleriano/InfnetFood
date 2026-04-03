import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';

export default function CheckoutScreen({ route, navigation }) {
    
    const itens = route?.params?.itens || [];
    const total = route?.params?.total || 0;

    const [endereco, setEndereco] = useState('');
    const [pagamento, setPagamento] = useState('');

    const confirmarPedido = () => {
        if (endereco.trim() === '' || pagamento.trim() === '') {
            Alert.alert('Atenção', 'Por favor, preencha todos os campos obrigatórios (*).');
            return;
        }

        Alert.alert(
            'Pedido Confirmado! 🎉', 
            'Seu pedido está sendo preparado e logo sairá para entrega.',
            [{ text: 'OK', onPress: () => navigation.navigate('Main', { screen: 'HomeTab' }) }]
        );
    };

  
    const formatarPreco = (valor) => {
        const numero = Number(valor);
        return isNaN(numero) ? '0.00' : numero.toFixed(2).replace('.', ',');
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.secao}>
                <Text style={styles.tituloSecao}>Resumo do Pedido</Text>
                
                {itens.map((item, index) => (
                    <View key={index} style={styles.itemResumo}>
                        <Text style={styles.textoItem}>{item.nome}</Text>
                        
                        <Text style={styles.textoPreco}>R$ {formatarPreco(item.preco)}</Text>
                    </View>
                ))}
                
             
                <Text style={styles.total}>Total a pagar: R$ {formatarPreco(total)}</Text>
            </View>

            <View style={styles.secao}>
                <Text style={styles.tituloSecao}>Dados de Entrega</Text>
                <Text style={styles.label}>Endereço Completo *</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Rua, Número, Complemento, Bairro"
                    value={endereco}
                    onChangeText={setEndereco}
                />
            </View>

            <View style={styles.secao}>
                <Text style={styles.tituloSecao}>Pagamento</Text>
                <Text style={styles.label}>Forma de Pagamento *</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex: Pix, Cartão, Dinheiro"
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
    secao: { backgroundColor: '#fff', padding: 20, borderRadius: 10, marginBottom: 15, elevation: 2 },
    tituloSecao: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 15, borderBottomWidth: 1, borderColor: '#eee', paddingBottom: 5 },
    itemResumo: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
    textoItem: { color: '#555', flex: 1 },
    textoPreco: { fontWeight: 'bold', color: '#333' },
    total: { fontSize: 18, fontWeight: 'bold', color: '#890019', textAlign: 'right', marginTop: 10 },
    label: { fontSize: 14, color: '#666', marginBottom: 5, fontWeight: 'bold' },
    input: { backgroundColor: '#f9f9f9', borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12, fontSize: 16, marginBottom: 10 },
    botaoConfirmar: { backgroundColor: '#009432', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 10 },
    textoBotao: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});
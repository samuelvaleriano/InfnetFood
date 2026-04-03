import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../context/ThemeContext'; 

export default function DetalhesRestScreen({ route, navigation }) {
    const { restaurante } = route.params;
    

    const { darkMode } = useContext(ThemeContext); 

    return (
   
        <View style={[styles.container, darkMode && styles.darkContainer]}>
            <Text style={[styles.titulo, darkMode && styles.darkTitulo]}>
                {restaurante.nome}
            </Text>
            
            <View style={[styles.cardInfo, darkMode && styles.darkCardInfo]}>
                <Text style={[styles.label, darkMode && styles.darkLabel]}>Endereço:</Text>
                <Text style={[styles.texto, darkMode && styles.darkTexto]}>{restaurante.endereco}</Text>
                
                <Text style={[styles.label, darkMode && styles.darkLabel, { marginTop: 15 }]}>
                    Exemplo do Cardápio:
                </Text>
                <Text style={[styles.texto, darkMode && styles.darkTexto]}>{restaurante.prato}</Text>
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
    darkContainer: { backgroundColor: '#121212' },
    darkCardInfo: { backgroundColor: '#1E1E1E' },
    darkTitulo: { color: '#FFFFFF' },
    darkTexto: { color: '#E0E0E0' },
    darkLabel: { color: '#AAAAAA' },
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
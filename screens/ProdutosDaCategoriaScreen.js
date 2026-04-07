import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import {  useContext, useEffect, useState } from 'react';
import ProdutoItem from '../components/ui/ProdutoItem';
import { CartContext } from '../context/CardContext';
import { ThemeContext } from '../context/ThemeContext';


export default function ProdutosDaCategoriaScreen({ route }) {
    const { item } = route.params;
    const { adicionar, remover, getQuantidade } = useContext(CartContext);
    const [loading, setLoading] = useState(true);
    
    const { darkMode } = useContext(ThemeContext); 
    const [podutos, setProdutos] = useState([]);

    useEffect(() => {
        const url = "https://raw.githubusercontent.com/samuelvaleriano/lanches/main/lanches.json";

        fetch(url)
            .then(res => res.json())
            .then(dados => {
                const filtrados = dados.filter(p => String(p.categoriaId) === String(item.id));
                setProdutos(filtrados);
                setLoading(false);
            })
            .catch(err => {
                console.error("Erro ao carregar JSON:", err);
                setLoading(false);
            });
    }, [item.id]);

    console.log('Produtos da categoria:', podutos);

    const produtosFiltrados = podutos.filter(
        (prod) => prod.categoriaId === item.id
    );

    const renderProduto = ({ item: produto }) => (
        <View style={[styles.produtoCard, darkMode && styles.darkProdutoCard]}>
            <Image source={{ uri: produto.imagem }} style={styles.produtoImagem} />

            <View style={styles.produtoInfo}>
                <Text style={[styles.produtoNome, darkMode && styles.darkText]}>{produto.nome}</Text>
                <Text style={styles.produtoPreco}>{produto.preco}</Text>
                <ProdutoItem
                    backGroud={item.cor}
                    corBotao={item.corVer}
                    quantidade={getQuantidade(produto.id)}
                    onAdd={() => adicionar(produto)}
                    onRemove={() => remover(produto.id)}
                />
            </View>
        </View>
    );
      if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="steelblue" />
      </View>
    );
  }

    return (
        <View style={[styles.container, darkMode && styles.darkContainer]}>
            <FlatList
                data={produtosFiltrados}
                keyExtractor={(produto) => produto.id}
                renderItem={renderProduto}
                contentContainerStyle={{ padding: 16 }}
                ListEmptyComponent={
                    <Text style={[styles.textoVazio, darkMode && styles.darkTextSecondary]}>
                        Nenhum produto encontrado nesta categoria.
                    </Text>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    darkContainer: { backgroundColor: '#121212' },
    darkProdutoCard: { backgroundColor: '#1E1E1E' },
    darkText: { color: '#FFFFFF' },
    darkTextSecondary: { color: '#AAAAAA' },
    produtoCard: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 12,
        marginBottom: 16,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    produtoImagem: {
        width: 90,
        height: 90,
        borderRadius: 10,
    },
    produtoInfo: {
        flex: 1,
        marginLeft: 12,
        justifyContent: 'space-between',
    },
    produtoNome: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    produtoPreco: {
        fontSize: 16,
        color: '#2E8B57',
        fontWeight: '600',
    },
    botaoAdicionar: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 8,
        alignSelf: 'flex-start',
        marginTop: 8,
    },
    textoBotaoAdicionar: {
        color: '#000',
        fontWeight: 'bold',
    },
    textoVazio: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 16,
        color: 'gray',
    }
});
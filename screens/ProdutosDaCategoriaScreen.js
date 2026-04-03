import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import ProdutoItem from '../components/ui/ProdutoItem';
import { CartContext } from '../context/CardContext';


const todosOsProdutos = [
    { id: '101', categoriaId: '1', nome: 'X-Burguer Duplo', preco: 'R$ 25,00', imagem: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80' },
    { id: '102', categoriaId: '1', nome: 'Batata Frita M', preco: 'R$ 12,00', imagem: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=500&q=80' },
    { id: '103', categoriaId: '1', nome: 'X-Burguer Duplo', preco: 'R$ 25,00', imagem: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80' },
    { id: '104', categoriaId: '1', nome: 'Batata Frita M', preco: 'R$ 12,00', imagem: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=500&q=80' },

    { id: '105', categoriaId: '6', nome: 'Bolo de Chocolate', preco: 'R$ 18,00', imagem: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80' },
    { id: '106', categoriaId: '6', nome: 'Pudim de Leite', preco: 'R$ 15,00', imagem: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=500&q=80' },
    { id: '107', categoriaId: '6', nome: 'Bolo de Chocolate', preco: 'R$ 18,00', imagem: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80' },
    { id: '108', categoriaId: '6', nome: 'Pudim de Leite', preco: 'R$ 15,00', imagem: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=500&q=80' },

    { id: '109', categoriaId: '8', nome: 'Suco de Laranja', preco: 'R$ 10,00', imagem: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=500&q=80' },
    { id: '110', categoriaId: '8', nome: 'Refrigerante Lata', preco: 'R$ 6,00', imagem: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80' },
    { id: '111', categoriaId: '8', nome: 'Suco de Laranja', preco: 'R$ 10,00', imagem: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=500&q=80' },
    { id: '112', categoriaId: '8', nome: 'Refrigerante Lata', preco: 'R$ 6,00', imagem: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80' },
];




export default function ProdutosDaCategoriaScreen({ route }) {
    const { item } = route.params;
    const { adicionar, remover, getQuantidade } = useContext(CartContext);

    const produtosFiltrados = todosOsProdutos.filter(
        (produto) => produto.categoriaId === item.id
    );




    const renderProduto = ({ item: produto }) => (
        <View style={styles.produtoCard}>
            <Image source={{ uri: produto.imagem }} style={styles.produtoImagem} />

            <View style={styles.produtoInfo}>
                <Text style={styles.produtoNome}>{produto.nome}</Text>
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

    return (
        <View style={styles.container}>
            <FlatList
                data={produtosFiltrados}
                keyExtractor={(produto) => produto.id}
                renderItem={renderProduto}
                contentContainerStyle={{ padding: 16 }}
                ListEmptyComponent={
                    <Text style={styles.textoVazio}>Nenhum produto encontrado nesta categoria.</Text>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
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
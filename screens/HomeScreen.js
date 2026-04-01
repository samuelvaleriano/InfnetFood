import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Button,
    FlatList,
} from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>Home Screen</Text>
            <TouchableOpacity style={styles.botao}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.textoBotao}>Go Back</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paragraph: { margin: 20, fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#333' },
    botao: {
        borderRadius: 10,
        backgroundColor: 'steelblue',
        marginTop: 15,
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#333',
        shadowOpacity: '0.3',
        shadowOffset: { width: 3, height: 7 },
        shadowRadius: 5
    },
    textoBotao: {
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
});
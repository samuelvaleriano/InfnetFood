import {
  StyleSheet,
  Text,
  View,
  Image,
   ScrollView,
    Platform
} from 'react-native';

import { useUser } from '../context/UserContext';

export default function PerfilScreen() {
    const { user } = useUser();
  return (
  <ScrollView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Meu Perfil</Text>
        <View style={styles.card}>
          <Image 
            source={{ uri: user?.avatar }} 
            style={styles.avatar} 
          />
          <Text style={styles.name}>{user?.nome }</Text>
          <Text style={styles.email}>{user?.email}</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F7FA', 
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 40 : 20, 
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ED1C16', 
    marginBottom: 30,
    alignSelf: 'flex-start',
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  avatar: { 
    width: 120, 
    height: 120, 
    borderRadius: 60, 
    borderWidth: 4, 
    borderColor: '#ED1C16',
    marginBottom: 16,
  },
  name: { 
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  email: { 
    fontSize: 16,
    color: '#777', 
    marginBottom: 10,
  },
});
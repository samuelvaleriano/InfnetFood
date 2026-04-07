import React, { useContext } from 'react';
import { View, Text, Switch, StyleSheet, ScrollView } from 'react-native';
import { ThemeContext } from '../context/ThemeContext'; 

export default function Configuracoes() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <ScrollView style={[styles.container, darkMode && styles.darkContainer]}>
      
      <Text style={[styles.title, darkMode && styles.darkText]}>
        Configurações
      </Text>

      <View style={styles.settingRow}>
        <Text style={[styles.label, darkMode && styles.darkText]}>
          Modo Escuro
        </Text>
        
        <Switch
          trackColor={{ false: '#767577', true: '#890019' }}
          thumbColor={darkMode ? '#EB0033' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleTheme} 
          value={darkMode} 
        />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#ecf0f1' },
  darkContainer: { backgroundColor: '#121212' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 30, color: '#333', marginTop: 50 },
  darkText: { color: '#ffffff' },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  label: { fontSize: 18, color: '#333' },
});
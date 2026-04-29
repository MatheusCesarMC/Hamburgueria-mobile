import React, { useState } from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import ProdutoCard from '../components/produtoCard';
import { sandubas } from '@/data/arrayProdutos';
import { bebidas } from '@/data/arrayProdutos'; 

export default function Lista() {
  const [cardapioOp, setcardapioOp] = useState('sandubas');

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => setcardapioOp('sandubas')}>
          <Text style={styles.textoBotao}>Sandubas</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setcardapioOp('Bebidas')}>
          <Text style={styles.textoBotao}>Bebidas</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={cardapioOp === 'sandubas' ? sandubas : bebidas} 
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProdutoCard produto={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  textoBotao: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: 18
  }
});
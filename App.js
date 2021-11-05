import React,{ useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList,ActivityIndicator } from 'react-native';


export default function App() {

  const [carregando, setCarregando]=useState(true);
  const [dados, setDados]=useState([])

  useEffect(
    () => {
      fetch('https://cfbcursos.com.br/filmes.json')
        .then((response) => response.json())
        .then((json)=>setDados(json.filmes))
        .catch((err)=>alert('Erro ao carregar lista de filmes!!'))
        .finally(()=>setCarregando(false))
    },[]


  )

  return (
    <View style={styles.container}>
      {
        carregando ? <ActivityIndicator/> : (
          <FlatList
            data={dados}
            keyExtractor={({id}, index)=>id}
            renderItem={({item})=>(
              <Text>{item.titulo}, {item.AnoLancamento}</Text>
            )}
          />
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { useLocalSearchParams, router } from "expo-router"
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native'
import { sandubas } from '../../data/arrayProdutos'
import { bebidas } from "../../data/arrayProdutos"

export default function ProdutoDetalhe(){
    const {id} = useLocalSearchParams<{id:string}>()
    //const produto = sandubas.find((p) => p.id === Number(id)) 
   // const produto2 = bebidas.find((p2) => p2.id === Number(id))
    const produto = sandubas.find((p) => p.id === Number(id)) || 
            bebidas.find((p) => p.id === Number(id));

    if(!produto) return <Text>Sanduba/Bebida nao encontrado.</Text>
       // if(!produto2) return <Text>Bebida nao encontrada.</Text>


    return(
        <View style ={styles.container}>
            <Image style={styles.imagem} source={produto.imagem} resizeMode="cover"></Image>
            <View style ={styles.info}>
                <Text style ={styles.nome}>{produto.titulo}</Text>
                <Text style ={styles.preco}>{produto.preco}</Text>
                <Text style ={styles.descricao}>{produto.descricao}</Text>
                <TouchableOpacity style ={styles.botaoComprar}>
                    <Text style ={styles.botaoComprarText}>Adicionar ao carrinho</Text>
                </TouchableOpacity>
                <TouchableOpacity style ={styles.botaoVoltar}>
                    <Text style ={styles.botaoVoltarText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#fff"
    },
    imagem: {
        width: "100%",
        height: 300
    },
    info: {
        padding: 20,
        gap: 12
    },
    nome: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#000"
    },
    preco: {
        fontSize: 40,
        fontWeight: "600",
        color: "rgb(63, 187, 5)",
    },
    descricao: {
        fontSize: 23,
        lineHeight: 22,
        color: "#555"
    },
    botaoComprar: {
        backgroundColor: "#0ac92a",
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: "center",
        marginTop: 16
    },
    botaoComprarText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#f6f0f0"
    },
    botaoVoltar: {
        backgroundColor: "#da1d1d",
        borderRadius: 12,
        paddingVertical: 12,
        alignItems: "center",
        marginTop: 8
    },
    botaoVoltarText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#4d4949"
    },
    erroText: {
        fontSize: 16,
        color: "#4d4949",
        marginBottom: 16
    }
})
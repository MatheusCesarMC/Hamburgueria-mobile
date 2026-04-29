import{ router } from 'expo-router'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { prodType } from '@/types/prodType'

type Props = {produto:prodType}
export default function ProdutoCard({produto}:Props){
    return(
        <TouchableOpacity style={styles.card} onPress={() => router.push(`../produto/${produto.id}`)}>
            <View style={styles.info}>
                <Text style={styles.titulo}>{produto.titulo}</Text>
                <Text style={styles.preco}>{produto.preco}</Text>
            </View>
            <Image style={styles.imagem} source={produto.imagem}></Image>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#f1f1f1",
        borderRadius: 16,
        marginHorizontal: 16,
        marginVertical: 8,
        elevation: 3,
        shadowColor: "#0000",
        shadowOpacity: 0.08,
        shadowRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 12,
        paddingVertical: 16
    },
    info: {
        flex: 1,
        gap: 6
    },
    titulo: {
        fontSize: 18,
        color: "rgb(99, 47, 28)",
        fontWeight: 700
    },
    preco:{
        fontSize: 16,
        color: "rgb(63, 187, 5)",
        fontWeight: 600
    },
    imagem:{
        width: 110,
        height: 110,
        borderRadius: 12,
        marginLeft: 12
    }
})
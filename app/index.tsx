import { router } from 'expo-router';
import { TouchableOpacity, View, StyleSheet, Image } from 'react-native';

export default function Index(){
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> router.push("../lista")}>
                <Image source={require('../assets/images/IppoTelaPrincipal.png')}  style={styles.imagem}></Image>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    imagem: {
        width: 500,
        height: 850,
        borderRadius: 12
    }
})

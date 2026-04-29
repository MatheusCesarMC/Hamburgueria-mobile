import { Stack } from "expo-router";

export default function RootLayout(){
    return(
        <Stack>
            <Stack.Screen name="index" options={{ title: "Tela Principal"}} />
            <Stack.Screen name="produto/[id]" options={{ title: "Descrição Sanduba"}} />
            <Stack.Screen name="lista" options={{ title: "Cardapio"}} />
        </Stack>
    )
}
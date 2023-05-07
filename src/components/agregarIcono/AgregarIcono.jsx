import React from "react"
import { useNavigation } from "@react-navigation/native"
import { AddIcon, View } from "native-base"
import { titulos } from "../../helpers/Colors"
import { TouchableOpacity } from 'react-native';

const AgregarIcono = () => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={() => navigation.navigate("agregar-tarea")}>
            <View bgColor={titulos} position={"absolute"} right={4} bottom={4} p={1}>
                <AddIcon size={"xl"} color={"white"} />
            </View>
        </TouchableOpacity>
    )
}

export default AgregarIcono
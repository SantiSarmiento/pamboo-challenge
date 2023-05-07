import React from 'react';
import { HStack, HamburgerIcon, Text, VStack } from "native-base";
import { titulos } from "../../helpers/Colors"
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = ({ titulo }) => {

    const navigation = useNavigation()

    function obtenerFechaFormateada() {
        const fecha = new Date();
        const dia = fecha.getDate();
        const mes = fecha.toLocaleString('es-ES', { month: 'long' });
        const anio = fecha.getFullYear();

        return `${mes} ${dia}, ${anio}`
    }

    return (
        <HStack alignItems={"center"} justifyContent={"space-between"} w={"90%"} alignSelf={"center"} mt={8} mb={2}>
            {
                titulo
                    ?
                    <Text fontSize={"xl"} fontWeight={"medium"} color={titulos} >{titulo}</Text>
                    :
                    <HStack>
                        <Text fontSize={"xl"} fontWeight={"medium"}>{obtenerFechaFormateada()}</Text>
                    </HStack>
            }
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <HamburgerIcon color={titulos} size={"xl"} />
            </TouchableOpacity>
        </HStack>
    )
}

export default Header
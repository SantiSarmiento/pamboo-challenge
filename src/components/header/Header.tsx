import { HStack, HamburgerIcon, Text, VStack } from "native-base";
import React from "react";
import { titulos } from "../../helpers/Colors"

const Header = () => {

    function obtenerFechaFormateada() {
        const fecha = new Date();

        const dia = fecha.getDate();
        const mes = fecha.toLocaleString('es-ES', { month: 'long' });
        const anio = fecha.getFullYear();

        return `${mes} ${dia}, ${anio}`

    }


    return (
        <HStack alignItems={"center"} justifyContent={"space-between"} w={"90%"} alignSelf={"center"} mt={8} mb={2}>
            <VStack>
                <Text fontSize={"xl"} fontWeight={"medium"}>{obtenerFechaFormateada()}</Text>
                <Text fontSize={"xl"} fontWeight={"medium"} color={titulos} >Hoy</Text>
            </VStack>
            <HamburgerIcon size={"xl"} color={titulos} />
        </HStack>
    )
}

export default Header
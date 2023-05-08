import React, { useState } from 'react';
import { HStack, HamburgerIcon, Text, VStack } from "native-base";
import { naranja_oscuro } from "../../helpers/Colors"
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../input/CustomInput';

const Header = ({ titulo }) => {

    const navigation = useNavigation()

    const [filtrado, setFiltrado] = useState("")

    return (
        <VStack>
            <HStack alignItems={"center"} justifyContent={"space-between"} w={"90%"} alignSelf={"center"} mt={8}>
                <Text fontSize={"xl"} fontWeight={"medium"} color={naranja_oscuro} >{titulo}</Text>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <HamburgerIcon color={naranja_oscuro} size={"xl"} />
                </TouchableOpacity>
            </HStack>
            <CustomInput label={""} value={filtrado} setValue={(text) => setFiltrado(text)} placeholder={"Filtrar por nombre"} width={"90%"} variant={"outline"} />
        </VStack>
    )
}

export default Header
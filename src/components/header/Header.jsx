import React from 'react';
import { HStack, HamburgerIcon, Text } from "native-base";
import { naranja_oscuro } from "../../helpers/Colors"
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = ({ titulo }) => {

    const navigation = useNavigation()

    return (
        <HStack alignItems={"center"} justifyContent={"space-between"} w={"90%"} alignSelf={"center"} mt={8}>
            <Text fontSize={"2xl"} fontWeight={"medium"} color={naranja_oscuro} >{titulo}</Text>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <HamburgerIcon color={naranja_oscuro} size={"2xl"} />
            </TouchableOpacity>
        </HStack>
    )
}

export default Header
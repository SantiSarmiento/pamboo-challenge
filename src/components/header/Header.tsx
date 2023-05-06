import { HStack, HamburgerIcon, Text } from "native-base";
import React from "react";
import { titulos } from "../../helpers/Colors"

const Header = ({ titulo }) => {
    return (
        <HStack alignItems={"center"} justifyContent={"space-between"} w={"90%"} alignSelf={"center"} mt={8} mb={2}>
            <Text fontSize={"3xl"} color={titulos} fontWeight={"medium"}>{titulo}</Text>
            <HamburgerIcon size={"xl"} color={titulos} />
        </HStack>
    )
}

export default Header
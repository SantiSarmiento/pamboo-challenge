import { HStack, HamburgerIcon, Text } from "native-base";
import React from "react";
import { titulos } from "../../helpers/Colors"

const Header = ({ titulo }) => {
    return (
        <HStack alignItems={"center"} justifyContent={"space-between"} p={5}>
            <Text fontSize={"2xl"} color={titulos} fontWeight={"medium"}>{titulo}</Text>
            <HamburgerIcon size={"xl"} color={titulos} />
        </HStack>
    )
}

export default Header
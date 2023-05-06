import React from "react"
import { Checkbox, HStack, Text } from "native-base"

const Tarea = ({ nombre, estado }) => {
    return (
        <HStack bgColor={estado === 1 ? "#ffefbe" : "#f4f4f4"} p={5} w={"90%"} alignItems={"center"} m={3}>
            <Checkbox value={nombre} accessibilityLabel={nombre} colorScheme={"yellow"} />
            <Text ml={4} fontSize={"lg"} strikeThrough={estado === 1 ? true : false}>{nombre}</Text>
        </HStack>
    )
}

export default Tarea
import React from "react"
import { CloseIcon, HStack, Modal, Text } from "native-base";

const CustomModal = ({ showModal, close, titulo, children }) => {



    return (
        <Modal isOpen={showModal} onClose={close} w={"100%"}>
            <Modal.Content w={"100%"}>
                <Modal.Body>
                    <HStack alignItems={"center"} justifyContent={"space-between"} mb={4}>
                        <Text fontSize={"lg"} fontWeight={"medium"}>{titulo}</Text>
                        <CloseIcon size={"lg"} onPress={close} />
                    </HStack>
                    {
                        children
                    }
                </Modal.Body>
            </Modal.Content>
        </Modal>
    )
}

export default CustomModal
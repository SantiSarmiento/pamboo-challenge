import React, { useState } from "react";
import { Center, Checkbox, HStack, Pressable, Text, VStack, View } from "native-base";
import { useDispatch } from "react-redux";
import { borrarTarea, modificarEstado } from "../../store/tareas/tareasSlice";
import { completadas } from "../../helpers/Colors";
import { Swipeable } from "react-native-gesture-handler";
import { Animated } from "react-native";
import CustomModal from "../modal/CustomModal";
import CustomButton from "../button/CustomButton";

const ConfirmarBorrar = ({ nombre }) => {

    const dispatch = useDispatch();

    const confirmar = () => {
        dispatch(borrarTarea(nombre))
    }

    return (
        <View>
            <Text fontSize={"md"} mb={5}>Puede recuperarlas desde la pantalla de tareas borradas en el menu lateral.</Text>
            <CustomButton
                titulo={"Confirmar"}
                callBack={confirmar}
                disabled={false}
            />
        </View>
    )
}

const Tarea = ({ nombre, estado, descripcion, fecha, hora }) => {

    const dispatch = useDispatch();

    const modificarEstadoTarea = () => {
        dispatch(
            modificarEstado({
                nombre: nombre,
                estado: estado === 0 ? 1 : 0,
                descripcion: descripcion,
                fecha: fecha,
                hora: hora,
            })
        );
    };

    const [showModal, setShowModal] = useState(false)

    function capitalizar(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const renderRightActions = (progress, dragX) => {

        const trans = dragX.interpolate({
            inputRange: [0, 50],
            outputRange: [0, -50],
            extrapolate: "clamp",
        });

        return (
            <Animated.View
                style={{
                    transform: [{ translateX: trans }],
                }}
            >

                <Pressable
                    bgColor={"red.500"}
                    w={100}
                    mt={4}
                    h={"90%"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    onPress={() => setShowModal(true)}
                >
                    <Text style={{ color: "white" }}>Eliminar</Text>
                </Pressable>
            </Animated.View>
        );
    };

    return (
        <View width={"90%"}>
            <Swipeable renderRightActions={renderRightActions}>
                <HStack
                    bgColor={estado === 1 ? completadas : "#f4f4f4"}
                    p={2}
                    w={"100%"}
                    alignItems={"center"}
                    mt={4}
                >
                    <Checkbox
                        isChecked={estado === 1}
                        value={estado}
                        accessibilityLabel={nombre}
                        colorScheme={"green"}
                        onChange={modificarEstadoTarea}
                    />
                    <VStack>
                        <Text
                            ml={3}
                            fontSize={"md"}
                            fontWeight={"medium"}
                            strikeThrough={estado === 1 ? true : false}
                        >
                            {capitalizar(nombre)}
                        </Text>
                        <Text ml={4} fontSize={"sm"} pr={2}>
                            {descripcion !== "" ? capitalizar(descripcion) : "-"}
                        </Text>
                    </VStack>
                    <Text position={"absolute"} right={2} top={2} color={"gray.400"}>
                        {hora}
                    </Text>
                </HStack>
            </Swipeable>
            <CustomModal showModal={showModal} close={() => setShowModal(false)} titulo={"Desea borrar la tarea ?"} children={<ConfirmarBorrar nombre={nombre} />} />
        </View>
    );
};

export default Tarea;

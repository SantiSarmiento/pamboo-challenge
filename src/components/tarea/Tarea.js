import React, { useState, useRef } from "react";
import { Checkbox, HStack, Pressable, Text, VStack, View } from "native-base";
import { useDispatch } from "react-redux";
import { borrarDefinitivo, borrarTarea, modificarEstado, recuperar } from "../../store/tareas/tareasSlice";
import { amarillo, naranja_claro, verde_claro } from "../../helpers/Colors";
import { Swipeable } from "react-native-gesture-handler";
import { Animated } from "react-native";
import CustomModal from "../modal/CustomModal";
import CustomButton from "../button/CustomButton";

const ConfirmarBorrar = ({ nombre, closeModal }) => {

    const dispatch = useDispatch();

    const confirmar = () => {
        dispatch(borrarTarea(nombre))
        closeModal()
    }

    return (
        <View>
            <Text fontSize={"md"} mb={5}>Puede recuperarlas desde la pantalla de tareas borradas en el menú lateral.</Text>
            <CustomButton
                titulo={"Confirmar"}
                callBack={confirmar}
                disabled={false}
            />
        </View>
    )
}

const EliminarDefinitivamente = ({ nombre, closeModal }) => {

    const dispatch = useDispatch();

    const confirmar = () => {
        dispatch(borrarDefinitivo(nombre))
        closeModal()
    }

    return (
        <View>
            <Text fontSize={"md"} mb={5}>Esta acción no se puede deshacer.</Text>
            <CustomButton
                titulo={"Confirmar"}
                callBack={confirmar}
                disabled={false}
            />
        </View>
    )
}

const RecuperarTarea = ({ nombre, closeModal }) => {

    const dispatch = useDispatch();

    const confirmar = () => {
        dispatch(recuperar(nombre))
        closeModal()
    }

    return (
        <View>
            <Text fontSize={"md"} mb={5}>Su tarea estará nuevamente disponible.</Text>
            <CustomButton
                titulo={"Confirmar"}
                callBack={confirmar}
                disabled={false}
            />
        </View>
    )
}

const Tarea = ({ nombre, estado, descripcion, fecha, hora, eliminado, color }) => {

    const dispatch = useDispatch();

    const modificarEstadoTarea = () => {
        dispatch(
            modificarEstado({
                nombre: nombre,
                estado: estado === 0 ? 1 : 0,
                descripcion: descripcion,
                fecha: fecha,
                hora: hora,
                color: color
            })
        );
    };

    const [showModal, setShowModal] = useState(false)
    const [recuperarModal, setRecuperarModal] = useState(false)

    function capitalizar(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }


    const swipeableRef = useRef(null);

    const renderRightActions = (dragX) => {
        const trans = dragX.interpolate({
            inputRange: [0, 50],
            outputRange: [0, -50],
            extrapolate: "clamp",
        });

        const handleEliminar = () => {
            setShowModal(true);
            swipeableRef.current.close()
        };

        const handleRecuperar = () => {
            setRecuperarModal(true)
            swipeableRef.current.close()
        };

        return (
            <Animated.View style={{ transform: [{ translateX: trans }] }}>
                {eliminado ? (
                    <HStack>
                        <View>
                            <Pressable
                                bgColor="red.500"
                                w={100}
                                h="100%"
                                alignItems="center"
                                justifyContent="center"
                                onPress={handleEliminar}
                            >
                                <Text style={{ color: "white" }}>Eliminar</Text>
                            </Pressable>
                        </View>
                        <View>
                            <Pressable
                                bgColor="success.500"
                                w={100}
                                h="100%"
                                alignItems="center"
                                justifyContent="center"
                                onPress={handleRecuperar}
                            >
                                <Text style={{ color: "white" }}>Recuperar</Text>
                            </Pressable>
                        </View>
                    </HStack>
                ) : (
                    <Pressable
                        bgColor="red.500"
                        w={100}
                        h="100%"
                        alignItems="center"
                        justifyContent="center"
                        onPress={handleEliminar}
                    >
                        <Text style={{ color: "white" }}>Eliminar</Text>
                    </Pressable>
                )}
            </Animated.View>
        );
    };

    const colores = [amarillo, naranja_claro, verde_claro]

    return (
        <View width={"90%"} mt={4}>
            <Swipeable renderRightActions={renderRightActions} ref={swipeableRef}>
                <HStack
                    bgColor={color === "" ? "#f4f4f4" : colores[color]}
                    p={2}
                    w={"100%"}
                    alignItems={"center"}
                >
                    <Checkbox
                        isChecked={estado === 1}
                        value={estado}
                        accessibilityLabel={nombre}
                        colorScheme={"green"}
                        onChange={modificarEstadoTarea}
                        isDisabled={eliminado}
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
            <CustomModal showModal={showModal} close={() => setShowModal(false)} titulo={eliminado ? "¿Borrar definitivamente?" : "¿Desea borrar la tarea?"} children={eliminado ? <EliminarDefinitivamente nombre={nombre} closeModal={() => setShowModal(false)} /> : <ConfirmarBorrar nombre={nombre} closeModal={() => setShowModal(false)} />} />
            <CustomModal showModal={recuperarModal} close={() => setRecuperarModal(false)} titulo={"¿Desea recuperar su tarea?"} children={<RecuperarTarea nombre={nombre} closeModal={() => setRecuperarModal(false)} />} />
        </View>
    );
};

export default Tarea;

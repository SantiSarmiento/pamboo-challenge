import React, { useState, useEffect } from "react";
import { ScrollView, Text, View, Image, Center } from "native-base";
import Header from "../../components/header/Header";
import { useDispatch, useSelector } from 'react-redux';
import Tarea from "../../components/tarea/Tarea";
import CustomIcon from "../../components/icon/CustomIcon";
import Acciones from "../../components/acciones/Acciones";
import CustomModal from "../../components/modal/CustomModal";
import CustomButton from "../../components/button/CustomButton";
import { desactivarInformacion } from "../../store/usuario/usuarioSlice";

const Informacion = ({ close }: { close: () => void }) => {
    
    const dispatch = useDispatch()

    const cerrarModal = () => {
        dispatch(desactivarInformacion())
        close()
    }

    return (
        <Center>
            <Image source={require('../../../assets/images/opciones.png')} alt="ayuda" width={"100%"} height={300} />
            <Text fontSize={"lg"} mt={2}>Desliza una tarea hacia la izquierda para acceder a más opciones.</Text>
            <CustomButton titulo={"Entendido"} callBack={cerrarModal} disabled={false} width={"100%"} styles={{ marginTop: 20 }} />
        </Center>
    )
}

const Tareas = () => {

    const tareas = useSelector((state: RootState) => state.tareas.tareas)
    const usuario = useSelector((state: RootState) => state.usuario.primera_vez)

    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        if (usuario) setShowModal(true)
    }, [usuario])

    return (
        <View bgColor={"white"} h={"100%"} w={"100%"}>
            <Header titulo={"Mis tareas"} />
            {
                tareas.length === 0
                    ?
                    <View alignSelf={"center"} justifyContent={"center"} alignItems={"center"} flex={1}>
                        <CustomIcon nombre={"checklist-cuate"} size={"2xl"} width={undefined} heigth={undefined} margin={undefined} />
                        <Text fontSize={"xl"}>Agrega una tarea para comenzar</Text>
                    </View>
                    :
                    <ScrollView contentContainerStyle={{
                        alignItems: "center"
                    }}>

                        {
                            tareas.map(({ nombre, estado, descripcion, fecha, hora, color }, index) => {
                                return <Tarea key={index} nombre={nombre} estado={estado} descripcion={descripcion} fecha={fecha} hora={hora} eliminado={false} color={color} />
                            })
                        }

                    </ScrollView>
            }

            <Acciones />
            <CustomModal showModal={showModal} close={() => setShowModal(false)} titulo={"Información"} children={<Informacion close={() => setShowModal(false)} />} />
        </View>
    )
}

export default Tareas
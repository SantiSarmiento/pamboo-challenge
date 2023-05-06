import React, { useState, useEffect } from "react";
import { AddIcon, ScrollView, Text, View } from "native-base";
import Header from "../../components/header/Header";
import { useSelector } from 'react-redux';
import CustomModal from "../../components/modal/Modal";
import AgregarTarea from "../tareas/components/AgregarTarea";
import { titulos } from "../../helpers/Colors";
import CustomIcon from "../../components/icon/CustomIcon";
import Tarea from "../../components/tarea/Tarea";

const Pendientes = () => {

    const tareasArr = useSelector((state: RootState) => state.tareas.tareas)

    const [tareas, setTareas] = useState<Tarea[]>([])

    const [showModal, setShowModal] = useState(false)

    const filtrarCompletadas = () => {
        setTareas(tareasArr.filter(item => item.estado === 0))
    }

    useEffect(() => {
        filtrarCompletadas()
    }, [tareasArr])

    return (
        <View bgColor={"white"} h={"100%"} w={"100%"}>
            <Header titulo={"Pendientes"} />

            {
                tareas.length === 0
                    ?
                    <View alignSelf={"center"} justifyContent={"center"} alignItems={"center"} flex={1}>
                        <CustomIcon nombre={"check-list"} size={"2xl"} width={undefined} heigth={undefined} margin={undefined} />
                        <Text color={titulos} fontSize={"xl"}>No se econtraron tareas pendientes</Text>
                    </View>
                    :
                    <ScrollView contentContainerStyle={{
                        alignItems: "center"
                    }}>

                        {
                            tareas.map(({ nombre, estado, favorito }, index) => {
                                return <Tarea key={index} nombre={nombre} estado={estado} />
                            })
                        }

                    </ScrollView>
            }

            <CustomModal showModal={showModal} close={() => setShowModal(false)} titulo={"Agregar tarea"} children={<AgregarTarea close={() => setShowModal(false)} />} />

            <View bgColor={titulos} position={"absolute"} right={4} bottom={4} p={1}>
                <AddIcon size={"xl"} color={"white"} onPress={() => setShowModal(true)} />
            </View>
        </View>
    )
}

export default Pendientes
import React, { useEffect, useState } from "react";
import { AddIcon, ScrollView, Text, View } from "native-base";
import Header from "../../components/header/Header";
import { useSelector, useDispatch } from 'react-redux';
import { titulos } from "../../helpers/Colors";
import Tarea from "../../components/tarea/Tarea";
import CustomModal from "../../components/modal/Modal";
import AgregarTarea from "./components/AgregarTarea";
import CustomIcon from "../../components/icon/CustomIcon";

const Tareas = () => {

    const tareas = useSelector((state: RootState) => state.tareas.tareas)
    const [showModal, setShowModal] = useState(false)


    return (
        <View bgColor={"white"} h={"100%"} w={"100%"}>
            <Header titulo={"Mis tareas"} />

            {
                tareas.length === 0
                    ?
                    <View alignSelf={"center"} justifyContent={"center"} alignItems={"center"} flex={1}>
                        <CustomIcon nombre={"check-list"} size={"2xl"} width={undefined} heigth={undefined} margin={undefined} />
                        <Text color={titulos} fontSize={"xl"}>Agrega una tarea para comenzar</Text>
                    </View>
                    :
                    <ScrollView contentContainerStyle={{
                        alignItems: "center"
                    }}>

                        {
                            tareas.map(({ nombre, estado, favorito }, index) => {
                                return <Tarea key={index} nombre={nombre} estado={estado} favorito={favorito} />
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

export default Tareas
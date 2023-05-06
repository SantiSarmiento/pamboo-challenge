import React, { useState, useEffect } from "react";
import { AddIcon, ScrollView, Text, View } from "native-base";
import Header from "../../components/header/Header";
import { useSelector } from 'react-redux';
import { titulos } from "../../helpers/Colors";
import CustomIcon from "../../components/icon/CustomIcon";
import Tarea from "../../components/tarea/Tarea";
import AgregarIcono from "../../components/agregarIcono/AgregarIcono";


const Pendientes = () => {

    const tareasArr = useSelector((state: RootState) => state.tareas.tareas)
    const [pendientes, setPendientes] = useState(false)

    useEffect(() => {
        let existe = tareasArr.some(function (objeto) {
            return objeto.estado === 0;
        });
        setPendientes(existe)
    }, [tareasArr])


    return (
        <View bgColor={"white"} h={"100%"} w={"100%"}>
            <Header  />

            {
                pendientes === false
                    ?
                    <View alignSelf={"center"} justifyContent={"center"} alignItems={"center"} flex={1}>
                        <CustomIcon nombre={"check-list"} size={"2xl"} width={undefined} heigth={undefined} margin={undefined} />
                        <Text fontSize={"xl"}>No se econtraron tareas pendientes</Text>
                    </View>
                    :
                    <ScrollView contentContainerStyle={{
                        alignItems: "center"
                    }}>

                        {
                            tareasArr.map(({ nombre, estado, descripcion, fecha, hora }, index) => {
                                if (estado === 0) {
                                    return <Tarea key={index} nombre={nombre} estado={estado} descripcion={descripcion} fecha={fecha} hora={hora} />
                                }
                            })
                        }

                    </ScrollView>
            }

            <AgregarIcono />
        </View>
    )
}

export default Pendientes
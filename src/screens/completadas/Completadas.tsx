import React, { useState, useEffect } from "react";
import { ScrollView, Text, View } from "native-base";
import Header from "../../components/header/Header";
import { useSelector } from 'react-redux';
import { titulos } from "../../helpers/Colors";
import CustomIcon from "../../components/icon/CustomIcon";
import Tarea from "../../components/tarea/Tarea";

const Completadas = () => {

    const tareasArr = useSelector((state: RootState) => state.tareas.tareas)

    const [completas, setCompletas] = useState(false)

    useEffect(() => {
        let existe = tareasArr.some(function (objeto) {
            return objeto.estado === 1;
        });
        setCompletas(existe)
    }, [tareasArr])


    return (
        <View bgColor={"white"} h={"100%"} w={"100%"}>
            <Header titulo={"Pendientes"} />

            {
                completas === false
                    ?
                    <View alignSelf={"center"} justifyContent={"center"} alignItems={"center"} flex={1}>
                        <CustomIcon nombre={"check-list"} size={"2xl"} width={undefined} heigth={undefined} margin={undefined} />
                        <Text color={titulos} fontSize={"xl"}>No se econtraron tareas completadas</Text>
                    </View>
                    :
                    <ScrollView contentContainerStyle={{
                        alignItems: "center"
                    }}>

                        {
                            tareasArr.map(({ nombre, estado, favorito }, index) => {
                                if (estado === 1) {
                                    return <Tarea key={index} nombre={nombre} estado={estado} favorito={favorito} />
                                }
                            })
                        }

                    </ScrollView>
            }
        </View>
    )
}

export default Completadas
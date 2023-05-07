import React, { useState, useEffect } from "react";
import { ScrollView, Text, View } from "native-base";
import Header from "../../components/header/Header";
import { useSelector } from 'react-redux';
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
            <Header titulo={"Completadas"} />

            {
                completas === false
                    ?
                    <View alignSelf={"center"} justifyContent={"center"} alignItems={"center"} flex={1}>
                        <CustomIcon nombre={"checklist-bro"} size={"2xl"} width={undefined} heigth={undefined} margin={undefined} />
                        <Text fontSize={"xl"}>No se econtraron tareas verde_claro</Text>
                    </View>
                    :
                    <ScrollView contentContainerStyle={{
                        alignItems: "center"
                    }}>

                        {
                            tareasArr.map(({ nombre, estado, descripcion, fecha, hora, color }, index) => {
                                if (estado === 1) {
                                    return <Tarea key={index} nombre={nombre} estado={estado} descripcion={descripcion} fecha={fecha} hora={hora} eliminado={false} color={color} />
                                }
                            })
                        }

                    </ScrollView>
            }
        </View>
    )
}

export default Completadas
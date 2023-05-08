import React from "react";
import { ScrollView, Text, View } from "native-base";
import Header from "../../components/header/Header";
import { useSelector } from 'react-redux';
import Tarea from "../../components/tarea/Tarea";
import CustomIcon from "../../components/icon/CustomIcon";
import AgregarIcono from "../../components/acciones/Acciones";

const Eliminados = () => {

    const tareas = useSelector((state: RootState) => state.tareas.borradas)

    return (
        <View bgColor={"white"} h={"100%"} w={"100%"}>
            <Header titulo={"Eliminados"} />

            {
                tareas.length === 0
                    ?
                    <View alignSelf={"center"} justifyContent={"center"} alignItems={"center"} flex={1}>
                        <CustomIcon nombre={"no-data"} size={"2xl"} width={undefined} heigth={undefined} margin={undefined} />
                        <Text fontSize={"xl"}>No se encontraron tareas eliminadas</Text>
                    </View>
                    :
                    <ScrollView contentContainerStyle={{
                        alignItems: "center"
                    }}>

                        {
                            tareas.map(({ nombre, estado, descripcion, fecha, hora, color }, index) => {
                                return <Tarea key={index} nombre={nombre} estado={estado} descripcion={descripcion} fecha={fecha} hora={hora} eliminado={true} color={color} />
                            })
                        }

                    </ScrollView>
            }

            <AgregarIcono />
        </View>
    )
}

export default Eliminados
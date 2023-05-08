import React from "react";
import { ScrollView, Text, View } from "native-base";
import Header from "../../components/header/Header";
import { useSelector } from 'react-redux';
import Tarea from "../../components/tarea/Tarea";
import CustomIcon from "../../components/icon/CustomIcon";
import Acciones from "../../components/acciones/Acciones";

const Tareas = () => {

    const tareas = useSelector((state: RootState) => state.tareas.tareas)

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
        </View>
    )
}

export default Tareas
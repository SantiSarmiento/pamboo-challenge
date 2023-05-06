import React, { useState } from "react"
import { CloseIcon, HStack, Pressable, Text, View } from "native-base"
import { StyleSheet } from "react-native"
import { useSelector, useDispatch } from 'react-redux';
import { agregarTarea } from "../../store/tareas/tareasSlice";
import Svg, { Path } from "react-native-svg"
import CustomInput from "../../components/input/CustomInput";
import { titulos } from "../../helpers/Colors";
import DateTimePicker from '@react-native-community/datetimepicker';
import { NavigationProp } from '@react-navigation/native';
import CustomButton from "../../components/button/CustomButton";


const AgregarTarea = ({ navigation }) => {

    const dispatch = useDispatch()
    const tareas = useSelector((state: RootState) => state.tareas.tareas)

    const [datePicker, setDatePicker] = useState(false)
    const [timePicker, setTimePicker] = useState(false)

    const [nuevaTarea, setNuevaTarea] = useState({
        nombre: "",
        descripcion: "",
        fecha: "",
        hora: "",
        estado: 0,
        color: ""
    })
    const [error, setError] = useState("")

    const handleDateChange = (event: { type: any; nativeEvent: any; }) => {
        if (event.type === "dismissed") {
            setDatePicker(false)
        } else {
            const fecha = new Date(event.nativeEvent.timestamp)
            const dia = fecha.getDate().toString().padStart(2, '0');
            const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
            const anio = fecha.getFullYear().toString().slice(-2);
            setNuevaTarea({ ...nuevaTarea, fecha: `${dia}/${mes}/${anio}` })
            setDatePicker(false)
        }
    }

    const handleTimeChange = (event: { type: any; nativeEvent: any; }) => {
        if (event.type === "dismissed") {
            setTimePicker(false);
        } else {
            const fecha = new Date(event.nativeEvent.timestamp);
            const horas = fecha.getHours();
            const minutos = fecha.getMinutes();
            // Validar y formatear las horas
            const horasFormateadas = horas >= 0 && horas <= 9 ? `0${horas}` : horas;

            // Validar y formatear los minutos
            const minutosFormateados = minutos >= 0 && minutos <= 9 ? `0${minutos}` : minutos;

            setNuevaTarea({ ...nuevaTarea, hora: `${horasFormateadas}:${minutosFormateados}` });
            setTimePicker(false);
        }
    };


    function buscarPorNombre() {
        for (let i in tareas) {
            if (tareas[i].nombre.toLowerCase() === nuevaTarea.nombre.toLowerCase()) {
                setError("Este nombre ya existe")
                return
            }
        }
        if (error !== "") setError("")
        agregarNuevaTarea()
    }

    const agregarNuevaTarea = () => {
        dispatch(agregarTarea(nuevaTarea))
    }


    return (
        <View backgroundColor={"white"} height={"100%"} >
            <View style={styles.box}>
                <Svg
                    height={200}
                    width={"100%"}
                    viewBox="0 0 1440 320"
                >
                    <Path
                        fill={titulos}
                        d="M0,64L120,101.3C240,139,480,213,720,213.3C960,213,1200,139,1320,101.3L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
                    />
                </Svg>
            </View>
            <Text fontSize={"2xl"} color={"white"} fontWeight={"medium"} textAlign={"center"} mb={5}>Nueva tarea</Text>


            <CustomInput
                value={nuevaTarea.nombre}
                setValue={(text: any) => setNuevaTarea({ ...nuevaTarea, nombre: text })}
                label={"Nombre"}
                placeholder={"Nombre de la tarea"}
                error={error}
                errorMessage={error}
                width={"90%"}
            />
            <CustomInput
                value={nuevaTarea.descripcion}
                setValue={(text: any) => setNuevaTarea({ ...nuevaTarea, descripcion: text })}
                label={"Descripcion"}
                placeholder={"Añade algunas notas"}
                error={""}
                errorMessage={""}
                width={"90%"}
            />

            <HStack justifyContent={"space-between"} w={"90%"} alignSelf={"center"} mt={10} space={10}>
                <Pressable flex={1} onPress={() => setDatePicker(true)}>
                    <Text>Fecha</Text>
                    <View borderBottomWidth={2} borderBottomColor={"gray.300"}>
                        <Text fontSize={"md"} p={2}>{nuevaTarea.fecha}</Text>
                    </View>
                </Pressable>
                <Pressable flex={1} onPress={() => setTimePicker(true)}>
                    <Text>Hora</Text>
                    <View borderBottomWidth={2} borderBottomColor={"gray.300"}>
                        <Text fontSize={"md"} p={2}>{nuevaTarea.hora}</Text>
                    </View>
                </Pressable>
            </HStack>

            <View style={styles.buttonContainer}>
                <CustomButton
                    titulo={"Guardar"}
                    callBack={buscarPorNombre}
                    disabled={false}
                />
            </View>

            {
                datePicker
                &&
                <DateTimePicker
                    value={new Date()}
                    onChange={(event) => handleDateChange(event)}
                />
            }
            {
                timePicker
                &&
                <DateTimePicker
                    value={new Date()}
                    onChange={(event) => handleTimeChange(event)}
                    mode="time"
                />
            }

            <View position={"absolute"} top={5} left={5}>
                <CloseIcon onPress={() => navigation.goBack()} color={"white"} size={"lg"} />
            </View>
        </View>
    )
}

export default AgregarTarea

const styles = StyleSheet.create({
    box: {
        backgroundColor: titulos,
        height: 60
    },
    buttonContainer: {
        position: "absolute",
        bottom: 10,
        alignSelf: "center",
        width: "90%",
    },
})
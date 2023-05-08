import React, { useState } from "react"
import { CloseIcon, HStack, Pressable, Text, View, Actionsheet } from "native-base"
import { StyleSheet } from "react-native"
import { useSelector, useDispatch } from 'react-redux';
import { agregarTarea } from "../../store/tareas/tareasSlice";
import Svg, { Path } from "react-native-svg"
import CustomInput from "../../components/input/CustomInput";
import { verde_claro, naranja_oscuro, amarillo, naranja_claro } from "../../helpers/Colors";
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomButton from "../../components/button/CustomButton";

const ColorsPicker = ({ isOpen, onClose, setColor }) => {
    return (
        <Actionsheet isOpen={isOpen} onClose={onClose}>
            <Actionsheet.Content>
                <Actionsheet.Item onPress={() => { setColor(0), onClose() }} bgColor={amarillo}>Amarillo</Actionsheet.Item>
                <Actionsheet.Item m={4} onPress={() => { setColor(1), onClose() }} bgColor={naranja_claro}>Naranja</Actionsheet.Item>
                <Actionsheet.Item onPress={() => { setColor(2), onClose() }} bgColor={verde_claro}>Verde</Actionsheet.Item>
            </Actionsheet.Content>
        </Actionsheet>
    )
}

const AgregarTarea = ({ navigation }) => {

    const dispatch = useDispatch()
    const tareas = useSelector((state) => state.tareas.tareas)

    const [datePicker, setDatePicker] = useState(false)
    const [timePicker, setTimePicker] = useState(false)
    const [colorPicker, setColorPicker] = useState(false)

    const [nuevaTarea, setNuevaTarea] = useState({
        nombre: "",
        descripcion: "",
        fecha: "",
        hora: "",
        estado: 0,
        color: ""
    })
    const [error, setError] = useState("")

    const handleDateChange = (event) => {
        if (event.type === "dismissed") {
            setDatePicker(false)
        } else {
            setNuevaTarea({ ...nuevaTarea, fecha: event.nativeEvent.timestamp })
            setDatePicker(false)
        }
    }

    const handleTimeChange = (event) => {
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

    function formatearFecha(milisegundos) {
        const fecha = new Date(milisegundos);
        const dia = fecha.getDate().toString().padStart(2, '0');
        const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
        const año = fecha.getFullYear().toString();

        return `${dia}/${mes}/${año}`;
    }


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
        navigation.goBack()
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
                        fill={naranja_oscuro}
                        d="M0,64L120,101.3C240,139,480,213,720,213.3C960,213,1200,139,1320,101.3L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
                    />
                </Svg>
            </View>
            <Text fontSize={"2xl"} color={"white"} fontWeight={"medium"} textAlign={"center"} mb={5}>Nueva tarea</Text>


            <CustomInput
                value={nuevaTarea.nombre}
                setValue={(text) => setNuevaTarea({ ...nuevaTarea, nombre: text })}
                label={"Nombre *"}
                placeholder={"Nombre de la tarea"}
                error={error}
                errorMessage={error}
                width={"90%"}
                boxStyles={styles.boxStyles}
                variant={"outline"}
            />
            <CustomInput
                value={nuevaTarea.descripcion}
                setValue={(text) => setNuevaTarea({ ...nuevaTarea, descripcion: text })}
                label={"Descripción"}
                placeholder={"Añade algunas notas"}
                error={""}
                errorMessage={""}
                width={"90%"}
                boxStyles={styles.boxStyles}
                variant={"outline"}
            />

            <HStack justifyContent={"space-between"} w={"90%"} alignSelf={"center"} style={styles.boxStyles} space={10}>
                <Pressable flex={1} onPress={() => setDatePicker(true)}>
                    <Text mb={0.5}>Fecha *</Text>
                    <View borderWidth={1} borderColor={"gray.400"} borderRadius={5}>
                        <Text color={nuevaTarea.fecha === "" ? "gray.400" : "black"} fontSize={"md"} p={2}>{nuevaTarea.fecha === "" ? "Modificar" : formatearFecha(nuevaTarea.fecha)}</Text>
                    </View>
                </Pressable>
                <Pressable flex={1} onPress={() => setTimePicker(true)}>
                    <Text mb={0.5}>Hora *</Text>
                    <View borderWidth={1} borderColor={"gray.400"} borderRadius={5}>
                        <Text color={nuevaTarea.hora === "" ? "gray.400" : "black"} fontSize={"md"} p={2}>{nuevaTarea.hora === "" ? "Modificar" : nuevaTarea.hora}</Text>
                    </View>
                </Pressable>
            </HStack>

            <Pressable onPress={() => setColorPicker(true)} style={styles.boxStyles}>
                <View w={"90%"} alignSelf={"center"}>
                    <Text mb={0.5}>Color</Text>
                    <View borderWidth={1} borderColor={"gray.400"} borderRadius={5}>
                        <Text fontSize={"md"} p={2} color={nuevaTarea.color === "" ? "gray.400" : "black"}>{nuevaTarea.color === "" ? "Presione para modificar" : nuevaTarea.color === 0 ? "Amarillo" : nuevaTarea.color === 1 ? "Naranja" : "verde"}</Text>
                    </View>
                </View>
            </Pressable>

            <View style={styles.buttonContainer}>
                <CustomButton
                    titulo={"Guardar"}
                    callBack={buscarPorNombre}
                    disabled={nuevaTarea.nombre === "" || nuevaTarea.fecha === "" || nuevaTarea.hora === ""}
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
            <ColorsPicker isOpen={colorPicker} onClose={() => setColorPicker(false)} setColor={(color) => setNuevaTarea({ ...nuevaTarea, color: color })} />
        </View>
    )
}

export default AgregarTarea

const styles = StyleSheet.create({
    box: {
        backgroundColor: naranja_oscuro,
        height: 60
    },
    buttonContainer: {
        position: "absolute",
        bottom: 10,
        alignSelf: "center",
        width: "90%",
    },
    boxStyles: {
        marginTop: 25
    }
})
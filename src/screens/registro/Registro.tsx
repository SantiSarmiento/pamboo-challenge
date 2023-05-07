import React, { useState } from "react";
import { Text, View } from "native-base";
import CustomButton from "../../components/button/CustomButton";
import CustomInput from "../../components/input/CustomInput";
import { naranja_oscuro } from "../../helpers/Colors";
import Imagen from "./components/Imagen";
import { useDispatch } from "react-redux";
import { guardarUsuario } from "../../store/usuario/usuarioSlice";

const Registro = () => {

    const dispatch = useDispatch()
    const [nuevoUsuario, setNuevoUsuario] = useState({
        nombre: "",
        foto: ""
    })

    const iniciarSesion = () => {
        dispatch(guardarUsuario(nuevoUsuario))
    }

    return (
        <View h={"100%"} bgColor={"white"} alignItems={"center"} justifyContent={"space-between"}>
            <View alignItems={"center"}>
                <Text fontSize={"3xl"} fontWeight={"medium"} m={10} color={naranja_oscuro}>Bienvenido</Text>
                <Imagen imagen={nuevoUsuario.foto} setImagen={(foto: any) => setNuevoUsuario({ ...nuevoUsuario, foto: foto })} />
                <CustomInput
                    label={"Nombre"}
                    value={nuevoUsuario.nombre}
                    setValue={(text: any) => setNuevoUsuario({ ...nuevoUsuario, nombre: text })}
                    placeholder={"Ingrese su nombre"}
                    error={undefined}
                    errorMessage={undefined}
                    width={"90%"}
                />
            </View>
            <CustomButton titulo={"Comenzar"} callBack={iniciarSesion} disabled={nuevoUsuario.nombre === ""} width={"90%"} styles={{ marginBottom: 10 }} />
        </View>
    )
}

export default Registro
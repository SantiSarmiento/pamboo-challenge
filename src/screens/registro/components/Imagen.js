import React from "react";
import CustomAvatars from "../../../components/avatar/CustomAvatar";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Pressable, Text } from "native-base";

const Imagen = ({ imagen, setImagen }) => {

    let opciones = {
        saveToPhotos: true,
        mediaType: 'photo',
        quality: 0.4,
        width: 720,
        includeBase64: true,
        fixOrientation: true
    }

    const sacarFoto = () => {
        launchCamera(opciones, (res) => {
            if (res.didCancel === true) {
                return
            }
            setImagen(res.assets[0].uri)
        })
    }

    const abrirGaleria = async () => {
        const result = await launchImageLibrary(opciones)
        if (result.didCancel === true) {
            return
        }
        setImagen(result.assets[0].uri)
    }

    return (
        <>
            <Pressable onPress={sacarFoto}>
                <CustomAvatars size={"2xl"} imagen={imagen ? imagen : "https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png"} />
            </Pressable >
            <Pressable onPress={abrirGaleria}>
                <Text mt={2} underline>Abrir galería</Text>
            </Pressable>
        </>
    )
}

export default Imagen
import React from 'react';
import { Image } from 'native-base';

const obtenerImagen = (nombre) => {
    switch (nombre) {
        case 'check-list': return require('../../../assets/icons/checklist-pana.png')
        case 'pendientes': return require('../../../assets/icons/pendientes.png')
        case 'completadas': return require('../../../assets/icons/completadas.png')
        case 'tareas': return require('../../../assets/icons/tareas.png')
        case 'no-data': return require('../../../assets/icons/no-data.png')
    }
}

const CustomIcon = ({ nombre, size, width, heigth, margin }) => {
    return (
        <Image alt={nombre} source={obtenerImagen(nombre)} size={size} resizeMode='contain' width={width} height={heigth} margin={margin}/>
    )

};

export default CustomIcon;

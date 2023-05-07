interface RootState {
    tareas: {
        borradas: Tarea[];
        tareas: Tarea[];
    };
    usuario: {
        nombre: string;
        foto: string;
        activo: boolean;
    }
}

interface Tarea {
    estado: number;
    nombre: string;
    descripcion: string;
    fecha: string;
    hora: string;
    color: number
}
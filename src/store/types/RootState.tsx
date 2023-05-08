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
    fecha: number;
    hora: string;
    color: number
}
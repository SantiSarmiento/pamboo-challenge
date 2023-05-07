interface RootState {
    tareas: {
        borradas: Tarea[];
        tareas: Tarea[];
    };
}

interface Tarea {
    estado: number;
    nombre: string;
    descripcion: string;
    fecha: string;
    hora: string;
}
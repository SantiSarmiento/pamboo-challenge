interface RootState {
    tareas: {
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
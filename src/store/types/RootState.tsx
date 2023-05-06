interface RootState {
    tareas: {
        tareas: Tarea[];
    };
}

interface Tarea {
    estado: number;
    favorito: number;
    nombre: string;
}
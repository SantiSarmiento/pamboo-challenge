import Completadas from "../../../screens/completadas/Completadas";
import Pendientes from "../../../screens/pendientes/Pendientes";
import Tareas from "../../../screens/tareas/Tareas";

export const BottomScreens = [
    {
        component: Pendientes,
        name: "pendientes"
    },
    {
        component: Tareas,
        name: "tareas"
    },
    {
        component: Completadas,
        name: "completadas"
    }
]
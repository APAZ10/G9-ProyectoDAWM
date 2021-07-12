export interface Cancha {
    id: string;
    nombre: string;
    zona: string;
    descripcion: string;
    direccion: string;
    img: string;
    likes: number;
    precio: number;
    coordenadas: [x: number, y: number]
}
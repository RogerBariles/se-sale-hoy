import { Lugar } from '../models/lugares.model';

export interface BranchOffice {
    id?: number,
    direccion: string,
    descripcion: string,
    orden: number,
    lugar: Lugar
}
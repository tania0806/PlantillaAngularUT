import {ApiResponse} from '@Models/Response';

export interface AlumnoInsertRequest {
    Id: number;
    Nombre: string;
    ApPaterno: string;
    ApMaterno: string;
    Matricula: number;
    Direccion: String;
}

export type GetAlumnoResponse = ApiResponse<GetAlumnoResponseData>;

interface GetAlumnoResponseData {
    data: AlumnoModel[];
}
  
export interface AlumnoModel {
    Id: number;
    Nombre: string;
    ApPaterno: string;
    ApMaterno: string;
    Matricula: Number;
    Direccion: String;
}
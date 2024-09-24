import {ApiResponse} from '@Models/Response';

export interface LoginRequest {
    NombreUsuario: string;
    Correo: string;
    Contraseña: string;
    Pwd: string;
}

export type LoginResponse = ApiResponse<LoginResponseData>;

interface LoginResponseData {
    data: Data;
}

interface Data {
    Status: boolean;
    Mensaje: string;
    Token: string;
    Usuario: Usuario;
}
  
export interface Usuario {
    Id: number;
    NombreUsuario: string;
    NombrePersona: string;
    IdSucursal: number;
    NombreSucursal: string;
    IdPerfil: number;
    PctDescuento: number;
    Correo: string;
    Contraseña: string;
    
}
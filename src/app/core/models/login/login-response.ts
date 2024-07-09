export interface LoginResponse {
    StatusCode: number;
    Success: boolean;
    Error: boolean;
    Message: string;
    Response: Response;
}
  
interface Response {
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
    IdPerfil: number;
    Usuario: string;
    NombrePersona: string;
    NombrePerfil: string;
    Fecha: string;
}
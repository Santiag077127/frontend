export interface LoginRequest {
  correo: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  usuario: {
    idUsuario: string;    // ← corregido
    nombre: string;
    correo: string;
    rol: "ADMIN" | "USUARIO" | "OPERADOR";// lo que devuelve tu backend
  };
}
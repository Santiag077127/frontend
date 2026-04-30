import { api } from "../../../services/api";
import { LoginResponse } from "../types";

export const login = async (correo: string, password: string): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>("/usuarios/login", {
    correo,
    contrasena: password,
  });

  return response.data;
};
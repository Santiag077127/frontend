import { create } from "zustand";

interface Usuario {
  idUsuario:string;
  nombre: string;
  correo: string;
  rol: "ADMIN" | "USUARIO" | "OPERADOR";
}

interface AuthState {
  token: string | null;
  usuario: Usuario | null;
  setAuth: (token: string, usuario: Usuario) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem("token"),
  usuario: JSON.parse(localStorage.getItem("usuario") || "null"),

  setAuth: (token, usuario) => {
    localStorage.setItem("token", token);
    localStorage.setItem("usuario", JSON.stringify(usuario));
    set({ token, usuario });
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    set({ token: null, usuario: null });
  },
}));
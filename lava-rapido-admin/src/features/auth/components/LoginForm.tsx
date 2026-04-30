import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import { useAuthStore } from "../../../store/authStore";

export const LoginForm = () => {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(correo)) {
      setError("Por favor ingresa un correo electrónico válido");
      return;
    }

    if (!password.trim()) {
      setError("Por favor ingresa tu contraseña");
      return;
    }

    setIsLoading(true);

    try {
      const data = await login(correo, password);

      // guarda token Y usuario en el store
      setAuth(data.token, data.usuario);

      // redirige segun el rol que devuelve el backend
      if (data.usuario.rol === "ADMIN") {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
} catch (error: any) {
  console.error("Error completo:", error);
  console.error("Response:", error.response);

  if (error.response?.status === 401) {
    setError("Credenciales incorrectas");
  } else if (error.response?.status >= 500) {
    setError("Error del servidor. Inténtalo de nuevo más tarde");
  } else {
    setError("Error de conexión. Verifica tu internet");
  }
}
  };

  return (
    <div className="login-container">

      {/* LADO IZQUIERDO */}
      <div className="login-left">
        <img src="/logo.png" alt="logo" width="150" />
      </div>

      {/* LADO DERECHO */}
      <div className="login-right">
        <form onSubmit={handleSubmit}>
          <h2>Bienvenido</h2>

          {error && <p className="error-text">{error}</p>}

          <div className="input-group">
            <input
              type="email"
              placeholder="Ingresar Correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Ingresar Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="login-btn" type="submit" disabled={isLoading}>
            {isLoading ? "Cargando..." : "Iniciar Sesión"}
          </button>
        </form>
      </div>

    </div>
  );
};
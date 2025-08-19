"use client";

import { useState } from "react";
import { FormGroup } from "../FormGroup/FormGroup";

// Servicio de login (por ahora simulado)
const apiLoginService = async (email: string, password: string) => {
  // TODO: aquí luego harás la request real a tu backend
  console.log("Llamando al servicio de login con:", { email, password });
  return { success: true, token: "fake-jwt-token" };
};

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await apiLoginService(email, password);
      if (response.success) {
        console.log("Login exitoso!", response);
        // más adelante: guardar token en context/redux/localStorage
      } else {
        setError("Credenciales inválidas");
      }
    } catch (err) {
      console.error(err);
      setError("Ocurrió un error al iniciar sesión");
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4 text-center">Login</h1>
      <form onSubmit={handleSubmit}>
        <FormGroup label="Email" htmlFor="email">
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border rounded px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup label="Password" htmlFor="password">
          <input
            type="password"
            id="password"
            name="password"
            className="w-full border rounded px-3 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormGroup>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

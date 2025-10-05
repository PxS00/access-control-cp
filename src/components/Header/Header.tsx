import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { CadastroSchema } from "../../types/schema";

export default function Header() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState<CadastroSchema | null>(null);

  function logout() {
    localStorage.removeItem("usuarioLogado");
    window.dispatchEvent(new Event("userChanged"));
    navigate("/");
  }

  useEffect(() => {
    const getUsuario = () => {
      try {
        return JSON.parse(localStorage.getItem("usuarioLogado") || "null");
      } catch {
        return null;
      }
    };

    setUsuario(getUsuario());

    const handleUserChange = () => {
      setUsuario(getUsuario());
    };

    window.addEventListener("userChanged", handleUserChange);

    return () => {
      window.removeEventListener("userChanged", handleUserChange);
    };
  }, []);

  return (
    <header>
      <h1>Bem-Vindo ao Sistema de Controle de Acesso</h1>
      {usuario && (
        <div>
          <p>
            Usuário: <strong>{usuario.nome}</strong>
          </p>
          <p>
            Email: <strong>{usuario.email}</strong>
          </p>
          <button onClick={logout}>Sair</button>
        </div>
      )}
    </header>
  );
}

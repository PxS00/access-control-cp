import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("usuarioLogado");
    window.dispatchEvent(new Event("userChanged"));
    navigate("/");
  }

  const usuario = JSON.parse(localStorage.getItem("usuarioLogado") || "null");

  return (
    <header>
      <h1>Bem-Vindo ao Sistema de Controle de Acesso</h1>
      {usuario && (
        <div>
          <button onClick={logout}>Sair</button>
        </div>
      )}
    </header>
  );
}

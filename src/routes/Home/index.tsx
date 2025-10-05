import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado") || "null");

    function logout() {
    localStorage.removeItem("usuarioLogado");
    window.dispatchEvent(new Event("userChanged"));
    navigate("/");
    }

return (
    <div>
      <h1>Home</h1>
      {usuario && (
        <div>
          <p>
            Bem-vindo, <b>{usuario.nome}</b>!
          </p>
          <p>
            Email: <b>{usuario.email}</b>
          </p>
          <button onClick={logout}>Sair</button>
        </div>
      )}
    </div>
  );
}
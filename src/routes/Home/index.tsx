export default function Home() {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado") || "null");

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
        </div>
      )}
    </div>
  );
}
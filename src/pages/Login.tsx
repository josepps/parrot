import { MainLogin } from "./Login.style";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: senha,
        }),
      });
      const response2 = await response.json();
      localStorage.setItem("token", JSON.stringify(response2.token));
      navigate("/Feed");
    } catch (error) {
      setError("error");
      console.error(error);
    }
  };

  return (
    <MainLogin>
      <section>
        <img src="..\img\logoVerticalColorido.png" alt="" />
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="Email"></label>
            <input
              type="email"
              aria-describedby="Email"
              placeholder="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="Senha"></label>
            <input
              type="password"
              aria-describedby="Senha"
              placeholder="senha"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
            />
          </div>
          <button>entrar</button>
        </form>
        {error && <div className="error">Dados errados!</div>}
        <a href="#">cadastre-se</a>
      </section>
    </MainLogin>
  );
}

export default Login;

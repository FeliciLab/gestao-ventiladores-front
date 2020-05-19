import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';
import logoDefault from '../../assets/logoDefault.svg';
import businessSVG from '../../assets/businessLogo.svg';


export default function Logon() {
  const history = useHistory();
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    try {
      // const response = await api.post("/sessions", {login, senha});

      // localStorage.setItem("enterpriseId", response.data.id);
      // localStorage.setItem("enterpriseName", response.data.name);

      history.push("/profile");
    } catch (err) {
      alert("Falha no login");
    }
  }
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoDefault} alt="logoDefault" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <input
            placeholder="Login"
            value={login}
            onChange={e => setLogin(e.target.value)}
          />
          <input
            placeholder="Senha"
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />
          <button className="button" type="submit">
            Entrar
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#6C63FF" />
            nao tenho cadastro
          </Link>
        </form>
      </section>
      <img src={businessSVG} alt="ImageHome" />
    </div>
  );
}

import React, {useEffect} from "react";
import "./styles.css";
import {Link, useHistory} from "react-router-dom";
import logoDefault from "../../assets/logoDefault.svg";

export default function Profile() {
  const history = useHistory();
  useEffect(() => {}, []);

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoDefault} alt="logo" />

        <span>Bem vindo, NameDefault</span>

        <Link className="button" to="/Form/new">
          Cadastrar novo serviço
        </Link>

        <button onClick={handleLogout} type="button">
        </button>
      </header>

      <h1>Cadastro</h1>
    </div>
  );
}

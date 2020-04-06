import React, {useEffect} from "react";
import "./styles.css";
import {Link, useHistory} from "react-router-dom";
import {FiPower} from "react-icons/fi";
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
          <FiPower size={18} color="#6C63FF"></FiPower>
        </button>
      </header>

      <h1>Cadastro</h1>
    </div>
  );
}

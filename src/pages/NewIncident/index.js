import React, {useState} from "react";
import "./styles.css";
import {Link, useHistory} from "react-router-dom";
import {FiArrowLeft} from "react-icons/fi";
import logoDefault from "../../assets/logoDefault.svg";

export default function NewIncident() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();
    try {
      history.push("/profile");
    } catch {
      alert("Erro ao cadastrar o caso");
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoDefault} alt="logoDefault" />
          <h1>Cadastrar Novo Caso</h1>
          <p>Faça o cadastro do novo serviço</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#6C63FF" />
            Voltar para home
          </Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input
            placeholder="Titulo do caso"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            placeholder="Valor em reais"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

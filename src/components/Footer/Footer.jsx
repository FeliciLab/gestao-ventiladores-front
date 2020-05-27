import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'flex',
    justifyContent: 'center',
    background: '#00692C',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    listStyleType: 'none',
    margin: 20,
    textTransform: 'uppercase',
    color: '#FFF',
    fontStyle: 'normal',
  },
  menu: {
    marginLeft: 30,
    marginRight: 30,
    listStyle: 'none',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 1.5,
    letterSpacing: 0.75,
  },
  submenu: {
    listStyleType: 'none',
    opacity: 0.54,
    fontWeight: 'normal',
  },
  copyright: {
    background: '#4CAF50',
    opacity: 0.87,
    height: 48,
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
}));

const footerOptions = {
  Recebimento: ['Cadastro', 'Material'],
  Triagem: ['Origem', 'Modelo', 'Situação', 'Acessórios'],
  Diagnóstico: ['Checklist', 'Equipamentos', 'Observações'],
  Avaliação: ['Peças', 'Acessórios'],
  Manutenção: ['Checklist', 'Equipamento', 'Observações'],
};

export default function Footer() {
  const styles = useStyles();

  return (
    <footer className={styles.footer}>
      <ul className={styles.container}>
        {Object.keys(footerOptions).map((option, index) => (
          <li className={styles.menu} key={index}>
            <p data-testid="title">{option}</p>
            <ul className={styles.submenu}>
              {footerOptions[option].map((item, index) => (
                <li data-testid="option" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div className={styles.copyright}>
        <small>
          © 2017 - 2020 – GOVERNO DO ESTADO DO CEARÁ. TODOS OS DIREITOS
          RESERVADOS - v1.1.5
        </small>
      </div>
    </footer>
  );
}

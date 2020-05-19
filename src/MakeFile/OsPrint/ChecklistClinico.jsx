import React from 'react';
import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import LinhaChecklistClinico from './LinhaChecklistClinico';


const useStyles = makeStyles(() => ({
  quadro: {
    padding: '0.5rem',
    border: 1,
    borderStyle: 'solid',
    borderColor: grey[900]
  }
}));

const perguntas = [
  "Montar e verificar a integridade do circuito.",
  "Concectar os circuitos.",
  "Verificar a integridade das mangueiras de alimentação de ar comprimido e oxigênio, bem como, o cabo de alimentação elétrica.",
  "Conectar a válvula exalatória e o diafragma / linha de pressão, sensor de fluxo e temperatura.",
  "Conectar o ventilador à rede de ar comprimido e oxigênio, ajustando ambas as pressões em 3,5 Kgf/cm², através das válvulas redutoreas de pressão.",
  "Conectar o ventilador à rede elétrica.",
  "Verificar o filtro de ar localizado na parte traseira do ventilador, quando disponível.",
  "Ligar o ventilador.",
  "Conectar o pulmão de teste na extremidade do circuito do ventilador.",
  "Ajustar os controles e alarmes, verificando se há vazamento do circuito e os LEDs: Line, Batt Charge, Pico de Pressõa, PEEP, bem como, os displays: Total Vol., Total Rate, I:E Ratio.",
  "Pressionar o pulmão de teste observando o alarme High Press.",
  "Obstruir a saída da válvula de exalação, verificando o alarme High Peep.",
  "Desconectar o pulmão de teste observando o alarme de Low Press e Low Minute Volume.",
  "Reconectaro pulmão de teste e ajustar a frequência respiratória em zero, analisando o alarme de apnéia, bem como, o funcionamento da ventilação de back-up.",
  "Desconectar o ventilador da rede elétrica avaliando a operação em bateria através dos LEDs: Int Batt e Batt Charge.",
  "Desligar o ventilador.",
  "Retirar o pulmão de teste.",
  "Registrar o resultado do teste de verificação."
];

export default function ChecklistClinico () {
  const classes = useStyles();
  return (
    <div className={classes.quadro}>
      {perguntas.map((pergunta, index) => <LinhaChecklistClinico numero={index + 1} texto={pergunta} key={index}/>)}
    </div>

  )
}
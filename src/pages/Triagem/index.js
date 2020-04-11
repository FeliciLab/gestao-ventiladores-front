import React from 'react';
import {getScreeningByStatus} from "../../models/equipamentos";

export default function IndexTriagem () {
  const [triagens, setTriagem] = React.useState([]);
  if (triagens.legnth === 0) {
    getScreeningByStatus('triagem')
      .then(result => {
        setTriagem(result)
      })
      .catch(error => {
        console.log('consultando triagem', error)
      })
  }
  return (
    <Layout>

    </Layout>
  )
}
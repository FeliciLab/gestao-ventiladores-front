import React from 'react';
import googlePublishedWebCsvMapper from "./googlePublishedWebCsvMapper";
import axios from "axios";
import {useLocation} from 'react-router-dom';



export default function OsPrint () {
  const query = new URLSearchParams(useLocation().search);

  const [csvData, setCsvData] = React.useState([])

  if (csvData.length === 0) {
    axios.get(query.get('url'))
      .then(response => {
        const csvData = googlePublishedWebCsvMapper(response.data);
        setCsvData({csvData})

      })
  }

  return (
    <div>asd</div>
  )
}
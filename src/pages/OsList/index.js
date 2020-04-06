import React from 'react'
import './style.css'
import axios from "axios";
import googlePublishedWebCsvMapper from "../OsPrint/googlePublishedWebCsvMapper";
import {useLocation} from 'react-router-dom';

const OsPrinter = () => {
    const query = new URLSearchParams(useLocation().search);

    const [csvData, setCsvData] = React.useState([])

    if (csvData.length === 0) {
        axios.get(query.get('url'))
        .then(response => {
            const csvData = googlePublishedWebCsvMapper(response.data);
            setCsvData(csvData)
            console.log(csvData)
        })
        return (<div>Consultando dados...</div>)
    }

    return (
        <div></div>
    )

}

export default OsPrinter
import axios from "axios";
import googlePublishedWebCsvMapper from "./googlePublishedWebCsvMapper";

export default function coletarDadosCsv (url) {
  return axios.get(url)
    .then(response => {
      const csvData = googlePublishedWebCsvMapper(response.data);
      return csvData;
    });
}
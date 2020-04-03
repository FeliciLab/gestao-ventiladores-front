import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import googlePublishedWebCsvMapper from "../utils/googlePublishedWebCsvMapper";

const Home = () => {
  const [csv, setName] = React.useState('https://docs.google.com/spreadsheets/d/e/2PACX-1vT-AFOaCCtdSpb9RD8KYamFRMAWx3HBj0bj2J21uunmVD1x_OngnZOMNFXwUCFLcCjLJUGRZlDh9-iD/pub?output=csv');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const abrirDocumentoOs = (e) => {
    e.preventDefault();
    fetch(csv)
      .then(response => response.text())
      .then(text => {
        const csvData = googlePublishedWebCsvMapper(text);
        localStorage.setItem('csvData', JSON.stringify(csvData));
        window.open('/osPrint', '_blank')
      })
  };

  return (
    <Container>
      <div className={'center-container'}>
        <TextField id="url-csv" label="URL do CSV" value={csv} onChange={handleChange}/>
        <Button variant="contained" onClick={abrirDocumentoOs}>Gerar OS</Button>
      </div>
      <style jsx>{`
        .center-container {
            display: flex; 
            justify-content: center; 
            align-items: center;
            width: 100%;
            height: 100%;
        }    
    `}</style>
    </Container>
  )
}

export default Home

import Head from 'next/head'
import {useState} from "react";
import OsPrintcontent from "../components/osPrintContent/osPrintContent";

class OsPrint extends React.Component {


  constructor() {
    super();
    this.state = {
      csvData: []
    };
  }

  componentDidMount() {
    const csvData = JSON.parse(localStorage.getItem('csvData'));
    this.setState({csvData})
  }

  render() {
    let content = '';
    if (this.state.csvData.length > 0) {
      content = this.state.csvData.map((item, index) => {
        const key = `${index}-osprintcontent`
        if (index % 2 !== 0) {
          return <div className={'page-break'} key={key}>
            <OsPrintcontent data={item}></OsPrintcontent>
            <style jsx>{`
              .page-break {
                page-break-before: always;
              }
            `}</style>
          </div>
        }

        return <OsPrintcontent key={key} data={item}></OsPrintcontent>
      });
    }

    return (
      <div>
        <Head>
          <title>Ordem de Serviço</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <main>
          {content}
        </main>
        <style jsn>{`
            .page-break {
              page-break-before: always;
              page-break-inside: always;
            }
  
          @page {
            size: A4;
          }
          @media print {
            html, body {
              width: 210mm;
              height: 297mm;
            }
            .page-break {
              page-break-before: always;
              page-break-inside: always;
            }
  
          }`}</style>
      </div>
    )
  }

}

export default OsPrint

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
                page-break-inside: always;
                break-before: always;
              }
            `}</style>
          </div>
        }

        return <div className={'page-break'} key={key}>
          <OsPrintcontent data={item}></OsPrintcontent>
          <style jsx>{`
              .page-break {
                page-break-inside: always;
                break-inside: always;
              }
            `}</style>
        </div>
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
        <style jsx>{`
          @page {
            size: A4;
          }
        
          @media print {
            
          }
        }`}</style>
      </div>
    )
  }

}

export default OsPrint

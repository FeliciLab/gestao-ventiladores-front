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
                break-before: always;
              }
            `}</style>
          </div>
        }

        return <div><OsPrintcontent data={item}></OsPrintcontent></div>
      });
    }

    return (
      <div>
        <Head>
          <title>Ordem de Serviço</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <main className={'position-relative'}>
          {content}
        </main>
        <style jsx>{`
          .position-relative {
            position: relative;
          }
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

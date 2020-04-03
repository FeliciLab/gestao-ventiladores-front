import FieldContent from "./FieldContent";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import MaterialTable from './MaterialTable'

const OsPrintcontent = (props) => {
  return (
    <div className={'relative'}>
      <Grid container justify="center">
        <Grid item xs={12}>
          <div className={'text-center'}>
            <Typography variant="h5" component="h5"> ORDEM DE SERVIÇO:
              {new Date(Date.parse(props.data.timestamp)).getTime()}</Typography>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={'header-content'}>
            <FieldContent data={{label: 'Equipamento', text: 'Ventilador Mecânico'}}></FieldContent>
            <FieldContent data={{label: 'Tipo', text: props.data.selecione_o_tipo_do_equipamento}}></FieldContent>
          </div>
        </Grid>
        <Grid item xs={8}>
          <div className={'header-content'}>
            <FieldContent data={{label: 'Número de série:', text: props.data.informe_o_número_de_série}}></FieldContent>
          </div>
        </Grid>

        <Grid item xs={4}>
          <div className={'header-content'}>
            <FieldContent data={{label: 'Marca', text: props.data.selecione_a_marca_do_equipamento}}></FieldContent>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={'header-content'}>
            <FieldContent data={{label: 'Modelo', text: props.data.selecione_o_modelo_do_equipamento}}></FieldContent>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={'header-content'}>
            <FieldContent
              data={{label: 'Fabricante', text: props.data.selecione_a_marca_do_equipamento}}></FieldContent>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={'header-content'}>
            <FieldContent
              data={{label: 'Nº Patrimônio', text: props.data.se_públicoinforme_o_número_do_patrimônio}}></FieldContent>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={'text-center'}>
            <Typography variant="h5" component="h5">RELAÇÃO DE MATERIAL / ACESSÓRIOS ENTREGUES</Typography>
          </div>
        </Grid>

        <Grid item xs={12}>
          <MaterialTable items={props.data.selecione_os_acessórios_do_equipamento_que_o_acompanha.split(', ')}></MaterialTable>
        </Grid>


        <Grid item xs={12}>
          <div className={'page-break'}>
            <div className={'text-center'}>
              <Typography variant="h5" component="h5"> ORDEM DE SERVIÇO:
                {new Date(Date.parse(props.data.timestamp)).getTime()}</Typography>
            </div>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={'title-board-blank'}>
            Diagnóstico Clínico
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={'board-blank'}>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={'title-board-blank'}>
            Diagnóstico Técnico
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={'board-blank'}>

          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={'title-board-blank'}>
            Ações necessárias
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={'board-blank'}>

          </div>
        </Grid>


      </Grid>


      <style jsx>{`
      @page {
            size: A4;
          }
       .page-break {
                page-break-before: always;
                page-break-inside: always;
                break-before: always;
              }
      
        .relative{ position: relative;}
        .header-print div, .header-print div div {
          border: solid 1px black;
        }
        .text-center {
          text-align: center;
          margin: 1rem;
        }
        .header-content {
          border: solid 1px black;
          padding-left: 1rem;
          height: 100%;
          justify-content: center;
          display: flex;
          flex-direction: column;
        }
        
        .title-board-blank {
          margin-top: 1rem;
          padding: 1rem;
          font-weight: bold;
          border: solid 1px black;
        }
        .board-blank {
          min-height: 6cm;
          border: solid 1px black;
        }
      `}</style>
    </div>
  )
}

export default OsPrintcontent
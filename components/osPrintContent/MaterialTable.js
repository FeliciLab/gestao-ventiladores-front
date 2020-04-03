const MaterialTable = (props) => {
  return (
    <div className={'position-relative'}>
      <table width="100%">
        <thead>
        <tr>
          <th>Descrição</th>
          <th>Veio?</th>
          <th>Quantidade</th>
          <th>Estado de Conservação</th>
        </tr>
        </thead>
        <tbody>
        {
          props.items.map((item, index) => {
            return <tr key={index}>
              <td>{item.replace(/"/g, '')}</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          })
        }
        </tbody>

      </table>
      <style jsx>{`
      table {
         border-collapse: collapse;
        }
        th {
          background-color: lightgray;
        }
        th, td {
          border: 1px solid #999;
          padding: 0.5rem;
          text-align: center;
        }
        td {
        height: 1rem;
        }
        
        `}
      </style>
    </div>
  )
}

export default MaterialTable
import { Container, Table } from "react-bootstrap";
import './Tabela.css'
export default function Tabela({ children}){
    return (
        <>
{/*     
          <h4 className="mt-3">{firstTitulo}</h4>
          <hr /> */}
            <Table responsive bordered>
            <thead>
              <tr>
                <th>#</th>
                <th>Título</th>
                <th>Autor(a)</th>
                <th>Data de finalização</th>
                <th>Gênero</th>
                <th>Tipo de livro</th>
                <th>Observações</th>
              </tr>
            </thead>
            <tbody>
              {children}
            
            </tbody>
          </Table>
        </>
    )
}
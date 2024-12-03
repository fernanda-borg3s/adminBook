import { Container, Row, Col } from "react-bootstrap";
import Cards from '../../components/Cards/Cards.jsx'
import Tabela from '../../components/Tabela/Tabela.jsx'
import Grafico from "../../components/Graficos/Graficos.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import Paginacao from "../../components/Paginacao/Paginacao.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Search from "../../components/Search/Search.jsx";
const baseURL = 'http://localhost:3000'
const ITEMS_PER_PAGE = 20;


export default function LivroLidos(){

  const [livrosLidos, setLivrosLidos] = useState([])
  useEffect(()=>{
    const livrosLidos = async () =>{
      try {
        const responde = await axios.get(`${baseURL}/livros/livrosLidos`);
        setLivrosLidos(responde.data.data);
      } catch (error) {
        console.error('Erro ao recuperar dados:', error);
      }
    }
   livrosLidos();
  }, [])
    
      // Contando a quantidade de vezes que cada ano aparece
      const contagemPorAno = {};
      livrosLidos.forEach(item => {
        contagemPorAno[item.data_ano] = (contagemPorAno[item.data_ano] || 0) + 1; // Incrementa a contagemPorAno para o ano
      });
   
    const labelLivrosLidosAno = Object.keys(contagemPorAno);
    const livrosLidosAnoData = labelLivrosLidosAno.map(ano => contagemPorAno[ano]);


    const dataBar = {
        labels: labelLivrosLidosAno,
        datasets: [
          {
            label: 'Livros Lidos',
            data: livrosLidosAnoData,
            backgroundColor: '#007090',
            borderWidth: 1,
          },
        ],
    };
    
    const optionsBar = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: false,
          
        },
      },
    };

    const contagemPorMes = {};
    livrosLidos.forEach(item => {
      contagemPorMes[item.data_mes] = (contagemPorMes[item.data_mes] || 0) + 1;
    });
    const mesesMapeados = {
      'Janeiro': '0',
      'Fevereiro': '1',
      'Março': '2',
      'Abril': '3',
      'Maio': '4',
      'Junho': '5',
      'Julho': '6',
      'Agosto': '7',
      'Setembro': '8',
      'Outubro': '9',
      'Novembro': '10',
      'Dezembro': '11'
    };
    
    const dataAtual = new Date();
    const mesAtual = dataAtual.getMonth()
    const anoAtual = dataAtual.getFullYear()
    // Criando um array de meses até o mês atual
    const mesesDoAno = [];
    for (let i = 0; i <= mesAtual; i++) {
      const mesNome = Object.keys(mesesMapeados).find(key => mesesMapeados[key] === String(i));
      if (mesNome) {
        mesesDoAno.push(mesNome); // Adiciona o nome do mês até o mês atual
      }
    }
    
    // Mapeando os meses do ano para suas contagens
    const labelLivrosLidosMes = mesesDoAno;
    const livrosLidosMesData = mesesDoAno.map(mes => contagemPorMes[mes] || 0);
    
    const dataBar2 = {
      labels: labelLivrosLidosMes,
        datasets: [
          {
            label: 'Livros Lidos',
            data: livrosLidosMesData,
            backgroundColor: '#006989',
            borderWidth: 1,
          },
        
        ],
    };
    
    const optionsBar2 = {
      responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: false,
              
            },
          },
    };
    
    const dataPie = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
            {
                label: 'Gráfico de Pizza',
                data: [300, 50, 100],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                ],
                hoverOffset: 4,
            
            },
        ],
    };
    
    const optionsPie = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Gráfico de todos os livros',
        },
      },
    };
    const totalLivrosLidos = livrosLidos.length;
    //total do mes
    const nomeMesAtual = Object.keys(mesesMapeados).find(key => mesesMapeados[key] === String(mesAtual));
    const contagemLivrosMesAnoAtual = livrosLidos.filter(item => {
      return item.data_mes === nomeMesAtual && item.data_ano === String(anoAtual)
    }).length;
   //total do ano
   const contagemLivrosAnoAtual = livrosLidos.filter(item => {
    return item.data_ano === String(anoAtual)
  }).length;
  //media anual
  //retirar valores do livro sem registro no ano
  const livrosSemRegistroAno = livrosLidos.filter(item => {
    return item.data_ano === "Sem Registro"
  }).length
  
  const mediaAnual = ((livrosLidos.length - livrosSemRegistroAno) / (labelLivrosLidosAno.length - 1)).toFixed(1);

  //paginacao
  const [tableAllLidosCurrentPage, setTableAllLidosCurrentPage] = useState(1);
  const tableAllLidosTotalPages = Math.ceil(livrosLidos.length / ITEMS_PER_PAGE);
      const [busca, setBusca] = useState('');
      const lowerBusca = busca.toLowerCase();
      const filteredAllLidos = livrosLidos.filter((disponivel) => {
        return Object.values(disponivel).some(value => typeof value === 'string' && value.toLowerCase().includes(lowerBusca));
      });
  const tableAllLidosPaginatedData = filteredAllLidos.slice(
    (tableAllLidosCurrentPage - 1) * ITEMS_PER_PAGE,
    tableAllLidosCurrentPage * ITEMS_PER_PAGE
  );
  const tableAllLidosPageChange = (page) => {
    setTableAllLidosCurrentPage(page);
  };
    return (
      <>
        <Container>
          <h1>Livros Finalizados</h1>
            <Row className='mt-4 mb-4'>
              <Col className="">
                <Cards
                  classCor='bg-blue' 
                  titulo="Total de Livros Lidos"
                  descricao="Todos os livros finalizados"
                  numero={totalLivrosLidos}/>
              </Col>
              <Col className="">
                <Cards 
                  titulo="Total do Mês"
                  descricao="Livros finalizados nesse mês"
                  numero={contagemLivrosMesAnoAtual}/>
              </Col>
              <Col className="">
                <Cards 
                  classCor='bg-blue'
                  titulo="Total do Ano"
                  descricao="Livros finalizados nesse ano"
                  numero={contagemLivrosAnoAtual}/>
              </Col>
              <Col className="">
                <Cards 
                  titulo="Média Anual"
                  descricao="Média de livros lidos por ano"
                  numero={mediaAnual}/>
              </Col>
           </Row>
          
           <Row style={{backgroundColor:'#fff'}} className='mb-4'>
              <Col className='p-3 text-center'>
                <h4>Gráfico Quantitativo por Ano</h4>
                  <Grafico type='bar' data={dataBar} options={optionsBar}/>
              </Col>
              <Col className='p-3 text-center'>
                <h4>Gráfico Quantitativo por Mês</h4>
                <Grafico type='bar' data={dataBar2} options={optionsBar2} />
              </Col>
           </Row>
           <Row className="tabela-container mb-4">
          
              <h4 className="mt-3">Lista de livros lidos</h4>
              <hr />
              <Search busca={busca} handleSearch={(ev) => setBusca(ev.target.value)}/>
              <Tabela >
                {tableAllLidosPaginatedData.map((livro, index) => {
                  const realIndex = (tableAllLidosCurrentPage - 1) * ITEMS_PER_PAGE + index + 1;
                    return (
                      <tr key={index}>
                        <td>{realIndex}</td>
                        <td>{livro.titulo}</td>
                        <td>{livro.autor}</td>
                        <td>{livro.data_mes === "Sem Registro" ? " - " : livro.data_mes + " de "}{livro.data_ano === "Sem Registro" ? "-" : livro.data_ano}</td>
                        <td>{livro.genero}</td>
                        <td>{livro.formato_livro}</td>
                        <td style={{width: '350px'}}>{livro.observacoes}</td>
                      </tr>
                    );
                })}
              </Tabela>
              <Paginacao  
              currentPage={tableAllLidosCurrentPage}
              totalPages={tableAllLidosTotalPages}
              onPageChange={tableAllLidosPageChange} 
              />
         
           </Row>
        </Container>
        <Footer/>
      </>
    )
}
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { toast } from "react-toastify";

const baseURL = 'http://localhost:3000'
const ModalForm = ({ show, handleClose }) => {
  const [inputs, setInputs] = useState({
        titulo:"", 
        autor:"", 
        finalizado:"",
        data_mes:"", 
        data_ano:"", 
        genero:"",
        categoria:"",
        formato_livro:"",
        observacoes:""
  });
  const capitalizeWords = (str) => {
    return str
      .toLowerCase() // Converte tudo para minúsculo
      .split(' ') // Divide em palavras
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitaliza a primeira letra de cada palavra
      .join(' '); // Junta as palavras de volta
  };
  const onChange = e => {
    const { name, value } = e.target;
 // Verifica se o campo deve ser capitalizado
 let newValue = value;
 if (name === "titulo" || name === "autor" || name === "genero" || name === "data_ano" || name === "categoria") {
   newValue = capitalizeWords(value); // Aplica capitalize apenas nos campos desejados
 }
   

    // Atualiza o estado com o valor capitalizado
    setInputs({ ...inputs, [name]: newValue });

  };
  
  const registrarLivro= async e => {
      e.preventDefault();
      const {
        titulo, 
        autor, 
        finalizado,
        data_mes, 
        data_ano, 
        genero,
        categoria,
        formato_livro,
        observacoes
      } = inputs;
    
    try {
        const body = {titulo, autor, finalizado, data_mes, data_ano, genero, categoria, formato_livro, observacoes};
  
        const response = await axios.post(`${baseURL}/livros/registrarLivro`, body, {
          headers: {
            "Content-type": "application/json"
          }
        });
        toast.success("Livro registrado com sucesso!");
        handleClose();
      } catch (err) {
        console.error("Erro ao registrar novo livro")
        // toast.error("Ocorreu um erro ao conectar ao servidor, tente novamente mais tarde")
      }
    }
  
  
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title style={{color:'#007090'}}>Registrar novo livro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form >
      <Form.Group className="mb-3">
        <Form.Label>Título:</Form.Label>
        <Form.Control type="text" required placeholder="Título do Livro" name="titulo" onChange={onChange}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Autor(a):</Form.Label>
        <Form.Control type="text" required placeholder="Autor(a); Autor(a)" name="autor" onChange={onChange}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Gênero Predominante:</Form.Label>
        <Form.Control type="text" required placeholder="Gênero" name="genero" onChange={onChange}/>
      </Form.Group>
      <Form.Group className='mb-3'>
      <Form.Label>Categoria</Form.Label>
      <Form.Control type="text" placeholder="item; item; item..." name="categoria" onChange={onChange}/>
      {/* <Row>
        <Col><Form.Check type='checkbox' id={`default-checkbox`} label={`AgeGap`}/></Col>
        <Col><Form.Check type='checkbox' id={`default-checkbox`} label={`Amigo Para Amantes`}/></Col>
        <Col><Form.Check type='checkbox' id={`default-checkbox`} label={`Amor Proibido`}/></Col>
      </Row>
      <Row>
        <Col><Form.Check type='checkbox' id={`default-checkbox`} label={`Assassinos`}/></Col>
        <Col><Form.Check type='checkbox' id={`default-checkbox`} label={`BDSM`}/></Col>
        <Col><Form.Check type='checkbox' id={`default-checkbox`} label={`BullyRomance`}/></Col>
      </Row>
      <Row>
        <Col><Form.Check type='checkbox' id={`default-checkbox`} label={`Enemies To Lovers`}/></Col>
        <Col><Form.Check type='checkbox' id={`default-checkbox`} label={`Escolar`}/></Col>
        <Col><Form.Check type='checkbox' id={`default-checkbox`} label={`Fantasia`}/></Col>
      </Row>
      <Row>
        <Col><Form.Check type='checkbox' id={`default-checkbox`} label={`Ficção`}/></Col>
        <Col><Form.Check type='checkbox' id={`default-checkbox`} label={`Ficção Cientifica`}/></Col>
        <Col><Form.Check type='checkbox' id={`default-checkbox`} label={`Harém Reverso`}/></Col>
      </Row>
      <Row>
        <Col><Form.Check type='checkbox' id={`default-checkbox`} label={`Humor`}/></Col>
        <Col><Form.Check type='checkbox' id={`default-checkbox`} label={`Juvenil`}/></Col>
        <Col><Form.Check type='checkbox' id={`default-checkbox`} label={`Máfia`}/></Col>
      </Row>
      <Row>
        <Col><Form.Check type='checkbox' id={`default-checkbox`} label={`Mangás`}/></Col>
        <Col><Form.Check type='checkbox' id={`default-checkbox`} label={`New Adult`}/></Col>
        <Col><Form.Check type='checkbox' id={`default-checkbox`} label={`Romance`}/></Col>
      </Row>
      <Row>
        <Col><Form.Check type='checkbox' id={`default-checkbox`} label={`Romance Homo`}/></Col>
        <Col><Form.Check type='checkbox' id={`default-checkbox`} label={`Romance Sobrenatural`}/></Col>
        <Col><Form.Check type='checkbox' id={`default-checkbox`} label={`Série`}/></Col>
      </Row>
      <Row>
        <Col><Form.Check type='checkbox' id={`default-checkbox`} label={`Tecnologia`}/></Col>
        <Col><Form.Check type='checkbox' id={`default-checkbox`} label={`Universitário`}/></Col>
        <Col><Form.Check type='checkbox' id={`default-checkbox`} label={`Vingança`}/></Col>
      </Row>
      <Row>
        <Col><Form.Check type='checkbox' id={`default-checkbox`} label={`Yaoi`}/></Col>
      </Row> */}
      </Form.Group>
      <Row>
        <Col>
            <Form.Label>Livro Finalizado?</Form.Label>
            <Form.Select aria-label="Finalizado" required name="finalizado" onChange={onChange} >
                <option value="">Selecione</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
            </Form.Select>
        </Col>
        <Col>
            <Form.Label>Mês</Form.Label>
            <Form.Select aria-label="mes" required name="data_mes" onChange={onChange} >
            <option value=''>Selecione</option>
                <option value='Sem Registro'>Sem Registro</option>
                <option value="Janeiro">Janeiro</option>
                <option value="Fevereiro">Fevereiro</option>
                <option value="Março">Março</option>
                <option value="Abril">Abril</option>
                <option value="Maio">Maio</option>
                <option value="Junho">Junho</option>
                <option value="Julho">Julho</option>
                <option value="Agosto">Agosto</option>
                <option value="Setembro">Setembro</option>
                <option value="Outubro">Outubro</option>
                <option value="Novembro">Novembro</option>
                <option value="Dezembro">Dezembro</option>
            </Form.Select>
        </Col>
        <Col>
        <Form.Group className="mb-3">
        <Form.Label>Ano:</Form.Label>
        <Form.Control type="text" required placeholder="AAAA ou Sem Registro" name="data_ano" onChange={onChange} />
      </Form.Group>
        </Col>
        <Col>
            <Form.Label>Formato:</Form.Label>
            <Form.Select aria-label="Formato" required name="formato_livro" onChange={onChange}>
                <option value="">Selecione</option>
                <option value="Digital">Digital</option>
                <option value="Físico">Físico</option>
            </Form.Select>
        </Col>
      </Row>
   
      <Form.Group className="mb-3" >
        <Form.Label>Observações</Form.Label>
        <Form.Control as="textarea" placeholder="Críticas, elogios, comentários, sugestões..." rows={3} name="observacoes" onChange={onChange}/>
      </Form.Group>
    
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button style={{background:'#A3BAC3', border:'none', width:'100px', color:'#000'}} variant="outline-secondary" onClick={handleClose}>
          Fechar
        </Button>
        <Button style={{background:'#007090', border:'none', width:'200px'}} variant="primary" type="submit" onClick={registrarLivro}>
          Registrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalForm;
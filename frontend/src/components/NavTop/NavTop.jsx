import { Outlet } from 'react-router-dom';
import '../../App.jsx' //outlet
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../../assets/Img/Logo.png'
import './NavTop.css';
import ModalForm from '../ModalForm/ModalForm.jsx';

export function NavTop(){
  ///////////////// MODAL DO FORMULARIO
const [showModal, setShowModal] = useState(false);

const handleShow = () => setShowModal(true);
const handleClose = () => setShowModal(false);
///////////////// FIM MODAL DO FORMULARIO
    return (
        <>
        {[false ].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3" id='nav-top'>
          <Container >
        
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Logo}
              width="150"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
       
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Button variant="outline-light btn-new" className='w-50 fw-bold'  onClick={handleShow}>
                <i className="bi bi-plus-square-fill pe-2"></i>
                  Novo Livro
                </Button>
                <ModalForm show={showModal} handleClose={handleClose} />
                  <Nav.Link href="/home">Home</Nav.Link>
                  <NavDropdown
                    title="Livros"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/home/livrosLidos">Livros Finalizado</NavDropdown.Item>
                    <NavDropdown.Item href="/home/livrosNFinalizados">Livros Não Finalizados</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Livros Sem Data</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

      <Outlet/>
        </>
    )
}
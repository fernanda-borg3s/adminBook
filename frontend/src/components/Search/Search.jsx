import { useEffect, useState} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import './Search.css'
export default function Search({busca, handleSearch}){
    
    return (
        <>
         <div className="d-flex h-50 justify-content-end mb-3">
        <InputGroup className="w-25 h-25">
          <Form.Control
              type="search"
              placeholder="Procurar..."
              
              aria-label="Search"
              value={busca}
              onChange={handleSearch}
            />
          <InputGroup.Text id="Search" ><i className="bi bi-search"></i></InputGroup.Text>
        </InputGroup>
      </div>
        </>
    )
}
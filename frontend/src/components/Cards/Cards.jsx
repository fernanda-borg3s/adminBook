import Card from 'react-bootstrap/Card';
import './Cards.css'
export default function Cards({titulo, descricao, numero, classCor}){
    return(
        <>
        <Card className={`card-container ${classCor}`}>
      <Card.Body className='descricao-card'>
        <div>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{descricao}</Card.Text>
        </div>
        <div className='borda-numero'>
        <Card.Text>{numero}</Card.Text>
        </div>
      </Card.Body>
    </Card>
        </>
    )
}
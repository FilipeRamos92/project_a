import { useState } from 'react';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Home(params) {
    return (

        
        <div>
            <h2>Chicken Food</h2>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Cola-cola</Card.Title>
                    <Card.Text>
                        Coquinha gelada.
                    </Card.Text>
                    <Button variant="primary" onClick="">Adicionar</Button>
                </Card.Body>
                <Card.Body>
                    <Card.Title>Frango-frito</Card.Title>
                    <Card.Text>
                        Franguinho crocante.
                    </Card.Text>
                    <Button variant="primary">Adicionar</Button>
                </Card.Body>
            </Card>


           
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css"
                integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7"
                crossorigin="anonymous"/>
        </div>
    );
}

function Contador() {
    const [contador, setContador] = useState(1);

    function adicionaContador(params) {

        setContador(contador + 1);
        
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionaContador}>Adiciona</button>
        </div>
    )

}


export default Home
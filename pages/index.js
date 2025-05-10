import { useState } from 'react';

function Home(params) {
    return (
        <div>
            <h2>Home</h2>
            <Contador />
        </div>
    
    
    )
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
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import projetosBase from '../../data/projetos';
const imgLogo = require('../Footer/definicoes.png');

export default function ProjetosHome(){
    const [projetos, setProjetos] = useState([]);

    useEffect(() => {
        setProjetos(projetosBase);
    }, []);

    return (
        <div className='ListaDeProjetos'>
            {
                projetos.slice(-4).map((item, index)=> {
                    return (
                        <article key={index}>
                            <img src={imgLogo}/>
                            <h2>Título: {item.titulo}</h2>
                            <p>Resumo: {item.resumo}</p>
                            <Link href="#">Ver detalhes</Link>
                        </article>
                    );
                })
            }
            <a href="#">Ver mais projetos</a>
        </div>
    )
}
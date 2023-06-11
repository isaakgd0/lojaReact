import { Link } from 'react-router-dom';
import React from 'react';
import '../Estilos/Header.css';

function Sobre() {
    return (
        <div>
            <div className="corpoH2">
                <Link to="/">
                    <button className='botaoHome'>
                        <h1>SUPERLOJA</h1>
                    </button>
                </Link>

                <input className='BarraPesquisaH2' type="text" id="searchInput" placeholder="O Que Procuras? =)"></input>

                <Link to="/PagLogin">
                    <button className='botaoCadastroH2'>Cadastre-se</button>
                </Link>
            </div>
            <div className='divLinda'>
                <h1 className='titulozinho'>Sobre Nós</h1>
                <span>
                    Nossa empresa foi fundada há muitos anos por Arthur Nascimento, Isaak Donizeth Pereira, João Vitor Nery, Luiz Gabriel Neves Gomes e Pedro Paulo Silveira com o intuito de tornar eletrodomésticos de qualidade mais acessíveis, com preços justos.
                </span>
            </div>
        </div>
    )
}
export default Sobre;
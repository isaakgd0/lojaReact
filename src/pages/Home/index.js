import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Estilos/Header.css';
import './Home.css';

//IMPORTANDO IMAGENS DOS PRODUTOS:
import geladeiraImage from './imgs/geladeira.jpg';
import arCondicionadoImage from './imgs/arCondicionado.jpg';
import lavadoraImage from './imgs/lavadora.jpg';
import tvImage from './imgs/TV.jpg';
import fogaoImage from './imgs/fogao.jpg';

//ARRAY DOS PRODUTOS:
const items = [
  {id: 1, img: geladeiraImage, nome:"Geladeira Frost Free Duplex de Inox - 375L", precoAntigo: "5.999,99", preco: "2.999,99", info:"Geladeiras de altíssima qualidade em oferta!! Só hoje!!"},
  {id: 2, img: arCondicionadoImage, nome: "Ar Condicionado 220 Volts", precoAntigo: "4.900,00", preco: "2.499,99", info: "Aparelhos de ar condicionado de altíssima qualidade em oferta!! Só hoje!!"},
  {id: 3, img: lavadoraImage, nome: "Lavadora de Roupas Premium Care 11Kg", precoAntigo: "3.499,99", preco: "1.749.99", info: "Lavadoras e Secadoras de altíssima qualidade em oferta!! Só Hoje!!",},
  {id: 4, img: tvImage, nome: "Tevelisor Samsung 32' SmarTV", precoAntigo: "4.249,99", preco: "2.124.99", info: "Tevelisores de atíssima qualidade em oferta!! Só hoje!!",},
  {id: 5, img: fogaoImage, nome: "Fogão 5 Bocas com Acendimento Automático – Preto", precoAntigo: "2.199,99", preco: "1.099,99", info: "Fogões de altíssima qualidade em oferta!! Só hoje!!",},
];

//ARRAY DO CARRINHO:
export const arrayCarrinho = [];

function Home() {
  const [arrayCarrinho, setArrayCarrinho] = useState([]);

  const addCarrinho = (nome, preco) =>{
    setArrayCarrinho([...arrayCarrinho, {nome, preco}]);
    alert("Item adicionado!");
  }

  return (
    <div>
      <div className="Fundo">
        <div className='titulo'>
          <h1>SUPERLOJA</h1>
        </div>
        <div>
          <input className='BarraPesquisa' type="text" id="searchInput" placeholder="O Que Procuras? =)"></input>
        </div>
        <div>
          <Link to="/PagLogin">
            <button className='botaoCadastro'>Cadastre-se</button>
          </Link>

        </div>
      </div>

      {/* DISPOSIÇÃO DOS ITEMS NA TELA */}
      {items.map(item => (
        <div className='divBonita'>
          <div className='botaoProduto'>
            <img src={item.img} title='compra aí' />
            <div className='info'>
              <span className='nomeProduto'>{item.nome}</span>
              <br />
              <br />
              <span className='precoAntigo'>De R${item.precoAntigo}</span>
              <br />
              <span className='precoProduto'>R${item.preco}</span>
              <br />
              <span className='infoProduto'>{item.info}</span>
              <br />
              <button className='botaoCarrinho' onClick={() => addCarrinho(item.nome, item.preco)}>Adicionar ao Carrinho</button>
            </div>
          </div>
        </div>
      ))};

      <div className="Rodape">
        <Link to="/Sobre" className='Sobre'>Sobre a nossa empresa</Link>
      </div>
    </div>
  );
}
export default Home;

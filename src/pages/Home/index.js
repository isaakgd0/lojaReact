import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Estilos/Header.css';
import './Home.css';

import geladeiraImage from './imgs/geladeira.jpg';
import arCondicionadoImage from './imgs/arCondicionado.jpg';
import lavadoraImage from './imgs/lavadora.jpg';
import tvImage from './imgs/TV.jpg';
import fogaoImage from './imgs/fogao.jpg';

function Home() {
  const [arrayCarrinho, setArrayCarrinho] = useState([]);

  const addCarrinho = (nomeProduto, preco) => {
    setArrayCarrinho([...arrayCarrinho, { nomeProduto, preco }]);
  };

  const calcularValorTotal = () => {
    let total = 0;
    arrayCarrinho.forEach(item => {
      total += item.preco;
    });
    return total.toFixed(2);
  };

  const fecharPedido = () => {
    setArrayCarrinho([]);
    alert("Seu pedido foi fechado! Qualquer atualização, te mandaremos por E-Mail!");
  };

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

      <div className='carrinhodeCompras'>
        <div className='headCarrinho'>
          <h3>Seu Carrinho</h3>
        </div>
        <div className='doCarrinho'>
          {arrayCarrinho.length > 0 ? (
            <ul>
              {arrayCarrinho.map((item, index) => (
                <li key={index}>{item.nomeProduto}</li>
              ))}
            </ul>
          ) : (
            <p>Carrinho vazio</p>
          )}
        </div>
        <div className='totalCompra'>
          <span>Total da compra: R$ {calcularValorTotal()}</span>
          <br />
          <button className='botaoFinal' onClick={fecharPedido}>Fechar Pedido</button>
        </div>
      </div>

      <div className='bannerOfertas'>
        <h3 className='tituloPiscante'>OFERTAS SÓ HOJE!!!</h3>
        <span>Até 95% de desconto!</span>
      </div>

      <div className='divBonita'>
        <div className='botaoProduto'>
          <img src={geladeiraImage} title="Compra aí, mané" />
          <div className='info'>
            <span className='nomeProduto'>Geladeira Frost Free Duplex de Inox - 375L</span>
            <br />
            <br />
            <span className='precoAntigo'>De R$ 5.999,99</span>
            <br />
            <span className='precoProduto'>Por R$ 4.899,99</span>
            <br />
            <span className='infoProduto'>Geladeiras de altíssima qualidade em oferta!! Só hoje!!.</span>
            <br />
            <button className='botaoCarrinho' onClick={() => addCarrinho("Geladeira Brastemp BRM44HK", 4899.99)}>Adicionar ao Carrinho</button>
          </div>
        </div>
      </div>

      <div className='divBonita'>
        <div className='botaoProduto'>
          <img src={arCondicionadoImage} />
          <div className='info'>
            <span className='nomeProduto'>Ar Condicionado 220 Volts</span>
            <br />
            <br />
            <br />
            <span className='precoAntigo'>De R$ 4.899,99</span>
            <br />
            <span className='precoProduto'>Por R$ 3.989,90</span>
            <br />
            <span className='infoProduto'>Aparelhos de ar condicionado de altíssima qualidade em oferta!! Só hoje!!</span>
            <br />
            <button className='botaoCarrinho' onClick={() => addCarrinho("Ar Condicionado Split Hi Wall", 3989.9)}>Adicionar ao Carrinho</button>
          </div>
        </div>
      </div>

      <div className='divBonita'>
        <div className='botaoProduto'>
          <img src={lavadoraImage} />
          <div className='info'>
            <span className='nomeProduto'>Lavadora de Roupas Premium Care 11Kg </span>
            <br />
            <br />
            <br />
            <span className='precoAntigo'>De R$ 5.999,99</span>
            <br />
            <span className='precoProduto'>R$ 199,90</span>
            <br />
            <span className='infoProduto'>Lavadoras e Secadoras de altíssima qualidade em oferta!! Só Hoje!!</span>
            <br />
            <button className='botaoCarrinho' onClick={() => addCarrinho("Lavadora de Roupas Premium Care 11Kg", 199.9)}>Adicionar ao Carrinho</button>
          </div>
        </div>
      </div>

      <div className='divBonita'>
        <div className='botaoProduto'>
          <img src={tvImage} />
          <div className='info'>
            <span className='nomeProduto'>Tevelisor Samsung 32' SmarTV</span>
            <br />
            <span className='precoAntigo'>De R$ 7.999,99</span>
            <br />
            <span className='precoProduto'>R$ 3.999,90</span>
            <br />
            <span className='infoProduto'>Tevelisores de atíssima qualidade em oferta!! Só hoje!!</span>
            <br />
            <button className='botaoCarrinho' onClick={() => addCarrinho("Tevelisor Samsung 32' SmarTV", 3999.9)}>Adicionar ao Carrinho</button>
          </div>
        </div>
      </div>

      <div className='divBonita'>
        <div className='botaoProduto'>
          <img src={fogaoImage} />
          <div className='info'>
            <span className='nomeProduto'>Fogão 5 Bocas com Acendimento Automático – Preto</span>
            <br />
            <br />
            <br />
            <span className='precoAntigo'>De R$ 3.989,90</span>
            <br />
            <span className='precoProduto'>R$ 1.989,90</span>
            <br />
            <span className='infoProduto'>Fogões de altíssima qualidade em oferta!! Só hoje!!</span>
            <br />
            <button className='botaoCarrinho' onClick={() => addCarrinho("Fogão Consul 5 Bocas CFS5VAE", 1989.9)}>Adicionar ao Carrinho</button>
          </div>
        </div>
      </div>

      <div className="Rodape">
        <Link to="/Sobre" className='Sobre'>Sobre a nossa empresa</Link>
      </div>
    </div>
  );
}

export default Home;

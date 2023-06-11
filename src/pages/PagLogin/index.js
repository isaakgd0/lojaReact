import { Link } from 'react-router-dom';
import { useState } from "react";
import './estilizando.css';
import '../Estilos/Header.css';

function PagLogin() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const [novaLogin, setLogin] = useState({});

  function Botao(cadastro) {
    cadastro.preventDefault();

    setLogin({
      nome: email,
      novaSenha: senha
    })
  }

  return (
    <div>
      <div className="corpoH2">
        <Link to="/">
          <button className='botaoHome'>
            <h1>SUPERLOJA</h1>
          </button>
        </Link>
        <input className='BarraPesquisaH2' type="text" id="searchInput" placeholder="O Que Procuras? =)"></input>
      </div>
      
      <div className='pagCadastro'>
        <h1>Cadastre-se</h1>
        <form onSubmit={Botao}>
          <label>Nome completo</label><br />
          <input
            className="inputBonito"
            type="text"
            placeholder="Digite seu nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <br />
          <label>E-mail</label><br />
          <input
            className="inputBonito"
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>Senha</label><br />
          <input
            className="inputBonito"
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <br />
          <label>Confirme a senha</label><br />
          <input
            className="inputBonito"
            type="password"
            placeholder="Confirme sua senha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />
          <br />
          <button className="botaoBonito" type="submit">Registrar</button>
        </form>
      </div>
      
      <div className="Rodape">
        <Link to="/Sobre" className='Sobre'>Sobre a nossa empresa</Link>
      </div>
    </div>
  );
}

export default PagLogin;

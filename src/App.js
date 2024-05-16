import React, {Component} from 'react';
import './estilo.css';
import bis_coito from './assets/biscoito.png';      

class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      TextoFrase: ''
    };
    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
    
    this.frases = ['Siga os bons e aprenda com os ruims','O bom-senso vale menos do que muito conhecimento', 'o riso é a menor distancia entre duas pessoas e um trem', 'deixe de lado as preocupaçoes e seja deprecivo', 'realize o obvio, pense no improvavel e conquiste o possivel', 'Acredite em milagres, mais dependa deles', 'a maior barreira para o sucesso é o medo do GUSTAVO'];
  }
  quebrarBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.TextoFrase = this.frases[numeroAleatorio];
    this.setState(state);
  }

  render(){
return(
  <div className='container'>
    <img src={bis_coito} className="img" alt='Imagem do bis_coito'/>
    <Botao acao={this.quebrarBiscoito} nome={"Abrir Biscoito"}/>
    <h3 className='textoFrase'>{this.state.TextoFrase}</h3>
  </div>
);

  }
}

class Botao extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.acao}>{this.props.nome}</button>
      </div>
    )
  }
}

export default App;
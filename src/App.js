import React, {Component} from 'react';
import './estilo.css';
import biscoito from './assets/biscoito.png';

class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      TextoFrase: ''
    };
    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
    
    this.frases = ['Siga os bons e aprenda com eles',
    'O bom-senso vale mais do que muito conhecimento', 
    'o riso é a menor distancia entre duas pessoas', 
    'deixe de lado as preocupaçoes e seja feliz', 
    'realize o obivio, pense no improvavel e conquiste o impossivel', 
    'Acredite em milagres, mais nao dependa deles', 
    'a maior barreira para o sucesso é o medo do fracasso'];
  }
  quebrarBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.TextoFrase = this.frases[numeroAleatorio];
    this.setState(state);
  }
}
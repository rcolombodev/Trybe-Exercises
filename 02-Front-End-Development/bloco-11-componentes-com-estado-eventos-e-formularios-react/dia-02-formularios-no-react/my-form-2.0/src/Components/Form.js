import React from 'react';
import DadosPessoais from './DadosPessoais.js';
import DadosCurriculum from './DadosCurriculum.js';

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      complemento: '',
      estado:'',
      curriculum: '',
      cargo: '',
      descricao: '',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    console.log(value)

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form className='forms'>
        <DadosPessoais handleChange={this.handleChange} infos={this.state}/>
        <DadosCurriculum handleChange={this.handleChange} infos={this.state} />
        <button type='submit'className="butao">DENIS</button>
        <button type='reset'className="butao">CAIU?</button>
      </form>
    );
  }
}

export default Form;

import React from 'react';
import Estados from './Estados.js';

class DadosPessoais extends React.Component {
  render() {
    const {handleChange} = this.props
    const {
        nome,
        email,
        cpf,
        endereco,
        cidade,
    }= this.props;

    return (
      <fieldset className="form-data">
        <legend>Dados Pessoais</legend>
        <label>
          Name:
          <input type='text' name='nome' maxLength='40' value={nome} onChange={handleChange} style={{textTransform:'uppercase'}}required></input>
        </label>

        <label>
          Email:
          <input type='text' name='email' maxLength='50'value={email} onChange={handleChange}  required></input>
        </label>

        <label>
          CPF:
          <input type='text' name='cpf' maxLength='11' value={cpf} onChange={handleChange} required></input>
        </label>

        <label>
          Endereço:
          <input type='text' name='endereco' maxLength='200' value={endereco} onChange={handleChange}  required></input>
        </label>

        <label>
          Cidade:
          <input type='text' name='cidade' maxLength='28' value={cidade} onChange={handleChange}  required></input>
        </label>

        <Estados value={this.props} onChange={handleChange}/>

        <label>
          Complemento:
          <input type='radio' value='Casa' name='complemento' onChange={handleChange}  /> Casa
          <input type='radio' value='Apto' name='complemento' onChange={handleChange} /> Apto
        </label>
      </fieldset>
    );
  }
}

export default DadosPessoais;

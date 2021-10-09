import React from 'react';

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      duvidas: '',
      idade: '',
      solucionado: false,
      arquivo: '',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className='main-forms'>
        <h1 className='header'>State, buga a mente ou não buga?</h1>

        <form className='forms'>
          <fieldset className="fieldset-form">
            <label>
              Deixe aqui sua dúvida sobre o States.
              <textarea
                name='duvidas'
                value={this.state.duvidas}
                onChange={this.handleChange}
                rows='5'
                cols='35'
              />
            </label>
          <input
            type='number'
            name='idade'
            placeholder='Sua idade aqui'
            value={this.state.idade}
            onChange={this.handleChange}
          />
          <input
            type='checkbox'
            name='solucionado'
            value={this.state.solucionado}
            onClick={this.handleChange}
          />
          Sua dúvida foi solucionada?
          <input
            type='file'
            name='arquivo'
            placeholder='Escolha Seu Arquivo'
          />
          Escolha seu arquivo!
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;

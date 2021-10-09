import React from 'react';

class DadosCurriculum extends React.Component {
  render() {
    const {handleChange} = this.props
    const {
        curriculum,
        cargo,
        descricao,
    }= this.props;
    return (
      <fieldset className="form-data">
        <legend>Dados do seu ultimo emprego</legend>

        <label>
          {' '}
          Resumo do currículo:
          <textarea
            cols='50'
            rows='5'
            name='curriculum'
            placeholder='Digite Aqui'
            maxLength='1000'
            required
            value={curriculum} 
            onChange={handleChange}
          ></textarea>
        </label>

        <label>
          {' '}
          Cargo:
          <textarea
            cols='30'
            rows='3'
            name='cargo'
            placeholder='Digite Aqui'
            maxLength='40'
            required
            value={cargo} 
            onChange={handleChange}
          ></textarea>
        </label>

        <label>
          {' '}
          Descrição do cargo:
          <input
            type='text'
            name='descricao'
            placeholder='Digite Aqui'
            maxLength='500'
            required
            value={descricao} 
            onChange={handleChange}
          ></input>
        </label>
      </fieldset>
    );
  }
}

export default DadosCurriculum;

import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormDataDisplay extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { personal: { nome, email, cpf, endereco, cidade, estado } } = this.props;
    // eslint-disable-next-line react/prop-types
    const { professional: { curriculo, cargo, descricao } } = this.props;
    return (
      <div>
        <h2>Dados enviados</h2>
        <div>
          Nome:
          {nome}
        </div>
        <div>
          Email:
          { email }
        </div>
        <div>
          CPF:
          { cpf }
        </div>
        <div>
          Endereço:
          { endereco }
        </div>
        <div>
          Cidade:
          { cidade }
        </div>
        <div>
          Estado:
          { estado }
        </div>
        <div>
          Currículo:
          { curriculo }
        </div>
        <div>
          Cargo:
          { cargo }
        </div>
        <div>
          Descrição do cargo:
          { descricao }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  personal: state.reducer.state_personal,
  professional: state.reducer.state_professional });
export default connect(mapStateToProps)(FormDataDisplay);

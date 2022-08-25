/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Userfront from "@userfront/core";

Userfront.init("demo1234");

Userfront.sendResetLink("viewer@example.com");

// Inicializar o Userfront Core JS
Userfront.init("demo1234");

// Definir o componente do formulário de redefinição de senha
class PasswordResetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      passwordVerify: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Sempre que uma entrada muda de valor, mude a variável de estado correspondente
  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    this.setState({
      [target.name]: target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // Verify that the passwords match
    if (this.state.password !== this.state.passwordVerify) {
      return;
    }
    // Chame Userfront.resetPassword()
    Userfront.resetPassword({
      password: this.state.password,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Senha 
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
          Redigite a senha
            <input
              name="passwordVerify"
              type="password"
              value={this.state.passwordVerify}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">Redefinir senha</button>
        </form>
      </div>
    );
  }
}

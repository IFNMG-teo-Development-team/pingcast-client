/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Sample: how to use Userfront.resetPassword()

Userfront.init("demo1234");
Userfront.resetPassword({
  password: "myshinynewpassword",
});

class Alert extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      if (!this.props.message) return "";
      return <div id="alert">{this.props.message}</div>;
    }
  }
  
  class PasswordResetForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        // ...
        alertMessage: "",
      };
      // ...
      this.setAlertMessage = this.setAlertMessage.bind(this);
    }
  
    // ...
  
    handleSubmit(event) {
      event.preventDefault();
  
      // Redefinir o alerta para vazio
      this.setAlertMessage();
  
      // Verify that the passwords match
      if (this.state.password !== this.state.passwordVerify) {
        return this.setAlertMessage("Passwords must match");
      }
  
      // Chame Userfront.resetPassword()
      Userfront.resetPassword({
        password: this.state.password,
      }).catch((error) => {
        this.setAlertMessage(error.message);
      });
    }
  
    setAlertMessage(message) {
      this.setState({ alertMessage: message });
    }
  
    render() {
      return (
        <div>
          <Alert message={this.state.alertMessage} />
          {/* <form> element */}
        </div>
      );
    }
  }
  

  

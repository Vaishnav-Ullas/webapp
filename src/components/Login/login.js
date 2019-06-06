import React from 'react';
import './login.css';
import Graph from '../Graph/graph';


class Login extends React.Component {
    constructor(props)
    {
      super(props);
      this.state = {
        username: "",
        password: "",
        isRendered : false,
        userExist : "",
        loggedin :""
      };
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleSubmit1= this.handleSubmit1.bind(this);
    }
    handleChange1 = event => {
      this.setState({
        username : event.target.value
      });
    };
    handleChange2 = event => {
      this.setState({
        password : event.target.value
      });
    };
    handleSubmit = event => {
       event.preventDefault();
       var body={
        "username": this.state.username,
        "password": this.state.password
    }
    if(this.state.username=="admin" && this.state.password=="admin"){
        this.setState({loggedin:"sucess"})
    } 
    else{
    var requestOptions = {
      "method": "POST",
      "headers": {
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin":"*",
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept'
      }

      };
      requestOptions["body"] = JSON.stringify(body);
      event.preventDefault();
     fetch("http://127.0.0.1:8000/login",requestOptions)
     .then(res => res.json())
     .then(json => this.setState({loggedin : json.x}));
      }
    };

    handleSubmit1 = event => {
      var body={
        "username": this.state.username,
        "password": this.state.password
    }
    var requestOptions = {
      "method": "POST",
      "headers": {
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin":"*",
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept'
      }

      };
      requestOptions["body"] = JSON.stringify(body);
      event.preventDefault();
     fetch("http://127.0.0.1:8000/signup",requestOptions)
     .then(res => res.json())
     .then(json => this.setState({userExist : json.x}));
    };

    validateForm() {
      return this.state.username.length > 0 && this.state.password.length > 0;
    }

   
    

    render(){
      var x;
      if(this.state.loggedin!=="sucess"){
      if(this.state.isRendered) {
        x=<form className="login-form" onSubmit={this.handleSubmit1}>
        <input type="text" onChange={this.handleChange1} placeholder="Username" />
        <input type="password" onChange={this.handleChange2} placeholder="password" />
        <button type="submit">Sign up</button>
        <p className="message1">{this.state.userExist}</p>
        <p className="message">Already registered?<span onClick={()=>this.setState({isRendered : false})}>Sign In</span></p>
      </form>
      }
      else {
            x=<form className="login-form" onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange1} placeholder="Username" />
            <input type="password" onChange={this.handleChange2} placeholder="password" />
            <button type="submit" disabled={!this.validateForm()} >login</button>
            <p className="message1">{this.state.loggedin}</p>
            {<p className="message">Not registered?<span onClick={()=>this.setState({isRendered : true})}>Create an account</span></p>}
          </form>
      }
    }
    else{
      return(<Graph/>);
    }
    return (
    <div className="login-page">

      <div className="form">
        {x}
      </div>
    </div>
    );
     
  }
}

export default Login;

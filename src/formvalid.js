import './new.css';
import React from "react";
import './new.css';
class Formvalidation extends React.Component {
  constructor() {
    super();
    this.state = {  //this.state is usually react object used to contain data or information about component 
      fields: {},   
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);   //triggered by input element and triggers the changing of this state  
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  

  }

  submituserRegistrationForm(e) {
    console.log(this.validateForm());
    
    e.preventDefault();
    if (this.validateForm()) {
        console.log(this.state);
         let fields = {};
         fields["username"] = "";
         fields["emailid"] = "";
         fields["mobileno"] = "";
         fields["password"] = "";
        this.setState({fields:fields});
        console.log(this.state);
        alert("Your Form has been submitted successfully.");
    }

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "Please fill the column.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "Invalid username.";
      }
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "Please fill the email-id.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+))|("[\w-\s]+")([\w-]+(?:\.[\w-]+)))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "Invalid Email";
      }
    }
    if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "Please fill your password";
      }
  
      if (typeof fields["password"] !== "undefined") {
        if (
          !(fields["password"].match(/([a-z].[A-Z])|([A-Z].[a-z])/)) ||
          !(fields["password"].match(/([!,%,&,@,#,$,^,*,?,_,~])/)) ||
          !(fields["password"].match(/([0-9])/)) 
        ) {
          formIsValid = false;
          errors["password"] = "Password is weak";
        }
      }

    this.setState({
      errors: errors
    });
    return formIsValid;
    
  }

render() {
  return (
  <div id="main-registration-container">
    <center><h1 classname="tit">Dynamic form</h1></center>
   <center><div id="register">
   <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
      <label className='abc'>Enter your username:   </label><br />
      <input type="text" name="username" placeholder="your Username"value={this.state.fields.username} onChange={this.handleChange} />
      <div className="errorMsg">{this.state.errors.username}</div>
      <label>Enter your email:   </label><br/>
      <input type="text" name="emailid" placeholder=" your email" value={this.state.fields.emailid} onChange={this.handleChange}  />
      <div className="errorMsg">{this.state.errors.emailid}</div>
      <label>Enter your password:   </label><br/>
      <input type="password" name="password" placeholder="your password"  value={this.state.fields.password} onChange={this.handleChange} />
      <div className="errorMsg">{this.state.errors.password}</div>
     <input type="submit" className="button"  value="Submit"/>
      </form>
  </div></center>
</div>

    );
}


}
export default Formvalidation
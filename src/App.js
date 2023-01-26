import React from "react";

class App extends React.Component {
  state = {
    email: "",
    checkeds: false,
  };
  valueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  valueCheck = (e) => {
    console.log(e.target.checked);
    this.setState({
      [e.target.name]: e.target.checked,
    });
  };
  click = (e) => {
    e.preventDefault()
    let regios = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(
      this.state.email
    );
    console.log(regios);
    if (this.state.checkeds === false && regios === false) {
      alert("Emailingizni to'g'ri kiriting kiriting hamda rozilik bildiring!!!");
    } else if (this.state.checkeds === false && regios === true) {
      alert("Rozilik bildiring!");
    }
    else if(regios===false){
      alert("Emailingizni to'g'ri kiriting")
    }else{
      this.setState(
        {email:"", checkeds:false}
      )
      alert("Tabriklashion😎")
    }
  };
  render() {
    return (
      <div className="container mt-5">
        <form onSubmit={this.click} className="form-control">
          <label htmlFor="email">Email</label>
          <input
            onChange={this.valueChange}
            className="form-control mb-2"
            name="email"
            type="text"
            id="email"
            value={this.state.email}
          />
          <input
            onChange={this.valueCheck}
            checked={this.state.checkeds}
            className="checkbox-control"
            type="checkbox"
            name="checkeds"
            id="checkeds"
          />
          <label htmlFor="checkeds">Terms&Conditions</label>
          <br />
          <button
            className="btn"
            style={{ backgroundColor: "green", color: "white" }}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default App;

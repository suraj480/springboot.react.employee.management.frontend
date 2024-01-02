import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class UpdateEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      firstName: "",
      lastName: "",
      emailId: "",
    };
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailId = this.changeEmailId.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
  }
  componentDidMount() {
    console.log("ppp", this.props);
    // console.log("ppp2", props);

    EmployeeService.getEmployeeById(this.state.id).then((res) => {
      let employee = res.data;
      this.setState({
        firstName: employee.firstName,
        lastName: employee.lastName,
        emailId: employee.emailId,
      });
    });
  }

  updateEmployee = (e) => {
    e.preventDefault();
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
    };
    EmployeeService.createEmployee(employee).then((res) => {
      this.props.navigate("/listAllEmployees");
    });
    console.log("EMPLOYEE" + JSON.stringify(employee));
  };
  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };
  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };
  changeEmailId = (event) => {
    this.setState({ emailId: event.target.value });
  };
  cancel = () => {
    this.props.history.push("/listAllEmployees");
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row card col-md-6 offset-md-3">
            <h3 className="text-center">Add Employee</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>First Name:</label>
                  <input
                    placeholder="First Name"
                    name="firstName"
                    className="form-control"
                    value={this.state.firstName}
                    onChange={this.changeFirstNameHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name:</label>
                  <input
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"
                    value={this.state.lastName}
                    onChange={this.changeLastNameHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Email Address:</label>
                  <input
                    placeholder="Email Address"
                    name="emailId"
                    className="form-control"
                    value={this.state.emailId}
                    onChange={this.changeEmailId}
                  />
                </div>

                <button
                  className="btn btn-success"
                  onClick={this.updateEmployee}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  style={{ marginLeft: "10px" }}
                  onClick={this.cancel}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UpdateEmployeeComponent;

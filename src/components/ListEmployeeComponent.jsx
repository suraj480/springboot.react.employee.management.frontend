import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";
import { Link, useNavigate} from "react-router-dom";


class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
    this.deleteEmployee=this.deleteEmployee.bind(this);
  }
  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      this.setState({ employees: res.data });
    });
  }
 
  deleteEmployee (id)  {
    EmployeeService.deleteEmployee(id).then((res) => {
      this.setState({
        employees: this.state.employees.filter(
          (employee) => employee.id !== id
        ),
      });
    });
  };
  editEmployee = (id) => {
    console.log("checkme",id)
    this.props.navigate(`/updateEmployees/${id}`);
  };
  viewEmployee=(id)=>{
    this.props.navigate(`/viewEmployee/${id}`); 
  }
  render() {
    return (
      <div>
        <h2 className="text-center">Employee List</h2>
        <div className="row">
          <Link to="/addEmployees">
            <button className="btn btn-primary">
              Add Employee
            </button>
          </Link>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee EmailId</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.emailId}</td>
                  <td>
                    <button
                      onClick={() => this.editEmployee(employee.id)}
                      className="btn btn-info"
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    {" "}
                    <button
                      onClick={()=>this.deleteEmployee(employee.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    {" "}
                    <button
                      onClick={()=>this.viewEmployee(employee.id)}
                      className="btn btn-info"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
const ListEmployeeWithNavigate = (props) => {
  const navigate = useNavigate();
  return <ListEmployeeComponent {...props} navigate={navigate} />;
};
export default ListEmployeeWithNavigate;
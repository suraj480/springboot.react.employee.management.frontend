import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const ViewEmployeeComponent = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    EmployeeService.getEmployeeById(id).then((res) => {
      setEmployee(res.data);
    });
  }, [id]);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">View Employee Details</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Employee Information</h5>
          <div className="row">
            <div className="col-md-3">
              <label>ID:</label>
            </div>
            <div className="col-md-9">
              <p className="card-text">{employee.id}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <label>First Name:</label>
            </div>
            <div className="col-md-9">
              <p className="card-text">{employee.firstName}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <label>Last Name:</label>
            </div>
            <div className="col-md-9">
              <p className="card-text">{employee.lastName}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <label>Email ID:</label>
            </div>
            <div className="col-md-9">
              <p className="card-text">{employee.emailId}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployeeComponent;

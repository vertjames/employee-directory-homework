import React, { useState } from 'react';
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Table from "../components/Table";
import DropDown from "../components/DropDown";
import employees from "../employees.json";

function Main() {
  const [orderState, setOrderState] = useState('id');
  const [employeesState, setEmployeesState] = useState(employees);
  const [keysState, setKeysState] = useState(Object.keys(employeesState[0]));

  function departmentKeys() {
    let keys = [];
    employeesState.map(employee => {
      keys.push(employee.department);
    });
    let uniqueKeys = Array.from(new Set(keys));
    return uniqueKeys;
  };

  function reset() {
    setEmployeesState(employees);
  };

  function changeParams(type, affectedRow) {
    if (type === "sort") {
      setOrderState(affectedRow);
      if (affectedRow === "salary" || affectedRow === "id") {
        const query = `a.${affectedRow} - b.${affectedRow}`
        const sorted = employeesState.sort((a, b) => eval(query));
      } else {
        const query = `a.${affectedRow}.localeCompare(b.${affectedRow})`;
        const sorted = employeesState.sort((a, b) => eval(query));
      };
    } else {
      const filtered = employeesState.filter((employee) => {
        return employee.department === affectedRow
      });
      setEmployeesState(filtered);
    }
  };

  return (
    <div className="my-5">
      <Container>
        <Row>
          <h1 style={{ fontSize: "2em" }}>Employee Directory<small className="text-muted"> - Sorting by {orderState}</small></h1>
          <div className="col">
            <DropDown name="sort" type="success" keys={keysState} func={changeParams} />
          </div>
          <div className="col">
            <DropDown name="Filter by Dept" type="secondary" keys={departmentKeys()} func={changeParams} />
          </div>
          <div className="col">
            <button className="btn btn-danger btn-lg btn-block" onClick={() => reset()}>Reset Filter</button>
          </div>
        </Row>
          &nbsp;
        <Row>
          <Col size="md-12" className="col-md-12 d-flex justify-content-center align-content-center">
            <Table keys={keysState} data={employeesState} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Main;

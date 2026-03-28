import { useState } from 'react'
import EmployeeForm from "./components/EmployeeForm"
import EmployeeList from "./components/EmployeeList"
import './components/Employee.css'
import "./App.css"


export default function App() {
  const [employees, setEmployees] = useState([
    {
      id:1,
      name: "Jean Pierre",
      position: "Developpeur",
      department:"IT",
      status: "Actif",
    },
    {
      id:2,
      name: "Marie Paul",
      position: "RH",
      department:"Ressources humaine",
      status: "Inactif",
    },
  ]);

  const addEmployee =(newEmployee)=> {
    setEmployees([...employees, newEmployee]);
  };

  return(
    <div>
    <EmployeeForm addEmployee={addEmployee}/>

    <EmployeeList employees={employees}/>
    </div>
  );
}


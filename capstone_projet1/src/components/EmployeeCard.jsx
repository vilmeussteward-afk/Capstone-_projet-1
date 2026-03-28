import React from "react" 
export default function EmployeeCard({employee}) { 
    return ( 
    <div className="EmployeeCard"> 
    <h3>{employee.name}</h3> 
    <p>Poste: {employee.position}</p> 
    <p>Département: {employee.department}</p> 
    <p>Status: {employee.status}</p> 
    </div> 
    ); 
}
import React, { useState } from "react";
import "./Employee.css"

export default function EmployeeForm({addEmployee}) {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [department, setDepartment] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();

        const newEmployee={
        id:Date.now(),
        name,
        position,
        department,
        status:"Actif",
        };

    addEmployee(newEmployee);
    setName("");
    setPosition("");
    setDepartment("");
    };
    return (
        <form onSubmit={handleSubmit} className="Border">
            <h1>Liste des employés</h1>
            <input
            type="text"
            placeholder="Nom"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            />

            <input 
            type="text"
            placeholder="Poste"
            value={position}
            onChange={(e)=> setPosition(e.target.value)}
            />

            <input 
            type="text"
            placeholder="Département"
            value={department}
            onChange={(e)=> setDepartment(e.target.value)}
            />

            <button type="submit">Ajouter</button>
        </form>
    );

}
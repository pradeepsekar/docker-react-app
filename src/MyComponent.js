import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const MyComponent = ((props) => {
const [apiResponse, setApiResponse] = useState([]);
const [reload, updateReload] = useState(1);

useEffect(() => {
    getAllPersons();
}, [reload])

function getAllPersons() {
fetch('http://java_service:8081/api/persons/')
  .then(response => response.json())
  .then(data => handleApiRespose(data));
}

function handleApiRespose(data) {
    setApiResponse(data);
}

function reloadData() {
    updateReload(reload + 1);
}

return (<div>
            <h4> From My Component {apiResponse.map(val => val.firstName)} </h4>
            <button onClick={() => reloadData()}>Reload</button> 
        </div> );
})

export default MyComponent;
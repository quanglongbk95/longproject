import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';

function App() {

  const [data, setData1] = useState([]);

  function getData() {
    axios({
      method: 'get',
      url: 'https://5de1c7a10929540014dc3347.mockapi.io/api/test/getDataStudent',
    }).then((res) => {
      setData1(res.data);
    });
  }

  function element(){
    return data.map((i, index) => <tr key={index}><td>{i.name}</td><td>{i.age}</td><td>{i.country}</td></tr>)
  }

  function onSubmit(event) {
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      age: event.target.age.value,
      country: event.target.country.value
    }
    axios({
      method: 'post',
      url: 'https://5de1c7a10929540014dc3347.mockapi.io/api/test/getDataStudent',
      data: data
    }).then(() => {
      console.log("post success")
    });
  }

  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Country</th>
        </tr>
        {element()}
      </table>
      <button onClick={getData}>Get data</button>
      <br></br>
      <br></br>
      <form  onSubmit={onSubmit}>
        <input type="text" name="name" />
        <input type="text" name="age" />
        <input type="text" name="country" />
        <button type="submit">Summit</button>
      </form>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';


function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [data, setData] = useState([]);
  const storeData = () => {
    const emailValidate = data.filter(emailVal => {
      return emailVal.email === email;
    })
    emailValidate.length > 0 ? alert('email already exist') : setData([...data, { name, email, age }]);
    restInput();
  }
  const restInput = () => {
    setName('');
    setEmail('');
    setAge('');
  }

  return (
    <div className="App">
      <div className='form-container'>
        <input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)} value={name} />        
        <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} />        
        <input type='number' placeholder='Age' onChange={(e) => setAge(e.target.value)} value={age} />
        <button className='submit-btn' onClick={() => storeData()}>Add</button>
      </div>

      <div className='form-data'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {data.map((value, index) => {
              return (
                <tr>
                  <td key={index}>{value.name}</td>
                  <td>{value.email}</td>
                  <td>{value.age}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div >
  );
}

export default App;
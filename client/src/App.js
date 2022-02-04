import { useState, useEffect } from 'react'
import './App.css';
import Form from './components/Form';


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [contacts, setContacts] = useState([]);

  useEffect(async () => {
    fetch('http://localhost:3000/modules/contact', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', },
    }).then(response => response.json())
      .then(data => {
        setIsLoaded(true)
        setContacts(data)
      })
  }, [])

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <Form addContact={newContact => { setContacts([...contacts, newContact]) }} />
        <table>
          <tr>
            <th>name</th>
            <th>phone</th>
            <th>gender</th>
            <th>age</th>
          </tr>
          {contacts.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.gender ? 'man' : 'woman'}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </table>

      </div>
    );
  }
}

export default App;
import { useState } from 'react'
import Input from '../Input';

export default ({
  addContact
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState(true);

  const createContact = (contact) => {
    if (!contact.name || !contact.phone || !contact.age) return
    fetch('http://localhost:3000/modules/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify(contact)
    })
      .then(response => response.json())
      .then(data => {
        addContact(data)
        setName('')
        setPhone('')
        setAge('')
      })
  }

  return (
    <form className='form-style-5'>
      <Input value={name} type={'name'} setDataForm={data => setName(data)} placeholder={'Jon'} />
      <Input value={phone} type={'phone'} setDataForm={data => setPhone(data)} placeholder={'+380 884 658 694'} />
      <Input value={age} type={'age'} setDataForm={data => setAge(data)} placeholder={'21'} />
      <select className='custom-select' onChange={event => setGender(event.target.value === 'man')}>
        <option value={'man'}>man</option>
        <option value={'woman'}>woman</option>
      </select>
      <button
        className={`w-100 btn btn-dark mt-3`}
        onClick={(event) => { createContact({ name, phone, age: Number(age), gender }); event.preventDefault(); }}
      >
        SEND
      </button>
    </form>
  );
};
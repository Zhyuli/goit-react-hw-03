// import { useState } from 'react';

import { ContactList } from './components/ContactList/ContactList';
import { Title } from './components/Title/Title';
import { SearchBox } from './components/SearchBox/SearchBox';
import { ContactForm } from './components/ContactForm/ContactForm';

import './App.css';
import { useState } from 'react';

export const App = () => {
  const [nameFilter, setNameFilter] = useState('');
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const addContact = newContact => {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = id => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== id);
    });
  };

  const findContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <>
      <div>
        <Title />
        <ContactForm onAdd={addContact} />
        <SearchBox value={nameFilter} onChange={setNameFilter} />
        <ContactList onDelete={deleteContact} contacts={findContact} />
      </div>
    </>
  );
};

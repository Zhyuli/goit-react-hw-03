// import { useState } from 'react';
import contactList from './contactList.json';
import { ContactList } from './components/ContactList';

import './App.css';

function App() {
  return (
    <>
      <div>
        <ContactList contactList={contactList} />
      </div>
    </>
  );
}

export default App;

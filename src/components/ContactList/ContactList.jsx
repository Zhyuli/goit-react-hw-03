import { ContactListItem } from './Contact';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li className={css.listItem} key={contact.id}>
          <ContactListItem contact={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

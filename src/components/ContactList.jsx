import { ContactListItem } from './Contact';
import css from './ContactList.module.css';

export const ContactList = ({ contactList }) => {
  return (
    <ul className={[css['contact-list']]}>
      {contactList.map(({ id, ...contactList }) => (
        <li className={css.listItem} key={id}>
          <ContactListItem {...contactList} />
        </li>
      ))}
    </ul>
  );
};

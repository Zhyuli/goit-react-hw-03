import { ContactListItem } from './Contact';

export const ContactList = ({ contactList }) => {
  return (
    <ul className="list">
      {contactList.map(({ id, ...contactList }) => (
        <li className="listItem" key={id}>
          <ContactListItem {...contactList} />
        </li>
      ))}
    </ul>
  );
};

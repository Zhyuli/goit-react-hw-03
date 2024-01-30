import { FiPhone, FiUser } from 'react-icons/fi';
import css from './Contact.module.css';

export const ContactListItem = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <div className={css.itemBox}>
      <div className={css.leftBox}>
        <p className={css.name}>
          <FiUser className={css.svg} />
          {name}
        </p>
        <p className={css.number}>
          {' '}
          <FiPhone className={css.svg} />
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

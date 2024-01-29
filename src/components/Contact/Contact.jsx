import css from './ContactList.module.css';

export const ContactListItem = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <div className={css.itemBox}>
      <div className={css.leftBox}>
        <p className={css.name}>{name}</p>
        <p className={css.number}>{number}</p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

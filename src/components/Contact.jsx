import css from './ContactList.module.css';

export const ContactListItem = ({ id, name, number }) => {
  return (
    <div className={css.itemBox}>
      <div className={css.leftBox}>
        <p className={css.name}>{name}</p>
        <p className={css.number}>{number}</p>
      </div>
      <button className={css.btn}>Delete{id}</button>
    </div>
  );
};

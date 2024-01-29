export const ContactListItem = ({ id, name, number }) => {
  return (
    <div className="itemBox">
      <p className="name">{name}</p>
      <p className="number">{number}</p>
      <button className="id">Delete{id}</button>
    </div>
  );
};

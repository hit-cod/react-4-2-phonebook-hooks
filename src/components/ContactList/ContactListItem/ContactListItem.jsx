import s from './ContactListItem.module.css'

function ContactListItem ({ id, name, number, onClick }) {
  return (
    <li key={id}>
      {name} {number}
      <button
        type="button"
        className={s.deleteBtn}
        onClick={() => onClick(id)}
      >
        Delete
      </button>
    </li>
  );
}

export default ContactListItem;

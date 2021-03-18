import ContactListItem from "./ContactListItem/ContactListItem";

function ContactList({ filter, contacts, onClick }) {
  return (
    <>
      <ul>
        {filter === ""
          ? contacts.map((contact) => {
              return (
                <ContactListItem
                  id={contact.id}
                  name={contact.name}
                  number={contact.number}
                  onClick={onClick}
                />
              );
            })
          : contacts.map((contact) => {
              if (contact.name.toLowerCase().includes(filter.toLowerCase())) {
                return (
                  <ContactListItem
                    id={contact.id}
                    name={contact.name}
                    number={contact.number}
                    onClick={onClick}
                  />
                );
              }
              return "";
            })}
      </ul>
    </>
  );
}

export default ContactList;

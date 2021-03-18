import { useState, useEffect } from "react";

import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";

function ContantWidget() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");
  const [isFirstCommit, setFirstCommit] = useState(true);

  useEffect(() => {
    if (isFirstCommit) {
      const parsedContacts = JSON.parse(localStorage.getItem("contacts"));
      if (parsedContacts !== null) {
        setContacts(parsedContacts);
      }
      setFirstCommit(false);
      return;
    }

    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts, isFirstCommit]);

  const checkContact = (name) =>
    contacts.find((contact) => contact.name === name);

  const addContact = (newContact) =>
    setContacts((prevContacts) => [newContact, ...prevContacts]);

  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const filterContacts = (e) => setFilter(e.target.value);

  return (
    <>
      <h2>PhoneBook</h2>
      <ContactForm onSubmit={addContact} checkContact={checkContact} />

      <h2>Contacts</h2>

      <Filter filter={filter} contactsFilter={filterContacts} />

      <ContactList
        filter={filter}
        contacts={contacts}
        onClick={deleteContact}
      />
    </>
  );
}

export default ContantWidget;

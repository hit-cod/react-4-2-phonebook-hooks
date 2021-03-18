import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import s from "./ContactFrom.module.css";

function ContactForm({ checkContact, onSubmit }) {
  const [contactName, setContactName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contactName === "" || number === "")
      return alert("Please, fill out all of the fields.");

    if (checkContact(contactName)) {
      return alert(`${contactName} is already in contacts.`);
    }

    const name = contactName;
    onSubmit({ name, number, id: uuidv4() });
    reset();
  };

  const handleInput = (e) => {
    const { value, name } = e.target;
    switch (name) {
      case "contactName":
        setContactName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        alert("Improper action");
    }
  };

  const reset = () => {
    setContactName("");
    setNumber("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={s.formSection}>
        <label htmlFor="nameInput">Name</label>
        <input
          type="text"
          id="nameInput"
          className={s.nameInput}
          name="contactName"
          value={contactName}
          onChange={handleInput}
          placeholder="Enter name .."
        />

        <label htmlFor="numberInput">Number</label>
        <input
          type="tel"
          id="numberInput"
          className={s.numberInput}
          name="number"
          value={number}
          onChange={handleInput}
          placeholder="Enter number .."
        />

        <br />

        <button type="submit" className={s.addBtn}>
          Add contact
        </button>
      </form>
    </>
  );
}

export default ContactForm;

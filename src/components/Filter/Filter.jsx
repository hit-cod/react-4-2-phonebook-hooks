import s from './Filter.module.css';

function Filter ({ filter, contactsFilter }) {
    return (
      <>
        <label htmlFor="contactSearch">Find contacts by name</label>
        <input
          type="text"
          id="contactSearch"
          className={s.filterInput}
          name="filter"
          value={filter}
          onChange={contactsFilter}
          placeholder="Google your contact .."
        />
      </>
    );
  }

export default Filter;
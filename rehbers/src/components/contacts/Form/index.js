import { useState, useEffect } from "react";

function Form({ addContacts, contacts }) {
  const [form, setForm] = useState({ fullName: "", phoneNumber: "", job: "" });
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setForm({ fullName: "", phoneNumber: "", job: "" });
  }, [contacts]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullName === "" || form.phoneNumber === "" || form.job === "") {
      return false;
    }
    addContacts([...contacts, form]);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={onChangeInput}
        />
      </div>

      <div>
        <input
          name="phoneNumber"
          placeholder="Phone Number"
          value={form.phoneNumber}
          onChange={onChangeInput}
        />
      </div>

      <div>
        <input
          name="job"
          placeholder="Job"
          value={form.job}
          onChange={onChangeInput}
        />
      </div>
      <div className="btn">
        <button>ADD</button>
      </div>
    </form>
  );
}

export default Form;

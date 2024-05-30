import React, { useState } from 'react';

const data = {
  username: 'John',
  email: 'john@email.dom',
  gender: 'male',
};

export default function App() {
  const [formDataState, setFormDataState] = useState(data);

  const hdlSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());
    console.log(formData);
    setFormDataState(formData);
  };

  return (
    <div className="App">
      <h1 className="text-center my-3">Form Input</h1>
      <form
        className="d-flex gap-3 flex-column w-75 mx-auto p-3 bg-secondary bg-opacity-50 rounded"
        onSubmit={hdlSubmit}
      >
        <div className="form-floating mb-3">
          <input
            type="username"
            className="form-control"
            id="username"
            name="username"
            placeholder="UserName"
            defaultValue={formDataState.username}
          />
          <label htmlFor="floatingInput">Username </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="name@example.com"
            defaultValue={formDataState.email}
          />
          <label htmlFor="email">Email address</label>
        </div>
        <select className="form-select mb-3" name="gender" defaultValue="">
          <option value="" disabled>
            Select Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
        </select>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

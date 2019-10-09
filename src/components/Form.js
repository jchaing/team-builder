import React, { useState } from 'react';

const Form = props => {
  const [member, setMember] = useState({ fullname: '', email: '', role: '' });

  const handleChange = e => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addMemberFn(member);
    setMember({ fullname: '', email: '', role: '' });
  };

  // console.log(member);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="fullname">Name:</label>
      <input
        id="fullname"
        name="fullname"
        type="text"
        value={member.fullname}
        onChange={handleChange}
      />

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        name="email"
        type="email"
        value={member.email}
        onChange={handleChange}
      />

      <label htmlFor="role">Role:</label>
      <input
        id="role"
        name="role"
        type="text"
        value={member.role}
        onChange={handleChange}
      />

      <button type="submit">Add Member</button>
    </form>
  );
};

export default Form;

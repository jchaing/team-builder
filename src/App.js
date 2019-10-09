import React, { useState } from 'react';
import Form from './components/Form';
import Member from './components/Member';
import data from './data';
import './App.css';

function App() {
  const [team, setTeam] = useState([
    {
      id: 1,
      fullname: 'John Doe',
      email: 'john.doe@something.com',
      role: 'Full Stack Developer'
    }
  ]);

  const addMember = member => {
    const newMember = {
      id: Date.now(),
      fullname: member.fullname,
      email: member.email,
      role: member.role
    };

    setTeam([...team, newMember]);
  };

  console.log(team);

  return (
    <div className="App">
      <h1>My Team</h1>
      <Form addMemberFn={addMember} />
      <Member memberList={team} />
    </div>
  );
}

export default App;

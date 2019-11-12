import React from 'react';

const Member = ({memberList}) => {
  console.log(memberList);
  return (
    <div>
      {memberList.map(member => {
        return (
          <div key={member.id}>
            <hr/>
            <h2>{member.fullname}</h2>
            <h3>{member.email}</h3>
            <h3>{member.role}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Member;

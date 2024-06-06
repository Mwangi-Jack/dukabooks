// src/Team.js
import React from 'react';
import TeamMemberCard from '../ui/TeamMemberCard';

const teamMembers = [
  {
    picture: 'https://api.dicebear.com/8.x/personas/svg?seed=Sheba=Alice',
    name: 'Jackson Mwangi',
    position: 'CEO',
    background: 'Alice has over 10 years of experience in the finance industry and leads the team with a focus on innovation and excellence.'
  },
  {
    picture: 'https://api.dicebear.com/8.x/personas/svg?seed=Bob',
    name: 'Bob Smith',
    position: 'CTO',
    background: 'Bob is a tech guru with a passion for developing scalable solutions that make bookkeeping easy and accessible for SMEs.'
  },
  {
    picture: 'https://api.dicebear.com/8.x/personas/svg?seed=Sheba',
    name: 'Carol Williams',
    position: 'CFO',
    background: 'Carol brings a wealth of financial expertise and ensures our clients always have up-to-date and accurate financial information.'
  }
];

const Team = () => {
  return (
    <div className="flex flex-wrap justify-center mt-4">
      {teamMembers.map((member, index) => (
        <TeamMemberCard
          key={index}
          picture={member.picture}
          name={member.name}
          position={member.position}
          background={member.background}
        />
      ))}
    </div>
  );
};

export default Team;

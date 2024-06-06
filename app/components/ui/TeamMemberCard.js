import React from 'react';
import Image from 'next/image';

const TeamMemberCard = ({ picture, name, position, background }) => {
  return (
    <div className="max-w-xs bg-white rounded-lg shadow-md p-6 m-4 text-center">
      <Image
        src={picture}
        alt={`${name}'s picture`}
		width={96}
		height={96}
        className="rounded-full mx-auto mb-4 object-cover"
      />
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <h3 className="text-lg text-gray-600 mb-2">{position}</h3>
      <p className="text-gray-700">{background}</p>
    </div>
  );
};

export default TeamMemberCard;

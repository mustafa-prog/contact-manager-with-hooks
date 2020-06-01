import React from 'react';

const PeopleList = (props) => {
  return (
    <ul>
      {props.data.map((person, index) => (
        <li key={index}>{person}</li>
      ))}
    </ul>
  );
};

export default PeopleList;

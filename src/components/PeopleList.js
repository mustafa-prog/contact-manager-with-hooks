import React from 'react';
import { connect } from 'react-redux';

const PeopleList = (props) => {
  return (
    <ul>
      {props.data.map((person, index) => (
        <li key={index}>{person}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  data: state,
});

export default connect(mapStateToProps)(PeopleList);

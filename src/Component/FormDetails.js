import React from "react";

const FormDetails = (props) => {
  return (
    <>
      <div>{props.first}</div>
      <div>{props.last}</div>
      <div>{props.email}</div>
      <div>{props.birthday}</div>
      <div>{props.gender}</div>
      {props.hobbies.map((value) => {
        return <p>{value}</p>;
      })}
    </>
  );
};

export default FormDetails;

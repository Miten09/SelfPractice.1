import React from "react";
import CompC from "./CompC";
import { Firstname, Lastname } from "../App";
import { useContext } from "react";

function CompB() {
  const fname = useContext(Firstname);
  const lname = useContext(Lastname);

  return (
    <>
      <h1>
        {fname} {lname}
      </h1>
    </>
  );
}

export default CompB;

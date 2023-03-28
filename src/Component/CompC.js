import React from "react";
import { Firstname, Lastname } from "../App";

function CompC() {
  return (
    <>
      <Firstname.Consumer>
        {(fname) => {
          return (
            <Lastname.Consumer>
              {(lname) => {
                return (
                  <p>
                    My name is {fname} {lname}
                  </p>
                );
              }}
            </Lastname.Consumer>
          );
        }}
      </Firstname.Consumer>
    </>
  );
}

export default CompC;

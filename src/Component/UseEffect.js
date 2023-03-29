import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [prac, setprac] = useState("");

  function onchn(e) {
    setprac(e.target.value);
  }

  useEffect(() => {
    const id = setInterval(() => {
      console.log(prac);
      console.log("set");
    }, 2000);
    /*  return () => {
      console.log("cleanup");
      clearInterval(id);
    }; */
  }, [prac]);
  return (
    <>
      <form>
        <input type="text" value={prac} onChange={onchn} />
      </form>
    </>
  );
};

export default UseEffect;

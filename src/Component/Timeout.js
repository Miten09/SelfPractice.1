import React, { useEffect, useState } from "react";

function Timeout() {
  const [time, settime] = useState(Number());
  const [timedata, settimedata] = useState(0);
  const [timer, settimer] = useState(false);

  function onchn(e) {
    let number = Number(e.target.value);
    settime(number);
  }

  useEffect(() => {
    console.log("ab");
    let interval;
    if (timer) {
      console.log(timer);
      interval = setInterval(() => {
        settimedata((time) => time + 1);
        console.log("ab");
        console.log("ab1");
      }, 1000);
    }

    /*  return () => {
      console.log("return");
      clearInterval(interval);
    }; */
  }, [timer]);

  function handleSubmit(e) {
    e.preventDefault();
    settimedata(time);
    settimer(true);
  }
  return (
    <form onClick={handleSubmit}>
      <label>Time Counter : </label>
      <input
        type="text"
        name="time"
        id="time"
        value={time || ""}
        onChange={onchn}
      />
      <br />
      <br />

      <button type="submit">Submit</button>
      <br />
      <br />
      <div>{timedata}</div>
      <br />
      <br />
      <button type="reset">Reset</button>
    </form>
  );
}

export default Timeout;

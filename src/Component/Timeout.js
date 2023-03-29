import React, { useEffect, useState } from "react";

function Timeout() {
  const [time, settime] = useState(0);
  const [timedata, settimedata] = useState();

  function onchn(e) {
    settime(e.target.value);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      settimedata((time) => time + 1);
    }, 1000);

    return () => clearInterval(interval);
  });

  function handleSubmit(e) {
    e.preventDefault();
    settimedata(time);
  }
  return (
    <form onClick={handleSubmit}>
      <label>Time Counter : </label>
      <input type="text" name="time" id="time" value={time} onChange={onchn} />
      <br />
      <br />

      <button type="submit">Submit</button>
      <br />
      <br />
      <input type="text" name="addTime" id="addTime" value={timedata} />
      <br />
      <br />
      <button type="reset">Reset</button>
    </form>
  );
}

export default Timeout;

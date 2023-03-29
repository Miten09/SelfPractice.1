import React, { useState, useEffect } from "react";

function Api() {
  const [data, setdata] = useState([]);

  const api = "https://dummyjson.com/products";

  function getData() {
    /* const response = await fetch(api);
    const result = await response.json();
     
    setdata(result.products); */
    fetch(api)
      .then((response) => console.log("RESPONSE", response.json()))
      .then((response) => response.json())
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data.map((value) => {
        return (
          <p>
            <p>{value.title}</p>
            <p>{value.price}</p>
          </p>
        );
      })}
    </div>
  );
}

export default Api;

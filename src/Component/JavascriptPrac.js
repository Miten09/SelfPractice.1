import React from "react";

function JavascriptPrac() {
  let a = [5, 4, 3, 12, 31, 102, 3, 2, 22];

  let b = [
    {
      name: "vainik",
      id: 5,
      city: "surat",
    },
    {
      name: "miten",
      id: 12,
      city: "ahmedabad",
    },
    {
      name: "raj",
      id: 13,
      city: "ahmedabad",
    },
    {
      name: "arpit",
      id: 15,
      city: "pune",
    },
  ];

  return (
    <div>
      {a.filter((value) => {
        return value > 10;
      })}
      {b.splice(0, b[0].name, 0)}
    </div>
  );
}

export default JavascriptPrac;

import React, { useState } from "react";

const Form = (props) => {
  const [formValue, setFormValue] = useState({
    firstname: "",
    lastname: "",
    birthday: "",
    email: "",
    gender: "",
    hobbies: [],
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formValue);
    props.newvalue(formValue);
    setFormValue({
      firstname: "",
      lastname: "",
      birthday: "",
      email: "",
      gender: "",
      hobbies: [],
    });
  }

  function handleHobbies(event) {
    // const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    let a = [];
    if (checked) {
      a = [...formValue.hobbies, value];
    } else {
      a = formValue.hobbies.filter((e) => e !== value);
    }
    setFormValue({
      ...formValue,
      hobbies: a,
    });
  }

  function handleOnchange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  }

  return (
    <>
      <form method="post">
        <label>FirstName : </label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          value={formValue?.firstname}
          onChange={handleOnchange}
        />
        <br />
        <br />
        <label>LastName : </label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          value={formValue.lastname}
          onChange={handleOnchange}
        />{" "}
        <br />
        <br />
        <label>BirthDay </label>
        <input
          type="date"
          name="birthday"
          id="birthday"
          value={formValue.birthday}
          onChange={handleOnchange}
        />{" "}
        <br />
        <br />
        <label>Gmail : </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formValue.email}
          onChange={handleOnchange}
        />{" "}
        <br />
        <br />
        <label>Gender : </label>
        <input
          type="radio"
          name="gender"
          id="gender"
          value="Male"
          onChange={handleOnchange}
        />
        Male
        <input
          type="radio"
          name="gender"
          id="gender"
          value="Female"
          onChange={handleOnchange}
        />
        Female
        <input
          type="radio"
          name="gender"
          id="gender"
          value="Others"
          onChange={handleOnchange}
        />
        Others
        <br />
        <br />
        <label>Hobbies : </label>
        <input
          type="checkbox"
          id="checkbox"
          name="hobbies"
          checked={formValue.hobbies.some((v) => v === "Cricket")}
          value="Cricket"
          onChange={handleHobbies}
        />
        Cricket
        <input
          type="checkbox"
          id="checkbox"
          name="hobbies"
          value="Football"
          checked={formValue.hobbies.some((v) => v === "Football")}
          onChange={handleHobbies}
        />
        Football
        <input
          type="checkbox"
          id="checkbox"
          name="hobbies"
          value="Badminton"
          checked={formValue.hobbies.some((v) => v === "Badminton")}
          onChange={handleHobbies}
        />
        Badminton
        <input
          type="checkbox"
          id="checkbox"
          name="hobbies"
          value="Travelling"
          checked={formValue.hobbies.some((v) => v === "Travelling")}
          onChange={handleHobbies}
        />
        Travelling
        <br />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
};

export default Form;

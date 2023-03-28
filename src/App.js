import { createContext } from "react";
import { useState } from "react";
import "./App.css";
import CompA from "./Component/CompA";
import CompB from "./Component/CompB";
import CompC from "./Component/CompC";
import Form from "./Component/Form";
import FormDetails from "./Component/FormDetails";
import Usereducer from "./Component/Usereducer";

const Firstname = createContext();
const Lastname = createContext();

function App() {
  const [value, setvalue] = useState([]);

  function formdata(formValue) {
    console.log(formValue);
    setvalue([...value, formValue]);
  }

  return (
    <>
      <Form newvalue={formdata} />
      {value.map((v) => (
        <FormDetails
          first={v.firstname}
          last={v.lastname}
          birthday={v.birthday}
          email={v.email}
          gender={v.gender}
          hobbies={v.hobbies}
        />
      ))}
      {/* <Usereducer /> */}
      {/*  {
        <Firstname.Provider value={"miten soni"}>
          <Lastname.Provider value={"kumar shah"}>
            <CompB />
          </Lastname.Provider>
        </Firstname.Provider>
      } */}
    </>
  );
}

export default App;
export { Firstname, Lastname };

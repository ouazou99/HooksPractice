import React, { useState } from "react";

function App() {
  const [fullName, setFullname] = useState({ fName: " ", lName: " " });

  function updateFullName(event) {
    const { name, value } = event.target;

    // console.log(newName, newValue);
    setFullname((prev) => {
      if (name === "fName") {
        return { fName: value, lName: prev.lName };
      } else {
        return { lName: value, fName: prev.fName };
      }
    });
  }
  return (
    <div className="container">
      <h1>Hello</h1>
      <form>
        <input
          value={fullName.fName}
          onChange={updateFullName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={updateFullName}
          value={fullName.lName}
          name="lName"
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

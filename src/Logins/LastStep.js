import { useState } from "react";
import "./styles/lastly.css";

export default function LastStep({SubmitUser}) {
  const [firstname, setFirstName] = useState("");
  const [Lastname, setLastname] = useState("");

  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const [year, setyear] = useState(2000);

  let DOB = day+ "-"+ month + "-" + year

  const HandleSubmit = (e) => {
    e.preventDefault()

    const data = { firstname, Lastname, DOB }

    SubmitUser(data)
  };

  return (
    <div className="lastStep">
      <form onSubmit={HandleSubmit}>
        <div className="h3">
          To make BG a better place, We'd like to know you more. Thanks for your
          patience.
        </div>
        <div className="lastStep-container">
          <label htmlFor="Username">Your Name</label>
          <div className="lastStep-container-flex">
            <div className="lastStep-contents">
              <input
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstname}
                placeholder="First name"
                required
              ></input>
            </div>
            <div className="lastStep-contents1">
              <input
                type="text"
                onChange={(e) => setLastname(e.target.value)}
                value={Lastname}
                placeholder="Last name"
                required
              ></input>
            </div>
          </div>
        </div>

        <div className="lastStep-container">
          <label htmlFor="Username">Date of birth</label>
          <div className="lastStep-container-flex2">
            <div id="lastStep-contents1" className="lastStep-contents">
              <input
                type="number"
                onChange={(e) => setDay(e.target.value)}
                value={day}
                placeholder="Day"
                required
              ></input>
            </div>
            <div id="lastStep-contents2" className="lastStep-contents">
              <input
                type="number"
                onChange={(e) => setMonth(e.target.value)}
                value={month}
                placeholder="Month"
                required
              ></input>
            </div>
            <div id="lastStep-contents3" className="lastStep-contents">
              <input
                type="number"
                onChange={(e) => setyear(e.target.value)}
                value={year}
                placeholder="Year"
                required
              ></input>
            </div>
          </div>
        </div>

        <div className="loginBtn">
          <button>Let's Go</button>
        </div>
      </form>
    </div>
  );
}

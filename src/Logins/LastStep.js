import { useState } from "react";
import "./styles/lastly.css";
import { NavLink, useNavigate } from "react-router-dom";
import signupLogo from "../images/signupLogo.png";
import NIKE1 from "../images/NIKE1 (34) 1.png";
import axios from "axios"

import { useAuthContext } from "../hooks/useAuthContext";


export default function LastStep({ SubmitUser }) {
  const [firstname, setFirstName] = useState("");
  const [Lastname, setLastname] = useState("");
  const [isLoading, setIsloading] = useState(false);

  const navigate = useNavigate()


  const { user } = useAuthContext();


  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const [year, setyear] = useState(2000);

  let DOB = day + "-" + month + "-" + year;

  const HandleSubmit = (e) => {
    e.preventDefault();


    axios
    .post(
      "https://betarena.herokuapp.com/api/profile/last-step",
      {
        firstname: firstname,
        lastname: Lastname,
        DOB:DOB
      },
      {
        headers: {
          Authorization: `Bearer ${user.Token}`,
        },
      }
    )
    .then((response) => {
      setIsloading(false);
      navigate("/");
      console.log(response.data)
    })
    .catch((error) => {
      setIsloading(false);
    });
   
  };

  return (
    <div className="signUp-display">
      <div className="signUp-display-page">
        <div className="signUp-display-page-top">
          <img src={signupLogo} alt="signupLogo" width={"160px"} />
          <NavLink to="/"> &#10006;</NavLink>
        </div>
        <div className="signUp-display-page-text">
          <h1>BUILD THE BEST CRYPTO CASINO TOGETHER</h1>
          <img src={NIKE1} alt="sNIKE1" />
        </div>
        <div className="signUp-display-page-main">
          <div className="lastStep">
            <form onSubmit={HandleSubmit}>
              <div className="h3">
                To make BG a better place, We'd like to know you more. Thanks
                for your patience.
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
              {!isLoading ? (
                  <button type="submit">Let's Go </button>
                ) : (
                  <button disabled={isLoading}>Loading...</button>
                )}

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

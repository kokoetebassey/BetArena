import React from "react";
import footer1 from "../images/footer-logo.png";
import footer2 from "../images/footer-top arrow.png";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import "./styles/footer.css";

export default function History() {

 
    const [isVisible, setIsVisible] = useState(false);
  
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility);
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }, []);



  return (

    <div className="footer-general-cover">
      <div className="footer-general">
        <div className="footer-logo">
          <img src={footer1} alt="footer1" />
        </div>
        <div className="footer-contacts">
          <div className="footer-contacts-text">
            <div className="footer-text1">
              <h4>
                BETARENA is a community-based crypto casino that offers their
                players the best online casino experience possible! At
                BETARENA.GG, we are convinced that blockchain will change the
                online crypto gambling industry forever! Jump in and check it
                out for yourself! Have fun and earn crypto
              </h4>
            </div>
            <hr className="footer-contact-line" />
            <div className="footer-text2">
              <h4>JOIN US</h4>
              <h4>HELP CENTER</h4>
              <h4>TERMS OF SERVICE</h4>
              <h4>DEPOSIT BONUS TERM</h4>
              <h4>APP</h4>
              <h4>FORUM</h4>
              <h4>GAMBLE AWARE</h4>
              <h4>NEWS</h4>
              <h4>OFFICIAL MIRRORS</h4>
              <h4>AML</h4>
              <h4>SELF-EXCLUSSION</h4>
            </div>
          </div>

          <div className="footer-help">
            <h4>CONTACT US</h4>
            <h4>
              Help: <NavLink to="/">help.BETARENA.GG</NavLink>
            </h4>
          </div>
        </div>

        <hr className="footer-line" />

        <div className="footer-last">
          <div className="footer-last-row">
            <h4>1BTC=$24,388.77</h4>
          </div>
          <div className="footer-last-row2">
            <div className="copyright">
              <h4>©2022 BETARENA.GG ALL RIGHTS RESERVED</h4>
            </div>
            <div className="footer-top"
              // className={`scroll-to-top ${isVisible ? 'visible' : ''}`} 
              onClick={scrollToTop}>
              <div className="footer-top-arrow">
                <img src={footer2} alt="footer2" />
              </div>
              <div className="footer-top-logo">
                <h1>Top</h1>
              </div>
            </div>
            {/* <div className="footer-top">
              <div className="footer-top-arrow">
                <img src={footer2} alt="footer2" />
              </div>
              <div className="footer-top-logo">
                <h1>Top</h1>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="mobile-display-footer">
        <div className="mobile-footer">
          <div className="mobile-footer-logo">
            <img src={footer1} alt="footer1" />
            <h3>
              BETARENA is a community-based crypto casino that offers their
              players the best online casino experience possible! At
              BETARENA.GG, we are convinced that blockchain will change the
              online crypto gambling industry forever! Jump in and check it out
              for yourself! Have fun and earn crypto.
            </h3>

            <div className="mobile-footer-links">
              <div className="mobile-footer-links1">
                <NavLink to="/signup">JOIN US</NavLink>
              </div>
              <div className="mobile-footer-links2">
                <NavLink to="/signup">HELP</NavLink>
              </div>
              <div className="mobile-footer-links3">
                <NavLink to="/signup">CENTER</NavLink>
              </div>
              <div className="mobile-footer-links4">
                <NavLink to="/signup">TERMS OF SERVICE</NavLink>
              </div>
            </div>
            <div className="mobile-footer-links">
              <div className="mobile-footer-links5">
                <NavLink to="/signup">APP</NavLink>
              </div>
              <div className="mobile-footer-links6">
                <NavLink to="/signup">DEPOSIT</NavLink>
              </div>
              <div className="mobile-footer-links7">
                <NavLink to="/signup">BONUS TERMS</NavLink>
              </div>
              <div className="mobile-footer-links8">
                <NavLink to="/signup">FORUM</NavLink>
              </div>
            </div>
            <div className="mobile-footer-links">
              <div className="mobile-footer-links9">
                <NavLink to="/signup">GAMBLE AWARE</NavLink>
              </div>
              <div className="mobile-footer-links10">
                <NavLink to="/signup">NEWS</NavLink>
              </div>
              <div className="mobile-footer-links11">
                <NavLink to="/signup">OFFICIAL MIRRORS</NavLink>
              </div>
            </div>
            <div className="mobile-footer-links">
              <div className="mobile-footer-links12">
                <NavLink to="/signup">AML</NavLink>
              </div>
              <div className="mobile-footer-links13">
                <NavLink to="/signup">SELF-EXCLUSSION</NavLink>
              </div>
            </div>
          </div>

          <div className="mobile-footer-help">
            <h4>CONTACT US</h4>
            <h4>
              Help: <NavLink to="/">help.BETARENA.GG</NavLink>
            </h4>
          </div>

          <div className="mobile-footer-last">
            <h4>1BTC=$24,388.77</h4>

            <div className="mobile-footer-last-row2">
              <h4>©2022 BETARENA.GG ALL RIGHTS RESERVED</h4>
              <div className="mobile-footer-top">
                <div className="footer-top">
                  <div className="footer-top-arrow">
                    <img src={footer2} alt="footer2" />
                  </div>
                  <div className="footer-top-logo">
                    <h1>Top</h1>
                  </div>
                </div>
              </div>


            <div 
              className={`scroll-to-top ${isVisible ? 'visible' : ''}`} 
              onClick={scrollToTop}>
              <span>&#8593;</span> {/* Up arrow icon */}
            </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

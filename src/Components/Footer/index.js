import React from "react";
import "../../Assets/css/footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>
        <a className="email" href="mailto:Welshwellnessandcounseling@gmail.com">
          Email Me
        </a>
      </p>
      <p style={{ marginLeft: "30px" }}>
        <a
          className="facebook"
          href="https://www.facebook.com/welshwellnessandcounseling/?__tn__=%2Cd%2CP-R&eid=ARDzkoC_LyxjwfuVehZJ1VHG4xXhX2fQoVuNq1DEZkVMUCUlucIzA6EpLdX6y3-XXXna-vVLsYJPhYoj"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </p>
    </div>
  );
}

export default Footer;

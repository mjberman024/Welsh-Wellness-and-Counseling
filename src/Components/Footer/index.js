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
      <p>
        <a className="phone" href="tel:4433537479">
          Call Me (443) 353-7479
        </a>
      </p>
      <p>
        <a
          className="facebook"
          href="https://www.facebook.com/welshwellnessandcounseling"
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

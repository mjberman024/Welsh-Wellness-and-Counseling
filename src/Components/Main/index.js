import React from "react";
import "../../Assets/css/main.css";

function Main() {
  return (
    <div className="main">
      <div className="bio" style={{ flex: 1 }}>
        <p className="headshot">
          <img
            className="headshot_img"
            src="https://welsh-wellness.s3.amazonaws.com/images/headshot.JPG"
            alt="Erin headshot"
          />
        </p>
        <div className="bio_blurb">
          <p>
            I help children, adolescents, adults, caregivers, and people wanting
            to grow their families. I have a wealth of experience, training, and
            knowledge in many areas, and my goals are to work with my client to
            reach their highest potential. My therapeutic approach is focused on
            a collaborative effort to identify individual strengths and needs,
            develop meaningful goals, and to explore the necessary steps to
            attain those goals. My approach leads to increased self-esteem,
            learning, and attaining the supports that are out there — and
            teaching you to learn how to transition to a positive lens.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;

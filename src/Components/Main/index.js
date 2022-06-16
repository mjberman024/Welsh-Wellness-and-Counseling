import React, { useState } from "react";
import "../../Assets/css/main.css";
import { skills1, skills2 } from "../../Constants";
import forms from "../forms";

function Main() {
  const [headshotLoaded, setHeadshotLoaded] = useState(false);

  const renderForm = (item) => {
    return (
      <div
        key={item.title}
        style={{
          margin: "1%",
          height: "auto",
          width: `${(100 / forms.length) * 2 - 5}%`,
        }}
      >
        <a href={item.pdf} download={item.title} alt={item.title}>
          <div>
            <img
              alt={item.title}
              src={item.image}
              style={{ width: "100%", border: "1px black solid" }}
            />
            <p>{item.title}</p>
          </div>
        </a>
      </div>
    );
  };

  return (
    <div className="main">
      <div className="bio">
        <p className="headshot">
          <img
            onLoad={() => setHeadshotLoaded(true)}
            className="headshot_img"
            style={headshotLoaded ? {} : { display: "none" }}
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

      <div className="creds">
        <h1>About Me</h1>
        <div className="about_statement">
          <h2>The Therapist</h2>
        </div>
        <div style={{ display: "flex" }}>
          <img
            className="therapist_image"
            src="https://welsh-wellness.s3.amazonaws.com/images/fam5.jpg"
            alt="Erin Therapist"
          />
          <div>
            <p>
              Erin has provided counseling services for children, adolescents,
              caregivers, families struggling to conceive, families who have
              children with learning differences and genetic disorders. She
              works in a school for children with learning differences and has
              successfully opened her private practice to continue helping
              families outside of the school day. Her goal is to help all of her
              clients manage various emotional and behavioral concerns and
              provide them with tools to help them be successful throughout
              their life. Erin is an experienced, warm, and strength, solution,
              and cognitive focused counselor, who brings her clinical skills to
              her private practice.
            </p>

            <p>
              Erin earned her graduate degree in Professional Counseling from
              Loyola University Maryland, where she received a master’s in
              school counseling. She then continued to gain her NCC and LCPC.
            </p>
            <p>
              Erin loves skiing, yoga, and spending her time with her family.
              She is also a huge believer in counseling and isn't one to shy
              away from going to her own counselor. She loves to continue her
              education and learn from every person she meets. She believes that
              her learning is something that will never end, and that is what
              makes her so passionate about counseling and helping her clients
              achieve success no matter what out of the box idea it takes. Erin
              is also married and has two young sons.
            </p>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#60a3d9" }}>
        <h2>Skills</h2>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            {skills1.map((skill) => (
              <p key={skill} style={{ textAlign: "start" }}>
                {skill}
              </p>
            ))}
          </div>
          <img
            className="therapist_image"
            src="https://welsh-wellness.s3.amazonaws.com/images/erin_about.jpg"
            alt="Erin Therapist"
          />
          <div style={{ flex: 1 }}>
            {skills2.map((skill) => (
              <p key={skill} style={{ textAlign: "start" }}>
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="services">
        <h2>Services</h2>
        <div style={{ display: "flex" }}>
          <div>
            <p>A treatment that is as unique as your situation</p>
            <p>
              Erin is a believer that each case should be treated as each client
              is unique and therefore utilizes an eclectic sources of
              techniques.{" "}
            </p>
            <p>
              When working with children as young as four, she believes that
              parent involvements is essential and likes to work with both the
              parents and the child individually and in a group setting. This
              may include adding in siblings or other family members so everyone
              can work as a whole to benefit the child and family.{" "}
            </p>
            <p>
              Erin wants her clients to learn how to control their negative
              self-talk, and therefore, will utilize cognitive behavioral
              strategies.
            </p>
            <p>
              She also does not shy away from multisensory and tactile work with
              her younger clientele.
            </p>
          </div>
          <img
            className="therapist_image"
            src="https://welsh-wellness.s3.amazonaws.com/images/e+and+j.JPG"
            alt="Erin Therapist"
          />
        </div>
        <h2>Additional Credentials</h2>
        <p>
          In addition to her state licenses, Erin is a National Certified
          Counselor (NCC). The NCC is the premier certification for the
          counseling profession. Holding the NCC demonstrates to colleagues and
          the public that you have voluntarily met high national standards for
          the practice of counseling.
        </p>
        <p>
          Erin is also a member of the ACA (The American Counseling
          Association).
        </p>
      </div>
      <div className="forms">
        <h1>Forms</h1>
        <div className="formPdfs">{forms.map((item) => renderForm(item))}</div>
      </div>
    </div>
  );
}

export default Main;

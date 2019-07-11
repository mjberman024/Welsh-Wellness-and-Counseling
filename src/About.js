import React, { Component } from 'react';
import history from './history';
// import { Link } from 'react-router-dom';

export default class About extends Component {
  componentDidMount() {}

  goHome = e => {
    e.preventDefault();
    history.push('/');
  };

  render() {
    return (
      <div>
        <h2>The Therapist</h2>
        <p>
          Erin is a Licensed Professional Counselor and certified school
          counselor at the Jemicy School. She has been practicing since 2012.
        </p>
        <p>
          She has provided counseling services for children, adolescents,
          caregivers, families struggling to conceive, families who have
          children with learning differences and genetic disorders. She works in
          a school for children with learning differences and has successfully
          opened her private practice to continue helping families outside of
          the school day. Her goal is to help all of her clients manage various
          emotional and behavioral concerns and provide them with tools to help
          them be successful throughout their life. Erin is an experienced,
          warm, and strength, solution, and cognitive focused counselor, who
          brings her clinical skills to her private practice.
        </p>
        Erin earned her graduate degree in Professional Counseling from Loyola
        University Maryland, where she received a master’s in school counseling.
        She then continued to gain her NCC and LCPC.
        <p>
          Erin loves skiing, yoga, and spending her time with her family. She
          also is a huge believer in counseling and isn't one to shy away from
          going to her own counselor. She loves to continue her education and
          learn from every person she meets. She believes that her learning is
          something that will never end, and that is what makes her so
          passionate about counseling and helping her clients achieve success no
          matter what out of the box idea it takes. Erin is also married and has
          two young sons.
        </p>
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
        <h2>Skills</h2>
        <ul>
          <li>suicidal ideation</li>
          <li>cutting</li>
          <li>depression</li>
          <li>generalized anxiety</li>
          <li>anxiety</li>
          <li>obsessive compulsive disorder (OCD)</li>
          <li>exposure therapy</li>
          <li>gender identity /sexual identity/LGBTQ</li>
          <li>learning differences</li>
          <li>school related concerns</li>
          <li>parenting support</li>
          <li>work and career issues</li>
          <li>stress management</li>
          <li>impulsivity/focus/ADHD</li>
          <li>sensory disorders</li>
          <li>perinatal/ postpartum depression</li>
          <li>family counseling</li>
          <li>conflict resolution</li>
          <li>children struggling with divorce</li>
          <li>
            working with families who have children with genetic disorders
          </li>
        </ul>
      </div>
    );
  }
}

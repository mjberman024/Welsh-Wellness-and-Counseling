import React, { Component } from 'react';
import history from '../history';
import './Home.css';

export default class Home extends Component {
  componentDidMount() {}

  goHome = e => {
    e.preventDefault();
    history.push('/about');
  };

  render() {
    return (
      <div className="about">
        <img
          className="headshot"
          src="https://welsh-wellness.s3.amazonaws.com/headshot.JPG"
          alt="Erin headshot"
        />
        <div className="about_summary">
          <h2>Hi I’m Erin</h2>
          <p className="desc">
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
    );
  }
}

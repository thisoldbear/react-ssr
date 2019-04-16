import React from "react";
import Text from './text';

const About = () => (
  <div>
    <h1>About</h1>
    <Text text={'This about component can be server side rendered'} />
    <button onClick={() => {
      alert('Hello from About');
    }}>Click me</button>
  </div>
);

export default About;

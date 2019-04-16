import React from "react";
import Text from './text';

const Home = () => (
  <div>
    <h1>Home</h1>
    <Text text={'This home component can be server side rendered'} />
    <button onClick={() => {
      alert('Hello from Home');
    }}>Click me</button>
  </div>
);

export default Home;

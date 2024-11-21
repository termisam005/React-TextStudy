import React from 'react';
import './App.css';
import Hello from './Hello';
import Wrapper from './Wrapper';


function App() {

  return (
    <Wrapper>
        <div className="gray-box"></div>
        <Hello name={'리액트'} color={'red'} isSpecial />
        <Hello color="pink"/>
    </Wrapper>
  );
}

export default App;
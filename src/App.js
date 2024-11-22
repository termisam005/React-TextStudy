import React from 'react';
import './App.css';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample3 from './InputSample3';
import UserList from './UserList';


function App() {

  return (
    // <Wrapper>
    //     <div className="gray-box"></div>
    //     <Hello name={'리액트'} color={'red'} isSpecial />
    //     <Hello color="pink"/>
    // </Wrapper>
    // <Counter />
    <UserList />
  );
}

export default App;
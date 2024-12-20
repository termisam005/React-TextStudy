import React from 'react';
import { useRef, useState } from 'react';
import './App.css';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample3 from './InputSample3';
import UserList from './UserList';
import UsersList from './UsersList';
import CreateUser from './CreateUser';


function App() {

  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const { username, email } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user]);

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };

  return (
    <>
    {/* // <Wrapper>
    //     <div className="gray-box"></div>
    //     <Hello name={'리액트'} color={'red'} isSpecial />
    //     <Hello color="pink"/>
    // </Wrapper>
    // <Counter />
    // <UsersList /> */}
    <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
    <UsersList users={users} />
    </>
  );
}

export default App;
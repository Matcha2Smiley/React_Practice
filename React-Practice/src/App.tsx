import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function MyButton({count, onClick}){
  return (
    <button onClick={onClick}>Clicked {count} times</button>
  );
}

const user = {
  name:'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize:90,
};

const products = [
  {title:'Cabbage',id:1},
  {title:'Garic',id:2},
  {title:'Apple',id:3},
];

const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

function Profile(){
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count +1);
  }
  return (
    <>
      <div>
        <h1>Welcome to my app</h1>
        <MyButton count={count} onClick={handleClick}/>
        <MyButton count={count} onClick={handleClick}/>
        <Profile/>
        <ul>{listItems}</ul>
      </div>
    </>
  )
}

export default App

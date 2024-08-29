import { useState } from 'react';

function Lamp() {
  // let status = false;
  const [status, setStatus] = useState(false); // ben trong useState truyen gia tri gi vao thi status nhan duoc gia tri do
  const handleClick = () => {
    setStatus(!status);
  }

  return (
    <>
      <button onClick={handleClick}>{status ? "Off" : 'On'}</button>
      <div>{status ? "Den dang bat" : 'Den dang tat'}</div>
    </>
  );
}

export default Lamp;
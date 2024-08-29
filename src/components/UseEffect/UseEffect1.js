import { useEffect } from 'react';

function UseEffect1() {

  useEffect(() => {
    let listItem = document.querySelectorAll('ul li');
    console.log(listItem);
  })

  return (
    <>
      <ul>
        <li>Muc 1</li>
        <li>Muc 2</li>
        <li>Muc 3</li>
      </ul>
    </>
  );
}

export default UseEffect1;
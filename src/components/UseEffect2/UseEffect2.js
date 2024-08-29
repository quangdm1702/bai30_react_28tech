import { useEffect, useState } from 'react';
import './UseEffect2.scss';
function UseEffect3() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
        // console.log(data.products);
        setData(data.products);
      })
  }, []);

  console.log(data);


  return (
    <>
      <div className='product__list'>
        {data.map(item => (
          <div className='product__item' key={item.id}>
            <div className='product__image'>
              <img src={item.thumbnail} alt={item.title}></img>
            </div>
            <h3 className='product__title'>
              {item.title}
            </h3>
            <div className='product__price'>
              {item.price}$
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default UseEffect3;
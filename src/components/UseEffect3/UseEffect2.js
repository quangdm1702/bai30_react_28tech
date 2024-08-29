import { useEffect, useState } from 'react';
import './UseEffect2.scss';
function UseEffect4() {
  const limit = 20;
  const [data, setData] = useState([]);
  const [pageActive, setPageActive] = useState(0);
  const [quantityPage, setQuantityPage] = useState(0);

  useEffect(() => {
    fetch(`https://dummyjson.com/products?skip=${pageActive * limit}&limit=${limit}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data.products);
        setData(data.products);
        setQuantityPage(Math.ceil(data.total / limit));
      })
  }, [pageActive]);

  const handleClickPagination = (pageActive) => {
    setPageActive(pageActive);
  }

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

      <ul className='pagination'>
        {[...Array(quantityPage)].map((_, pageActive) => (
          <li className='pagination__item' key={{ pageActive }} onClick={() => { handleClickPagination(pageActive) }}>{pageActive + 1}</li>
        ))}
      </ul>
    </>
  );
}

export default UseEffect4;
import './Cart.scss';
import { useState } from 'react';
function Cart() {
  const unitPrice = 120000;
  const [quantity, setQuantity] = useState(1);
  const handleOnChange = (e) => {
    const updateQuantity = parseInt(e.target.value); // e.target.value tra ra gia tri la string ne can chuyen so luong ve so nguyen
    setQuantity(updateQuantity);
  }
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Ten san pham</th>
            <th>So luong</th>
            <th>Don gia</th>
            <th>Thanh tien</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Giay the thao nam cao cap</td>
            <td>
              <input defaultValue={quantity} type='number' min={1} onChange={handleOnChange}></input>
            </td>
            <td>{unitPrice}</td>
            <td>{unitPrice * quantity || 0}d</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Cart;
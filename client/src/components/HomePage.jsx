import { useState, useEffect } from 'react';

export default function HomePage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://e-commerce-qys3.onrender.com/api')
      const data = await res.json()
      console.log(data);
      setItems(data)
    };
    fetchData()
    .catch(err => console.error(err))
  }, []);

  return (
    <div>
      <h1>Items</h1>
      {items.map((item) => {
        return (
          <div key={item.name}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <p>{item.numberInStock}</p>
            <p>{item.category}</p>
          </div>
        );
      })}
    </div>
  );
}

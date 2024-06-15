import { useState, useEffect } from 'react';

export default function HomePage() {
  const [foodItems, setFoodItems] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // API address is:
      // https://e-commerce-qys3.onrender.com/api
      // Test locally:
      // https://localhost:3000
      const res = await fetch('https://e-commerce-qys3.onrender.com/api');
      const data = await res.json();
      console.log(data);
      setFoodItems(data.allFoodItems);
      setCategories(data.allCategories);
    };
    fetchData().catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="bg-lime-500 h-[500px]"></div>
      <div className='grid grid-cols-2 gap-5'>
        {foodItems.map((item) => {
          return (
            <div key={item.name} className='relative p-2 border border-red-500'>
              <div className='absolute top-0 right-0 bg-green-500 p-4' ></div>
              <div className='rounded-md bg-slate-200'>
                <h3 className='font-semibold text-xl'>{item.name}</h3>
                <p>{item.description}</p>
                <p>Category: {item.category.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

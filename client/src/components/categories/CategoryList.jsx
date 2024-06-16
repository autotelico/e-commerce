import { useState, useEffect } from 'react';

export default function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://e-commerce-qys3.onrender.com/')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data.allCategories);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
        <a href="/create/category">Create New Category</a>
      
        {categories.map((category) => {
          return (
            <div key={category._id}>
              <p>{category.name}</p>
              <a href={`/delete/category/${category._id}`}>Delete Category</a>
            </div>
          );
        })}
      
    </div>
  );
}

import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function CategoryDelete() {
  const [relatedFoodItems, setRelatedFoodItems] = useState([]);

  const navigate = useNavigate();
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      'https://e-commerce-qys3.onrender.com/delete/category/' + params.id,
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: params.id }),
      }
    );
    const data = await response.json();
    console.log(data);
    if (data.error) {
      setRelatedFoodItems(data.foodItems);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-[500px] p-2 bg-slate-200"
    >
      <div className="mx-auto text-center">
        <ul>
          {' '}
          {relatedFoodItems.length > 0 && 'Delete related items:'}
          {relatedFoodItems.map((item) => (
            <li key={item._id}><a href={`delete/item/${item._id}`}>{item.name}</a></li>
          ))}
        </ul>
        <p className="font-semibold">
          Are you sure you want to delete this item?
        </p>
        <div className="flex gap-2 items-center justify-center">
          <button className="bg-red-500 py-2 px-4 rounded-md">Confirm</button>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="bg-slate-500 py-2 px-4 rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

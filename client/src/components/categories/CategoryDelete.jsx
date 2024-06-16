import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function CategoryDelete() {
  const [relatedFoodItems, setRelatedFoodItems] = useState([]);
  const [currentPassword, setCurrentPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([])
    const response = await fetch(
      'https://e-commerce-qys3.onrender.com/delete/category/' + params.id,
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: params.id, password: currentPassword }),
      }
    );
    const data = await response.json();
    console.log(data);
    if (data.error) {
      setRelatedFoodItems(data.foodItems);
    }
    if (data.validationErrors) {
      setErrors(data.validationErrors);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-[500px] p-2 bg-slate-200"
    >
      {errors.length > 0 && (
        <ul>
          {errors.map((error) => (
            <li key={error.msg} className="text-red-500">
              {error.msg}
            </li>
          ))}
        </ul>
      )}
      <div className="flex flex-col gap-3 mx-auto text-center">
        <ul>
          {' '}
          {relatedFoodItems.length > 0 && 'Delete related items:'}
          {relatedFoodItems.map((item) => (
            <li key={item._id} className="text-left">
              <a href={`delete/item/${item._id}`}>{item.name}</a>
            </li>
          ))}
        </ul>
        <label htmlFor="password">Enter admin password to proceed:</label>
        <input
          type="text"
          id="password"
          name="password"
          onChange={(e) => setCurrentPassword(e.target.value)}
          className="w-[40%] mx-auto rounded-md px-2"
        />
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

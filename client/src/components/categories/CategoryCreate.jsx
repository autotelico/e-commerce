import { useState, useEffect } from 'react';

export default function AddItemForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [successMsg, setSuccessMsg] = useState('')
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    const response = await fetch('https://e-commerce-qys3.onrender.com/category/add', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description }),
    });
    console.log(JSON.stringify({ name, description }));
    const data = await response.json();
    console.log(data);
    if (data.errors && !!data.errors.length) {
      setErrors(data.errors);
    }
    if (data.success) {
      setSuccessMsg(data.success)
    }
  };

  return (
    <>
      <a href="/">Back to Home Page</a>
      <div>
        <form
          action="http://localhost:3000/category/add"
          method="POST"
          className="mx-auto w-[500px] p-2 flex flex-col bg-slate-200"
        >
          <span className='text-green-500'>{successMsg}</span>
          {errors.map((error) => (
            <span key={error.msg} className='text-red-500'>{error.msg}</span>
          ))}
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            placeholder="Category description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </>
  );
}

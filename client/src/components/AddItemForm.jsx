export default function AddItemForm() {
  return (
    <>
      <a href="/">Back to Home Page</a>
      <form action="" method="POST">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <button>Submit</button>
      </form>
    </>
  );
}

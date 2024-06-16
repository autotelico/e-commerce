import '../index.css';

export default function Header() {
  return (
    <header>
      <div className="flex gap-5 justify-center bg-[#383434] hover:bg-[#242424] text-white text-xl py-6">
        <a href="/" className="">
          Home Page
        </a>
        <a href="/create/category" className="">
          Add C
        </a>
        <a href="/categories">Categories</a>
      </div>

      <div className="bg-red-500 flex space-evenly justify-around">
        <div>
          <img src="" alt="" />
          image here
        </div>
        <div>
          <form action="">
            <input type="text" id="search-bar" name="q" />
            <button>Search</button>
          </form>
        </div>
        <div id="">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </header>
  );
}

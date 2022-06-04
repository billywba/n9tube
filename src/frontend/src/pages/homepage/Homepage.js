import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <div className="text-white">

        <div className="Title text-7xl">
          <h1>N9TUBE</h1>
        </div>
        
        <div className="Title text-3xl">
          <h2>YouTube watch room</h2>
        </div>

        <Link className="btn btn-blue py-4 px-4" to="/room">
          <button type="button" className="bg-blue-500 hover:bg-blue-700 
          text-white font-bold py-2 px-4 border rounded">
            Create Room
          </button>
        </Link>

        <Link className="btn btn-blue py-4 px-4" to='/*'>
          <button type="button" className="bg-blue-500 hover:bg-blue-700 
          text-white font-bold py-2 px-4 border rounded">
            Browse Rooms
          </button>
        </Link>

      </div>
    </>
  );
}

export default Homepage;

import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
    <div className="text-white">
      <h1>N9TUBE</h1>
      <Link className="btn btn-blue" to="/room">
        <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border  rounded">
          Create Room
        </button>
      </Link>
    </div>
    </>
  );
}

export default Homepage;

import { Link } from "react-router-dom";
import { Dropdown } from "flowbite-react"

function Navbar() {
    return (
        <div className="flex-row flex bg-zinc-800 text-white px-8 py-5 justify-between">
            <div className="items-center flex justify-center space-x-4">
                <b>N9Tube</b>

                <div className="hover:bg-zinc-600">
                    <Link to='/'> Home </Link>
                </div>

                <div className="hover:bg-zinc-600">
                    <Link to='/room'> Create Room </Link>
                </div>

                <div className="hover:bg-zinc-600">
                    {/* change this to rooms page when its complete */}
                    <Link to="/*"> Browse Rooms </Link>
                </div>
            </div>

            <div className="flex-end">
                <Dropdown label={<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>}>
                    <Dropdown.Item>
                        <a href="/*"> About </a>
                    </Dropdown.Item>
                </Dropdown>
            </div>

        </div>
    );
}

export default Navbar;
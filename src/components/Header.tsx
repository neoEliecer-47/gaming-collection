import Link from "next/link";
import User from "./icons/User";

const Header = () => {
    return (
      <header className="backdrop-blur-[2px] flex justify-center items-center gap-4 p-8 w-full h-8 bg-transparent overflow-hidden ">
        <h1 className=" m-4 bg-gray-600 text-white p-[0.10rem] rounded-md color-black text-sm">
          Gaming Library
        </h1>
        <input
          type="text"
          placeholder="Search game..."
          className="p-2 m-0 rounded-lg bg-transparent backdrop-blur-[5px] border-[1px] border-gray-800"
        />
        <Link href='/user' className="p-0 m-0">
          <User />
        </Link>
      </header>
    );
  };
  
  export default Header;
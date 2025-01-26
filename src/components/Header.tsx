const Header = () => {
    return (
      <header className="flex justify-center items-center gap-8 p-8 w-full h-8 bg-blue-300 overflow-hidden">
        <h1 className="p-0 m-4 bg-green-300 color-black text-sm">
          Gaming Library
        </h1>
        <input
          type="text"
          placeholder="Search a game..."
          className="p-2 m-0 rounded-lg"
        />
      </header>
    );
  };
  
  export default Header;
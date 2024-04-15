import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-white border-none"> {/* Apply border-none class here */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              {/* Logo */}
              <Link to="/" className="text-black font-bold text-2xl">Your Logo</Link> {/* Increase font size with text-2xl */}
            </div>
          </div>
          <div className="flex items-center">
            {/* Navigation Links */}
            <div className="hidden ">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-black hover:text-gray-800 px-3 py-2 rounded-md text-lg font-medium">Home</Link> {/* Increase font size with text-lg */}
                <Link to="/about" className="text-black hover:text-gray-800 px-3 py-2 rounded-md text-lg font-medium">About</Link> {/* Increase font size with text-lg */}
                <Link to="/contact" className="text-black hover:text-gray-800 px-3 py-2 rounded-md text-lg font-medium">Contact</Link> {/* Increase font size with text-lg */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

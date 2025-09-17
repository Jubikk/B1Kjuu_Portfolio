import react from 'react';

const Navigation = () => {
   return (
    <nav className="fixed right-0 top-1/2 transform -translate-y-1/2 p-4">
      <ul className="flex flex-col space-y-6">
        <li>
          <a 
            href="#" 
            className="block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg transition-all duration-300 text-center min-w-[140px]"
          >
            About Me
          </a>
        </li>
        <li>
          <a 
            href="#" 
            className="block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg transition-all duration-300 text-center min-w-[140px]"
          >
            Projects
          </a>
        </li>
        <li>
          <a 
            href="#" 
            className="block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg transition-all duration-300 text-center min-w-[140px]"
          >
            Get in Touch!
          </a>
        </li>
      </ul>
    </nav>
   );
};

export default Navigation;
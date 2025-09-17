import react from 'react';
import { useEffect, useState} from 'react';
import {Info, FolderKanban, CircleUser} from 'lucide-react';



const Navigation = () => {


   return (
    <nav className="fixed right-0 top-1/2 transform -translate-y-1/2 p-4">
      <ul className="flex flex-col space-y-6">
        <li>
          <a 
            href="#" 
            className="block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg transition-all duration-300 text-center min-w-[140px]"
          >
            About Me <Info className="inline-block ml-2 mb-1" size={16} />
          </a>
        </li>
        <li>
          <a 
            href="#" 
            className="block px-6 py-3 text-white bg-blue-600  hover:bg-blue-700 font-medium rounded-lg transition-all duration-300 text-center min-w-[140px]"
          > 
            Projects <FolderKanban className="inline-block ml-2 mb-1" size={16} />
          </a>
        </li>
        <li>
          <a 
            href="#" 
            className="block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg transition-all duration-300 text-center min-w-[140px]"
          >
            Get in Touch! <CircleUser className="inline-block ml-2 mb-1" size={16} />
          </a>
        </li>
      </ul>
    </nav>
   );
};

export default Navigation;
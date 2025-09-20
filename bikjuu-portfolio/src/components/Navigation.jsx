import { useEffect, useState} from 'react';
import {Info, FolderKanban, CircleUser} from 'lucide-react';



const Navigation = () => {

  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  }

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleScroll = (event) => {
    setIsScrolling(true);
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
    setScrollTimeout(timeout);

    return () => clearTimeout(timeout);
  }
  , [isScrolling]);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

   return (
    <nav className="fixed right-0 top-1/2 transform -translate-y-1/2 p-3">
      <ul className="flex flex-col space-y-4">
        <li>
          <a 
            href="#aboutMe" 
            className="block px-6 py-4 text-white bg-blue-600/70 hover:bg-blue-700/50 font-medium rounded-4xl transition-all duration-300 text-center min-w-[100px]"
          >
            { (isScrolling || clicked) ? (
              <Info className="inline-block" size={16} />
            ) : (
              <div>
            About Me 
              </div>
            )}
          </a>
        </li>
        <li>
          <a 
            href="#projects" 
            className="block px-6 py-4 text-white bg-blue-600/70  hover:bg-blue-700/50 font-medium rounded-4xl transition-all duration-300 text-center min-w-[140px]"
          >
            {(isScrolling || clicked) ? (
              <FolderKanban className="inline-block" size={16} />
            ) :  (
            
            <>
            Projects 
            </>
            )}
          </a>
        </li>
        <li>
          <a 
            href="../pages/Contact.jsx" 
            className="block px-6 py-4 text-white bg-blue-600/70 hover:bg-blue-700/50 font-medium rounded-4xl transition-all duration-300 text-center min-w-[140px]"
          > 
            {(isScrolling || clicked) && isVisible ? (
              <CircleUser className="inline-block" size={16} />
            ) : (
            <>
            Get in Touch! 
            </>
            )}
          </a>
        </li>
      </ul>
    </nav>
   );
};

export default Navigation;
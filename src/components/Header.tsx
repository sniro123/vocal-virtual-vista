import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50 transition-all duration-300">
      <div className={`bg-white transition-all duration-300 ${scrolled ? 'py-2 shadow-md' : 'py-4'}`}>
        <div className="container mx-auto px-4">
          <Link to="/" className="block w-48">
            <img src="/logo.png" alt="Vocal Coach Logo" className="w-full h-auto" />
          </Link>
        </div>
      </div>
      <nav className="bg-primary">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center space-x-8">
            {['About', 'Prices', 'FAQ', 'Book a Lesson', 'Contact', 'Recommendations'].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-white py-4 block hover:text-accent transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
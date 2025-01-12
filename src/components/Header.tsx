import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--header-height', `${height}px`);
      }
    };

    updateHeaderHeight();
    const resizeObserver = new ResizeObserver(updateHeaderHeight);
    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <header ref={headerRef} className="fixed w-full z-50 transition-all duration-300">
      <div className={`bg-white transition-all duration-300 ${scrolled ? 'py-2 shadow-md' : 'py-4'}`}>
        <div className="container mx-auto px-4 flex flex-col items-center animate-fade-in">
          <Link to="/" className="block w-32 hover:scale-105 transition-transform duration-300">
            <img src="/lovable-uploads/96b90545-c7fd-4bea-beaa-a3ffc3bfdfe1.png" alt="Rose Vocal Studio Logo" className="w-full h-auto" />
          </Link>
          <h1 className="mt-2 text-xl text-primary animate-slide-in font-serif">Rose Vocal Studio</h1>
        </div>
      </div>
      <nav className="bg-primary">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center space-x-8 space-x-reverse">
            {[
              'אודות',
              'מחירים',
              'שאלות נפוצות',
              'קביעת שיעור',
              'צור קשר',
              'המלצות'
            ].map((item, index) => (
              <li key={item} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <Link
                  to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-white py-4 block hover:text-accent transition-colors hover:scale-105 transform duration-300 font-bold"
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
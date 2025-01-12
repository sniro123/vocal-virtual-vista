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
        <div className="container mx-auto px-4 flex justify-center animate-fade-in">
          <Link to="/" className="block w-32 hover:scale-105 transition-transform duration-300">
            <img src="/lovable-uploads/96b90545-c7fd-4bea-beaa-a3ffc3bfdfe1.png" alt="Rose Vocal Studio Logo" className="w-full h-auto" />
          </Link>
        </div>
      </div>
      <nav className="bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex justify-center py-4">
            <h1 className="text-xl text-white animate-slide-in font-serif font-bold">
              Rose Vocal Studio
            </h1>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
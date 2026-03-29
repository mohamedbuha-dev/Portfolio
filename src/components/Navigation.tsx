import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { Link, useLocation } from "react-router";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className={`
        w-full max-w-3xl rounded-full border 
        transition-all duration-300 ease-in-out
        ${scrolled 
          ? "bg-white/90 backdrop-blur-xl border-gray-200/50 shadow-lg shadow-black/5" 
          : "bg-white/70 backdrop-blur-md border-white/40 shadow-sm"
        }
        p-2 pl-3 md:p-3 md:pl-6 flex items-center justify-between
      `}>
        
        {/* Logo & Full Name */}
        <Link to="/" onClick={handleHomeClick} className="flex items-center gap-2 shrink-0">
          <div className="bg-gradient-to-tr from-emerald-500 to-purple-600 p-1.5 rounded-lg text-white">
            <Code2 size={16} className="md:w-[18px] md:h-[18px]" />
          </div>
          <span className="font-bold text-gray-900 text-xs sm:text-sm md:text-base whitespace-nowrap">
            Mohamed Abuohagar
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 bg-gray-100/50 p-1 rounded-full border border-gray-200/30 ml-4">
          {links.map((item) => {
            const isActive = item.path === "/" 
              ? location.pathname === "/" 
              : location.pathname.startsWith(item.path) && item.path !== "/";
            
            return (
              <Link 
                key={item.name}
                to={item.path}
                onClick={item.path === "/" ? handleHomeClick : undefined}
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all ${
                  isActive 
                    ? "bg-white text-gray-900 shadow-sm" 
                    : "text-gray-600 hover:bg-white hover:text-gray-900 hover:shadow-sm"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button & CTA */}
        <div className="flex items-center gap-2">
          <Link to="/contact" className="hidden sm:inline-flex px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 hover:shadow-lg hover:-translate-y-1 transition-all">
            Let's Talk
          </Link>
          <button 
            className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full mt-2 w-[calc(100%-2rem)] max-w-3xl bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-xl p-2 flex flex-col gap-1 md:hidden">
          {links.map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              onClick={(e) => {
                setIsOpen(false);
                if (item.path === "/") {
                  handleHomeClick(e);
                }
              }}
              className="px-4 py-3 text-center font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl transition-all"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
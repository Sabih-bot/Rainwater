import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Droplet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const navLinks = [{
  name: "Home",
  path: "/"
}, {
  name: "Categories",
  path: "/categories"
}, {
  name: "Products",
  path: "/products"
}, {
  name: "Facts & Methods",
  path: "/facts"
}, {
  name: "Usage Tips",
  path: "/tips"
}, {
  name: "Latest Developments",
  path: "/developments"
}, {
  name: "Contact Us",
  path: "/contact"
}];
export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "glass-effect shadow-md py-2" : "bg-transparent py-4")}>
      <nav className="section-container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Droplet className="h-6 w-6 text-primary animate-droplet" />
          </div>
          <span className="font-display text-xl font-bold text-foreground">
            Rain<span className="text-primary">​Irrigation</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => <Link key={link.path} to={link.path} className={cn("px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200", location.pathname === link.path ? "bg-primary text-primary-foreground" : "text-foreground/80 hover:text-foreground hover:bg-muted")}>
              {link.name}
            </Link>)}
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Mobile Navigation */}
        <div className={cn("absolute top-full left-0 right-0 glass-effect shadow-lg lg:hidden transition-all duration-300 overflow-hidden", isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0")}>
          <div className="p-4 flex flex-col gap-2">
            {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={cn("px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200", location.pathname === link.path ? "bg-primary text-primary-foreground" : "text-foreground/80 hover:text-foreground hover:bg-muted")}>
                {link.name}
              </Link>)}
          </div>
        </div>
      </nav>
    </header>;
};
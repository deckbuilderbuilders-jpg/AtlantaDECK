import { Button } from "@/components/ui/button";
import PortfolioPopup from './components/PortfolioPopup';

const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-foreground">
            Atlanta<span className="text-sm align-super">®</span>
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#decks" className="text-nav-text hover:text-foreground transition-colors">
            Decks
          </a>
          <a href="#process" className="text-nav-text hover:text-foreground transition-colors">
            Process
          </a>
          <PortfolioPopup />
          <a href="#faq" className="text-nav-text hover:text-foreground transition-colors">
            FAQ
          </a>
          <Button variant="outline" size="sm">
            <a href="tel:+14042595099">Call Now 404 259 5099</a>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="outline" size="sm">
            Menu
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

const Footer = () => {
  return (
    <footer className="bg-hero-text text-background py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Atlanta Deck Co<span className="text-sm align-super">®</span>
            </h3>
            <p className="text-background/80 mb-6 max-w-md">
              Atlanta's trusted deck and patio builders. We combine transparent pricing 
              with exceptional craftsmanship to create outdoor spaces you'll love.
            </p>
            <div className="text-background/80">
              <p>Licensed & Insured</p>
              <p>Serving Greater Atlanta Area</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Services</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">Custom Decks</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Patio Construction</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Outdoor Kitchens</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Pergolas & Gazebos</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Deck Repairs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Contact</h4>
            <div className="space-y-2 text-background/80">
              <p>(404) 259-5099</p>
              <p>info@atlantadecks.com</p>
              <p>123 Peachtree St<br />Atlanta, GA 30309</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © 2025 Atlanta Deck Co. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

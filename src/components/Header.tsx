import { Phone, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="text-2xl md:text-3xl font-bold">
              <span className="text-red-600">ARUNA</span>
              <span className="text-blue-900 ml-2">HOME CLEANING</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Services
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:9030035189" className="flex items-center gap-2 text-blue-900 hover:text-blue-700 transition-colors">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">90300 35189</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

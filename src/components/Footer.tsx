import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-red-600">ARUNA</span>
              <span className="text-white ml-2">HOME CLEANING</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Professional cleaning services for homes, offices, and commercial spaces.
              Your satisfaction is our priority.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Apartments Cleaning</li>
              <li>Flats Cleaning</li>
              <li>Water Tanks Cleaning</li>
              <li>Wash Rooms Cleaning</li>
              <li>Hotels Rooms Cleaning</li>
              <li>Villas Cleaning</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-cyan-400" />
                <div>
                  <a href="tel:9030035189" className="hover:text-white transition-colors block">90300 35189</a>
                  <a href="tel:7989343838" className="hover:text-white transition-colors block">79893 43838</a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <a href="mailto:arunahomecleaning.25@gmail.com" className="hover:text-white transition-colors break-all">
                  arunahomecleaning.25@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                <span>
                  67-1-36-15-1A, Patamata,<br />
                  Darsipeta, Vijayawada
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Aruna Home Cleaning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

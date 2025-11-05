import { Home, Building2, Droplets, Bath, Hotel, Castle } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Apartments',
    description: 'Complete apartment cleaning services in Vijayawada with attention to every detail.'
  },
  {
    icon: Home,
    title: 'Flats',
    description: 'Thorough flat cleaning and sanitization in Vijayawada for a fresh and healthy living space'
  },
  {
    icon: Droplets,
    title: 'Water Tanks',
    description: 'Professional water tank cleaning and disinfection for homes and buildings in Vijayawada.'
  },
  {
    icon: Bath,
    title: 'Wash Rooms',
    description: 'Deep bathroom cleaning and sanitization with eco-friendly products.'
  },
  {
    icon: Hotel,
    title: 'Hotels Rooms',
    description: 'Reliable commercial and hotel room cleaning services in Vijayawada.'
  },
  {
    icon: Castle,
    title: 'Villas Cleaning',
    description: 'Comprehensive villa deep cleaning with trained professionals.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional cleaning solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">Professional Cleaning Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              ARUNA<br />
              <span className="text-cyan-400">HOME CLEANING</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Aruna Home Cleaning provides expert home cleaning in Vijayawada. From flats and villas to water tanks, we deliver spotless, hygienic spaces with trusted professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block text-center">
                Get a Free Quote
              </a>
              <a href="tel:9030035189" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block text-center border border-white/30">
                Call Now
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <img
                src="/ahc_vc.jpg"
                alt="Aruna Home Cleaning Services"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

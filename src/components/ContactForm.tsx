import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch("https://formsubmit.co/arunahomecleaning.25@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error("Failed to send message");

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We proudly serve homes across Vijayawada — including Patamata, Benz Circle, Darsipeta, and nearby towns. Contact us today for a free home cleaning quote!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info Left Side */}
          <div>
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white h-full">
              <h3 className="text-3xl font-bold mb-8">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Call Us</p>
                    <a href="tel:9030035189" className="text-cyan-400 hover:text-cyan-300 block">90300 35189</a>
                    <a href="tel:7989343838" className="text-cyan-400 hover:text-cyan-300 block">79893 43838</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email Us</p>
                    <a href="mailto:arunahomecleaning.25@gmail.com" className="text-cyan-400 hover:text-cyan-300 break-all">
                      arunahomecleaning.25@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Visit Us</p>
                    <p className="text-blue-100">
                      67-1-36-15-1A, Patamata,<br />
                      Darsipeta, Vijayawada
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/20">
                <p className="text-lg font-semibold mb-2">Business Hours</p>
                <p className="text-blue-100">Monday - Sunday: 8:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form Right Side */}
          <div>
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Required *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  >
                    <option value="">Select a service</option>
                    <option value="Apartments">Apartments</option>
                    <option value="Flats">Flats</option>
                    <option value="Water Tanks">Water Tanks</option>
                    <option value="Wash Rooms">Wash Rooms</option>
                    <option value="Hotels Rooms">Hotels Rooms</option>
                    <option value="Villas Cleaning">Villas Cleaning</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us about your cleaning needs..."
                  ></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    ✅ Message sent successfully! We’ll contact you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    ⚠️ Something went wrong. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

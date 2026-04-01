/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { 
  Phone, 
  MessageCircle, 
  CheckCircle, 
  Star, 
  MapPin, 
  Wind, 
  Thermometer, 
  Wrench, 
  Clock, 
  ShieldCheck, 
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const COMPANY_NAME = "Mohammadpur AC Fix";
const PHONE_NUMBER = "01722466494";
const WHATSAPP_LINK = `https://wa.me/8801722466494`;

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const services = [
    {
      title: "AC Servicing",
      description: "Deep cleaning and maintenance to ensure maximum cooling efficiency.",
      icon: <Wind className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Gas Refill",
      description: "High-quality refrigerant refill for instant cooling performance.",
      icon: <Thermometer className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Installation",
      description: "Professional installation of split and window AC units.",
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Repair & Parts",
      description: "Expert diagnosis and repair of all major AC brands.",
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    }
  ];

  const benefits = [
    { title: "Fast Service", icon: <Clock className="w-5 h-5" /> },
    { title: "Expert Technicians", icon: <Star className="w-5 h-5" /> },
    { title: "Affordable Price", icon: <ShieldCheck className="w-5 h-5" /> },
    { title: "Mohammadpur Local", icon: <MapPin className="w-5 h-5" /> },
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Wind className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-blue-900">{COMPANY_NAME}</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium hover:text-blue-600 transition-colors">Services</a>
              <a href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">Why Us</a>
              <a href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">Contact</a>
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-4">
                <a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">Services</a>
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">Why Us</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">Contact</a>
                <a 
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl text-lg font-bold"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-6 border border-blue-100">
                <MapPin className="w-4 h-4" />
                Serving Mohammadpur & Nearby Areas
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                Expert <span className="text-blue-600">AC Repair</span> in Mohammadpur
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
                Don't let the heat get to you. Get fast, reliable, and affordable AC servicing, gas refills, and installations from local experts.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a 
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 hover:-translate-y-1"
                >
                  <Phone className="w-6 h-6" />
                  Call {PHONE_NUMBER}
                </a>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 bg-emerald-500 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-100 hover:-translate-y-1"
                >
                  <MessageCircle className="w-6 h-6" />
                  WhatsApp Us
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                    <div className="text-blue-600">{benefit.icon}</div>
                    {benefit.title}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-blue-600/10 rounded-3xl blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1599939571322-792a326991f2?q=80&w=1000&auto=format&fit=crop" 
                alt="AC Technician at work" 
                className="relative rounded-3xl shadow-2xl border border-white/50 object-cover aspect-[4/3] w-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-xl">
                    <Star className="w-6 h-6 text-orange-500 fill-orange-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">4.9/5</div>
                    <div className="text-sm text-slate-500 font-medium">Customer Rating</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">Our Professional Services</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              We provide comprehensive AC solutions for residential and commercial spaces in Mohammadpur.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all group"
              >
                <div className="mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="contact" className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Get a Free Quote <br />Today
              </h2>
              <p className="text-blue-100 text-xl mb-10 leading-relaxed">
                Fill out the form and our expert technician will call you back within 15 minutes to discuss your AC needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-medium">100% Satisfaction Guaranteed</span>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-medium">Certified & Experienced Technicians</span>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-medium">Transparent & Upfront Pricing</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-2xl">
              {formSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
                  <p className="text-slate-500">We'll call you back very shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. Rahim Ahmed"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="e.g. 01XXXXXXXXX"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Service Type</label>
                    <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all appearance-none">
                      <option>General Servicing</option>
                      <option>Gas Refill</option>
                      <option>New Installation</option>
                      <option>Repair & Diagnosis</option>
                    </select>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-blue-600 text-white py-5 rounded-2xl text-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 active:scale-[0.98]"
                  >
                    Book Service Now
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Elements */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Why Mohammadpur Trusts Us</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                With over 10 years of experience serving the Mohammadpur community, we've built a reputation for honesty, quality, and speed.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-12 h-12 rounded-full border-4 border-white shadow-sm" alt="User" />
                  ))}
                </div>
                <div className="text-sm font-bold text-slate-900">
                  Joined by 500+ <br />Happy Customers
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex text-orange-400 mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-700 italic mb-6">"Best AC service in Mohammadpur. They arrived within 30 minutes and fixed my split AC gas leak perfectly. Very professional!"</p>
                <div className="font-bold text-slate-900">— Tanvir Hasan, Town Hall</div>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex text-orange-400 mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-700 italic mb-6">"Reasonable pricing and very honest technicians. They explained everything before starting the repair. Highly recommended."</p>
                <div className="font-bold text-slate-900">— Mrs. Sultana, Kaderabad Housing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-blue-600 p-1.5 rounded-lg">
                  <Wind className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold tracking-tight text-white">{COMPANY_NAME}</span>
              </div>
              <p className="max-w-md mb-8">
                Your local partner for all AC repair, servicing, and installation needs in Mohammadpur, Dhaka. Available 24/7 for emergencies.
              </p>
              <div className="flex gap-4">
                <a href={`tel:${PHONE_NUMBER}`} className="bg-slate-800 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </a>
                <a href={WHATSAPP_LINK} className="bg-slate-800 p-3 rounded-full hover:bg-emerald-500 hover:text-white transition-all">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">Why Choose Us</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Book Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>Mohammadpur, Dhaka-1207, Bangladesh</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>{PHONE_NUMBER}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>Open: 8:00 AM - 10:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-center text-sm">
            © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-emerald-500 text-white p-4 rounded-full shadow-2xl hover:bg-emerald-600 transition-all hover:scale-110 active:scale-95 group"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}

import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* About Summary */}
                    <div>
                        <div className="mb-6 bg-white/95 rounded-lg p-2 inline-block shadow-sm">
                            <img
                                src="/Perfect Energy Solution Logo.webp"
                                alt="Perfect Energy Solution Logo"
                                className="h-12 w-auto object-contain"
                            />
                        </div>
                        <p className="text-gray-400 font-sans text-sm leading-relaxed mb-6">
                            Professional electronics, networking, security, and technical services for homes and businesses.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-heading font-semibold tracking-wider text-sm text-white mb-6 uppercase">Quick Links</h3>
                        <ul className="space-y-4 font-sans text-sm text-gray-400">
                            <li><Link to="/" className="hover:text-accent transition-colors flex items-center gap-2"><span>Home</span></Link></li>
                            <li><Link to="/about" className="hover:text-accent transition-colors flex items-center gap-2"><span>About</span></Link></li>
                            <li><Link to="/services" className="hover:text-accent transition-colors flex items-center gap-2"><span>Services</span></Link></li>
                            <li><Link to="/insights" className="hover:text-accent transition-colors flex items-center gap-2"><span>Insights</span></Link></li>
                            <li><Link to="/contact" className="hover:text-accent transition-colors flex items-center gap-2"><span>Contact</span></Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-heading font-semibold tracking-wider text-sm text-white mb-6 uppercase">Services</h3>
                        <ul className="space-y-4 font-sans text-sm text-gray-400">
                            <li><Link to="/services#electronics" className="hover:text-accent transition-colors">Electronics Repair</Link></li>
                            <li><Link to="/services#networking" className="hover:text-accent transition-colors">Networking Solutions</Link></li>
                            <li><Link to="/services#cctv" className="hover:text-accent transition-colors">CCTV Installation</Link></li>
                            <li><Link to="/services#electrical" className="hover:text-accent transition-colors">Electrical Services</Link></li>
                            <li><Link to="/services#support" className="hover:text-accent transition-colors">Technical Support</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-heading font-semibold tracking-wider text-sm text-white mb-6 uppercase">Contact Us</h3>
                        <ul className="space-y-4 font-sans text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                <div className="flex flex-col gap-1">
                                    <a href="tel:+966556704985" className="hover:text-white transition-colors">+966 55 670 4985</a>
                                    <a href="tel:+966566149219" className="hover:text-white transition-colors">+966 56 614 9219</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <WhatsAppIcon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                <div className="flex flex-col gap-1">
                                    <a href="https://wa.me/966556704985" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">+966 55 670 4985</a>
                                    <a href="https://wa.me/966566149219" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">+966 56 614 9219</a>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-accent shrink-0" />
                                <a href="mailto:Ksa.pes@gmail.com" className="hover:text-white transition-colors">Email Us</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                                <div className="flex flex-col">
                                    <span>Riyadh</span>
                                    <a href="https://maps.app.goo.gl/mJXH2CsENMQ7byXd8" target="_blank" rel="noreferrer" className="text-accent hover:text-white transition-colors mt-1 font-medium text-xs uppercase tracking-wider">
                                        View on Google Maps
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 font-sans text-sm text-center md:text-left">
                        &copy; {new Date().getFullYear()} Perfect Energy Solution. All rights reserved.
                    </p>
                    <div className="flex gap-4 text-sm text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

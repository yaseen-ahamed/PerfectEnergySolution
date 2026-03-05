import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';
import { useState } from 'react';
import { PhoneCall, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const contactInfo = [
        {
            icon: PhoneCall,
            label: "Phone",
            value: "+966 56 614 9219",
            href: "tel:+966566149219",
            color: "bg-blue-500/10 text-blue-500"
        },
        {
            icon: WhatsAppIcon,
            label: "WhatsApp",
            value: "+966 56 614 9219",
            href: "https://wa.me/966566149219",
            color: "bg-accent/10 text-accent"
        },
        {
            icon: Mail,
            label: "Email",
            value: "Ksa.pes@gmail.com",
            href: "mailto:Ksa.pes@gmail.com",
            color: "bg-secondary/10 text-secondary"
        },
        {
            icon: MapPin,
            label: "Location Maps",
            value: "View on Google Maps",
            href: "https://maps.app.goo.gl/mJXH2CsENMQ7byXd8",
            color: "bg-amber-500/10 text-amber-500"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-background pt-12 pb-24">
            <SEO
                title="Contact Perfect Energy Solution Riyadh | Technical Services Saudi Arabia"
                description="Contact Perfect Energy Solution in Riyadh for electronics repair, CCTV installation, networking, electrical services, and technical support. Call, WhatsApp, or fill out our contact form."
                canonicalUrl="/contact"
                jsonLdSchema={{
                    "@context": "https://schema.org",
                    "@type": "ContactPage"
                }}
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                {/* ===== SECTION 1 — CONTACT INTRO ===== */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-textDark text-sm font-medium mb-6">
                        <Mail className="w-4 h-4 text-accent" />
                        Get in Touch
                    </div>
                    <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-textDark max-w-3xl mx-auto leading-tight mb-6">
                        Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Perfect Energy Solution</span> in Riyadh
                    </h1>
                    <p className="text-lg text-textDark/70 font-sans max-w-2xl mx-auto leading-relaxed">
                        Have a technical issue, need electronics repair, CCTV installation, or professional networking services in Riyadh? Our team of experienced technicians is ready to help.
                    </p>
                </div>

                {/* ===== SECTION 2 — CONTACT INFORMATION ===== */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {contactInfo.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                            className="bg-white rounded-3xl p-6 border border-borderGrey shadow-sm hover:shadow-md transition-all group hover:-translate-y-1"
                        >
                            <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="font-heading font-bold text-textDark mb-1">{item.label}</h3>
                            <p className="text-gray-600 font-sans text-sm break-all">{item.value}</p>
                        </a>
                    ))}
                </div>

                {/* ===== SECTION 3 — CONTACT FORM ===== */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white rounded-3xl p-8 md:p-10 border border-borderGrey shadow-sm">
                        <h2 className="text-2xl font-heading font-bold text-textDark mb-6">Send Us a Message</h2>

                        {submitted ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                                    <CheckCircle2 className="w-8 h-8 text-accent" />
                                </div>
                                <h3 className="font-heading font-bold text-xl text-textDark mb-2">Message Sent!</h3>
                                <p className="text-gray-600 font-sans">Thank you for reaching out. We'll get back to you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block font-sans text-sm font-medium text-textDark mb-1.5">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-borderGrey bg-background font-sans text-textDark focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                                        placeholder="Your full name"
                                    />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block font-sans text-sm font-medium text-textDark mb-1.5">Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-borderGrey bg-background font-sans text-textDark focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                                            placeholder="+966 ..."
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-sans text-sm font-medium text-textDark mb-1.5">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-borderGrey bg-background font-sans text-textDark focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block font-sans text-sm font-medium text-textDark mb-1.5">Service Required</label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-borderGrey bg-background font-sans text-textDark focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="electronics">Electronics Sales & Repair</option>
                                        <option value="networking">Networking & Software Solutions</option>
                                        <option value="cctv">CCTV & Security Systems</option>
                                        <option value="electrical">Electrical Services</option>
                                        <option value="technical">General Technical Services</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block font-sans text-sm font-medium text-textDark mb-1.5">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl border border-borderGrey bg-background font-sans text-textDark focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none"
                                        placeholder="Tell us about your requirement..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-emerald-500 text-white font-semibold px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(15,169,88,0.3)] transition-all transform hover:-translate-y-1 w-full"
                                >
                                    <Send className="w-5 h-5" />
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>

                    {/* ===== SECTION 4 — MAP & GMB ===== */}
                    <div id="map" className="bg-white rounded-3xl border border-borderGrey shadow-sm overflow-hidden flex flex-col h-full min-h-[400px]">
                        <div className="p-6 md:p-8 bg-background border-b border-borderGrey flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div>
                                <h3 className="font-heading font-bold text-xl text-textDark">Our Location</h3>
                                <p className="text-gray-600 font-sans text-sm mt-1">Riyadh, Saudi Arabia</p>
                            </div>
                            <a
                                href="https://maps.app.goo.gl/mJXH2CsENMQ7byXd8"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-white text-textDark border border-borderGrey hover:border-accent hover:text-accent font-medium px-5 py-2.5 rounded-lg shadow-sm transition-all whitespace-nowrap"
                            >
                                <MapPin className="w-4 h-4" />
                                View on Google Maps
                            </a>
                        </div>
                        <iframe
                            title="Perfect Energy Solution Location"
                            src="https://maps.google.com/maps?q=24.5641518,46.8709183&hl=en&z=14&output=embed"
                            className="w-full flex-grow min-h-[300px]"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                {/* ===== SECTION 5 — QUICK CTA ===== */}
                <div className="bg-primary rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Need immediate technical assistance in Riyadh?</h2>
                        <p className="text-gray-300 font-sans text-lg mb-8">Call or WhatsApp us now.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+966566149219"
                                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-emerald-500 text-white font-semibold px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(15,169,88,0.4)] transition-all transform hover:-translate-y-1"
                            >
                                <PhoneCall className="w-5 h-5" />
                                Call Now
                            </a>
                            <a
                                href="https://wa.me/966566149219"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 font-semibold px-8 py-4 rounded-xl transition-all transform hover:-translate-y-1"
                            >
                                <WhatsAppIcon className="w-5 h-5" />
                                WhatsApp Us
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

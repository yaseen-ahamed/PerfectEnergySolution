import { ArrowRight, PhoneCall, Zap, ShieldCheck, Clock, MapPin, Cpu, Network, Camera, Wrench, Users, Building2, Store, Briefcase, Factory, MessageSquare, CheckCircle2, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TestimonialsSection } from '../components/blocks/testimonials-with-marquee';
import { SEO } from '../components/SEO';

const testimonialsData = [
    {
        author: {
            name: "Mohammed Al-Rashid",
            handle: "Local Guide · 226 reviews",
            avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&crop=face"
        },
        text: "Excellent, I recommend it",
        rating: 5,
        time: "6 months ago",
    },
    {
        author: {
            name: "Anes Pallan",
            handle: "Local Guide · 42 reviews",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        },
        text: "A perfect store for computer accessories in local area",
        rating: 5,
        time: "2 months ago",
    },
    {
        author: {
            name: "Jonathan De Guzman",
            handle: "Local Guide · 146 reviews",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        },
        text: "Perfect solution for your electronic needs",
        rating: 5,
        time: "1 year ago",
    },
    {
        author: {
            name: "Firos Khan",
            handle: "Local Guide · 58 reviews",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
        },
        text: "Good and excellent service",
        rating: 5,
        time: "3 months ago",
    }
];

export default function Home() {
    const services = [
        {
            icon: Cpu,
            title: "Electronics Sales & Repair",
            desc: "Repair and maintenance of electronic devices and components.",
            slug: "electronics-repair"
        },
        {
            icon: Network,
            title: "Networking & Software Solutions",
            desc: "Professional network setup and software support for offices and homes.",
            slug: "networking-solutions"
        },
        {
            icon: Camera,
            title: "CCTV & Security Systems",
            desc: "Installation and maintenance of surveillance systems to protect your property.",
            slug: "cctv-installation"
        },
        {
            icon: Zap,
            title: "Electrical Services",
            desc: "Professional electrical installation and maintenance.",
            slug: "electrical-services"
        },
        {
            icon: Wrench,
            title: "General Technical Services",
            desc: "Comprehensive technical assistance for various office and home needs.",
            slug: "technical-support"
        },
        {
            icon: Sun,
            title: "Solar & Energy Solutions",
            desc: "Professional solar panel installation and energy management for sustainable power.",
            slug: "solar-solutions"
        }
    ];

    const whyUs = [
        {
            icon: Clock,
            title: "Experience",
            desc: "Years of experience in electronics, networking, and technical support."
        },
        {
            icon: Users,
            title: "Professional Technicians",
            desc: "Skilled technicians trained to handle a wide range of technical issues."
        },
        {
            icon: ShieldCheck,
            title: "Reliable Service",
            desc: "We focus on delivering dependable and efficient solutions."
        },
        {
            icon: CheckCircle2,
            title: "Customer Satisfaction",
            desc: "We prioritize customer needs and long-term service relationships."
        }
    ];

    const clientTypes = [
        { icon: Users, label: "Residential customers" },
        { icon: Briefcase, label: "Small businesses" },
        { icon: Store, label: "Retail stores" },
        { icon: Building2, label: "Offices" },
        { icon: Factory, label: "Commercial facilities" }
    ];

    const steps = [
        { num: "01", title: "Consultation", desc: "Understanding the client's requirement and technical challenges." },
        { num: "02", title: "Assessment", desc: "Our technicians evaluate the technical requirements and propose a solution." },
        { num: "03", title: "Implementation", desc: "Professional installation, repair, or setup." },
        { num: "04", title: "Support", desc: "Ensuring the system works efficiently and reliably." }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <SEO
                title="Technical Services Company in Riyadh Saudi Arabia | Perfect Energy Solution"
                description="Perfect Energy Solution — Riyadh's leading provider of electronics repair, CCTV installation, networking solutions, electrical services, solar energy, and technical support for homes and businesses in Saudi Arabia."
                canonicalUrl="/"
                jsonLdSchema={[
                    {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Perfect Energy Solution",
                        "url": "https://perfectenergysolution.com",
                        "logo": "https://perfectenergysolution.com/Perfect Energy Solution Logo.webp"
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Perfect Energy Solution",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Riyadh",
                            "addressCountry": "Saudi Arabia"
                        }
                    }
                ]}
            />

            {/* ===== SECTION 1 — HERO ===== */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                    {/* Main Hero Card */}
                    <div className="md:col-span-8 bg-primary rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col justify-center min-h-[400px] shadow-xl group">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
                        </div>

                        <div className="relative z-10 max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent font-medium text-sm mb-6 border border-accent/30 backdrop-blur-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                                </span>
                                Reliable Technical Services
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.15] mb-6 tracking-tight">
                                Reliable Technical &<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">Energy Solutions in Riyadh</span>
                            </h1>

                            <p className="text-lg text-gray-300 font-sans mb-4 max-w-xl leading-relaxed">
                                Electronics repair, networking solutions, CCTV security systems, electrical services, solar energy, and complete technical support in Riyadh, Saudi Arabia — delivered with precision and reliability.
                            </p>

                            <p className="text-base text-gray-400 font-sans mb-8 max-w-xl leading-relaxed">
                                Perfect Energy Solution is a professional technical services company based in Riyadh, Saudi Arabia. Our experienced technicians deliver dependable solutions across electronics repair, networking infrastructure, CCTV security systems, electrical installation, solar panel systems, and general technical support for homes, offices, and commercial facilities.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="tel:+966566149219"
                                    className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-[0_0_20px_rgba(15,169,88,0.3)] hover:shadow-[0_0_30px_rgba(15,169,88,0.5)] transform hover:-translate-y-1"
                                >
                                    <PhoneCall className="w-5 h-5" />
                                    Call Now
                                </a>
                                <a
                                    href="https://wa.me/966566149219"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-xl font-semibold transition-all transform hover:-translate-y-1"
                                >
                                    <MessageSquare className="w-5 h-5" />
                                    WhatsApp Us
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Trust Indicators Side Column */}
                    <div className="md:col-span-4 flex flex-col gap-6">
                        {[
                            { icon: ShieldCheck, title: "Experienced Technicians", desc: "Skilled professionals with years of hands-on expertise." },
                            { icon: CheckCircle2, title: "Reliable Service", desc: "Dependable solutions you can count on, every time." },
                            { icon: Clock, title: "Fast Response", desc: "Quick turnaround to minimize your downtime." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white rounded-3xl p-6 shadow-sm border border-borderGrey flex-1 flex items-start gap-4 group hover:shadow-md transition-all relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                                    <item.icon className="w-20 h-20 text-primary" />
                                </div>
                                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0 text-accent group-hover:scale-110 transition-transform">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="font-heading font-bold text-lg text-textDark mb-1">{item.title}</h3>
                                    <p className="text-gray-500 font-sans text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SECTION 2 — QUICK SERVICE OVERVIEW ===== */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-textDark text-sm font-medium mb-6">
                            <span className="w-2 h-2 rounded-full bg-accent"></span>
                            What We Do
                        </div>
                        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-textDark mb-4">Professional Technical Services in Riyadh</h2>
                        <p className="text-lg text-textDark/70 font-sans max-w-2xl mx-auto leading-relaxed">
                            Perfect Energy Solution offers a comprehensive range of professional technical services in Riyadh, Saudi Arabia — from electronics repair and CCTV installation to networking, electrical work, and solar energy solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, idx) => (
                            <Link key={idx} to={`/services/${service.slug}`} className="bg-background rounded-3xl p-8 border border-borderGrey shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden block">
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform duration-300">
                                        <service.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-heading font-bold text-textDark mb-3">{service.title}</h3>
                                    <p className="text-gray-600 font-sans leading-relaxed">{service.desc}</p>
                                    <span className="inline-flex items-center gap-1 text-accent font-semibold mt-4 text-sm group-hover:gap-2 transition-all">Learn More <ArrowRight className="w-4 h-4" /></span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            to="/services"
                            className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white px-8 py-4 rounded-xl font-semibold transition-all transform hover:-translate-y-1 shadow-sm hover:shadow-lg"
                        >
                            View All Services
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== SECTION 3 — WHY CHOOSE US ===== */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-textDark mb-4">
                            Why Riyadh Trusts <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Perfect Energy Solution</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whyUs.map((item, idx) => (
                            <div key={idx} className="bg-white rounded-3xl p-8 border border-borderGrey shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group text-center">
                                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-accent group-hover:scale-110 transition-transform duration-300">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-heading font-bold text-textDark mb-3">{item.title}</h3>
                                <p className="text-gray-600 font-sans leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SECTION 4 — WHO WE SERVE ===== */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-textDark mb-6">Who We Serve in Riyadh & Saudi Arabia</h2>
                            <p className="text-lg text-textDark/70 font-sans leading-relaxed mb-8">
                                Our technical services support a wide range of residential and commercial clients across Riyadh and the Kingdom:
                            </p>
                            <div className="space-y-4">
                                {clientTypes.map((client, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-4 bg-background rounded-2xl border border-borderGrey group hover:border-accent/30 transition-colors">
                                        <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                                            <client.icon className="w-5 h-5" />
                                        </div>
                                        <span className="font-sans font-medium text-textDark">{client.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-primary rounded-3xl p-10 text-white relative overflow-hidden">
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-heading font-bold text-white mb-4">Tailored Solutions</h3>
                                <p className="text-gray-300 font-sans leading-relaxed text-lg">
                                    Each solution is tailored to the specific needs of the client. Whether you're a homeowner or a large commercial facility, we deliver the right technical support for your requirements.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SECTION 5 — WORK PROCESS ===== */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-textDark mb-4">How Our Technical Service Process Works</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map((step, idx) => (
                            <div key={idx} className="bg-white rounded-3xl p-8 border border-borderGrey shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
                                <div className="absolute top-4 right-4 text-5xl font-heading font-bold text-gray-100 group-hover:text-accent/10 transition-colors">{step.num}</div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 font-heading font-bold text-lg">{step.num}</div>
                                    <h3 className="text-xl font-heading font-bold text-textDark mb-3">{step.title}</h3>
                                    <p className="text-gray-600 font-sans leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SECTION 6 — SERVICE AREAS ===== */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-textDark mb-4">Our Service Locations</h2>
                        <p className="text-lg text-textDark/70 font-sans max-w-2xl mx-auto leading-relaxed">
                            Perfect Energy Solution primarily serves customers in Saudi Arabia while also supporting clients connected to other regional markets.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Link to="/locations/riyadh" className="bg-primary rounded-3xl p-8 text-white relative overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/30 rounded-full blur-3xl pointer-events-none"></div>
                            <div className="relative z-10 mb-6">
                                <MapPin className="w-8 h-8 text-accent mb-4" />
                                <h3 className="text-2xl font-heading font-bold text-white mb-2">Saudi Arabia</h3>
                                <span className="text-accent text-sm font-semibold tracking-wider uppercase">Primary Market</span>
                                <p className="text-gray-300 font-sans mt-4 leading-relaxed">Our headquarters and primary service area, covering major cities across the Kingdom.</p>
                            </div>
                            <div className="relative z-10 rounded-xl overflow-hidden mt-auto shadow-md">
                                <img src="/Perfect Energy Solution RIyadh 4.webp" alt="Perfect Energy Solution Riyadh Headquarters" loading="lazy" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                        </Link>
                        <Link to="/locations/kochi" className="bg-primary rounded-3xl p-8 text-white relative overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
                            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent/30 rounded-full blur-3xl pointer-events-none"></div>
                            <div className="relative z-10 mb-6">
                                <MapPin className="w-8 h-8 text-accent mb-4" />
                                <h3 className="text-2xl font-heading font-bold text-white mb-2">Kochi</h3>
                                <span className="text-accent text-sm font-semibold tracking-wider uppercase">Regional Support</span>
                                <p className="text-gray-300 font-sans mt-4 leading-relaxed">Supporting clients with regional coordination and technical resources.</p>
                            </div>
                            <div className="relative z-10 rounded-xl overflow-hidden mt-auto shadow-md">
                                <img src="/Perfect Energy Solution Kochi.jpg" alt="Perfect Energy Solution Kochi Regional Office" loading="lazy" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                        </Link>
                        <Link to="/locations/dubai" className="bg-primary rounded-3xl p-8 text-white relative overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
                            <div className="absolute -top-24 -left-24 w-48 h-48 bg-accent/30 rounded-full blur-3xl pointer-events-none"></div>
                            <div className="relative z-10 mb-6">
                                <MapPin className="w-8 h-8 text-accent mb-4" />
                                <h3 className="text-2xl font-heading font-bold text-white mb-2">Dubai</h3>
                                <span className="text-accent text-sm font-semibold tracking-wider uppercase">Regional Support</span>
                                <p className="text-gray-300 font-sans mt-4 leading-relaxed">Perfect & Clean Edge Solutions — extending services across the Gulf region.</p>
                            </div>
                            <div className="relative z-10 rounded-xl overflow-hidden mt-auto shadow-md">
                                <img src="/Perfect Energy Solution Dubai.webp" alt="Perfect Energy Solution Dubai Regional Office" loading="lazy" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== SECTION 6.5 — TESTIMONIALS ===== */}
            <TestimonialsSection
                title="What Our Customers Say"
                description="Read why individuals and businesses trust Perfect Energy Solutions with their technical needs."
                testimonials={testimonialsData}
                reviewLink="https://share.google/vvfT2sZrydAMQtyx4"
            />

            {/* ===== SECTION 7 — CTA ===== */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="bg-primary rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/20 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Need Technical Support?</h2>
                            <p className="text-gray-300 font-sans text-lg mb-8 leading-relaxed">
                                Our team is ready to help you with reliable electronics repair, networking solutions, CCTV installation, and electrical services.
                            </p>
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
                                    <MessageSquare className="w-5 h-5" />
                                    WhatsApp Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

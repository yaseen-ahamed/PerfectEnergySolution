import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';
import { ArrowRight, PhoneCall, Zap, ShieldCheck, Clock, MapPin, Cpu, Network, Camera, Wrench, Users, Building2, Store, Briefcase, Factory, CheckCircle2, Smartphone } from 'lucide-react';
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
            slug: "electronics-repair",
            image: "/electronics_repair.webp"
        },
        {
            icon: Network,
            title: "Networking & Software Solutions",
            desc: "Professional network setup and software support for offices and homes.",
            slug: "networking-solutions",
            image: "/networking_solutions.webp"
        },
        {
            icon: Camera,
            title: "CCTV & Security Systems",
            desc: "Installation and maintenance of surveillance systems to protect your property.",
            slug: "cctv-installation",
            image: "/cctv_security.webp"
        },
        {
            icon: Zap,
            title: "Electrical Services",
            desc: "Professional electrical installation and maintenance.",
            slug: "electrical-services",
            image: "/electrical_services.webp"
        },
        {
            icon: Wrench,
            title: "General Technical Services",
            desc: "Comprehensive technical assistance for various office and home needs.",
            slug: "technical-support",
            image: "/tech_support.webp"
        },
        {
            icon: Smartphone,
            title: "SIM Card Services",
            desc: "SIM card activation, purchasing, mobile recharge, and data plans from all carriers.",
            slug: "sim-card-services",
            image: "/sim_services.webp"
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
                description="Perfect Energy Solution — Riyadh's leading provider of electronics repair, CCTV installation, networking solutions, electrical services, SIM card services, and technical support for homes and businesses in Saudi Arabia."
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
                    <div className="md:col-span-8 bg-white border border-borderGrey rounded-[2.5rem] p-8 md:p-14 relative flex flex-col justify-center min-h-[550px] shadow-sm hover:shadow-xl transition-all duration-500 group overflow-hidden">

                        {/* Background Glows for vibrant accents */}
                        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent/5 rounded-full blur-[100px] pointer-events-none transform translate-x-1/4 -translate-y-1/4"></div>
                        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none transform -translate-x-1/4 translate-y-1/4"></div>

                        {/* Interactive 3D Elements (Hidden on mobile) */}
                        <div className="hidden lg:block absolute z-20 top-12 right-[45%] bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-2xl p-4 animate-[bounce_6s_infinite] transform hover:scale-105 transition-transform cursor-default">
                            <div className="flex items-center gap-3">
                                <div className="bg-accent/10 p-2 rounded-xl text-accent"><ShieldCheck className="w-5 h-5" /></div>
                                <div>
                                    <p className="text-sm font-bold text-textDark leading-none mb-1">Guaranteed</p>
                                    <p className="text-xs text-gray-500">Service Quality</p>
                                </div>
                            </div>
                        </div>

                        <div className="hidden lg:block absolute z-20 bottom-24 right-[10%] bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-2xl p-4 animate-[bounce_7s_infinite_0.5s] transform hover:scale-105 transition-transform cursor-default">
                            <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-accent to-emerald-500 text-white p-2 rounded-xl"><Wrench className="w-5 h-5" /></div>
                                <div>
                                    <p className="text-sm font-bold text-textDark leading-none mb-1">Expert Techs</p>
                                    <p className="text-xs text-gray-500">Certified Team</p>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Hero Image */}
                        <div className="md:hidden absolute top-0 left-0 right-0 h-64 rounded-t-[2.5rem] overflow-hidden z-0">
                            <img
                                src="/stacked_tech_devices_hero.png"
                                alt="Stacked Tech Devices Illustration"
                                className="w-full h-full object-cover object-center scale-110 md:scale-100"
                                style={{
                                    maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                                    WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
                                }}
                            />
                        </div>

                        {/* Spacer for mobile image */}
                        <div className="md:hidden h-40 w-full relative z-10"></div>

                        {/* Desktop Hero Image */}
                        <div className="absolute right-0 top-0 bottom-0 w-[65%] lg:w-[65%] transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03] select-none pointer-events-none md:flex rounded-r-[2.5rem] overflow-hidden hidden items-center justify-center z-10">
                            <img
                                src="/stacked_tech_devices_hero.png"
                                alt="Modern 3D Services Illustration"
                                className="w-full h-full object-cover object-center"
                                style={{
                                    maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 100%)',
                                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 100%)'
                                }}
                            />
                        </div>

                        <div className="relative z-30 md:max-w-[45%] lg:max-w-[45%] mt-4 md:mt-0">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-borderGrey text-textDark font-semibold text-xs tracking-wide uppercase mb-8 shadow-sm">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-r from-accent to-emerald-500"></span>
                                </span>
                                Professional Technical Support
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-heading font-extrabold text-primary leading-[1.1] mb-6 tracking-tight">
                                Technical &<br />
                                <span className="bg-gradient-to-r from-accent to-emerald-500 bg-clip-text text-transparent relative inline-block pb-2">
                                    Energy Solutions
                                    <div className="absolute bottom-1 right-0 left-0 h-2 bg-gradient-to-r from-accent/30 to-emerald-500/30 rounded-full blur-[2px]"></div>
                                </span>
                            </h1>

                            <p className="text-lg text-gray-600 font-sans mb-10 max-w-sm leading-relaxed font-light">
                                Professional electronics repair, networking, CCTV, and electrical services in Riyadh. Premium, minimal, and dependable.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="tel:+966566149219"
                                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-[#1a2b45] hover:from-[#1a2b45] hover:to-primary text-white px-8 py-4 rounded-2xl font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto"
                                >
                                    <PhoneCall className="w-5 h-5" />
                                    Call Now
                                </a>
                                <Link
                                    to="/services"
                                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-background border border-borderGrey text-textDark px-8 py-4 rounded-2xl font-semibold transition-all shadow-sm hover:shadow-md w-full sm:w-auto"
                                >
                                    Explore Services
                                </Link>
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
                            <div key={idx} className="bento-card bento-card-hover p-8 flex-1 flex flex-col justify-center group overflow-hidden relative border-borderGrey shadow-sm hover:border-accent/40 bg-white rounded-[2rem]">
                                <div className="absolute -right-6 -bottom-6 opacity-[0.03] group-hover:opacity-10 group-hover:scale-[2] transition-all duration-700 pointer-events-none transform origin-bottom-right">
                                    <item.icon className="w-40 h-40 text-accent" />
                                </div>
                                <div className="flex items-center gap-5 mb-3">
                                    <div className="w-14 h-14 bg-background border border-borderGrey rounded-2xl flex items-center justify-center shrink-0 text-primary group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-emerald-500 group-hover:text-white group-hover:border-transparent transition-all duration-500 shadow-sm relative overflow-hidden">
                                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-2xl"></div>
                                        <item.icon className="w-6 h-6 relative z-10" />
                                    </div>
                                    <h3 className="font-heading font-bold text-lg text-textDark leading-tight">{item.title}</h3>
                                </div>
                                <p className="text-gray-500 font-sans text-sm leading-relaxed mt-2">{item.desc}</p>
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
                            Perfect Energy Solution offers a comprehensive range of professional technical services in Riyadh, Saudi Arabia — from electronics repair and CCTV installation to networking, electrical work, and SIM card services.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                        {services.map((service, idx) => (
                            <Link key={idx} to={`/services/${service.slug}`} className="bento-card group hover-3d block overflow-hidden bg-white border border-borderGrey/50 p-2">
                                <div className="flex flex-col h-full bg-white rounded-[1.75rem] border border-borderGrey overflow-hidden">
                                    <div className="w-full aspect-square bento-image-container relative bg-gray-50 border-b border-borderGrey shrink-0 overflow-hidden">
                                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 z-10 pointer-events-none"></div>
                                        <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1s] ease-out" loading="lazy" />
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="w-12 h-12 rounded-[1rem] bg-background border border-borderGrey flex items-center justify-center mb-4 text-primary group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-emerald-500 group-hover:text-white group-hover:border-transparent transition-all duration-500 shadow-sm shrink-0">
                                            <service.icon className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-xl font-heading font-bold text-textDark mb-3 tracking-tight group-hover:text-accent transition-colors duration-300 line-clamp-2">{service.title}</h3>
                                        <p className="text-gray-500 text-sm font-sans leading-relaxed flex-grow line-clamp-3">{service.desc}</p>
                                        <div className="mt-6 flex items-center justify-between">
                                            <span className="inline-flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-wider group-hover:text-accent transition-colors">
                                                Explore
                                            </span>
                                            <div className="w-8 h-8 rounded-full bg-background border border-borderGrey flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white group-hover:border-transparent transition-colors duration-300">
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            to="/services"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-[#1a2b45] hover:from-[#1a2b45] hover:to-primary text-white px-8 py-4 rounded-xl font-semibold transition-all transform hover:-translate-y-1 shadow-md hover:shadow-xl"
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
                            Why Riyadh Trusts <br className="sm:hidden" /><span className="bg-gradient-to-r from-accent to-emerald-500 bg-clip-text text-transparent underline decoration-accent/30 underline-offset-8">Perfect Energy Solution</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whyUs.map((item, idx) => (
                            <div key={idx} className="bento-card p-8 group hover-3d text-center flex flex-col items-center">
                                <div className="w-16 h-16 bg-background rounded-[1.25rem] flex items-center justify-center mb-6 text-primary group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-emerald-500 group-hover:text-white transition-colors duration-500 border border-borderGrey shadow-sm">
                                    <item.icon className="w-8 h-8 relative z-10" />
                                </div>
                                <h3 className="text-xl font-heading font-bold text-textDark mb-3">{item.title}</h3>
                                <p className="text-gray-500 font-sans leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SECTION 4 — WHO WE SERVE ===== */}
            <section className="bg-white py-20 border-y border-borderGrey/50 my-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-textDark mb-6 leading-tight">Who We Serve in Riyadh & Saudi Arabia</h2>
                            <p className="text-lg text-gray-500 font-sans leading-relaxed mb-8">
                                Our technical services support a wide range of residential and commercial clients across Riyadh and the Kingdom:
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {clientTypes.map((client, idx) => (
                                    <div key={idx} className="flex items-center gap-3 px-5 py-3 bg-background rounded-full border border-borderGrey shadow-sm hover:border-accent/40 hover:shadow-md transition-all group cursor-default">
                                        <client.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                                        <span className="font-sans font-medium text-textDark text-sm">{client.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-primary rounded-[2.5rem] p-12 text-white relative flex flex-col justify-center min-h-[350px] shadow-lg bento-card-hover group overflow-hidden border border-borderGrey/20">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/30 rounded-full blur-[80px] pointer-events-none group-hover:scale-125 transition-transform duration-1000 origin-center"></div>
                            <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/20 rounded-full blur-[80px] pointer-events-none group-hover:scale-125 transition-transform duration-1000 origin-center"></div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-white/10 rounded-2xl border border-white/20 flex items-center justify-center mb-6 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500 shadow-sm">
                                    <Building2 className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-3xl font-heading font-bold text-white mb-4">Tailored Solutions</h3>
                                <p className="text-gray-300 font-sans leading-relaxed text-lg font-light">
                                    Each solution is tailored to the specific needs of the client. Whether you're a homeowner or a large commercial facility, we deliver the right technical support for your requirements.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SECTION 5 — WORK PROCESS ===== */}
            <section className="py-20 mb-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-textDark mb-4">How Our Process Works</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map((step, idx) => (
                            <div key={idx} className="bento-card p-8 group relative overflow-hidden flex flex-col items-start hover-3d">
                                <div className="absolute -top-4 -right-4 text-7xl font-heading font-bold text-background group-hover:text-accent/5 transition-colors duration-500 select-none z-0">
                                    {step.num}
                                </div>
                                <div className="relative z-10 w-full">
                                    <div className="w-12 h-12 bg-background border border-borderGrey rounded-[1rem] flex items-center justify-center text-primary mb-6 font-heading font-bold text-lg group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-emerald-500 group-hover:text-white group-hover:border-transparent transition-colors duration-500 shadow-sm relative overflow-hidden">
                                        <span className="relative z-10">{step.num}</span>
                                    </div>
                                    <h3 className="text-xl font-heading font-bold text-textDark mb-3 group-hover:text-accent transition-colors">{step.title}</h3>
                                    <p className="text-gray-500 font-sans leading-relaxed text-sm">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SECTION 6 — SERVICE AREAS ===== */}
            <section className="bg-white py-20 border-t border-borderGrey/50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-textDark mb-4">Our Service Locations</h2>
                        <p className="text-lg text-gray-500 font-sans max-w-2xl mx-auto leading-relaxed">
                            Perfect Energy Solution primarily serves customers in Saudi Arabia while also supporting clients connected to other regional markets.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Link to="/locations/riyadh" className="bento-card bg-primary p-2 relative overflow-hidden shadow-sm hover-3d flex flex-col justify-between group">
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/30 rounded-full blur-3xl pointer-events-none transition-transform duration-700 group-hover:scale-150"></div>
                            <div className="relative z-10 p-6 mb-4">
                                <div className="w-12 h-12 bg-white/10 rounded-xl mb-4 flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-sm">
                                    <MapPin className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                                </div>
                                <h3 className="text-2xl font-heading font-bold text-white mb-2">Saudi Arabia</h3>
                                <span className="text-accent text-xs font-bold tracking-wider uppercase mb-3 block">Primary Market</span>
                                <p className="text-gray-300 font-sans leading-relaxed text-sm">Our headquarters and primary service area, covering Riyadh and major cities.</p>
                            </div>
                            <div className="relative z-10 rounded-[1.25rem] overflow-hidden mt-auto bg-white/5 border border-white/10 aspect-video shrink-0 shadow-inner">
                                <img src="/Perfect Energy Solution RIyadh 4.webp" alt="Perfect Energy Solution Riyadh Headquarters" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                        </Link>
                        <Link to="/locations/kochi" className="bento-card p-2 relative overflow-hidden shadow-sm hover-3d flex flex-col justify-between group bg-white border border-borderGrey/60">
                            <div className="relative z-10 p-6 mb-4">
                                <div className="w-12 h-12 bg-background border border-borderGrey rounded-xl mb-4 flex items-center justify-center shadow-sm">
                                    <MapPin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                                </div>
                                <h3 className="text-2xl font-heading font-bold text-textDark mb-2">Kochi</h3>
                                <span className="text-gray-500 text-xs font-bold tracking-wider uppercase mb-3 block group-hover:text-accent transition-colors">Regional Support</span>
                                <p className="text-gray-500 font-sans leading-relaxed text-sm">Supporting clients with regional coordination and technical resources.</p>
                            </div>
                            <div className="relative z-10 rounded-[1.25rem] overflow-hidden mt-auto bg-background border border-borderGrey flex-shrink-0 aspect-video shadow-inner">
                                <img src="/Perfect Energy Solution Kochi.jpg" alt="Perfect Energy Solution Kochi Regional Office" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                        </Link>
                        <Link to="/locations/dubai" className="bento-card p-2 relative overflow-hidden shadow-sm hover-3d flex flex-col justify-between group bg-white border border-borderGrey/60">
                            <div className="relative z-10 p-6 mb-4">
                                <div className="w-12 h-12 bg-background border border-borderGrey rounded-xl mb-4 flex items-center justify-center shadow-sm">
                                    <MapPin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                                </div>
                                <h3 className="text-2xl font-heading font-bold text-textDark mb-2">Dubai</h3>
                                <span className="text-gray-500 text-xs font-bold tracking-wider uppercase mb-3 block group-hover:text-accent transition-colors">Regional Support</span>
                                <p className="text-gray-500 font-sans leading-relaxed text-sm">Extending services across the broader Gulf region.</p>
                            </div>
                            <div className="relative z-10 rounded-[1.25rem] overflow-hidden mt-auto bg-background border border-borderGrey flex-shrink-0 aspect-video shadow-inner">
                                <img src="/Perfect Energy Solution Dubai.webp" alt="Perfect Energy Solution Dubai Regional Office" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
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
            <section className="py-20 mb-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="bg-primary rounded-[2.5rem] p-12 md:p-16 text-center relative overflow-hidden shadow-[0_20px_60px_rgba(15,169,88,0.15)] group bento-card-hover border border-accent/20">
                        <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-accent/30 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none group-hover:scale-[1.2] transition-transform duration-[1.5s]"></div>
                        <div className="absolute bottom-0 left-0 w-[25rem] h-[25rem] bg-emerald-500/20 rounded-full blur-[100px] -ml-16 -mb-16 pointer-events-none group-hover:scale-[1.2] transition-transform duration-[1.5s]"></div>
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-6 tracking-tight">Need Technical Support?</h2>
                            <p className="text-gray-100 font-sans text-lg mb-10 leading-relaxed font-light">
                                Our team is ready to help you with reliable electronics repair, networking solutions, CCTV installation, and electrical services.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="tel:+966566149219"
                                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-emerald-500 hover:from-emerald-500 hover:to-accent text-white font-semibold px-8 py-4 rounded-xl shadow-[0_8px_30px_rgb(15,169,88,0.3)] transition-all transform hover:-translate-y-1 border border-emerald-400/50"
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
            </section>

        </div>
    );
}

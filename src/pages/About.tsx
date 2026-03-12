import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';
import { Target, Eye, ShieldCheck, Users, Award, Wrench, Cpu, Network, Camera, Zap, PhoneCall, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';

export default function About() {
    const values = [
        { icon: ShieldCheck, label: "Reliability" },
        { icon: Award, label: "Professionalism" },
        { icon: Users, label: "Customer Satisfaction" },
        { icon: CheckCircle2, label: "Quality Service" },
        { icon: Wrench, label: "Technical Expertise" }
    ];

    const expertise = [
        "Electronics repair",
        "Network installation",
        "CCTV system deployment",
        "Electrical infrastructure",
        "Technical troubleshooting"
    ];

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <SEO
                title="About Perfect Energy Solution | Technical Services Company in Riyadh Since 2010"
                description="Perfect Energy Solution is a Riyadh-based technical services company established in 2010. We provide electronics repair, networking, CCTV installation, electrical services, and SIM card services across Riyadh."
                canonicalUrl="/about"
                jsonLdSchema={{
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [{
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://perfectenergysolution.com"
                    }, {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "About"
                    }]
                }}
            />

            {/* ===== SECTION 1 — PAGE INTRO ===== */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-12 pb-16">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-textDark text-sm font-medium mb-6">
                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                        Who We Are
                    </div>
                    <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-textDark leading-tight mb-6">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Perfect Energy Solution</span> — Riyadh
                    </h1>
                    <p className="text-lg text-textDark/70 font-sans leading-relaxed">
                        Perfect Energy Solution is a professional technical services company based in Riyadh, Riyadh, offering electronics repair, networking solutions, CCTV security systems installation, electrical services, SIM card services, and general technical support for residential and commercial clients since 2010.
                    </p>
                </div>
            </section>

            {/* ===== SECTION 2 — COMPANY STORY ===== */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-textDark mb-6">Our Journey in Riyadh</h2>
                            <div className="space-y-4 text-textDark/70 font-sans leading-relaxed text-lg">
                                <p>
                                    Perfect Energy Solution was established in 2010 in Riyadh, Riyadh, to provide reliable and efficient electronics and technical services to individuals and businesses across the Kingdom.
                                </p>
                                <p>
                                    With growing demand for professional technical support in networking, security systems, and electrical infrastructure, the company expanded its services to provide comprehensive solutions.
                                </p>
                                <p>
                                    Today, Perfect Energy Solution serves customers across Riyadh, Dubai, and Kochi by delivering dependable technical services with a strong focus on quality, reliability, and customer satisfaction.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl relative group">
                            <img
                                src="/Perfect Energy Solution RIyadh.webp"
                                alt="Perfect Energy Solution Technical Services Headquarters in Riyadh"
                                loading="lazy"
                                className="w-full h-full object-cover min-h-[300px] group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent pointer-events-none"></div>
                            <div className="absolute bottom-6 left-6 z-10">
                                <div className="text-white font-heading font-bold text-xl">Perfect Energy Solution</div>
                                <div className="text-accent font-sans font-medium tracking-widest uppercase text-xs mt-1">Since Establishment</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SECTION 3 & 4 — MISSION & VISION ===== */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-3xl p-10 border border-borderGrey shadow-sm hover:shadow-md transition-all group">
                            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                                <Target className="w-8 h-8" />
                            </div>
                            <h2 className="text-2xl font-heading font-bold text-textDark mb-4">Our Mission</h2>
                            <p className="text-textDark/70 font-sans leading-relaxed text-lg">
                                To deliver reliable and professional technical services that help homes and businesses operate efficiently and securely.
                            </p>
                        </div>
                        <div className="bg-white rounded-3xl p-10 border border-borderGrey shadow-sm hover:shadow-md transition-all group">
                            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
                                <Eye className="w-8 h-8" />
                            </div>
                            <h2 className="text-2xl font-heading font-bold text-textDark mb-4">Our Vision</h2>
                            <p className="text-textDark/70 font-sans leading-relaxed text-lg">
                                To become a trusted provider of technical solutions by consistently delivering quality service and long-term value to customers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SECTION 5 — VALUES ===== */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-textDark mb-10 text-center">Our Values</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                        {values.map((value, idx) => (
                            <div key={idx} className="bg-background rounded-3xl p-6 border border-borderGrey text-center group hover:shadow-md transition-all hover:-translate-y-1">
                                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <value.icon className="w-7 h-7" />
                                </div>
                                <span className="font-heading font-bold text-textDark">{value.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SECTION 6 — EXPERTISE ===== */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: Cpu, label: "Electronics" },
                                { icon: Network, label: "Networking" },
                                { icon: Camera, label: "CCTV" },
                                { icon: Zap, label: "Electrical" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white rounded-3xl p-6 border border-borderGrey text-center group hover:shadow-md transition-all">
                                    <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mx-auto mb-3 group-hover:scale-110 transition-transform">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <span className="font-heading font-bold text-sm text-textDark">{item.label}</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-textDark mb-6">Our Technical Expertise in Riyadh</h2>
                            <p className="text-textDark/70 font-sans leading-relaxed mb-6">Our team consists of technicians experienced in:</p>
                            <ul className="space-y-3">
                                {expertise.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-textDark font-sans">
                                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SECTION 7 — CTA ===== */}
            <section className="pb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="bg-primary rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Need technical services in Riyadh?</h2>
                            <p className="text-gray-300 font-sans text-lg mb-8">Call or WhatsApp us today.</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="tel:+966556704985"
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
            </section>

        </div>
    );
}

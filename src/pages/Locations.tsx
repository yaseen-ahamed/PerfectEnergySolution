import { Link } from 'react-router-dom';
import { MapPin, PhoneCall, MessageSquare, ArrowRight } from 'lucide-react';
import { CardStack } from '../components/ui/card-stack';
import { SEO } from '../components/SEO';

export default function Locations() {
    return (
        <div className="flex flex-col min-h-screen bg-background pt-12 pb-24">
            <SEO
                title="Service Locations | Perfect Energy Solution Riyadh, Dubai, Kochi"
                description="Perfect Energy Solution operates from Riyadh (headquarters), Dubai (UAE affiliate), and Kochi (regional support). Professional technical services across Saudi Arabia and the Gulf region."
                canonicalUrl="/locations"
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
                        "name": "Locations"
                    }]
                }}
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                {/* Page Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-textDark text-sm font-medium mb-6">
                        <MapPin className="w-4 h-4 text-accent" />
                        Our Network
                    </div>
                    <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-textDark max-w-3xl mx-auto leading-tight mb-6">
                        Our Offices in <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Riyadh, Dubai & Kochi</span>
                    </h1>
                    <p className="text-lg text-textDark/70 font-sans max-w-2xl mx-auto leading-relaxed">
                        Perfect Energy Solution provides professional technical services across Saudi Arabia, UAE, and India from our three strategic office locations.
                    </p>
                </div>

                {/* Locations List */}
                <div className="flex flex-col mb-16 gap-12">

                    {/* Saudi Arabia - Primary */}
                    <div className="relative rounded-[40px] bg-primary text-white border-primary shadow-2xl overflow-hidden group flex flex-col lg:flex-row hover:shadow-[0_0_30px_rgba(30,77,183,0.3)] transition-all cursor-pointer transform hover:-translate-y-1">
                        <Link to="/locations/riyadh" className="absolute inset-0 z-0" aria-label="View Riyadh Location Details"></Link>

                        <div className="w-full lg:w-1/2 p-10 md:p-16 lg:p-20 relative flex flex-col justify-center pointer-events-none">
                            <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent/30 rounded-full blur-3xl pointer-events-none"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-4 rounded-2xl bg-white/10 text-white backdrop-blur-sm">
                                        <MapPin className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2 group-hover:text-accent transition-colors">Saudi Arabia</h3>
                                        <span className="text-sm font-bold tracking-widest uppercase text-accent">Primary Market</span>
                                    </div>
                                </div>
                                <p className="text-gray-300 font-sans text-lg md:text-xl leading-relaxed mb-10">
                                    Our headquarters and primary service region. We provide comprehensive technical services including electronics repair, networking, CCTV installation, and electrical services across the Kingdom.
                                </p>
                                <div className="pt-8 border-t border-white/20 pointer-events-auto relative z-20 flex flex-wrap items-center gap-4">
                                    <a href="tel:+966566149219" className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-emerald-500 text-white font-semibold px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(15,169,88,0.4)] transition-all transform hover:-translate-y-1">
                                        <PhoneCall className="w-6 h-6" />
                                        +966 56 614 9219
                                    </a>
                                    <Link to="/locations/riyadh" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 font-semibold px-8 py-4 rounded-xl transition-all transform hover:-translate-y-1">
                                        View Riyadh Office <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-4 sm:p-8 shrink-0 overflow-hidden lg:rounded-r-[40px] pointer-events-auto relative z-20">
                            <div className="w-full max-w-[400px] md:max-w-md lg:max-w-[460px]">
                                <CardStack
                                    items={[
                                        {
                                            id: 1,
                                            title: "Riyadh Headquarters",
                                            description: "Our primary hub in Saudi Arabia.",
                                            imageSrc: "/Perfect Energy Solution RIyadh 4.webp",
                                        },
                                        {
                                            id: 2,
                                            title: "Technical Operations",
                                            description: "Advanced facilities supporting the Kingdom.",
                                            imageSrc: "/Perfect Energy Solution RIyadh.webp",
                                        },
                                        {
                                            id: 3,
                                            title: "Regional Support Center",
                                            description: "Dedicated to comprehensive technical solutions.",
                                            imageSrc: "/Perfect Energy Solution RIyadh 3.webp",
                                        }
                                    ]}
                                    initialIndex={0}
                                    cardWidth={420}
                                    cardHeight={280}
                                    autoAdvance={false}
                                    pauseOnHover={true}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Kochi */}
                    <div className="relative rounded-[40px] bg-primary text-white border-primary shadow-2xl overflow-hidden group flex flex-col lg:flex-row hover:shadow-[0_0_30px_rgba(30,77,183,0.3)] transition-all cursor-pointer transform hover:-translate-y-1">
                        <Link to="/locations/kochi" className="absolute inset-0 z-0" aria-label="View Kochi Location Details"></Link>

                        <div className="w-full lg:w-1/2 p-10 md:p-16 lg:p-20 relative flex flex-col justify-center pointer-events-none">
                            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-accent/30 rounded-full blur-3xl pointer-events-none"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-4 rounded-2xl bg-white/10 text-white backdrop-blur-sm">
                                        <MapPin className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2 group-hover:text-accent transition-colors">Kochi</h3>
                                        <span className="text-sm font-bold tracking-widest uppercase text-accent">Regional Support</span>
                                    </div>
                                </div>
                                <p className="text-gray-300 font-sans text-lg md:text-xl leading-relaxed mb-10">
                                    Supporting clients with regional coordination, technical resources, and back-office support operations. Providing a seamless flow of expertise.
                                </p>
                                <div className="pt-8 border-t border-white/20 pointer-events-auto relative z-20 flex flex-wrap items-center gap-4">
                                    <a href="tel:+919544033344" className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-emerald-500 text-white font-semibold px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(15,169,88,0.4)] transition-all transform hover:-translate-y-1">
                                        <PhoneCall className="w-6 h-6" />
                                        +91 95440 33344
                                    </a>
                                    <Link to="/locations/kochi" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 font-semibold px-8 py-4 rounded-xl transition-all transform hover:-translate-y-1">
                                        View Kochi Office <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-4 sm:p-8 shrink-0 overflow-hidden lg:rounded-r-[40px] pointer-events-auto relative z-20">
                            <div className="w-full max-w-[400px] md:max-w-md lg:max-w-[460px]">
                                <div className="relative w-full aspect-[4/3] rounded-[28px] border-4 border-white/50 overflow-hidden shadow-2xl">
                                    <div className="absolute inset-0 bg-black/10 z-10"></div>
                                    <img src="/Perfect Energy Solution Kochi.jpg" alt="Kochi Office" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dubai */}
                    <div className="relative rounded-[40px] bg-primary text-white border-primary shadow-2xl overflow-hidden group flex flex-col lg:flex-row hover:shadow-[0_0_30px_rgba(30,77,183,0.3)] transition-all cursor-pointer transform hover:-translate-y-1">
                        <Link to="/locations/dubai" className="absolute inset-0 z-0" aria-label="View Dubai Location Details"></Link>

                        <div className="w-full lg:w-1/2 p-10 md:p-16 lg:p-20 relative flex flex-col justify-center pointer-events-none">
                            <div className="absolute -top-32 -left-32 w-64 h-64 bg-accent/30 rounded-full blur-3xl pointer-events-none"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-4 rounded-2xl bg-white/10 text-white backdrop-blur-sm">
                                        <MapPin className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2 group-hover:text-accent transition-colors">Dubai</h3>
                                        <span className="text-sm font-bold tracking-widest uppercase text-accent">Regional Support</span>
                                    </div>
                                </div>
                                <p className="text-gray-300 font-sans text-lg md:text-xl leading-relaxed mb-10">
                                    Perfect & Clean Edge Solutions — extending our technical services and deep industry expertise entirely across the Gulf region.
                                </p>
                                <div className="pt-8 border-t border-white/20 pointer-events-auto relative z-20 flex flex-wrap items-center gap-4">
                                    <Link to="/locations/dubai" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 font-semibold px-8 py-4 rounded-xl transition-all transform hover:-translate-y-1">
                                        View Dubai Office <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-4 sm:p-8 shrink-0 overflow-hidden lg:rounded-r-[40px] pointer-events-auto relative z-20">
                            <div className="w-full max-w-[400px] md:max-w-md lg:max-w-[460px]">
                                <div className="relative w-full aspect-[4/3] rounded-[28px] border-4 border-white/50 overflow-hidden shadow-2xl">
                                    <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none"></div>
                                    <img src="/Perfect Energy Solution Dubai.webp" alt="Dubai Office" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-primary rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Need Technical Support?</h2>
                        <p className="text-gray-300 font-sans text-lg mb-8">Our team is ready to assist you wherever you are.</p>
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
        </div>
    );
}

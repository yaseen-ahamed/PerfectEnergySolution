import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';
import { CheckCircle2, PhoneCall, MessageSquare, ArrowRight, Cpu, Wrench, Settings, Search } from 'lucide-react';

export default function ElectronicsRepair() {
    const faqData = [
        { q: "Do you repair all electronic devices?", a: "Yes, we repair a wide range of electronic devices including televisions, audio systems, power supplies, PCBs, and other electronic appliances used in homes and offices across Riyadh." },
        { q: "How long does electronics repair take?", a: "Most standard repairs are completed within 24–72 hours depending on the complexity of the issue and part availability. We always aim for the fastest turnaround." },
        { q: "Do you provide warranty for repairs?", a: "Yes. All our repair services come with a service guarantee. If the same issue reoccurs within the warranty period, we will fix it at no additional cost." },
        { q: "Do you sell electronic spare parts in Riyadh?", a: "Absolutely. We stock genuine electronic components, connectors, power modules, and repair parts. Walk-in purchases are welcome at our Riyadh location." },
        { q: "What areas in Riyadh do you cover?", a: "We cover all major areas including Olaya, Al Malaz, Al Nakheel, Al Yasmin, Al Murabba, and surrounding districts." }
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": { "@type": "Answer", "text": faq.a }
        }))
    };

    return (
        <>
            <SEO
                title="Electronics Sales & Repair in Riyadh | Device Repair & Maintenance Experts"
                description="Professional electronics sales and repair services in Riyadh. Expert technicians for device repair, component replacement, and electronic maintenance."
                canonicalUrl="/services/electronics-repair"
                jsonLdSchema={[
                    faqSchema,
                    {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Electronics Repair",
                        "provider": { "@type": "LocalBusiness", "name": "Perfect Energy Solution", "address": { "@type": "PostalAddress", "addressLocality": "Riyadh", "addressCountry": "Saudi Arabia" } },
                        "areaServed": { "@type": "City", "name": "Riyadh" }
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://perfectenergysolution.com" },
                            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://perfectenergysolution.com/services" },
                            { "@type": "ListItem", "position": 3, "name": "Electronics Sales & Repair" }
                        ]
                    }
                ]}
            />

            <div className="flex flex-col min-h-screen bg-background">
                {/* Breadcrumb */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-500 font-sans">
                        <Link to="/" className="hover:text-accent transition-colors">Home</Link>
                        <span>/</span>
                        <Link to="/services" className="hover:text-accent transition-colors">Services</Link>
                        <span>/</span>
                        <span className="text-textDark font-medium">Electronics Sales & Repair</span>
                    </nav>
                </div>

                {/* Hero / Intro Section */}
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 lg:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-sm font-medium mb-6">
                                <Cpu className="w-4 h-4" /> Professional Electronics Services
                            </div>
                            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-textDark leading-tight mb-6">
                                Electronics Sales & Repair Services in <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Riyadh</span>
                            </h1>
                            <p className="text-lg text-textDark/70 font-sans leading-relaxed mb-4">
                                Perfect Energy Solution is Riyadh's trusted destination for professional electronics repair and maintenance services. Whether you need to repair electronic devices, replace faulty components, diagnose complex electronic issues, or purchase genuine electronic equipment — our experienced technicians deliver reliable results every time.
                            </p>
                            <p className="text-base text-gray-500 font-sans leading-relaxed mb-8">
                                Serving residential customers, small businesses, retail stores, and commercial facilities across all major districts in Riyadh, we combine advanced diagnostic tools with years of hands-on expertise to get your electronics running smoothly.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="tel:+966566149219" className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg transform hover:-translate-y-1">
                                    <PhoneCall className="w-5 h-5" /> Book a Repair Service
                                </a>
                                <a href="https://wa.me/966566149219" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-primary border border-borderGrey px-8 py-4 rounded-xl font-semibold transition-all transform hover:-translate-y-1">
                                    <MessageSquare className="w-5 h-5 text-green-500" /> Request a Diagnostic
                                </a>
                            </div>
                        </div>
                        <div className="bg-primary rounded-3xl p-10 text-white relative overflow-hidden">
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>
                            <h3 className="text-xl font-heading font-bold text-white mb-6">Quick Service Overview</h3>
                            <ul className="space-y-3">
                                {["Device diagnostics & repair", "Circuit board (PCB) repair", "Component replacement & soldering", "Electronic maintenance & calibration", "Electronic equipment sales", "Genuine spare parts"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-200">
                                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Detailed Services Section */}
                <section className="bg-white py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-textDark mb-12 text-center">Our Electronics Repair Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { icon: Wrench, title: "Device Repair", items: ["Televisions & displays", "Audio systems & speakers", "Electronic appliances", "Power supplies & adapters"] },
                                { icon: Cpu, title: "Circuit Board Repair", items: ["PCB diagnostics & testing", "Component replacement", "Soldering & micro-soldering services", "Board-level fault repair"] },
                                { icon: Settings, title: "Electronic Maintenance", items: ["Preventive maintenance programs", "System calibration & tuning", "Performance testing & optimization", "Scheduled servicing contracts"] },
                                { icon: Search, title: "Electronic Troubleshooting", items: ["Fault detection & analysis", "Voltage & current testing", "Signal analysis & diagnostics", "Root cause identification"] }
                            ].map((service, idx) => (
                                <div key={idx} className="bg-background rounded-3xl p-8 border border-borderGrey">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                                            <service.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-heading font-bold text-textDark">{service.title}</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {service.items.map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-600 font-sans">
                                                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Electronics Sales Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-textDark mb-6">Electronics Sales in Riyadh</h2>
                                <p className="text-lg text-gray-600 font-sans leading-relaxed mb-6">
                                    Beyond repair services, we supply a wide range of genuine electronic components and equipment. From power modules and connectors to specialized repair parts, our inventory is sourced from trusted suppliers with full warranty backing.
                                </p>
                                <ul className="space-y-3">
                                    {["Power modules & regulators", "Electronic connectors & cables", "Circuit components & ICs", "Repair parts & tools", "Warranty-backed products"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-700 font-sans">
                                            <CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-primary rounded-3xl p-10 text-white relative overflow-hidden">
                                <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-accent/30 rounded-full blur-3xl pointer-events-none"></div>
                                <h3 className="text-2xl font-heading font-bold text-white mb-4">Why Buy From Us?</h3>
                                <ul className="space-y-3 text-gray-200">
                                    {["Genuine, quality-tested components", "Competitive pricing", "Bulk order discounts", "Expert advice on compatibility"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> {item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Repair Process */}
                <section className="bg-white py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-textDark mb-12 text-center">Our Repair Process</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                            {[
                                { num: "01", title: "Diagnosis", desc: "Complete device inspection and issue identification." },
                                { num: "02", title: "Fault Identification", desc: "Pinpoint the exact root cause using advanced tools." },
                                { num: "03", title: "Component Replacement", desc: "Replace faulty parts with genuine components." },
                                { num: "04", title: "Testing & Calibration", desc: "Rigorous testing to ensure optimal performance." },
                                { num: "05", title: "Quality Check", desc: "Final review before returning the device to you." }
                            ].map((step, idx) => (
                                <div key={idx} className="bg-background rounded-3xl p-6 border border-borderGrey text-center group hover:shadow-md transition-all">
                                    <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mx-auto mb-4 font-heading font-bold text-lg group-hover:scale-110 transition-transform">{step.num}</div>
                                    <h3 className="text-lg font-heading font-bold text-textDark mb-2">{step.title}</h3>
                                    <p className="text-gray-600 font-sans text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-textDark mb-12 text-center">
                            Why Choose Our Electronics Repair Service in Riyadh
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: "Experienced Technicians", desc: "Our team has years of hands-on experience in electronics diagnostics and repair." },
                                { title: "Advanced Diagnostic Tools", desc: "We use professional-grade equipment for precise fault detection." },
                                { title: "Genuine Replacement Parts", desc: "All components are sourced from trusted, quality-assured suppliers." },
                                { title: "Fast Turnaround Time", desc: "Most repairs are completed within 24–72 hours." },
                                { title: "Competitive Pricing", desc: "Transparent, fair pricing with no hidden charges." },
                                { title: "Service Guarantee", desc: "All repairs come with a workmanship warranty for your peace of mind." }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white rounded-3xl p-8 border border-borderGrey shadow-sm text-center">
                                    <h3 className="text-lg font-heading font-bold text-textDark mb-3">{item.title}</h3>
                                    <p className="text-gray-600 font-sans leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Local SEO — Areas Covered */}
                <section className="bg-white py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
                        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-textDark mb-6">
                            Electronics Repair Services Across Riyadh
                        </h2>
                        <p className="text-lg text-gray-600 font-sans max-w-3xl mx-auto mb-10 leading-relaxed">
                            We provide on-site and in-shop electronics repair and maintenance services covering all major areas of Riyadh including:
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {["Olaya", "Al Malaz", "Al Nakheel", "Al Yasmin", "Al Murabba", "Al Rawdah", "Al Sulimaniyah", "King Fahd District", "Al Worood", "Exit 5 Area"].map((area, idx) => (
                                <span key={idx} className="px-4 py-2 bg-accent/10 text-accent rounded-full font-semibold text-sm border border-accent/20">{area}</span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Trust Signals */}
                <section className="py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-textDark mb-12 text-center">
                            Trusted Electronics Repair Experts in Riyadh
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            {[
                                { value: "15+", label: "Years of Experience" },
                                { value: "5000+", label: "Devices Repaired" },
                                { value: "98%", label: "Customer Satisfaction" },
                                { value: "24-72h", label: "Typical Turnaround" }
                            ].map((stat, idx) => (
                                <div key={idx} className="bg-white rounded-3xl p-8 border border-borderGrey shadow-sm">
                                    <div className="text-3xl font-heading font-bold text-accent mb-2">{stat.value}</div>
                                    <div className="text-gray-600 font-sans text-sm">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Internal Links */}
                <section className="bg-white py-16">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <h2 className="text-2xl font-heading font-bold text-textDark mb-8 text-center">Explore Related Services</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {[
                                { title: "Electrical Services", slug: "electrical-services", desc: "Electrical installation and maintenance in Riyadh." },
                                { title: "Networking Solutions", slug: "networking-solutions", desc: "Office network setup and IT support." },
                                { title: "Solar & Energy Solutions", slug: "solar-solutions", desc: "Solar panel installation and energy management." }
                            ].map((link, idx) => (
                                <Link key={idx} to={`/services/${link.slug}`} className="flex items-center justify-between p-6 bg-background rounded-2xl border border-borderGrey hover:border-accent/30 transition-colors group">
                                    <div>
                                        <h3 className="font-heading font-bold text-textDark mb-1">{link.title}</h3>
                                        <p className="text-sm text-gray-500">{link.desc}</p>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-textDark mb-12 text-center">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faqData.map((faq, idx) => (
                                <details key={idx} className="bg-white rounded-2xl border border-borderGrey p-6 group">
                                    <summary className="font-heading font-bold text-textDark cursor-pointer list-none flex items-center justify-between">
                                        {faq.q}
                                        <span className="text-accent text-xl group-open:rotate-45 transition-transform">+</span>
                                    </summary>
                                    <p className="text-gray-600 font-sans mt-4 leading-relaxed">{faq.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="pb-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <div className="bg-primary rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
                            <div className="relative z-10 max-w-2xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Contact Our Electronics Repair Experts in Riyadh</h2>
                                <p className="text-gray-300 font-sans text-lg mb-8 leading-relaxed">
                                    Need a device repaired or looking to buy electronic components? Our team is ready to help.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href="tel:+966566149219" className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-emerald-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-1">
                                        <PhoneCall className="w-5 h-5" /> Call Now
                                    </a>
                                    <a href="https://wa.me/966566149219" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 font-semibold px-8 py-4 rounded-xl transition-all transform hover:-translate-y-1">
                                        <MessageSquare className="w-5 h-5" /> WhatsApp Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

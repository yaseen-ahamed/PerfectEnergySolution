import { WhatsAppIcon } from '../../components/icons/WhatsAppIcon';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';
import { CheckCircle2, PhoneCall, ArrowRight, Smartphone, CreditCard, Signal, Users } from 'lucide-react';

export default function SimCardServices() {
    const faqData = [
        { q: "What SIM cards do you sell in Riyadh?", a: "We offer SIM cards from all major Saudi carriers including STC, Mobily, and Zain. We provide both prepaid and postpaid options for individuals and businesses." },
        { q: "Can you activate my SIM card on the spot?", a: "Yes. We provide instant SIM card activation in our Riyadh store. Bring a valid ID (Iqama or national ID) and we'll have your SIM activated and ready to use within minutes." },
        { q: "Do you offer mobile data packages and recharge?", a: "Absolutely. We offer a full range of data packages, voice plans, and recharge services for all Saudi carriers. Our team can recommend the best plan based on your usage needs." },
        { q: "Do you provide bulk SIM cards for businesses?", a: "Yes. We supply bulk SIM card orders for businesses, including corporate plans, fleet management SIMs, and IoT/M2M SIM solutions. Contact us for custom business pricing." },
        { q: "Can you help me transfer my number to a new SIM?", a: "Yes, we assist with number portability (MNP) between carriers and SIM replacement services. We handle the entire process so you can keep your existing number hassle-free." }
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
                title="SIM Card Services in Riyadh | Activation, Recharge & Plans | Perfect Energy Solution"
                description="Buy SIM cards, activate new connections, recharge, and get the best mobile data plans in Riyadh. STC, Mobily & Zain SIM cards available. Instant activation at Perfect Energy Solution."
                canonicalUrl="/services/sim-card-services"
                jsonLdSchema={[
                    faqSchema,
                    {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "SIM Card Services",
                        "provider": { "@type": "LocalBusiness", "name": "Perfect Energy Solution", "address": { "@type": "PostalAddress", "addressLocality": "Riyadh", "addressCountry": "Saudi Arabia" } },
                        "areaServed": { "@type": "City", "name": "Riyadh" }
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://perfectenergysolution.com" },
                            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://perfectenergysolution.com/services" },
                            { "@type": "ListItem", "position": 3, "name": "SIM Card Services" }
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
                        <span className="text-textDark font-medium">SIM Card Services</span>
                    </nav>
                </div>

                {/* Hero / Intro Section */}
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 lg:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 text-sm font-medium mb-6">
                                <Smartphone className="w-4 h-4" /> Mobile Connectivity
                            </div>
                            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-textDark leading-tight mb-6">
                                SIM Card Services in <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Riyadh</span>
                            </h1>
                            <p className="text-lg text-textDark/70 font-sans leading-relaxed mb-4">
                                Perfect Energy Solution is your one-stop shop for SIM card activation, purchasing, mobile recharge, and data plans in Riyadh. Whether you need a new SIM card for personal use, a business fleet, or an IoT solution — we've got you covered with all major Saudi carriers including STC, Mobily, and Zain.
                            </p>
                            <p className="text-base text-gray-500 font-sans leading-relaxed mb-8">
                                Walk into our Riyadh store for instant SIM activation, hassle-free number portability, competitive data packages, and expert advice on choosing the right plan for your needs. We serve individuals, families, and businesses across all districts in Riyadh.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="tel:+966556704985" className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg transform hover:-translate-y-1">
                                    <PhoneCall className="w-5 h-5" /> Get a SIM Card
                                </a>
                                <a href="https://wa.me/966566149219" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-primary border border-borderGrey px-8 py-4 rounded-xl font-semibold transition-all transform hover:-translate-y-1">
                                    <WhatsAppIcon className="w-5 h-5 text-green-500" /> WhatsApp Us
                                </a>
                            </div>
                        </div>
                        <div className="space-y-6 lg:ml-10">
                            <div className="w-full aspect-square bg-gray-50 rounded-[2.5rem] border border-borderGrey overflow-hidden shadow-sm relative group">
                                <img src="/sim_services.webp" alt="SIM Card Services" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                            </div>
                            <div className="bg-primary rounded-[2rem] p-8 text-white relative overflow-hidden shadow-sm">
                                <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl pointer-events-none"></div>
                                <h3 className="text-lg font-heading font-bold text-white mb-4">Our SIM Card Services</h3>
                                <ul className="space-y-2">
                                    {["New SIM card sales & activation", "Prepaid & postpaid plans", "Mobile data recharge", "Number portability (MNP)", "Business & bulk SIM orders", "International roaming setup"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-200 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Detailed Services Section */}
                <section className="bg-white py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-textDark mb-12 text-center">Our SIM Card Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { icon: Smartphone, title: "SIM Activation & Setup", items: ["New SIM card registration", "Instant on-site activation", "SIM replacement & upgrades", "eSIM configuration"] },
                                { icon: CreditCard, title: "Prepaid & Postpaid Plans", items: ["STC prepaid & Sawa plans", "Mobily prepaid & postpaid", "Zain prepaid & postpaid", "Custom plan recommendations"] },
                                { icon: Signal, title: "Data Packages & Recharge", items: ["Mobile data top-ups", "Internet packages", "International calling credits", "Auto-recharge setup"] },
                                { icon: Users, title: "Business & Bulk Solutions", items: ["Corporate SIM plans", "Fleet management SIMs", "IoT & M2M SIM cards", "Bulk order discounts"] }
                            ].map((service, idx) => (
                                <div key={idx} className="bg-background rounded-3xl p-8 border border-borderGrey">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                                            <service.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-heading font-bold text-textDark">{service.title}</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {service.items.map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-600 font-sans">
                                                <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Service Process */}
                <section className="py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-textDark mb-12 text-center">How It Works</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                            {[
                                { num: "01", title: "Visit Us", desc: "Walk into our Riyadh store with a valid ID." },
                                { num: "02", title: "Choose a Plan", desc: "Our team helps you pick the best carrier and plan." },
                                { num: "03", title: "Activation", desc: "Instant SIM registration and activation on the spot." },
                                { num: "04", title: "Setup", desc: "Configure your device, APN settings, and data plan." },
                                { num: "05", title: "Stay Connected", desc: "Enjoy seamless connectivity with ongoing recharge support." }
                            ].map((step, idx) => (
                                <div key={idx} className="bg-white rounded-3xl p-6 border border-borderGrey text-center group hover:shadow-md transition-all">
                                    <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500 mx-auto mb-4 font-heading font-bold text-lg group-hover:scale-110 transition-transform">{step.num}</div>
                                    <h3 className="text-lg font-heading font-bold text-textDark mb-2">{step.title}</h3>
                                    <p className="text-gray-600 font-sans text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="bg-white py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-textDark mb-12 text-center">
                            Why Choose Us for SIM Card Services in Riyadh
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: "All Major Carriers", desc: "We offer SIM cards and plans from STC, Mobily, and Zain — all under one roof." },
                                { title: "Instant Activation", desc: "No waiting. Walk in and walk out with a fully activated SIM card in minutes." },
                                { title: "Expert Advice", desc: "Our team helps you choose the best plan based on your usage, budget, and needs." },
                                { title: "Competitive Pricing", desc: "Transparent pricing with no hidden fees. Get the best value on data and voice plans." },
                                { title: "Business Solutions", desc: "We provide bulk SIM orders, corporate plans, and IoT connectivity for businesses." },
                                { title: "Ongoing Support", desc: "Need a recharge, plan upgrade, or troubleshooting? We're always here to help." }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-background rounded-3xl p-8 border border-borderGrey shadow-sm text-center">
                                    <h3 className="text-lg font-heading font-bold text-textDark mb-3">{item.title}</h3>
                                    <p className="text-gray-600 font-sans leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Trust Signals */}
                <section className="py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-textDark mb-12 text-center">
                            Trusted SIM Card Provider in Riyadh
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            {[
                                { value: "3+", label: "Carrier Partners" },
                                { value: "1000+", label: "SIMs Activated" },
                                { value: "99%", label: "Customer Satisfaction" },
                                { value: "5 min", label: "Activation Time" }
                            ].map((stat, idx) => (
                                <div key={idx} className="bg-white rounded-3xl p-8 border border-borderGrey shadow-sm">
                                    <div className="text-3xl font-heading font-bold text-accent mb-2">{stat.value}</div>
                                    <div className="text-gray-600 font-sans text-sm">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Local SEO — Areas Covered */}
                <section className="bg-white py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
                        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-textDark mb-6">
                            SIM Card Services Across Riyadh
                        </h2>
                        <p className="text-lg text-gray-600 font-sans max-w-3xl mx-auto mb-10 leading-relaxed">
                            We provide SIM card activation, recharge, and mobile services to customers from all areas across Riyadh including:
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {["Olaya", "Al Malaz", "Al Nakheel", "Al Yasmin", "Al Murabba", "Al Rawdah", "Al Sulimaniyah", "King Fahd District", "Al Worood", "Exit 5 Area"].map((area, idx) => (
                                <span key={idx} className="px-4 py-2 bg-accent/10 text-accent rounded-full font-semibold text-sm border border-accent/20">{area}</span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Internal Links */}
                <section className="py-16">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <h2 className="text-2xl font-heading font-bold text-textDark mb-8 text-center">Explore Related Services</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {[
                                { title: "Electronics Repair", slug: "electronics-repair", desc: "Device repair and maintenance in Riyadh." },
                                { title: "Networking Solutions", slug: "networking-solutions", desc: "Office network setup and IT support." },
                                { title: "Technical Support", slug: "technical-support", desc: "General technical assistance." }
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
                <section className="bg-white py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-textDark mb-12 text-center">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faqData.map((faq, idx) => (
                                <details key={idx} className="bg-background rounded-2xl border border-borderGrey p-6 group">
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
                            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
                            <div className="relative z-10 max-w-2xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Need a SIM Card in Riyadh?</h2>
                                <p className="text-gray-300 font-sans text-lg mb-8 leading-relaxed">
                                    Visit our store for instant SIM activation, data recharges, and the best mobile plans from STC, Mobily, and Zain.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href="tel:+966556704985" className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-emerald-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-1">
                                        <PhoneCall className="w-5 h-5" /> Call Now
                                    </a>
                                    <a href="https://wa.me/966566149219" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 font-semibold px-8 py-4 rounded-xl transition-all transform hover:-translate-y-1">
                                        <WhatsAppIcon className="w-5 h-5" /> WhatsApp Us
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

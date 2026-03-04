import { WhatsAppIcon } from '../../components/icons/WhatsAppIcon';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';
import { PhoneCall, MapPin, Camera, CheckCircle2, ArrowRight } from 'lucide-react';

export default function CctvCostArticle() {
    const faqData = [
        { q: "What is the average cost of CCTV installation in Saudi Arabia?", a: "The average cost ranges from SAR 1,500 to SAR 15,000+ depending on the number of cameras, system quality, and installation complexity. A basic 4-camera analog system starts around SAR 1,500, while a premium 8-camera IP system can cost SAR 10,000 or more." },
        { q: "Does Perfect Energy Solution offer free assessments?", a: "Yes. We provide free on-site security assessments across Riyadh. Our technician will visit your property, evaluate your security needs, and provide a detailed quotation at no cost." },
        { q: "Is it cheaper to install CCTV yourself?", a: "While DIY kits exist, professional installation ensures optimal camera placement, proper wiring, reliable recording setup, and remote monitoring — which are critical for effective security. Improper installation can leave blind spots and reduce system reliability." },
        { q: "How long does CCTV installation take?", a: "A typical residential installation (4-8 cameras) takes 4-8 hours. Larger commercial projects may take 1-3 days depending on facility size and system complexity." },
        { q: "Do you offer maintenance contracts for CCTV systems?", a: "Yes, we offer annual maintenance contracts that include camera cleaning, firmware updates, storage health checks, and priority support. This helps maintain optimal system performance." }
    ];
    const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) };

    return (
        <>
            <SEO
                title="CCTV Installation Cost in Saudi Arabia 2024 | Price Guide | Perfect Energy Solution"
                description="How much does CCTV installation cost in Saudi Arabia? Complete 2024 price guide covering camera systems, installation fees, and factors that affect your total cost. Get a free quote from Perfect Energy Solution."
                canonicalUrl="/insights/cctv-installation-cost"
                jsonLdSchema={[faqSchema, {
                    "@context": "https://schema.org", "@type": "Article",
                    "headline": "How Much Does CCTV Installation Cost in Saudi Arabia? (2024 Guide)",
                    "author": { "@type": "Organization", "name": "Perfect Energy Solution" },
                    "publisher": { "@type": "Organization", "name": "Perfect Energy Solution", "logo": { "@type": "ImageObject", "url": "https://perfectenergysolution.com/Perfect Energy Solution Logo.webp" } },
                    "datePublished": "2024-08-10", "dateModified": "2024-08-10",
                    "image": "https://perfectenergysolution.com/blog-cctv-cost.png"
                }, {
                        "@context": "https://schema.org", "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://perfectenergysolution.com" },
                            { "@type": "ListItem", "position": 2, "name": "Insights", "item": "https://perfectenergysolution.com/insights" },
                            { "@type": "ListItem", "position": 3, "name": "CCTV Installation Cost" }
                        ]
                    }]}
            />
            <div className="flex flex-col min-h-screen bg-background">
                {/* Breadcrumb */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl pt-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-500 font-sans">
                        <Link to="/" className="hover:text-accent transition-colors">Home</Link><span>/</span>
                        <Link to="/insights" className="hover:text-accent transition-colors">Insights</Link><span>/</span>
                        <span className="text-textDark font-medium">CCTV Installation Cost</span>
                    </nav>
                </div>

                {/* Hero */}
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
                        <Camera className="w-4 h-4" /> Security
                    </div>
                    <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-textDark leading-tight mb-4">
                        How Much Does CCTV Installation Cost in Saudi Arabia?
                    </h1>
                    <p className="text-gray-500 font-sans text-sm mb-8">Published August 10, 2024 · 8 min read</p>
                    <div className="rounded-3xl overflow-hidden shadow-xl mb-12">
                        <img src="/blog-cctv-cost.png" alt="Professional CCTV camera installation in a modern building in Saudi Arabia" className="w-full h-auto object-cover max-h-[480px]" loading="lazy" />
                    </div>

                    {/* Article Body */}
                    <article className="prose max-w-none font-sans text-textDark/85 leading-relaxed">
                        <p className="text-lg leading-relaxed mb-6">
                            Security is a top priority for homeowners and businesses across Saudi Arabia. Whether you're protecting a residential villa in Riyadh, a retail store, or a large commercial facility, CCTV surveillance is one of the most effective deterrents against theft, vandalism, and unauthorized access. But one of the first questions everyone asks is: <strong>how much does CCTV installation actually cost?</strong>
                        </p>
                        <p className="text-lg leading-relaxed mb-8">
                            In this comprehensive guide, we break down the real costs of CCTV installation in Saudi Arabia for 2024, covering everything from basic home setups to enterprise-grade surveillance systems.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-textDark mt-12 mb-6">Average CCTV Installation Costs in Saudi Arabia</h2>
                        <p className="mb-6">The total cost of a CCTV system depends on the type of cameras, recording equipment, installation complexity, and any additional features such as remote monitoring. Here's a general breakdown:</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {[
                                { type: "Basic Analog (4 cameras)", range: "SAR 1,500 – 3,000", best: "Small homes, shops" },
                                { type: "HD/Full HD (4-8 cameras)", range: "SAR 3,000 – 7,000", best: "Medium homes, offices" },
                                { type: "IP/Network (4-8 cameras)", range: "SAR 5,000 – 12,000", best: "Offices, commercial" },
                                { type: "Enterprise (16+ cameras)", range: "SAR 12,000 – 30,000+", best: "Large facilities, warehouses" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white rounded-2xl p-6 border border-borderGrey shadow-sm">
                                    <div className="text-accent font-heading font-bold text-lg mb-1">{item.range}</div>
                                    <div className="font-heading font-semibold text-textDark mb-1">{item.type}</div>
                                    <div className="text-sm text-gray-500">Best for: {item.best}</div>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-textDark mt-12 mb-6">Factors That Affect CCTV Installation Cost</h2>
                        <p className="mb-6">Several variables can significantly influence the final price of your security system:</p>

                        <div className="space-y-4 mb-8">
                            {[
                                { title: "Number of Cameras", desc: "More cameras mean higher equipment and labour costs. A typical home needs 4-8 cameras, while commercial facilities may require 16-64+." },
                                { title: "Camera Resolution & Type", desc: "Basic 2MP cameras are affordable, but 4K cameras with night vision, weatherproofing, and PTZ capabilities cost significantly more." },
                                { title: "Recording Equipment (DVR/NVR)", desc: "Digital Video Recorders (DVR) are budget-friendly, while Network Video Recorders (NVR) offer better quality and remote access but at higher cost." },
                                { title: "Wiring & Infrastructure", desc: "Longer cable runs, conduit installations, and concealed wiring in existing buildings add to installation labour." },
                                { title: "Remote Monitoring Setup", desc: "Cloud storage, mobile app configuration, and multi-site viewing require additional setup and may involve monthly subscription fees." },
                                { title: "Location & Accessibility", desc: "Hard-to-reach mounting points, outdoor installations, and high-ceiling facilities require specialized equipment and more installation time." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4 items-start">
                                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 shrink-0" />
                                    <div>
                                        <h3 className="font-heading font-bold text-textDark">{item.title}</h3>
                                        <p className="text-gray-600 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-textDark mt-12 mb-6">How to Choose the Right CCTV System</h2>
                        <p className="mb-6">Selecting the right system doesn't always mean going for the most expensive option. Here are practical tips:</p>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Assess your property size and identify critical coverage areas (entrances, parking, corridors).",
                                "Choose IP cameras if you need remote viewing — they offer superior image quality over analog.",
                                "Opt for night vision cameras for outdoor and poorly-lit areas.",
                                "Consider storage needs: plan for at least 30 days of video retention.",
                                "Always get a professional site survey — camera placement is key to effective security.",
                                "Ask about maintenance contracts to keep your system performing optimally."
                            ].map((tip, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-700">
                                    <span className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center text-accent font-bold text-xs shrink-0 mt-0.5">{idx + 1}</span>
                                    {tip}
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-textDark mt-12 mb-6">Why Choose Perfect Energy Solution for CCTV Installation?</h2>
                        <p className="mb-6">With over 15 years of experience installing security systems across Riyadh and Saudi Arabia, Perfect Energy Solution delivers:</p>
                        <div className="bg-white rounded-3xl p-8 border border-borderGrey shadow-sm mb-8">
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Free on-site security assessment",
                                    "Certified, experienced technicians",
                                    "HD, Full HD & 4K camera options",
                                    "Remote monitoring configuration",
                                    "Annual maintenance contracts",
                                    "Competitive, transparent pricing"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 font-sans text-textDark">
                                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-background rounded-3xl p-8 border border-borderGrey mb-8">
                            <h3 className="font-heading font-bold text-textDark text-xl mb-4">Related Services</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    { title: "CCTV Installation Services", slug: "/services/cctv-installation" },
                                    { title: "Networking Solutions", slug: "/services/networking-solutions" },
                                    { title: "Electrical Services", slug: "/services/electrical-services" },
                                    { title: "Technical Support", slug: "/services/technical-support" }
                                ].map((link, idx) => (
                                    <Link key={idx} to={link.slug} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-borderGrey hover:border-accent/30 transition-colors group">
                                        <span className="font-heading font-semibold text-textDark text-sm">{link.title}</span>
                                        <ArrowRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </article>

                    {/* FAQ */}
                    <div className="mt-16 mb-16">
                        <h2 className="text-3xl font-heading font-extrabold text-textDark mb-8 text-center">Frequently Asked Questions</h2>
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
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                        <div className="bg-primary rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
                            <div className="relative z-10 max-w-2xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Get Your Free CCTV Quote Today</h2>
                                <p className="text-gray-300 font-sans text-lg mb-8">Contact Perfect Energy Solution for a free on-site security assessment and transparent pricing.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href="tel:+966566149219" className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-emerald-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-1">
                                        <PhoneCall className="w-5 h-5" /> Call Now
                                    </a>
                                    <a href="https://wa.me/966566149219" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 font-semibold px-8 py-4 rounded-xl transition-all transform hover:-translate-y-1">
                                        <WhatsAppIcon className="w-5 h-5" /> WhatsApp Us
                                    </a>
                                    <a href="https://maps.app.goo.gl/mJXH2CsENMQ7byXd8" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 font-semibold px-8 py-4 rounded-xl transition-all transform hover:-translate-y-1">
                                        <MapPin className="w-5 h-5" /> View on Maps
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

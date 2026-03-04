import { WhatsAppIcon } from '../../components/icons/WhatsAppIcon';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';
import { PhoneCall, MapPin, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ElectronicsRepairArticle() {
    const faqData = [
        { q: "Where can I repair electronics in Riyadh?", a: "Perfect Energy Solution offers professional electronics repair services across all major Riyadh districts. Our technicians handle everything from smartphones and laptops to commercial equipment and PCB-level repairs." },
        { q: "How much does electronics repair cost in Riyadh?", a: "Costs vary by device and repair type. A basic diagnosis starts from SAR 50-100. Screen replacements, motherboard repairs, and component-level fixes range from SAR 150-2,000+ depending on the device and parts required." },
        { q: "How long does electronics repair take?", a: "Simple repairs (battery replacements, screen fixes) can be done same-day. Complex repairs like motherboard or PCB-level work typically take 2-5 business days." },
        { q: "Do you repair commercial and industrial electronics?", a: "Yes. We service both consumer electronics and commercial/industrial equipment including POS systems, printers, UPS units, and monitoring equipment." },
        { q: "Do you provide a warranty on repairs?", a: "Yes, all our repairs come with a warranty period. The duration varies depending on the type of repair — typically 30-90 days for parts and labour." }
    ];
    const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) };

    return (
        <>
            <SEO
                title="Where to Repair Electronics in Riyadh? Complete 2024 Guide | Perfect Energy Solution"
                description="Looking for electronics repair in Riyadh? Complete guide to finding reliable repair technicians, common device repairs, costs, and what to look for. Expert services from Perfect Energy Solution."
                canonicalUrl="/insights/electronics-repair-guide"
                jsonLdSchema={[faqSchema, {
                    "@context": "https://schema.org", "@type": "Article",
                    "headline": "Where to Repair Electronics in Riyadh? A Complete Guide",
                    "author": { "@type": "Organization", "name": "Perfect Energy Solution" },
                    "publisher": { "@type": "Organization", "name": "Perfect Energy Solution", "logo": { "@type": "ImageObject", "url": "https://perfectenergysolution.com/Perfect Energy Solution Logo.webp" } },
                    "datePublished": "2024-10-12", "dateModified": "2024-10-12",
                    "image": "https://perfectenergysolution.com/blog-electronics-repair.png"
                }, {
                        "@context": "https://schema.org", "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://perfectenergysolution.com" },
                            { "@type": "ListItem", "position": 2, "name": "Insights", "item": "https://perfectenergysolution.com/insights" },
                            { "@type": "ListItem", "position": 3, "name": "Electronics Repair Guide" }
                        ]
                    }]}
            />
            <div className="flex flex-col min-h-screen bg-background">
                {/* Breadcrumb */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl pt-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-500 font-sans">
                        <Link to="/" className="hover:text-accent transition-colors">Home</Link><span>/</span>
                        <Link to="/insights" className="hover:text-accent transition-colors">Insights</Link><span>/</span>
                        <span className="text-textDark font-medium">Electronics Repair Guide</span>
                    </nav>
                </div>

                {/* Hero */}
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-sm font-medium mb-4">
                        <Cpu className="w-4 h-4" /> Electronics
                    </div>
                    <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-textDark leading-tight mb-4">
                        Where to Repair Electronics in Riyadh? A Complete Guide
                    </h1>
                    <p className="text-gray-500 font-sans text-sm mb-8">Published October 12, 2024 · 7 min read</p>
                    <div className="rounded-3xl overflow-hidden shadow-xl mb-12">
                        <img src="/blog-electronics-repair.png" alt="Professional electronics repair technician working on circuit board at a modern workbench" className="w-full h-auto object-cover max-h-[480px]" loading="lazy" />
                    </div>

                    {/* Article Body */}
                    <article className="prose max-w-none font-sans text-textDark/85 leading-relaxed">
                        <p className="text-lg leading-relaxed mb-6">
                            When your laptop stops charging, your office printer jams constantly, or a critical piece of equipment fails, finding a <strong>reliable electronics repair service in Riyadh</strong> becomes an urgent priority. The problem? Not all repair shops are created equal. Poor-quality repairs can cause further damage, void warranties, and end up costing you more in the long run.
                        </p>
                        <p className="text-lg leading-relaxed mb-8">
                            This comprehensive guide helps you understand what to look for in an electronics repair technician in Riyadh, what devices can typically be repaired, estimated costs, and why choosing a reputable service provider matters.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-textDark mt-12 mb-6">What to Look for in an Electronics Repair Service</h2>
                        <p className="mb-6">Not every repair shop in Riyadh delivers the same quality. Here are the key factors to evaluate before trusting anyone with your devices:</p>

                        <div className="space-y-4 mb-8">
                            {[
                                { title: "Experienced Technicians", desc: "Look for repair centres with certified technicians who have verifiable experience. At Perfect Energy Solution, our team has 15+ years of hands-on expertise in electronics repair and component-level diagnostics." },
                                { title: "Transparent Diagnosis & Pricing", desc: "A reputable repair service will provide a detailed diagnosis before any work begins, along with a clear price estimate. Avoid shops that start repairs without your approval." },
                                { title: "Genuine Parts & Components", desc: "Cheap counterfeit parts are a common problem. Always ask whether the repair shop uses OEM or high-quality replacement components." },
                                { title: "Warranty on Repairs", desc: "Any credible repair service will offer a warranty period on both parts and labour. This protects you if the same issue recurs shortly after repair." },
                                { title: "Wide Device Coverage", desc: "Choose a service that can handle multiple device types — from consumer electronics to commercial and industrial equipment — rather than a shop that only specializes in mobile phones." },
                                { title: "On-Site Availability", desc: "For businesses, on-site repair is invaluable. Look for services that offer on-location diagnostics and repair to minimize equipment downtime." }
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

                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-textDark mt-12 mb-6">Devices We Commonly Repair</h2>
                        <p className="mb-6">At Perfect Energy Solution, our Riyadh repair facility handles a wide range of electronic devices:</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {[
                                { category: "Computing", items: "Laptops, desktops, monitors, hard drives, SSDs" },
                                { category: "Printing & Office", items: "Printers, scanners, copiers, POS terminals" },
                                { category: "Networking", items: "Routers, switches, access points, modems" },
                                { category: "Power Systems", items: "UPS units, inverters, voltage stabilizers" },
                                { category: "Audio/Visual", items: "Projectors, speakers, amplifiers, display screens" },
                                { category: "Industrial", items: "Control panels, sensors, monitoring equipment" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white rounded-2xl p-6 border border-borderGrey shadow-sm">
                                    <div className="font-heading font-bold text-accent text-sm uppercase tracking-wide mb-2">{item.category}</div>
                                    <p className="text-textDark font-sans text-sm">{item.items}</p>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-textDark mt-12 mb-6">Estimated Repair Costs in Riyadh</h2>
                        <p className="mb-6">While costs vary based on the specific device and issue, here are general price ranges for common repairs:</p>

                        <div className="bg-white rounded-3xl border border-borderGrey overflow-hidden mb-8">
                            <table className="w-full text-left font-sans">
                                <thead>
                                    <tr className="bg-background border-b border-borderGrey">
                                        <th className="px-6 py-4 font-heading font-bold text-textDark text-sm">Repair Type</th>
                                        <th className="px-6 py-4 font-heading font-bold text-textDark text-sm">Estimated Cost</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-borderGrey">
                                    {[
                                        { type: "Initial Diagnosis", cost: "SAR 50 – 100" },
                                        { type: "Screen Replacement (Laptop)", cost: "SAR 300 – 800" },
                                        { type: "Battery Replacement", cost: "SAR 100 – 350" },
                                        { type: "Motherboard / PCB Repair", cost: "SAR 500 – 2,000" },
                                        { type: "Printer Repair", cost: "SAR 150 – 500" },
                                        { type: "Power Supply / UPS Repair", cost: "SAR 200 – 800" },
                                        { type: "Data Recovery", cost: "SAR 300 – 1,500" }
                                    ].map((item, idx) => (
                                        <tr key={idx} className="hover:bg-background/50 transition-colors">
                                            <td className="px-6 py-4 text-textDark text-sm">{item.type}</td>
                                            <td className="px-6 py-4 text-accent font-semibold text-sm">{item.cost}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-textDark mt-12 mb-6">Why Choose Perfect Energy Solution?</h2>
                        <p className="mb-6">With over 15 years of experience serving Riyadh, we've built a trusted reputation for reliable electronics repair:</p>
                        <div className="bg-white rounded-3xl p-8 border border-borderGrey shadow-sm mb-8">
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "15+ years of repair experience",
                                    "Component-level PCB repair capability",
                                    "Genuine quality-tested parts",
                                    "Same-day service for simple repairs",
                                    "On-site repair for businesses",
                                    "Warranty on all repairs"
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
                                    { title: "Electronics Sales & Repair", slug: "/services/electronics-repair" },
                                    { title: "Networking Solutions", slug: "/services/networking-solutions" },
                                    { title: "Technical Support", slug: "/services/technical-support" },
                                    { title: "Electrical Services", slug: "/services/electrical-services" }
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
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Need Electronics Repair in Riyadh?</h2>
                                <p className="text-gray-300 font-sans text-lg mb-8">Contact Perfect Energy Solution for fast, reliable electronics repair with genuine parts and warranty.</p>
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

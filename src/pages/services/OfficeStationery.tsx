import { WhatsAppIcon } from '../../components/icons/WhatsAppIcon';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';
import { PhoneCall, ArrowRight, FileText, Printer, Folder, StickyNote, Book, Edit3, Paperclip, Scissors, Box, Calculator, Briefcase, Coffee } from 'lucide-react';

export default function OfficeStationery() {
    const faqData = [
        { q: "Do you supply stationery in bulk for offices?", a: "Yes, we handle bulk stationery and office supply orders for corporate clients, schools, and businesses across Riyadh." },
        { q: "What types of printer ink do you stock?", a: "We sell genuine ink and toner cartridges for all major printer brands including HP, Canon, Epson, and Brother." },
        { q: "Can I order customized office supplies?", a: "Depending on the requirement, we can arrange customized or specialized office materials for bulk orders." },
        { q: "Do you offer delivery for stationery?", a: "We offer delivery services for large office supply orders across Riyadh. Please contact our team for specific delivery arrangements." }
    ];
    const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) };

    const categories = [
        { name: "Print Paper", icon: FileText, desc: "A4, A3, letter paper" },
        { name: "Printer Ink & Toner", icon: Printer, desc: "Cartridges for all models" },
        { name: "Filing Products", icon: Folder, desc: "Binders, folders, files" },
        { name: "Sticky Notes", icon: StickyNote, desc: "Post-its and memo pads" },
        { name: "Notebooks & Pads", icon: Book, desc: "Office and writing pads" },
        { name: "Pens & Markers", icon: Edit3, desc: "Premium and bulk pens" },
        { name: "Staplers & Punchers", icon: Paperclip, desc: "Heavy-duty binding" },
        { name: "Scissors & Cutters", icon: Scissors, desc: "Office cutting tools" },
        { name: "Desk Organizers", icon: Box, desc: "Trays and tidies" },
        { name: "Calculators", icon: Calculator, desc: "Scientific & desktop" },
        { name: "Business Bags", icon: Briefcase, desc: "Laptop and document bags" },
        { name: "Office Accessories", icon: Coffee, desc: "Lunch kits & daily essentials" }
    ];

    return (
        <>
            <SEO title="Office Stationery & Supplies in Riyadh | Perfect Energy Solution" description="Complete range of office stationery and supplies for businesses in Riyadh. Print paper, ink, filing, pens, desk organizers and more." canonicalUrl="/services/office-stationery"
                jsonLdSchema={[faqSchema, { "@context": "https://schema.org", "@type": "Service", "serviceType": "Office Supplies", "provider": { "@type": "LocalBusiness", "name": "Perfect Energy Solution" }, "areaServed": { "@type": "City", "name": "Riyadh" } }, { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://perfectenergysolution.com" }, { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://perfectenergysolution.com/services" }, { "@type": "ListItem", "position": 3, "name": "Office Stationery" }] }]} />
            <div className="flex flex-col min-h-screen bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-500 font-sans">
                        <Link to="/" className="hover:text-accent transition-colors">Home</Link><span>/</span>
                        <Link to="/services" className="hover:text-accent transition-colors">Services</Link><span>/</span>
                        <span className="text-textDark font-medium">Office Stationery</span>
                    </nav>
                </div>
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 lg:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 text-sm font-medium mb-6"><Paperclip className="w-4 h-4" /> Office Needs</div>
                            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-textDark leading-tight mb-6">Office Stationery & Supplies in <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Riyadh</span></h1>
                            <p className="text-lg text-textDark/70 font-sans leading-relaxed mb-4">Perfect Energy Solution supplies essential office materials for businesses, schools, and workplaces. We ensure your team has everything they need for a productive and organized environment.</p>
                            <p className="text-base text-gray-500 font-sans leading-relaxed mb-8">From daily consumables like print paper and ink toners to desk organizers, filing systems, and premium business bags, we carry a comprehensive range of high-quality stationery.</p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="tel:+966556704985" className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg transform hover:-translate-y-1"><PhoneCall className="w-5 h-5" /> Order Supplies</a>
                                <a href="https://wa.me/966566149219" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-primary border border-borderGrey px-8 py-4 rounded-xl font-semibold transition-all transform hover:-translate-y-1"><WhatsAppIcon className="w-5 h-5 text-green-500" /> WhatsApp Us</a>
                            </div>
                        </div>
                        <div className="space-y-6 lg:ml-10">
                            <div className="w-full aspect-square bg-gray-50 rounded-[2.5rem] border border-borderGrey overflow-hidden shadow-sm relative group">
                                <img src="/office_stationery.png" alt="Office Stationery Supplies" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Categories Section */}
                <section className="bg-white py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-textDark mb-4">Our Product Categories</h2>
                            <p className="text-lg text-gray-500 font-sans">Everything you need to keep your office running smoothly.</p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
                            {categories.map((cat, idx) => (
                                <div key={idx} className="bg-background rounded-2xl p-6 border border-borderGrey hover:border-accent/40 hover:shadow-md transition-all group flex flex-col items-center text-center">
                                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                        <cat.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-base font-heading font-bold text-textDark mb-1 leading-tight group-hover:text-accent transition-colors">{cat.name}</h3>
                                    <p className="text-xs text-gray-500 font-sans">{cat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"><h2 className="text-2xl font-heading font-bold text-textDark mb-8 text-center">Explore Related Services</h2><div className="grid grid-cols-1 sm:grid-cols-3 gap-4">{[{ title: "Laptop & Mobile", slug: "laptop-mobile", desc: "Device sales and repair." }, { title: "Networking Solutions", slug: "networking-solutions", desc: "Office network setup and IT support." }, { title: "CCTV & Security", slug: "cctv-installation", desc: "Security solutions." }].map((link, idx) => (<Link key={idx} to={`/services/${link.slug}`} className="flex items-center justify-between p-6 bg-background rounded-2xl border border-borderGrey hover:border-accent/30 transition-colors group"><div><h3 className="font-heading font-bold text-textDark mb-1">{link.title}</h3><p className="text-sm text-gray-500">{link.desc}</p></div><ArrowRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" /></Link>))}</div></div></section>
                <section className="bg-white py-20"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><h2 className="text-3xl md:text-4xl font-heading font-extrabold text-textDark mb-12 text-center">Frequently Asked Questions</h2><div className="space-y-4">{faqData.map((faq, idx) => (<details key={idx} className="bg-background rounded-2xl border border-borderGrey p-6 group"><summary className="font-heading font-bold text-textDark cursor-pointer list-none flex items-center justify-between">{faq.q}<span className="text-accent text-xl group-open:rotate-45 transition-transform">+</span></summary><p className="text-gray-600 font-sans mt-4 leading-relaxed">{faq.a}</p></details>))}</div></div></section>
                <section className="pb-20"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"><div className="bg-primary rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"><div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div><div className="relative z-10 max-w-2xl mx-auto"><h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Enquire for Bulk Orders</h2><p className="text-gray-300 font-sans text-lg mb-8">Contact us today to stock up your workspace with our premium stationery supplies.</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><a href="tel:+966556704985" className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-emerald-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-1"><PhoneCall className="w-5 h-5" /> Call Now</a><a href="https://wa.me/966566149219" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 font-semibold px-8 py-4 rounded-xl transition-all transform hover:-translate-y-1"><WhatsAppIcon className="w-5 h-5" /> WhatsApp Us</a></div></div></div></div></section>
            </div>
        </>
    );
}

import { WhatsAppIcon } from '../../components/icons/WhatsAppIcon';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';
import { CheckCircle2, PhoneCall, ArrowRight, Laptop, Smartphone, HardDrive, Shield } from 'lucide-react';

export default function LaptopMobile() {
    const faqData = [
        { q: "Do you repair both laptops and smartphones?", a: "Yes, our expert technicians are trained to repair all major brands of laptops and smartphones, including Apple, Samsung, Dell, HP, Lenovo, and more." },
        { q: "How long does a typical repair take?", a: "Most common repairs like screen or battery replacements can be completed within 1-2 days. Complex hardware issues or data recovery may take longer." },
        { q: "Do you offer new devices for sale?", a: "Absolutely. We supply high-quality laptops, smartphones, and accessories for both individuals and businesses." },
        { q: "Is my data safe during repair?", a: "We prioritize your privacy and data security. Our technicians follow strict protocols, and we offer dedicated data recovery services if your device is compromised." },
        { q: "Do you provide warranties on repairs?", a: "Yes, we provide a warranty on parts and labor for most of our repairs to ensure your complete peace of mind." }
    ];
    const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) };

    return (
        <>
            <SEO title="Laptop & Mobile Repair and Sales in Riyadh | Perfect Energy Solution" description="Professional laptop and smartphone solutions in Riyadh. Device sales, hardware repair, software troubleshooting, upgrades, and maintenance." canonicalUrl="/services/laptop-mobile"
                jsonLdSchema={[faqSchema, { "@context": "https://schema.org", "@type": "Service", "serviceType": "Electronics Repair", "provider": { "@type": "LocalBusiness", "name": "Perfect Energy Solution" }, "areaServed": { "@type": "City", "name": "Riyadh" } }, { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://perfectenergysolution.com" }, { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://perfectenergysolution.com/services" }, { "@type": "ListItem", "position": 3, "name": "Laptop & Mobile" }] }]} />
            <div className="flex flex-col min-h-screen bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-500 font-sans">
                        <Link to="/" className="hover:text-accent transition-colors">Home</Link><span>/</span>
                        <Link to="/services" className="hover:text-accent transition-colors">Services</Link><span>/</span>
                        <span className="text-textDark font-medium">Laptop & Mobile</span>
                    </nav>
                </div>
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 lg:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-sm font-medium mb-6"><Laptop className="w-4 h-4" /> Device Solutions</div>
                            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-textDark leading-tight mb-6">Laptop & Mobile Sales and Repair in <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Riyadh</span></h1>
                            <p className="text-lg text-textDark/70 font-sans leading-relaxed mb-4">Perfect Energy Solution delivers professional laptop and smartphone solutions. We provide expert hardware repair, software troubleshooting, parts replacement, and sales of high-quality devices for individuals and businesses.</p>
                            <p className="text-base text-gray-500 font-sans leading-relaxed mb-8">From broken screens and battery replacements to complex motherboard diagnostics and data recovery, our certified technicians ensure your devices perform at their best.</p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="tel:+966556704985" className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg transform hover:-translate-y-1"><PhoneCall className="w-5 h-5" /> Book a Repair</a>
                                <a href="https://wa.me/966566149219" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-primary border border-borderGrey px-8 py-4 rounded-xl font-semibold transition-all transform hover:-translate-y-1"><WhatsAppIcon className="w-5 h-5 text-green-500" /> WhatsApp Us</a>
                            </div>
                        </div>
                        <div className="space-y-6 lg:ml-10">
                            <div className="w-full aspect-square bg-gray-50 rounded-[2.5rem] border border-borderGrey overflow-hidden shadow-sm relative group">
                                <img src="/laptop_mobile.png" alt="Laptop & Mobile Solutions" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                            </div>
                            <div className="bg-primary rounded-[2rem] p-8 text-white relative overflow-hidden shadow-sm">
                                <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>
                                <h3 className="text-lg font-heading font-bold text-white mb-4">Supported Services</h3>
                                <ul className="space-y-2">{["Laptop repair & maintenance", "Smartphone troubleshooting", "Display & screen replacement", "Battery replacements", "Hardware upgrades (SSD/RAM)", "OS installation & recovery"].map((item, i) => (<li key={i} className="flex items-center gap-3 text-gray-200 text-sm"><CheckCircle2 className="w-4 h-4 text-accent shrink-0" /> {item}</li>))}</ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-white py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-textDark mb-12 text-center">Comprehensive Device Solutions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[{ icon: Laptop, title: "Hardware Repair & Upgrades", items: ["Motherboard diagnostics", "RAM and SSD upgrades", "Keyboard and trackpad repair", "Cooling system maintenance"] }, { icon: Smartphone, title: "Mobile & Tablet Service", items: ["Screen replacement", "Battery replacement", "Charging port repair", "Water damage recovery"] }, { icon: HardDrive, title: "Data & Software", items: ["Data recovery services", "OS installation/formatting", "Virus and malware removal", "Software licensing"] }, { icon: Shield, title: "Sales & Accessories", items: ["New laptops and smartphones", "Protective cases and covers", "Chargers and cables", "Peripherals and add-ons"] }].map((s, idx) => (
                                <div key={idx} className="bg-background rounded-3xl p-8 border border-borderGrey">
                                    <div className="flex items-center gap-4 mb-6"><div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500"><s.icon className="w-6 h-6" /></div><h3 className="text-xl font-heading font-bold text-textDark">{s.title}</h3></div>
                                    <ul className="space-y-2">{s.items.map((item, i) => (<li key={i} className="flex items-center gap-3 text-gray-600 font-sans"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" /> {item}</li>))}</ul>
                                </div>))}
                        </div>
                    </div>
                </section>
                <section className="py-20"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"><h2 className="text-3xl md:text-4xl font-heading font-extrabold text-textDark mb-12 text-center">Why Choose Us?</h2><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">{[{ num: "01", title: "Expert Techs", desc: "Certified professionals with years of experience." }, { num: "02", title: "Quality Parts", desc: "We use high-grade replacement parts for all repairs." }, { num: "03", title: "Data Privacy", desc: "Your personal data remains completely secure." }, { num: "04", title: "Warranty", desc: "Reliable warranty on our services and products." }].map((step, idx) => (<div key={idx} className="bg-white rounded-3xl p-6 border border-borderGrey text-center group hover:shadow-md transition-all"><div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mx-auto mb-4 font-heading font-bold text-lg group-hover:scale-110 transition-transform">{step.num}</div><h3 className="text-lg font-heading font-bold text-textDark mb-2">{step.title}</h3><p className="text-gray-600 font-sans text-sm leading-relaxed">{step.desc}</p></div>))}</div></div></section>
                <section className="bg-white py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"><h2 className="text-2xl font-heading font-bold text-textDark mb-8 text-center">Explore Related Services</h2><div className="grid grid-cols-1 sm:grid-cols-3 gap-4">{[{ title: "Office Stationery", slug: "office-stationery", desc: "Essential office supplies." }, { title: "Networking Solutions", slug: "networking-solutions", desc: "Office network setup and IT support." }, { title: "CCTV & Security", slug: "cctv-installation", desc: "Security solutions." }].map((link, idx) => (<Link key={idx} to={`/services/${link.slug}`} className="flex items-center justify-between p-6 bg-background rounded-2xl border border-borderGrey hover:border-accent/30 transition-colors group"><div><h3 className="font-heading font-bold text-textDark mb-1">{link.title}</h3><p className="text-sm text-gray-500">{link.desc}</p></div><ArrowRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" /></Link>))}</div></div></section>
                <section className="py-20"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><h2 className="text-3xl md:text-4xl font-heading font-extrabold text-textDark mb-12 text-center">Frequently Asked Questions</h2><div className="space-y-4">{faqData.map((faq, idx) => (<details key={idx} className="bg-white rounded-2xl border border-borderGrey p-6 group"><summary className="font-heading font-bold text-textDark cursor-pointer list-none flex items-center justify-between">{faq.q}<span className="text-accent text-xl group-open:rotate-45 transition-transform">+</span></summary><p className="text-gray-600 font-sans mt-4 leading-relaxed">{faq.a}</p></details>))}</div></div></section>
                <section className="pb-20"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"><div className="bg-primary rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"><div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div><div className="relative z-10 max-w-2xl mx-auto"><h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Fix Your Device Today</h2><p className="text-gray-300 font-sans text-lg mb-8">Reach out for prompt and professional repair or sales inquiries.</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><a href="tel:+966556704985" className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-emerald-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-1"><PhoneCall className="w-5 h-5" /> Call Now</a><a href="https://wa.me/966566149219" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 font-semibold px-8 py-4 rounded-xl transition-all transform hover:-translate-y-1"><WhatsAppIcon className="w-5 h-5" /> WhatsApp Us</a></div></div></div></div></section>
            </div>
        </>
    );
}

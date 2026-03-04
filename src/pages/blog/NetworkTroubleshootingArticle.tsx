import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';
import { PhoneCall, MessageSquare, MapPin, Network, CheckCircle2, ArrowRight, AlertTriangle } from 'lucide-react';

export default function NetworkTroubleshootingArticle() {
    const faqData = [
        { q: "Why is my office internet so slow?", a: "Common causes include bandwidth congestion from too many connected devices, outdated network equipment (routers/switches), poor cable management, incorrect QoS settings, or ISP throttling. A professional network audit can pinpoint the exact issue." },
        { q: "How often should office network equipment be upgraded?", a: "Routers and switches should be evaluated every 3-5 years. If you're experiencing frequent disconnections or slow speeds, an immediate assessment is recommended." },
        { q: "Can you troubleshoot our network remotely?", a: "Yes, for many issues we can diagnose problems remotely. However, hardware-related issues, cable faults, and infrastructure upgrades require on-site visits." },
        { q: "How long does a network audit take?", a: "A basic office network audit takes 2-4 hours. Larger commercial networks with multiple floors or sites can take 1-2 days for a comprehensive assessment." },
        { q: "Do you offer ongoing IT support contracts?", a: "Yes, we offer monthly and annual IT support contracts that include network monitoring, troubleshooting, firmware updates, and priority on-site support for businesses in Riyadh." }
    ];
    const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) };

    return (
        <>
            <SEO
                title="How to Fix Office Internet Network Problems | Troubleshooting Guide | Perfect Energy Solution"
                description="Complete guide to fixing office internet network problems. Learn how to troubleshoot slow internet, Wi-Fi drops, and network latency issues. Professional networking support in Riyadh."
                canonicalUrl="/insights/network-troubleshooting"
                jsonLdSchema={[faqSchema, {
                    "@context": "https://schema.org", "@type": "Article",
                    "headline": "How to Fix Office Internet Network Problems — Troubleshooting Guide",
                    "author": { "@type": "Organization", "name": "Perfect Energy Solution" },
                    "publisher": { "@type": "Organization", "name": "Perfect Energy Solution", "logo": { "@type": "ImageObject", "url": "https://perfectenergysolution.com/Perfect Energy Solution Logo.webp" } },
                    "datePublished": "2024-09-05", "dateModified": "2024-09-05",
                    "image": "https://perfectenergysolution.com/blog-network-troubleshooting.png"
                }, {
                        "@context": "https://schema.org", "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://perfectenergysolution.com" },
                            { "@type": "ListItem", "position": 2, "name": "Insights", "item": "https://perfectenergysolution.com/insights" },
                            { "@type": "ListItem", "position": 3, "name": "Network Troubleshooting" }
                        ]
                    }]}
            />
            <div className="flex flex-col min-h-screen bg-background">
                {/* Breadcrumb */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl pt-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-500 font-sans">
                        <Link to="/" className="hover:text-accent transition-colors">Home</Link><span>/</span>
                        <Link to="/insights" className="hover:text-accent transition-colors">Insights</Link><span>/</span>
                        <span className="text-textDark font-medium">Network Troubleshooting</span>
                    </nav>
                </div>

                {/* Hero */}
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-4">
                        <Network className="w-4 h-4" /> Networking
                    </div>
                    <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-textDark leading-tight mb-4">
                        How to Fix Office Internet Network Problems
                    </h1>
                    <p className="text-gray-500 font-sans text-sm mb-8">Published September 05, 2024 · 7 min read</p>
                    <div className="rounded-3xl overflow-hidden shadow-xl mb-12">
                        <img src="/blog-network-troubleshooting.png" alt="IT technician troubleshooting network equipment in a modern office server room" className="w-full h-auto object-cover max-h-[480px]" loading="lazy" />
                    </div>

                    {/* Article Body */}
                    <article className="prose max-w-none font-sans text-textDark/85 leading-relaxed">
                        <p className="text-lg leading-relaxed mb-6">
                            A slow or unreliable office internet connection doesn't just frustrate employees — it directly impacts productivity, client communication, and revenue. In today's connected workplace, even 30 minutes of network downtime can cause significant disruption. Whether you're dealing with <strong>slow internet speeds</strong>, <strong>frequent Wi-Fi disconnections</strong>, or <strong>complete network outages</strong>, this guide will help you identify and resolve the most common office network problems.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-textDark mt-12 mb-6">Common Causes of Office Network Problems</h2>
                        <p className="mb-6">Before jumping into solutions, it's important to understand what typically causes network issues in office environments:</p>

                        <div className="space-y-4 mb-8">
                            {[
                                { title: "Bandwidth Overload", desc: "Too many devices competing for limited bandwidth. Video conferencing, cloud backups, and streaming can consume excessive bandwidth during peak hours.", icon: "🔴" },
                                { title: "Outdated Network Equipment", desc: "Routers and switches older than 5 years may not support current speeds or handle the number of connected devices your office requires.", icon: "🟠" },
                                { title: "Poor Wi-Fi Coverage", desc: "Dead zones caused by incorrect access point placement, physical obstructions (concrete walls, metal structures), or interference from other electronics.", icon: "🟡" },
                                { title: "Cable & Wiring Issues", desc: "Damaged Ethernet cables, loose connections, or outdated Cat5 cabling that can't support gigabit speeds.", icon: "🔵" },
                                { title: "DNS & Configuration Errors", desc: "Incorrect DNS settings, IP conflicts, or misconfigured DHCP servers can cause intermittent connectivity issues.", icon: "🟣" },
                                { title: "ISP-Level Problems", desc: "Sometimes the issue isn't within your office at all — ISP outages, throttling, or under-provisioned plans are common culprits.", icon: "⚪" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4 items-start bg-white rounded-2xl p-5 border border-borderGrey">
                                    <span className="text-2xl">{item.icon}</span>
                                    <div>
                                        <h3 className="font-heading font-bold text-textDark">{item.title}</h3>
                                        <p className="text-gray-600 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-textDark mt-12 mb-6">Step-by-Step Troubleshooting Guide</h2>
                        <p className="mb-6">Follow these steps systematically to diagnose and fix your office network problems:</p>

                        <div className="space-y-6 mb-8">
                            {[
                                { step: "01", title: "Run a Speed Test", desc: "Use speedtest.net or fast.com to check your actual download/upload speeds against what your ISP plan promises. Test from both Wi-Fi and a wired connection." },
                                { step: "02", title: "Restart Your Network Equipment", desc: "Power cycle your modem, router, and switches (turn off, wait 30 seconds, turn on in sequence). This clears cached errors and refreshes connections." },
                                { step: "03", title: "Check Physical Connections", desc: "Inspect all Ethernet cables for damage. Ensure cables are firmly seated in ports. Look for blinking activity lights on switches — no light means no connection." },
                                { step: "04", title: "Test Individual Segments", desc: "Connect a laptop directly to the modem via Ethernet. If speeds are normal, the problem is downstream (router/switch/Wi-Fi). If slow, contact your ISP." },
                                { step: "05", title: "Scan for Bandwidth Hogs", desc: "Use your router's admin panel to identify which devices are consuming the most bandwidth. Large file uploads, cloud syncs, or video streams may be saturating your connection." },
                                { step: "06", title: "Update Firmware & Drivers", desc: "Outdated router firmware and network driver software can cause compatibility issues and security vulnerabilities. Always keep them updated." },
                                { step: "07", title: "Check Wi-Fi Channel Congestion", desc: "Use a Wi-Fi analyzer app to see which channels are crowded. Switch to a less congested channel (or use 5GHz band) for better performance." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4 items-start">
                                    <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent font-heading font-bold text-sm shrink-0">{item.step}</div>
                                    <div>
                                        <h3 className="font-heading font-bold text-textDark">{item.title}</h3>
                                        <p className="text-gray-600 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-amber-50 rounded-3xl p-8 border border-amber-200 mb-8">
                            <div className="flex items-center gap-3 mb-3">
                                <AlertTriangle className="w-6 h-6 text-amber-500" />
                                <h3 className="font-heading font-bold text-amber-800 text-lg">When to Call a Professional</h3>
                            </div>
                            <p className="text-amber-700 font-sans text-sm leading-relaxed">
                                If the basic steps above don't resolve your issue, or if you're experiencing recurring problems, it's time to engage professional network engineers. Issues like VLAN configuration, firewall rules, structured cabling faults, and server connectivity require specialized tools and expertise.
                            </p>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-textDark mt-12 mb-6">How Perfect Energy Solution Can Help</h2>
                        <p className="mb-6">Our networking team in Riyadh provides comprehensive network solutions for businesses of all sizes:</p>
                        <div className="bg-white rounded-3xl p-8 border border-borderGrey shadow-sm mb-8">
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Complete network audit & assessment",
                                    "Router & switch setup and configuration",
                                    "Structured cabling (Cat6/Cat6a)",
                                    "Wi-Fi access point optimization",
                                    "Server setup & management",
                                    "Ongoing IT support contracts"
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
                                    { title: "Networking Solutions", slug: "/services/networking-solutions" },
                                    { title: "Technical Support", slug: "/services/technical-support" },
                                    { title: "CCTV Installation", slug: "/services/cctv-installation" },
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
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Need Professional Network Support?</h2>
                                <p className="text-gray-300 font-sans text-lg mb-8">Get a comprehensive network audit and expert troubleshooting from our Riyadh-based team.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href="tel:+966566149219" className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-emerald-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-1">
                                        <PhoneCall className="w-5 h-5" /> Call Now
                                    </a>
                                    <a href="https://wa.me/966566149219" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 font-semibold px-8 py-4 rounded-xl transition-all transform hover:-translate-y-1">
                                        <MessageSquare className="w-5 h-5" /> WhatsApp Us
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

import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';
import { Cpu, Network, Camera, Zap, Wrench, CheckCircle2, PhoneCall, Smartphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export default function Services() {
    const services = [
        {
            id: "electronics",
            icon: Cpu,
            title: "Electronics Sales & Repair",
            description: "We provide repair and maintenance services for various electronic devices.",
            items: [
                "Electronic device repair",
                "Component troubleshooting",
                "Hardware servicing",
                "Electronic product sales"
            ],
            benefits: [
                "Extend device lifespan",
                "Reduce replacement costs",
                "Professional repair"
            ],
            color: "from-blue-500/20 to-secondary/30",
            accent: "text-blue-500",
            accentBg: "bg-blue-500/10",
            slug: "electronics-repair"
        },
        {
            id: "networking",
            icon: Network,
            title: "Networking & Software Solutions",
            description: "We provide reliable networking infrastructure and software support for offices and businesses.",
            items: [
                "Network installation",
                "Router and switch configuration",
                "Office networking setup",
                "Software troubleshooting",
                "Technical IT support"
            ],
            benefits: [
                "Improved connectivity",
                "Better office productivity",
                "Reliable network infrastructure"
            ],
            color: "from-indigo-500/20 to-primary/30",
            accent: "text-indigo-400",
            accentBg: "bg-indigo-400/10",
            slug: "networking-solutions"
        },
        {
            id: "cctv",
            icon: Camera,
            title: "CCTV & Security Systems",
            description: "Security systems help protect homes, offices, and commercial facilities.",
            items: [
                "CCTV installation",
                "Security camera configuration",
                "Surveillance system maintenance",
                "Security system upgrades"
            ],
            benefits: [
                "Property protection",
                "Remote monitoring",
                "Improved safety"
            ],
            color: "from-accent/20 to-primary/30",
            accent: "text-accent",
            accentBg: "bg-accent/10",
            slug: "cctv-installation"
        },
        {
            id: "electrical",
            icon: Zap,
            title: "Electrical Services",
            description: "Our electrical technicians provide professional electrical solutions for homes and commercial facilities.",
            items: [
                "Electrical installation",
                "Maintenance services",
                "Fault detection and repair",
                "Electrical system upgrades"
            ],
            benefits: [
                "Safe electrical systems",
                "Reliable power distribution"
            ],
            color: "from-yellow-400/20 to-orange-500/30",
            accent: "text-amber-400",
            accentBg: "bg-amber-400/10",
            slug: "electrical-services"
        },
        {
            id: "support",
            icon: Wrench,
            title: "General Technical Services",
            description: "We offer a variety of technical services that help businesses and homes operate efficiently.",
            items: [
                "Office technical support",
                "Equipment installation",
                "General troubleshooting"
            ],
            benefits: [],
            color: "from-emerald-500/20 to-accent/30",
            accent: "text-emerald-400",
            accentBg: "bg-emerald-400/10",
            slug: "technical-support"
        },
        {
            id: "simcard",
            icon: Smartphone,
            title: "SIM Card Services",
            description: "We provide SIM card activation, purchasing, mobile recharge, and data plans from all major Saudi carriers.",
            items: [
                "New SIM card sales & activation",
                "Prepaid & postpaid plans",
                "Mobile data recharge",
                "Number portability (MNP)",
                "Business & bulk SIM orders"
            ],
            benefits: [
                "Instant activation",
                "All major carriers",
                "Competitive pricing"
            ],
            color: "from-purple-500/20 to-white/30",
            accent: "text-purple-500",
            accentBg: "bg-purple-500/10",
            slug: "sim-card-services"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-background pt-12 pb-24">
            <SEO
                title="Technical Services in Riyadh Saudi Arabia | Electronics, CCTV, Networking, Electrical"
                description="Explore our full range of professional technical services in Riyadh including electronics repair, networking solutions, CCTV installation, electrical services, technical support, and SIM card services."
                canonicalUrl="/services"
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
                        "name": "Services"
                    }]
                }}
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                {/* Page Header */}
                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-textDark text-sm font-medium mb-6">
                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                        What We Do
                    </div>
                    <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-textDark max-w-2xl leading-tight mb-4">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Services</span> in Riyadh
                    </h1>
                    <p className="text-xl text-textDark/70 font-sans max-w-2xl leading-relaxed">
                        Perfect Energy Solution offers a comprehensive range of professional technical services in Riyadh, Saudi Arabia — designed to support homes, offices, and commercial facilities.
                    </p>
                </div>

                {/* Detailed Service Sections */}
                <div className="space-y-8">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            id={service.id}
                            className="bg-white rounded-3xl p-8 md:p-10 border border-borderGrey shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                            <div className="relative z-10">
                                <div className="flex flex-col md:flex-row md:items-start gap-8">
                                    {/* Service Header */}
                                    <div className="md:w-1/2">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className={`w-14 h-14 rounded-2xl ${service.accentBg} flex items-center justify-center ${service.accent} group-hover:scale-110 transition-transform duration-500`}>
                                                <service.icon className="w-7 h-7" />
                                            </div>
                                            <span className="text-sm font-semibold text-gray-400">0{index + 1}</span>
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-textDark mb-4">{service.title}</h2>
                                        <p className="text-gray-600 font-sans leading-relaxed text-lg">{service.description}</p>
                                    </div>

                                    {/* Services & Benefits */}
                                    <div className="md:w-1/2 space-y-6">
                                        <div>
                                            <h4 className="font-heading font-semibold text-textDark mb-3 text-sm uppercase tracking-wider">Services Include</h4>
                                            <ul className="space-y-2">
                                                {service.items.map((item, idx) => (
                                                    <li key={idx} className="flex items-center gap-3 text-gray-700 font-sans">
                                                        <CheckCircle2 className={`w-4 h-4 shrink-0 ${service.accent}`} />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {service.benefits.length > 0 && (
                                            <div>
                                                <h4 className="font-heading font-semibold text-textDark mb-3 text-sm uppercase tracking-wider">Benefits</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {service.benefits.map((benefit, idx) => (
                                                        <span key={idx} className={`px-3 py-1.5 rounded-full text-sm font-medium ${service.accentBg} ${service.accent}`}>
                                                            {benefit}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <Link to={`/services/${service.slug}`} className={`inline-flex items-center gap-2 mt-6 font-semibold ${service.accent} hover:gap-3 transition-all`}>
                                View Full Details <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-16 bg-primary rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Need Technical Support?</h2>
                        <p className="text-gray-300 font-sans text-lg mb-8">
                            Our team is ready to help you with reliable electronics repair, networking solutions, CCTV installation, and electrical services.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+966566149219"
                                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-emerald-500 text-white font-semibold px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(15,169,88,0.4)] transition-all transform hover:-translate-y-1"
                            >
                                <PhoneCall className="w-5 h-5" />
                                Call Now
                            </a>
                            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 font-semibold px-8 py-4 rounded-xl transition-all transform hover:-translate-y-1">
                                <WhatsAppIcon className="w-5 h-5" />
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

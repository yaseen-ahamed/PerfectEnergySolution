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
            slug: "electronics-repair",
            image: "/electronics_repair.webp"
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
            slug: "networking-solutions",
            image: "/networking_solutions.webp"
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
            slug: "cctv-installation",
            image: "/cctv_security.webp"
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
            slug: "electrical-services",
            image: "/electrical_services.webp"
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
            slug: "technical-support",
            image: "/tech_support.webp"
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
            slug: "sim-card-services",
            image: "/sim_services.webp"
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            id={service.id}
                            className="bento-card group hover-3d block overflow-hidden bg-white border border-borderGrey/50 p-2 flex flex-col"
                        >
                            <div className="flex flex-col h-full bg-white rounded-[1.75rem] border border-borderGrey overflow-hidden">
                                <div className="w-full aspect-square relative bg-gray-50 border-b border-borderGrey shrink-0 overflow-hidden bento-image-container">
                                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 z-10 pointer-events-none"></div>
                                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1s] ease-out" loading="lazy" />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className={`w-12 h-12 rounded-[1rem] ${service.accentBg} flex items-center justify-center ${service.accent} group-hover:scale-110 transition-transform duration-500 border border-borderGrey shadow-sm shrink-0`}>
                                            <service.icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-sm font-semibold text-gray-400">0{index + 1}</span>
                                    </div>
                                    <h2 className="text-xl font-heading font-bold text-textDark mb-3 tracking-tight group-hover:text-accent transition-colors duration-300">{service.title}</h2>
                                    <p className="text-gray-500 text-sm font-sans leading-relaxed mb-6 flex-grow">{service.description}</p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-heading font-semibold text-textDark mb-3 text-xs uppercase tracking-wider">Services Include</h4>
                                            <ul className="space-y-2">
                                                {service.items.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-gray-600 font-sans text-sm">
                                                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${service.accent}`} />
                                                        <span className="leading-snug">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <Link to={`/services/${service.slug}`} className={`inline-flex items-center justify-between w-full p-4 bg-background border border-borderGrey rounded-xl hover:border-accent/30 transition-colors group/btn`}>
                                            <span className="font-semibold text-primary text-sm uppercase tracking-wider group-hover/btn:text-accent transition-colors">View Details</span>
                                            <div className={`w-8 h-8 rounded-full bg-white border border-borderGrey flex items-center justify-center text-primary group-hover/btn:bg-accent group-hover/btn:text-white group-hover/btn:border-accent transition-colors duration-300 shadow-sm`}>
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
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
                                href="tel:+966556704985"
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

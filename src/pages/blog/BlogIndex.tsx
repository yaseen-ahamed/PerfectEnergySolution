import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BlogIndex() {
    const posts = [
        {
            id: "cctv-installation-cost",
            title: "How much does CCTV installation cost in Riyadh?",
            excerpt: "A complete guide to understanding the costs involved in setting up professional security cameras for your home or business.",
            date: "August 10, 2024",
            category: "Security",
            image: "/blog-cctv-cost.png",
            readTime: "8 min read"
        },
        {
            id: "network-troubleshooting",
            title: "How to fix office internet network problems",
            excerpt: "Discover the most common causes of workplace network latency and how to troubleshoot routers and switches effectively.",
            date: "September 05, 2024",
            category: "Networking",
            image: "/blog-network-troubleshooting.png",
            readTime: "7 min read"
        },
        {
            id: "electronics-repair-guide",
            title: "Where to repair electronics in Riyadh? A Complete Guide",
            excerpt: "Finding a reliable repair technician is critical to extending the life of your hardware. Here is what to look for.",
            date: "October 12, 2024",
            category: "Electronics",
            image: "/blog-electronics-repair.png",
            readTime: "7 min read"
        }
    ];

    return (
        <>
            <SEO
                title="Insights | Perfect Energy Solution"
                description="Read insights, guides, and technical tips from Perfect Energy Solution. Learn about electronics, networking, security, and electrical maintenance."
                canonicalUrl="/insights"
            />
            <div className="container mx-auto px-4 py-20 mt-10 max-w-7xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Technical Insights</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Read the latest expert insights, industry news, and comprehensive guides to help you manage your technical infrastructure.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map(post => (
                        <Link key={post.id} to={`/insights/${post.id}`} className="bg-white rounded-3xl border border-borderGrey shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden flex flex-col transform hover:-translate-y-1">
                            <div className="relative overflow-hidden aspect-[16/10]">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-accent shadow-sm">{post.category}</span>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <h2 className="text-xl font-heading font-bold text-textDark mb-3 leading-tight group-hover:text-accent transition-colors">{post.title}</h2>
                                <p className="text-gray-600 text-sm mb-6 flex-grow">{post.excerpt}</p>
                                <div className="flex items-center justify-between pt-4 border-t border-borderGrey">
                                    <div className="flex items-center gap-3 text-xs text-gray-400">
                                        <span>{post.date}</span>
                                        <span>·</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <span className="inline-flex items-center gap-1 text-accent font-semibold text-sm group-hover:gap-2 transition-all">
                                        Read <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

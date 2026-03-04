import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Locations', path: '/locations' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    return (
        <header className="sticky top-0 z-50 w-full border-b border-borderGrey bg-surface/90 backdrop-blur-md shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">

                    {/* Logo Section */}
                    <Link to="/" className="flex items-center gap-2">
                        <img
                            src="/Perfect Energy Solution Logo.webp"
                            alt="Perfect Energy Solution Logo"
                            className="h-12 w-auto object-contain"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={cn(
                                    "font-sans text-sm font-medium transition-colors hover:text-secondary relative group py-2",
                                    location.pathname === link.path ? "text-secondary" : "text-textDark"
                                )}
                            >
                                {link.name}
                                <span className={cn(
                                    "absolute bottom-0 left-0 w-full h-0.5 bg-secondary transform origin-left transition-transform duration-300",
                                    location.pathname === link.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                )}></span>
                            </Link>
                        ))}
                    </nav>

                    {/* Call to Action - Desktop */}
                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href="https://wa.me/966566149219"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-5 py-2.5 rounded-md font-medium transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                        >
                            <PhoneCall className="w-4 h-4" />
                            <span>WhatsApp Us</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-textDark hover:text-secondary focus:outline-none p-2"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <div
                className={cn(
                    "md:hidden absolute top-20 left-0 w-full bg-surface border-b border-borderGrey shadow-lg transition-all duration-300 ease-in-out overflow-hidden z-40",
                    isOpen ? "max-h-96 opacity-100 visible" : "max-h-0 opacity-0 invisible"
                )}
            >
                <nav className="flex flex-col px-4 py-6 gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                                "font-sans text-base font-medium px-4 py-3 rounded-md transition-colors",
                                location.pathname === link.path ? "bg-background text-secondary" : "text-textDark hover:bg-background/50 hover:text-primary"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="px-4 pt-4 border-t border-borderGrey mt-2">
                        <a
                            href="https://wa.me/966566149219"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-5 py-3 rounded-md font-medium transition-colors w-full"
                        >
                            <PhoneCall className="w-5 h-5" />
                            <span>WhatsApp Us</span>
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}

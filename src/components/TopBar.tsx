import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export default function TopBar() {
    return (
        <div className="bg-white border-b border-borderGrey text-textDark text-sm py-3 hidden md:block mb-4">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2.5">
                        <MapPin className="w-4 h-4 text-accent" />
                        <span className="font-sans font-medium">HV7C+M9 Al Birriyyah, Riyadh</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                        <Phone className="w-4 h-4 text-accent" />
                        <div className="flex gap-2.5 font-sans font-medium">
                            <a href="tel:+966556704985" className="hover:text-accent transition-colors">+966 55 670 4985</a>
                            <span className="text-gray-300">|</span>
                            <a href="tel:+966566149219" className="hover:text-accent transition-colors">+966 56 614 9219</a>
                        </div>
                    </div>
                    <div className="flex items-center gap-2.5">
                        <Mail className="w-4 h-4 text-accent" />
                        <a href="mailto:info@perfectenergysolutions.com" className="font-sans font-medium hover:text-accent transition-colors">info@perfectenergysolutions.com</a>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <a href="#" className="text-textDark/70 hover:text-accent transition-colors" aria-label="Instagram">
                        <Instagram className="w-4.5 h-4.5" />
                    </a>
                    <a href="#" className="text-textDark/70 hover:text-accent transition-colors" aria-label="Facebook">
                        <Facebook className="w-4.5 h-4.5" />
                    </a>
                    <a href="https://wa.me/966566149219" target="_blank" rel="noreferrer" className="text-textDark/70 hover:text-accent transition-colors" aria-label="WhatsApp">
                        <WhatsAppIcon className="w-4.5 h-4.5" />
                    </a>
                </div>
            </div>
        </div>
    );
}

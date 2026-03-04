import { SEO } from '../../components/SEO';

export default function TermsOfService() {
    return (
        <>
            <SEO
                title="Terms of Service | Perfect Energy Solution"
                description="Terms of Service for Perfect Energy Solution. Read the agreements and conditions for our technical services."
                canonicalUrl="/terms-of-service"
            />
            <div className="container mx-auto px-4 py-20 mt-10 max-w-4xl min-h-[60vh]">
                <h1 className="text-4xl font-heading font-bold text-primary mb-8">Terms of Service</h1>
                <div className="prose prose-lg text-gray-600">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>
                    <p className="mt-4">
                        Welcome to Perfect Energy Solution. By accessing our website or using our services, you agree to be bound by these Terms of Service.
                    </p>
                    <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">Services</h2>
                    <p>
                        We provide electronics repair, network installation, CCTV security systems, electrical work, and general technical services. All services are subject to availability and formal agreement upon quotation.
                    </p>
                    <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">Warranties and Liability</h2>
                    <p>Our repair and installation services come with standard operational guarantees as specified per contract. Perfect Energy Solution is not liable for existing hardware failures or third-party manufacturer defects.</p>
                </div>
            </div>
        </>
    );
}

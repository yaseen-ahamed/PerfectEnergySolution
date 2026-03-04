import { SEO } from '../../components/SEO';

export default function PrivacyPolicy() {
    return (
        <>
            <SEO
                title="Privacy Policy | Perfect Energy Solution"
                description="Privacy Policy for Perfect Energy Solution. Learn how we collect, use, and protect your data."
                canonicalUrl="/privacy-policy"
            />
            <div className="container mx-auto px-4 py-20 mt-10 max-w-4xl min-h-[60vh]">
                <h1 className="text-4xl font-heading font-bold text-primary mb-8">Privacy Policy</h1>
                <div className="prose prose-lg text-gray-600">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>
                    <p className="mt-4">
                        Perfect Energy Solution is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website or services.
                    </p>
                    <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">Information We Collect</h2>
                    <p>
                        We may collect personal information such as your name, email address, phone number, and physical address when you voluntarily provide it to us through contact forms or service requests.
                    </p>
                    <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">How We Use Your Information</h2>
                    <p>We use the information we collect to provide, maintain, and improve our services, communicate with you about your projects, and send important service updates.</p>
                </div>
            </div>
        </>
    );
}

import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonicalUrl?: string;
    type?: string;
    jsonLdSchema?: Record<string, any> | Array<Record<string, any>>;
}

export function SEO({
    title,
    description,
    canonicalUrl,
    type = 'website',
    jsonLdSchema
}: SEOProps) {
    const siteUrl = 'https://perfectenergysolution.com';
    const url = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

    const baseSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Perfect Energy Solution",
        "url": "https://perfectenergysolution.com",
        "logo": "https://perfectenergysolution.com/Perfect_Energy_Solution_Logo.webp",
        "description": "Perfect Energy Solution provides electronics repair, networking solutions, CCTV installation, electrical services, SIM card services and office supplies across Riyadh.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Riyadh",
            "addressCountry": "SA"
        },
        "areaServed": "Riyadh",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Technical Services",
            "itemListElement": [
                { "@type": "Service", "name": "Laptop & Mobile Sales and Repair" },
                { "@type": "Service", "name": "Office Stationery & Supplies" },
                { "@type": "Service", "name": "Networking & Software Solutions" },
                { "@type": "Service", "name": "CCTV & Security Systems" },
                { "@type": "Service", "name": "Electrical Services" },
                { "@type": "Service", "name": "SIM Card Services" }
            ]
        }
    };

    let finalSchemas: any[] = [baseSchema];
    if (jsonLdSchema) {
        if (Array.isArray(jsonLdSchema)) {
            finalSchemas = [...finalSchemas, ...jsonLdSchema];
        } else {
            finalSchemas.push(jsonLdSchema);
        }
    }

    return (
        <Helmet>
            {/* Basic HTML Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            {canonicalUrl && <link rel="canonical" href={url} />}

            {/* Open Graph Meta Tags for Social Sharing */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />

            {/* JSON-LD Schema Integration */}
            <script type="application/ld+json">
                {JSON.stringify(finalSchemas)}
            </script>
        </Helmet>
    );
}

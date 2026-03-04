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
            {jsonLdSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(jsonLdSchema)}
                </script>
            )}
        </Helmet>
    );
}

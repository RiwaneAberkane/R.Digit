import { Helmet } from 'react-helmet-async';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import Hero from '../sections/Hero/Hero';
import Projects from '../sections/Projects/Projects';
import About from '../sections/About/About';
import Process from '../sections/Process/Process';
import Stack from '../sections/Stack/Stack';
import Contact from '../sections/Contact/Contact';

import {
    SITE,
    getAbsoluteUrl,
} from '../config/site';

export default function Home() {
    const pageUrl = getAbsoluteUrl('/');
    const socialImageUrl = getAbsoluteUrl(
        SITE.socialImage,
    );

    const structuredData = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebSite',
                '@id': `${pageUrl}#website`,
                name: SITE.name,
                url: pageUrl,
                description: SITE.description,
                inLanguage: 'fr-FR',
            },
            {
                '@type': 'Organization',
                '@id': `${pageUrl}#organization`,
                name: SITE.name,
                url: pageUrl,
                logo: getAbsoluteUrl(
                    '/logo.png',
                ),
                email: SITE.email,
                description:
                    SITE.description,
            },
        ],
    };

    return (
        <div className="page">
            <Helmet>
                <html lang="fr" />

                <title>
                    {SITE.title}
                </title>

                <meta
                    name="description"
                    content={SITE.description}
                />

                <meta
                    name="robots"
                    content="index, follow, max-image-preview:large"
                />

                <link
                    rel="canonical"
                    href={pageUrl}
                />

                <meta
                    name="theme-color"
                    content="#1268ff"
                />

                {/* Open Graph */}
                <meta
                    property="og:title"
                    content={SITE.title}
                />

                <meta
                    property="og:description"
                    content={SITE.description}
                />

                <meta
                    property="og:type"
                    content="website"
                />

                <meta
                    property="og:url"
                    content={pageUrl}
                />

                <meta
                    property="og:site_name"
                    content={SITE.name}
                />

                <meta
                    property="og:locale"
                    content="fr_FR"
                />

                <meta
                    property="og:image"
                    content={socialImageUrl}
                />

                <meta
                    property="og:image:width"
                    content="1200"
                />

                <meta
                    property="og:image:height"
                    content="630"
                />

                <meta
                    property="og:image:alt"
                    content="R.Digit — Développement et design web"
                />

                {/* Twitter / X */}
                <meta
                    name="twitter:card"
                    content="summary_large_image"
                />

                <meta
                    name="twitter:title"
                    content={SITE.title}
                />

                <meta
                    name="twitter:description"
                    content={SITE.description}
                />

                <meta
                    name="twitter:image"
                    content={socialImageUrl}
                />

                <meta
                    name="twitter:image:alt"
                    content="R.Digit — Développement et design web"
                />

                {/* Données structurées */}
                <script type="application/ld+json">
                    {JSON.stringify(
                        structuredData,
                    )}
                </script>
            </Helmet>

            <Header />

            <main id="main-content">
                <Hero />
                <Projects />
                <About />
                <Process />
                <Stack />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}
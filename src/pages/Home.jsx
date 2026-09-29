import { Helmet } from 'react-helmet-async';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import Hero from '../sections/Hero/Hero';
import Projects from '../sections/Projects/Projects';
import About from '../sections/About/About';
import Process from '../sections/Process/Process';
import Stack from '../sections/Stack/Stack';
import Contact from '../sections/Contact/Contact';

export default function Home() {
    return (
        <div className="page">
            <Helmet>
                <html lang="fr" />

                {/* Titre de l'onglet */}
                <title>R.Digit — Développeur Web & Designer</title>

                {/* SEO principal */}
                <meta
                    name="description"
                    content="R.Digit conçoit des sites web modernes, performants et sur mesure, du design au développement."
                />

                <meta
                    name="robots"
                    content="index, follow"
                />

                {/* Couleur navigateur */}
                <meta
                    name="theme-color"
                    content="#06152c"
                />

                {/* Open Graph */}
                <meta
                    property="og:title"
                    content="R.Digit — Portfolio"
                />

                <meta
                    property="og:description"
                    content="Création de sites web modernes, performants et sur mesure, du design au développement."
                />

                <meta
                    property="og:type"
                    content="website"
                />

                <meta
                    property="og:site_name"
                    content="R.Digit"
                />

                {/* Twitter / X */}
                <meta
                    name="twitter:card"
                    content="summary_large_image"
                />

                <meta
                    name="twitter:title"
                    content="R.Digit — Portfolio"
                />

                <meta
                    name="twitter:description"
                    content="Création de sites web modernes, performants et sur mesure."
                />
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
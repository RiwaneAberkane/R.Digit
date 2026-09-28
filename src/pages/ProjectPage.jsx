import {
    useLayoutEffect,
    useRef,
} from 'react';

import {
    Link,
    useParams,
} from 'react-router-dom';

import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    Code2,
    ExternalLink,
} from 'lucide-react';

import {
    SiFirebase,
    SiGsap,
    SiHtml5,
    SiJavascript,
    SiLeaflet,
    SiReact,
    SiVite,
} from 'react-icons/si';

import {
    FaCss3Alt,
} from 'react-icons/fa';

import { Helmet } from 'react-helmet-async';

import Header from '../components/Header/Header';

import {
    getProjectBySlug,
} from '../data/projects';

import { gsap } from '../utils/gsap';

import './ProjectPage.css';


/* =========================================
   TECHNOLOGIES
========================================= */

const technologyIcons = {
    React: {
        icon: SiReact,
        color: '#61dafb',
    },

    Vite: {
        icon: SiVite,
        color: '#646cff',
    },

    GSAP: {
        icon: SiGsap,
        color: '#0ae448',
    },

    ScrollTrigger: {
        icon: SiGsap,
        color: '#0ae448',
        badge: 'ST',
    },

    HTML: {
        icon: SiHtml5,
        color: '#e34f26',
    },

    HTML5: {
        icon: SiHtml5,
        color: '#e34f26',
    },

    CSS: {
        icon: FaCss3Alt,
        color: '#1572b6',
    },

    CSS3: {
        icon: FaCss3Alt,
        color: '#1572b6',
    },

    JavaScript: {
        icon: SiJavascript,
        color: '#f7df1e',
    },

    Leaflet: {
        icon: SiLeaflet,
        color: '#199900',
    },

    Firebase: {
        icon: SiFirebase,
        color: '#ffca28',
    },

    Firestore: {
        icon: SiFirebase,
        color: '#ffca28',
    },

    'Firebase Auth': {
        icon: SiFirebase,
        color: '#ffca28',
    },
};


/* =========================================
   TECHNOLOGY CARD
========================================= */

function TechnologyCard({
    technology,
}) {
    const technologyData =
        technologyIcons[technology];

    const TechnologyIcon =
        technologyData?.icon ??
        Code2;

    const technologyColor =
        technologyData?.color ??
        'var(--project-accent)';

    return (
        <div
            className="project-detail__stack-item"
            style={{
                '--technology-color':
                    technologyColor,
            }}
        >
            <span
                className="project-detail__stack-icon"
                aria-hidden="true"
            >
                <TechnologyIcon />

                {technologyData?.badge && (
                    <span className="project-detail__stack-icon-badge">
                        {
                            technologyData.badge
                        }
                    </span>
                )}
            </span>

            <span className="project-detail__stack-name">
                {technology}
            </span>
        </div>
    );
}


/* =========================================
   PROJECT PAGE
========================================= */

export default function ProjectPage() {
    const { slug } = useParams();

    const project =
        getProjectBySlug(slug);

    const pageRef = useRef(null);


    /* =====================================
       ANIMATIONS
    ===================================== */

    useLayoutEffect(() => {
        if (!project) {
            return undefined;
        }

        const ctx = gsap.context(
            () => {
                const mm =
                    gsap.matchMedia();

                mm.add(
                    {
                        reduceMotion:
                            '(prefers-reduced-motion: reduce)',
                    },

                    (context) => {
                        const {
                            reduceMotion,
                        } =
                            context.conditions;


                        /* =====================
                           REDUCED MOTION
                        ===================== */

                        if (
                            reduceMotion
                        ) {
                            gsap.set(
                                [
                                    '.project-detail__eyebrow',
                                    '.project-detail__title',
                                    '.project-detail__lead',
                                    '.project-detail__hero-actions',
                                    '.project-detail__hero-visual',
                                    '.project-detail__reveal',
                                ],
                                {
                                    opacity: 1,
                                    clearProps:
                                        'all',
                                },
                            );

                            return;
                        }


                        /* =====================
                           HERO TIMELINE
                        ===================== */

                        const timeline =
                            gsap.timeline(
                                {
                                    defaults:
                                    {
                                        ease:
                                            'power3.out',
                                    },
                                },
                            );


                        timeline
                            .from(
                                '.project-detail__eyebrow',
                                {
                                    y: 18,

                                    opacity:
                                        0,

                                    duration:
                                        0.6,
                                },
                            )

                            .from(
                                '.project-detail__title',
                                {
                                    y: 55,

                                    opacity:
                                        0,

                                    duration:
                                        0.9,
                                },

                                '-=0.25',
                            )

                            .from(
                                '.project-detail__lead',
                                {
                                    y: 30,

                                    opacity:
                                        0,

                                    duration:
                                        0.7,
                                },

                                '-=0.45',
                            )

                            .from(
                                '.project-detail__hero-actions',
                                {
                                    y: 20,

                                    opacity:
                                        0,

                                    duration:
                                        0.6,
                                },

                                '-=0.4',
                            )

                            .from(
                                '.project-detail__hero-visual',
                                {
                                    y: 60,

                                    scale:
                                        0.96,

                                    opacity:
                                        0,

                                    duration:
                                        1.1,
                                },

                                '-=0.6',
                            );


                        /* =====================
                           REVEAL SECTIONS
                        ===================== */

                        const reveals =
                            gsap.utils.toArray(
                                '.project-detail__reveal',
                            );

                        reveals.forEach(
                            (
                                element,
                            ) => {
                                gsap.from(
                                    element,
                                    {
                                        y: 50,

                                        opacity:
                                            0,

                                        duration:
                                            0.85,

                                        ease:
                                            'power3.out',

                                        scrollTrigger:
                                        {
                                            trigger:
                                                element,

                                            start:
                                                'top 86%',
                                        },
                                    },
                                );
                            },
                        );
                    },
                );


                return () =>
                    mm.revert();
            },

            pageRef,
        );


        return () =>
            ctx.revert();
    }, [project]);


    /* =====================================
       PROJECT NOT FOUND
    ===================================== */

    if (!project) {
        return (
            <main
                id="main-content"
                className="project-not-found"
            >
                <div>
                    <h1>
                        Projet introuvable.
                    </h1>

                    <Link to="/">
                        Retour à l’accueil
                    </Link>
                </div>
            </main>
        );
    }


    /* =====================================
       PAGE
    ===================================== */

    return (
        <>
            {/* =============================
                SEO
            ============================= */}

            <Helmet>
                <html lang="fr" />

                <title>
                    {project.name} — R
                    Digital
                </title>

                <meta
                    name="description"
                    content={
                        project.shortDescription
                    }
                />

                <meta
                    name="robots"
                    content="index, follow"
                />

                <meta
                    property="og:title"
                    content={`${project.name} — R Digital`}
                />

                <meta
                    property="og:description"
                    content={
                        project.shortDescription
                    }
                />

                <meta
                    property="og:type"
                    content="website"
                />
            </Helmet>


            {/* =============================
                HEADER
            ============================= */}

            <Header />


            {/* =============================
                MAIN
            ============================= */}

            <main
                id="main-content"
                ref={pageRef}
                className={[
                    'project-detail',

                    `project-detail--${project.theme}`,
                ].join(' ')}
            >

                {/* =========================
                    HERO
                ========================= */}

                <section className="project-detail__hero">
                    <div className="project-detail__hero-background" />

                    <div className="container">

                        {/* HERO TOP */}

                        <div className="project-detail__hero-top">
                            <Link
                                to="/#projects"
                                className="project-detail__back"
                            >
                                <ArrowLeft
                                    size={
                                        17
                                    }
                                    strokeWidth={
                                        2
                                    }
                                />

                                Retour aux
                                projets
                            </Link>


                            <span className="project-detail__counter">
                                {
                                    project.number
                                }{' '}
                                / 03
                            </span>
                        </div>


                        {/* HERO CONTENT */}

                        <div className="project-detail__hero-copy">
                            <span className="project-detail__eyebrow">
                                {
                                    project.category
                                }
                            </span>


                            <h1 className="project-detail__title">
                                {
                                    project.name
                                }
                            </h1>


                            <p className="project-detail__lead">
                                {
                                    project.shortDescription
                                }
                            </p>


                            {/* HERO ACTIONS */}

                            <div className="project-detail__hero-actions">

                                {project.liveUrl && (
                                    <a
                                        href={
                                            project.liveUrl
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-detail__primary-button"
                                    >
                                        Voir le
                                        site

                                        <ExternalLink
                                            size={
                                                17
                                            }
                                            strokeWidth={
                                                2
                                            }
                                        />
                                    </a>
                                )}


                                <a
                                    href="#project-content"
                                    className="project-detail__secondary-button"
                                >
                                    Découvrir le
                                    projet

                                    <ArrowRight
                                        size={
                                            17
                                        }
                                        strokeWidth={
                                            2
                                        }
                                    />
                                </a>
                            </div>
                        </div>


                        {/* HERO VISUAL */}

                        <div className="project-detail__hero-visual">
                            <div className="project-detail__browser">

                                {/* BROWSER TOP */}

                                <div className="project-detail__browser-top">

                                    <div className="project-detail__browser-controls">
                                        <span />
                                        <span />
                                        <span />
                                    </div>


                                    <span className="project-detail__browser-address">
                                        {
                                            project.slug
                                        }
                                    </span>


                                    <span className="project-detail__browser-brand">
                                        R DIGITAL
                                    </span>
                                </div>


                                {/* SCREENSHOT */}

                                <div className="project-detail__browser-screen">
                                    <img
                                        className="project-detail__hero-image"
                                        src={
                                            project.mainImage
                                        }
                                        alt={
                                            project.imageAlt
                                        }
                                        loading="eager"
                                        decoding="async"
                                        fetchPriority="high"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* =========================
                    01 — OVERVIEW
                ========================= */}

                <section
                    id="project-content"
                    className="project-detail__overview"
                >
                    <div className="container">

                        <div className="project-detail__overview-grid project-detail__reveal">

                            <div>
                                <span className="project-detail__section-number">
                                    01
                                </span>


                                <span className="project-detail__section-label">
                                    Le projet
                                </span>


                                <h2>
                                    Une expérience
                                    pensée pour son
                                    univers.
                                </h2>
                            </div>


                            <div className="project-detail__overview-copy">
                                <p>
                                    {
                                        project.description
                                    }
                                </p>

                                <p>
                                    {
                                        project.context
                                    }
                                </p>
                            </div>
                        </div>


                        {/* ROLE */}

                        <div className="project-detail__role project-detail__reveal">
                            <span>
                                Mon rôle
                            </span>

                            <p>
                                {
                                    project.role
                                }
                            </p>
                        </div>
                    </div>
                </section>


                {/* =========================
                    02 — FEATURES
                ========================= */}

                <section className="project-detail__features">
                    <div className="container">

                        {/* SECTION HEADER */}

                        <div className="project-detail__section-header project-detail__reveal">
                            <div>
                                <span className="project-detail__section-number">
                                    02
                                </span>

                                <span className="project-detail__section-label">
                                    Points clés
                                </span>
                            </div>


                            <h2>
                                Ce qui structure
                                l’expérience.
                            </h2>
                        </div>


                        {/* FEATURES GRID */}

                        <div className="project-detail__features-grid">

                            {project.features.map(
                                (
                                    feature,
                                    index,
                                ) => (
                                    <article
                                        key={
                                            feature.number ??
                                            feature.title ??
                                            index
                                        }
                                        className="project-detail__feature project-detail__reveal"
                                    >
                                        <span>
                                            {
                                                feature.number
                                            }
                                        </span>


                                        <h3>
                                            {
                                                feature.title
                                            }
                                        </h3>


                                        <p>
                                            {
                                                feature.text
                                            }
                                        </p>
                                    </article>
                                ),
                            )}
                        </div>
                    </div>
                </section>


                {/* =========================
                    03 — GALLERY
                ========================= */}

                <section className="project-detail__gallery">
                    <div className="container">

                        {/* SECTION HEADER */}

                        <div className="project-detail__section-header project-detail__reveal">
                            <div>
                                <span className="project-detail__section-number">
                                    03
                                </span>

                                <span className="project-detail__section-label">
                                    Interface
                                </span>
                            </div>


                            <h2>
                                Le projet en
                                images.
                            </h2>
                        </div>


                        {/* GALLERY */}

                        <div className="project-detail__gallery-list">

                            {project.gallery.map(
                                (
                                    item,
                                    index,
                                ) => (
                                    <figure
                                        key={
                                            item.label
                                        }
                                        className={[
                                            'project-detail__gallery-item',

                                            index %
                                                2 !==
                                                0
                                                ? 'project-detail__gallery-item--offset'
                                                : '',

                                            'project-detail__reveal',
                                        ]
                                            .filter(
                                                Boolean,
                                            )
                                            .join(
                                                ' ',
                                            )}
                                    >
                                        <div className="project-detail__gallery-image">
                                            <img
                                                src={
                                                    item.image
                                                }
                                                alt={
                                                    item.alt
                                                }
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        </div>


                                        <figcaption>
                                            <span>
                                                {
                                                    item.label
                                                }
                                            </span>


                                            <h3>
                                                {
                                                    item.title
                                                }
                                            </h3>
                                        </figcaption>
                                    </figure>
                                ),
                            )}
                        </div>
                    </div>
                </section>


                {/* =========================
                    04 — STACK
                ========================= */}

                <section className="project-detail__stack">
                    <div className="container">

                        <div className="project-detail__stack-wrapper project-detail__reveal">

                            {/* STACK TITLE */}

                            <div>
                                <span className="project-detail__section-number">
                                    04
                                </span>


                                <span className="project-detail__section-label">
                                    Technologies
                                </span>


                                <h2>
                                    Stack
                                    technique.
                                </h2>
                            </div>


                            {/* STACK LOGOS */}

                            <div className="project-detail__stack-list">

                                {project.stack.map(
                                    (
                                        technology,
                                    ) => (
                                        <TechnologyCard
                                            key={
                                                technology
                                            }
                                            technology={
                                                technology
                                            }
                                        />
                                    ),
                                )}
                            </div>
                        </div>
                    </div>
                </section>


                {/* =========================
                    CTA
                ========================= */}

                <section className="project-detail__cta">
                    <div className="container">

                        <div className="project-detail__cta-box project-detail__reveal">

                            <span>
                                Un projet en tête ?
                            </span>


                            <h2>
                                Créons quelque
                                chose qui vous
                                ressemble.
                            </h2>


                            <p>
                                Une idée, un site
                                ou une application
                                ? Parlons-en
                                simplement.
                            </p>


                            <a
                                href="mailto:r.digitalcorporation@gmail.com"
                                className="project-detail__cta-link"
                            >
                                Parlons de votre
                                projet

                                <ArrowUpRight
                                    size={
                                        19
                                    }
                                    strokeWidth={
                                        2
                                    }
                                />
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
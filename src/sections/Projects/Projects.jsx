import { useLayoutEffect, useRef } from 'react';

import { Link } from 'react-router-dom';

import {
    ArrowUpRight,
    Check,
    ExternalLink,
} from 'lucide-react';

import { gsap } from '../../utils/gsap';
import { projects } from '../../data/projects';

import './Projects.css';

export default function Projects() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add(
                {
                    desktop: '(min-width: 901px)',
                    mobile: '(max-width: 900px)',
                    reduceMotion:
                        '(prefers-reduced-motion: reduce)',
                },
                (context) => {
                    const {
                        desktop,
                        reduceMotion,
                    } = context.conditions;

                    /* =========================================
                       REDUCED MOTION
                    ========================================= */

                    if (reduceMotion) {
                        gsap.set(
                            [
                                '.projects__header',
                                '.project-showcase__visual',
                                '.project-showcase__content',
                                '.project-browser__image',
                            ],
                            {
                                clearProps: 'all',
                                opacity: 1,
                                transform: 'none',
                            },
                        );

                        return;
                    }

                    /* =========================================
                       HEADER ANIMATION
                    ========================================= */

                    gsap.from(
                        '.projects__header',
                        {
                            y: 50,
                            opacity: 0,

                            duration: 0.9,

                            ease: 'power3.out',

                            scrollTrigger: {
                                trigger:
                                    '.projects__header',

                                start:
                                    'top 82%',
                            },
                        },
                    );

                    /* =========================================
                       PROJECTS
                    ========================================= */

                    const projectItems =
                        gsap.utils.toArray(
                            '.project-showcase',
                        );

                    projectItems.forEach(
                        (
                            project,
                            index,
                        ) => {
                            const visual =
                                project.querySelector(
                                    '.project-showcase__visual',
                                );

                            const content =
                                project.querySelector(
                                    '.project-showcase__content',
                                );

                            const image =
                                project.querySelector(
                                    '.project-browser__image',
                                );

                            /*
                             * CrisToune possède une barre
                             * supérieure importante dans
                             * son screenshot.
                             *
                             * On garde donc son image
                             * parfaitement fixe afin de
                             * ne jamais rogner le haut.
                             */

                            const isCristoune =
                                project.classList.contains(
                                    'project-showcase--cristoune',
                                );

                            /* =================================
                               DESKTOP
                            ================================= */

                            if (desktop) {
                                gsap.from(
                                    visual,
                                    {
                                        x:
                                            index %
                                                2 ===
                                                0
                                                ? -70
                                                : 70,

                                        y: 40,

                                        rotateY:
                                            index %
                                                2 ===
                                                0
                                                ? 6
                                                : -6,

                                        scale: 0.94,

                                        opacity: 0,

                                        duration: 1.1,

                                        ease:
                                            'power3.out',

                                        scrollTrigger:
                                        {
                                            trigger:
                                                project,

                                            start:
                                                'top 76%',
                                        },
                                    },
                                );

                                gsap.from(
                                    content,
                                    {
                                        x:
                                            index %
                                                2 ===
                                                0
                                                ? 45
                                                : -45,

                                        y: 30,

                                        opacity: 0,

                                        duration: 0.9,

                                        delay: 0.1,

                                        ease:
                                            'power3.out',

                                        scrollTrigger:
                                        {
                                            trigger:
                                                project,

                                            start:
                                                'top 73%',
                                        },
                                    },
                                );

                                /* =============================
                                   SCREENSHOT PARALLAX
                                ============================= */

                                if (
                                    image &&
                                    !isCristoune
                                ) {
                                    gsap.to(
                                        image,
                                        {
                                            yPercent:
                                                -1.5,

                                            scrollTrigger:
                                            {
                                                trigger:
                                                    project,

                                                start:
                                                    'top bottom',

                                                end:
                                                    'bottom top',

                                                scrub:
                                                    1.5,
                                            },
                                        },
                                    );
                                }

                                /*
                                 * CrisToune :
                                 * aucun déplacement vertical.
                                 */

                                if (
                                    image &&
                                    isCristoune
                                ) {
                                    gsap.set(
                                        image,
                                        {
                                            yPercent: 0,
                                            xPercent: 0,
                                        },
                                    );
                                }
                            } else {
                                /* =============================
                                   MOBILE
                                ============================= */

                                gsap.from(
                                    visual,
                                    {
                                        y: 45,

                                        scale: 0.96,

                                        opacity: 0,

                                        duration: 0.85,

                                        ease:
                                            'power3.out',

                                        scrollTrigger:
                                        {
                                            trigger:
                                                project,

                                            start:
                                                'top 85%',
                                        },
                                    },
                                );

                                gsap.from(
                                    content,
                                    {
                                        y: 35,

                                        opacity: 0,

                                        duration: 0.75,

                                        ease:
                                            'power3.out',

                                        scrollTrigger:
                                        {
                                            trigger:
                                                content,

                                            start:
                                                'top 88%',
                                        },
                                    },
                                );

                                /*
                                 * Sur mobile, toutes les
                                 * captures restent fixes.
                                 */

                                if (image) {
                                    gsap.set(
                                        image,
                                        {
                                            yPercent: 0,
                                            xPercent: 0,
                                        },
                                    );
                                }
                            }
                        },
                    );
                },
            );

            return () =>
                mm.revert();
        }, sectionRef);

        return () =>
            ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="projects"
            className="projects"
        >
            <div className="container">
                {/* =================================
                    HEADER
                ================================= */}

                <header className="projects__header">
                    <div className="projects__heading">
                        <span className="section-label">
                            Mes réalisations
                        </span>

                        <h2>
                            Des projets différents.
                            <br />

                            <span>
                                Une même exigence.
                            </span>
                        </h2>
                    </div>

                    <p className="projects__intro">
                        Chaque projet répond à un
                        besoin, un univers et une
                        expérience différente.
                        L’objectif reste le même :
                        créer quelque chose de clair,
                        performant et mémorable.
                    </p>
                </header>

                {/* =================================
                    PROJECT LIST
                ================================= */}

                <div className="projects__list">
                    {projects.map(
                        (
                            project,
                            index,
                        ) => (
                            <article
                                key={
                                    project.slug
                                }
                                className={[
                                    'project-showcase',

                                    `project-showcase--${project.theme}`,

                                    index %
                                        2 !==
                                        0
                                        ? 'project-showcase--reverse'
                                        : '',
                                ]
                                    .filter(
                                        Boolean,
                                    )
                                    .join(' ')}
                            >
                                {/* =========================
                                    VISUAL
                                ========================= */}

                                <div className="project-showcase__visual">
                                    <div className="project-showcase__background-number">
                                        {
                                            project.number
                                        }
                                    </div>

                                    <div className="project-showcase__glow" />

                                    <div className="project-browser">
                                        {/* Browser top */}

                                        <div className="project-browser__top">
                                            <div className="project-browser__controls">
                                                <span />
                                                <span />
                                                <span />
                                            </div>

                                            <div className="project-browser__address">
                                                {
                                                    project.slug
                                                }
                                            </div>

                                            <span className="project-browser__index">
                                                {
                                                    project.number
                                                }{' '}
                                                / 03
                                            </span>
                                        </div>

                                        {/* Screenshot */}

                                        <div className="project-browser__viewport">
                                            <img
                                                className="project-browser__image"
                                                src={
                                                    project.mainImage
                                                }
                                                alt={
                                                    project.imageAlt
                                                }
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* =========================
                                    CONTENT
                                ========================= */}

                                <div className="project-showcase__content">
                                    {/* Number */}

                                    <div className="project-showcase__number">
                                        <span>
                                            {
                                                project.number
                                            }
                                        </span>

                                        <span className="project-showcase__line" />

                                        <span>
                                            03
                                        </span>
                                    </div>

                                    {/* Category */}

                                    <span className="project-showcase__category">
                                        {
                                            project.category
                                        }
                                    </span>

                                    {/* Title */}

                                    <h3>
                                        {
                                            project.name
                                        }
                                    </h3>

                                    {/* Description */}

                                    <p className="project-showcase__description">
                                        {
                                            project.shortDescription
                                        }
                                    </p>

                                    {/* Technologies */}

                                    <div className="project-showcase__tags">
                                        {project.stack
                                            .slice(
                                                0,
                                                3,
                                            )
                                            .map(
                                                (
                                                    technology,
                                                ) => (
                                                    <span
                                                        key={
                                                            technology
                                                        }
                                                    >
                                                        {
                                                            technology
                                                        }
                                                    </span>
                                                ),
                                            )}
                                    </div>

                                    {/* Highlights */}

                                    <div className="project-showcase__highlights">
                                        {project.features.map(
                                            (
                                                feature,
                                            ) => (
                                                <div
                                                    key={
                                                        feature.title
                                                    }
                                                    className="project-showcase__highlight"
                                                >
                                                    <span className="project-showcase__check">
                                                        <Check
                                                            size={
                                                                13
                                                            }
                                                            strokeWidth={
                                                                2.5
                                                            }
                                                        />
                                                    </span>

                                                    <span>
                                                        {
                                                            feature.title
                                                        }
                                                    </span>
                                                </div>
                                            ),
                                        )}
                                    </div>

                                    {/* =====================
                                        ACTIONS
                                    ====================== */}

                                    <div className="project-showcase__actions">
                                        {/* Découvrir */}

                                        <Link
                                            to={`/projets/${project.slug}`}
                                            className="project-showcase__link"
                                        >
                                            <span>
                                                Découvrir
                                                le projet
                                            </span>

                                            <span className="project-showcase__link-icon">
                                                <ArrowUpRight
                                                    size={
                                                        18
                                                    }
                                                    strokeWidth={
                                                        2
                                                    }
                                                />
                                            </span>
                                        </Link>

                                        {/* Site live */}

                                        <a
                                            href={
                                                project.liveUrl ||
                                                '#'
                                            }
                                            target={
                                                project.liveUrl
                                                    ? '_blank'
                                                    : undefined
                                            }
                                            rel={
                                                project.liveUrl
                                                    ? 'noopener noreferrer'
                                                    : undefined
                                            }
                                            aria-disabled={
                                                !project.liveUrl
                                            }
                                            className={[
                                                'project-showcase__live-link',

                                                !project.liveUrl
                                                    ? 'project-showcase__live-link--disabled'
                                                    : '',
                                            ]
                                                .filter(
                                                    Boolean,
                                                )
                                                .join(
                                                    ' ',
                                                )}
                                            onClick={(
                                                event,
                                            ) => {
                                                if (
                                                    !project.liveUrl
                                                ) {
                                                    event.preventDefault();
                                                }
                                            }}
                                        >
                                            <span>
                                                Voir le
                                                site
                                            </span>

                                            <ExternalLink
                                                size={
                                                    15
                                                }
                                                strokeWidth={
                                                    2
                                                }
                                            />
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ),
                    )}
                </div>
            </div>
        </section>
    );
}
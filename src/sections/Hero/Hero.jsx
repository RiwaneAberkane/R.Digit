import { useLayoutEffect, useRef } from 'react';
import {
    ArrowDown,
    ArrowRight,
    Code2,
    Layers3,
    Sparkles,
} from 'lucide-react';

import { gsap } from '../../utils/gsap';

import './Hero.css';

export default function Hero() {
    const heroRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add(
                {
                    desktop: '(min-width: 769px)',
                    mobile: '(max-width: 768px)',
                    reduceMotion:
                        '(prefers-reduced-motion: reduce)',
                },
                (context) => {
                    const {
                        desktop,
                        mobile,
                        reduceMotion,
                    } = context.conditions;

                    if (reduceMotion) {
                        gsap.set(
                            [
                                '.hero__eyebrow',
                                '.hero__title-line',
                                '.hero__description',
                                '.hero__actions',
                                '.hero__meta',
                                '.hero__visual',
                                '.hero__floating-card',
                            ],
                            {
                                clearProps: 'all',
                                opacity: 1,
                                transform: 'none',
                            },
                        );

                        return;
                    }

                    const timeline = gsap.timeline({
                        defaults: {
                            ease: 'power3.out',
                        },
                    });

                    timeline
                        .from('.hero__eyebrow', {
                            y: 18,
                            opacity: 0,
                            duration: 0.65,
                        })
                        .from(
                            '.hero__title-line',
                            {
                                yPercent: 110,
                                opacity: 0,
                                duration: 0.95,
                                stagger: 0.1,
                            },
                            '-=0.3',
                        )
                        .from(
                            '.hero__description',
                            {
                                y: 24,
                                opacity: 0,
                                duration: 0.7,
                            },
                            '-=0.45',
                        )
                        .from(
                            '.hero__actions',
                            {
                                y: 20,
                                opacity: 0,
                                duration: 0.65,
                            },
                            '-=0.45',
                        )
                        .from(
                            '.hero__meta',
                            {
                                y: 15,
                                opacity: 0,
                                duration: 0.55,
                            },
                            '-=0.4',
                        )
                        .from(
                            '.hero__visual',
                            {
                                x: desktop ? 80 : 0,
                                y: mobile ? 35 : 0,
                                scale: 0.94,
                                opacity: 0,
                                duration: 1.15,
                            },
                            '-=0.95',
                        )
                        .from(
                            '.hero__floating-card',
                            {
                                scale: 0.8,
                                opacity: 0,
                                duration: 0.6,
                                stagger: 0.12,
                            },
                            '-=0.6',
                        );

                    if (desktop) {
                        gsap.to('.hero__visual-inner', {
                            y: 55,
                            rotateX: -3,
                            scale: 0.96,

                            scrollTrigger: {
                                trigger: heroRef.current,
                                start: 'top top',
                                end: 'bottom top',
                                scrub: 1,
                            },
                        });

                        gsap.to('.hero__content', {
                            y: -35,
                            opacity: 0.45,

                            scrollTrigger: {
                                trigger: heroRef.current,
                                start: '40% top',
                                end: 'bottom top',
                                scrub: 1,
                            },
                        });

                        gsap.to('.hero__glow--one', {
                            x: 80,
                            y: 40,

                            scrollTrigger: {
                                trigger: heroRef.current,
                                start: 'top top',
                                end: 'bottom top',
                                scrub: 1.5,
                            },
                        });

                        gsap.to('.hero__glow--two', {
                            x: -60,
                            y: -30,

                            scrollTrigger: {
                                trigger: heroRef.current,
                                start: 'top top',
                                end: 'bottom top',
                                scrub: 1.8,
                            },
                        });
                    }
                },
            );

            return () => mm.revert();
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            id="hero"
            className="hero"
        >
            <div className="hero__glow hero__glow--one" />
            <div className="hero__glow hero__glow--two" />

            <div className="hero__grid" />

            <div className="hero__container container">
                <div className="hero__content">
                    <div className="hero__eyebrow">
                        <span className="hero__eyebrow-dot" />

                        Développement & design digital
                    </div>

                    <h1 className="hero__title">
                        <span className="hero__title-mask">
                            <span className="hero__title-line">
                                Je transforme
                            </span>
                        </span>

                        <span className="hero__title-mask">
                            <span className="hero__title-line">
                                vos idées en
                            </span>
                        </span>

                        <span className="hero__title-mask">
                            <span className="hero__title-line hero__title-line--blue">
                                expériences digitales.
                            </span>
                        </span>
                    </h1>

                    <p className="hero__description">
                        Sites web modernes, expériences
                        interactives et solutions pensées
                        pour transformer une idée en un
                        projet clair, performant et mémorable.
                    </p>

                    <div className="hero__actions">
                        <a
                            href="mailto:r.digit.contact@gmail.com"
                            className="hero__button hero__button--primary"
                        >
                            <span>
                                Parlons de votre projet
                            </span>

                            <ArrowRight
                                size={18}
                                strokeWidth={2}
                            />
                        </a>

                        <a
                            href="#projects"
                            className="hero__button hero__button--secondary"
                        >
                            Voir mes projets

                            <ArrowDown
                                size={17}
                                strokeWidth={2}
                            />
                        </a>
                    </div>

                    <div className="hero__meta">
                        <div className="hero__availability">
                            <span className="hero__availability-dot" />

                            Disponible pour de nouveaux projets
                        </div>

                        <span className="hero__meta-separator" />

                        <span>
                            Web design · Développement
                        </span>
                    </div>
                </div>

                <div className="hero__visual">
                    <div className="hero__visual-inner">
                        <div className="hero__visual-aura" />

                        <div className="hero__window">
                            <div className="hero__window-top">
                                <div className="hero__window-controls">
                                    <span />
                                    <span />
                                    <span />
                                </div>

                                <div className="hero__window-address">
                                    r-digit.dev
                                </div>

                                <div className="hero__window-status">
                                    LIVE
                                </div>
                            </div>

                            <div className="hero__window-body">
                                <div className="hero__window-sidebar">
                                    <div className="hero__mini-logo">
                                        R
                                    </div>

                                    <span className="hero__sidebar-line hero__sidebar-line--active" />
                                    <span className="hero__sidebar-line" />
                                    <span className="hero__sidebar-line" />
                                    <span className="hero__sidebar-line hero__sidebar-line--short" />
                                </div>

                                <div className="hero__interface">
                                    <div className="hero__interface-header">
                                        <span>
                                            R.DIGIT
                                        </span>

                                        <span>
                                            2026
                                        </span>
                                    </div>

                                    <div className="hero__interface-main">
                                        <span className="hero__interface-label">
                                            DIGITAL EXPERIENCE
                                        </span>

                                        <strong>
                                            DESIGN
                                            <br />

                                            <span>
                                                × DEVELOPMENT
                                            </span>
                                        </strong>

                                        <p>
                                            Build something worth remembering.
                                        </p>
                                    </div>

                                    <div className="hero__interface-footer">
                                        <span>
                                            SCROLL
                                        </span>

                                        <div className="hero__interface-progress">
                                            <span />
                                        </div>

                                        <span>
                                            01
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hero__floating-card hero__floating-card--code">
                            <div className="hero__floating-icon">
                                <Code2
                                    size={18}
                                    strokeWidth={1.8}
                                />
                            </div>

                            <div>
                                <span>
                                    DEVELOPMENT
                                </span>

                                <strong>
                                    React
                                </strong>
                            </div>
                        </div>

                        <div className="hero__floating-card hero__floating-card--design">
                            <div className="hero__floating-icon">
                                <Layers3
                                    size={18}
                                    strokeWidth={1.8}
                                />
                            </div>

                            <div>
                                <span>
                                    BACKEND
                                </span>

                                <strong>
                                    Firebase
                                </strong>
                            </div>
                        </div>

                        <div className="hero__floating-card hero__floating-card--creative">
                            <Sparkles
                                size={16}
                                strokeWidth={1.8}
                            />

                            <span>
                                UI / UX
                            </span>
                        </div>

                        <div className="hero__tech hero__tech--react">
                            JAVASCRIPT
                        </div>

                        <div className="hero__tech hero__tech--gsap">
                            GSAP
                        </div>

                        <div className="hero__tech hero__tech--vite">
                            VITE
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero__scroll-indicator">
                <span>
                    Découvrir
                </span>

                <span className="hero__scroll-line" />
            </div>
        </section>
    );
}
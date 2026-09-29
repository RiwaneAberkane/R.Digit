import {
    useLayoutEffect,
    useRef,
} from 'react';

import {
    Boxes,
    Braces,
    Database,
    Map,
    MoveUpRight,
    Sparkles,
} from 'lucide-react';

import { gsap } from '../../utils/gsap';

import './Stack.css';

const stackGroups = [
    {
        id: 'frontend',
        number: '01',
        eyebrow: 'Frontend',
        title: 'Construire',
        icon: Braces,
        technologies: [
            'HTML',
            'CSS',
            'JavaScript',
            'React',
            'Vite',
        ],
    },

    {
        id: 'motion',
        number: '02',
        eyebrow: 'Motion',
        title: 'Donner du rythme',
        icon: Sparkles,
        technologies: [
            'GSAP',
            'ScrollTrigger',
        ],
    },

    {
        id: 'data',
        number: '03',
        eyebrow: 'Data & backend',
        title: 'Faire fonctionner',
        icon: Database,
        technologies: [
            'Firebase',
            'Firestore',
            'Firebase Auth',
        ],
    },

    {
        id: 'experience',
        number: '04',
        eyebrow: 'Expérience',
        title: 'Rendre utile',
        icon: Map,
        technologies: [
            'Leaflet',
            'Responsive',
            'UI / UX',
        ],
    },
];

export default function Stack() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add(
                {
                    desktop:
                        '(min-width: 901px)',

                    reduceMotion:
                        '(prefers-reduced-motion: reduce)',
                },
                (context) => {
                    const {
                        desktop,
                        reduceMotion,
                    } = context.conditions;

                    if (reduceMotion) {
                        gsap.set(
                            [
                                '.stack__header',
                                '.stack__core',
                                '.stack__group',
                                '.stack__connector',
                            ],
                            {
                                clearProps: 'all',
                                opacity: 1,
                                transform: 'none',
                            },
                        );

                        return;
                    }

                    gsap.from(
                        '.stack__header',
                        {
                            y: 45,
                            opacity: 0,

                            duration: 0.9,

                            ease: 'power3.out',

                            scrollTrigger: {
                                trigger:
                                    '.stack__header',

                                start:
                                    'top 82%',
                            },
                        },
                    );

                    gsap.from(
                        '.stack__core',
                        {
                            scale: 0.82,
                            opacity: 0,

                            duration: 1,

                            ease:
                                'back.out(1.4)',

                            scrollTrigger: {
                                trigger:
                                    '.stack__map',

                                start:
                                    'top 78%',
                            },
                        },
                    );

                    gsap.from(
                        '.stack__group',
                        {
                            y: 35,

                            scale:
                                desktop
                                    ? 0.96
                                    : 1,

                            opacity: 0,

                            duration: 0.8,

                            stagger: 0.12,

                            ease: 'power3.out',

                            scrollTrigger: {
                                trigger:
                                    '.stack__map',

                                start:
                                    'top 75%',
                            },
                        },
                    );

                    if (desktop) {
                        gsap.from(
                            '.stack__connector',
                            {
                                scale: 0,
                                opacity: 0,

                                transformOrigin:
                                    'center',

                                duration: 0.75,

                                stagger: 0.08,

                                ease:
                                    'power2.out',

                                scrollTrigger: {
                                    trigger:
                                        '.stack__map',

                                    start:
                                        'top 72%',
                                },
                            },
                        );

                        gsap.to(
                            '.stack__core-card',
                            {
                                y: -12,

                                scrollTrigger: {
                                    trigger:
                                        sectionRef.current,

                                    start:
                                        'top bottom',

                                    end:
                                        'bottom top',

                                    scrub: 1.4,
                                },
                            },
                        );
                    }
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
            className="stack"
            id="stack"
        >
            <div className="stack__grid" />

            <div className="stack__glow stack__glow--one" />
            <div className="stack__glow stack__glow--two" />

            <div className="container">
                <header className="stack__header">
                    <div>
                        <span className="stack__label">
                            <span />

                            Ma stack
                        </span>

                        <h2>
                            Les bons outils,
                            <br />

                            <span>
                                au service du projet.
                            </span>
                        </h2>
                    </div>

                    <div className="stack__intro">
                        <p>
                            Je ne choisis pas une technologie
                            parce qu’elle est tendance.
                            J’utilise les outils qui ont du
                            sens pour construire une
                            expérience claire, performante et
                            adaptée au besoin.
                        </p>

                        <div className="stack__intro-meta">
                            <Boxes
                                size={17}
                                strokeWidth={1.8}
                            />

                            Technologies utilisées dans mes
                            projets
                        </div>
                    </div>
                </header>

                <div className="stack__map">
                    <span className="stack__connector stack__connector--one" />
                    <span className="stack__connector stack__connector--two" />
                    <span className="stack__connector stack__connector--three" />
                    <span className="stack__connector stack__connector--four" />

                    <div className="stack__core">
                        <div className="stack__core-aura" />

                        <div className="stack__core-ring stack__core-ring--one" />
                        <div className="stack__core-ring stack__core-ring--two" />

                        <div className="stack__core-card">
                            <div className="stack__core-top">
                                <span className="stack__core-logo">
                                    R
                                </span>

                                <span>
                                    R.DIGIT
                                </span>
                            </div>

                            <div className="stack__core-center">
                                <span>
                                    STACK
                                </span>

                                <strong>
                                    BUILD
                                    <br />
                                    <em>
                                        BETTER.
                                    </em>
                                </strong>
                            </div>

                            <div className="stack__core-bottom">
                                <span>
                                    DESIGN
                                </span>

                                <span />

                                <span>
                                    CODE
                                </span>
                            </div>
                        </div>
                    </div>

                    {stackGroups.map(
                        ({
                            id,
                            number,
                            eyebrow,
                            title,
                            icon: Icon,
                            technologies,
                        }) => (
                            <article
                                key={id}
                                className={[
                                    'stack__group',
                                    `stack__group--${id}`,
                                ].join(' ')}
                            >
                                <div className="stack__group-top">
                                    <div>
                                        <span className="stack__group-number">
                                            {number}
                                        </span>

                                        <span className="stack__group-eyebrow">
                                            {eyebrow}
                                        </span>
                                    </div>

                                    <span className="stack__group-icon">
                                        <Icon
                                            size={19}
                                            strokeWidth={1.8}
                                        />
                                    </span>
                                </div>

                                <h3>
                                    {title}
                                </h3>

                                <div className="stack__technologies">
                                    {technologies.map(
                                        (
                                            technology,
                                        ) => (
                                            <span
                                                key={
                                                    technology
                                                }
                                            >
                                                <span className="stack__technology-dot" />

                                                {
                                                    technology
                                                }
                                            </span>
                                        ),
                                    )}
                                </div>
                            </article>
                        ),
                    )}
                </div>

                <div className="stack__bottom">
                    <span>
                        Une technologie n’est jamais
                        l’objectif.
                    </span>

                    <p>
                        L’objectif, c’est le résultat.
                    </p>

                    <a
                        href="mailto:r.digit.contact@gmail.com"
                    >
                        Parler de votre projet

                        <MoveUpRight
                            size={17}
                            strokeWidth={2}
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}
import {
    useLayoutEffect,
    useRef,
} from 'react';

import {
    ArrowUpRight,
    Code2,
    Compass,
    MessageCircle,
    Rocket,
} from 'lucide-react';

import { gsap } from '../../utils/gsap';

import './Process.css';

const steps = [
    {
        number: '01',
        icon: MessageCircle,
        title: 'Échange',
        eyebrow: 'Comprendre',
        text:
            'On commence simplement par discuter de votre idée, de vos objectifs et de ce dont vous avez réellement besoin.',
        details: [
            'Objectifs du projet',
            'Besoins & priorités',
            'Échange clair et rapide',
        ],
    },

    {
        number: '02',
        icon: Compass,
        title: 'Conception',
        eyebrow: 'Structurer',
        text:
            'Je transforme ensuite l’idée en une direction claire : structure, parcours utilisateur, identité visuelle et fonctionnement.',
        details: [
            'Structure du site',
            'UX & direction visuelle',
            'Solution adaptée au projet',
        ],
    },

    {
        number: '03',
        icon: Code2,
        title: 'Développement',
        eyebrow: 'Construire',
        text:
            'Le projet prend vie avec une intégration soignée, responsive et pensée pour rester performante sur tous les écrans.',
        details: [
            'Développement frontend',
            'Responsive',
            'Animations & interactions',
        ],
    },

    {
        number: '04',
        icon: Rocket,
        title: 'Lancement',
        eyebrow: 'Finaliser',
        text:
            'Une fois le projet validé, je finalise les derniers détails, vérifie l’expérience et accompagne la mise en ligne.',
        details: [
            'Tests finaux',
            'Mise en ligne',
            'Accompagnement après lancement',
        ],
    },
];

export default function Process() {
    const sectionRef = useRef(null);
    const lineRef = useRef(null);

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
                                '.process__header',
                                '.process__step',
                                '.process__progress-fill',
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
                        '.process__header',
                        {
                            y: 50,
                            opacity: 0,

                            duration: 0.9,

                            ease: 'power3.out',

                            scrollTrigger: {
                                trigger:
                                    '.process__header',

                                start:
                                    'top 82%',
                            },
                        },
                    );

                    const stepElements =
                        gsap.utils.toArray(
                            '.process__step',
                        );

                    stepElements.forEach(
                        (
                            step,
                            index,
                        ) => {
                            gsap.from(
                                step,
                                {
                                    y: 55,

                                    x:
                                        desktop
                                            ? 35
                                            : 0,

                                    opacity: 0,

                                    duration: 0.9,

                                    ease:
                                        'power3.out',

                                    scrollTrigger: {
                                        trigger:
                                            step,

                                        start:
                                            'top 84%',
                                    },
                                },
                            );

                            const node =
                                step.querySelector(
                                    '.process__node',
                                );

                            gsap.from(
                                node,
                                {
                                    scale: 0.4,
                                    opacity: 0,

                                    duration: 0.55,

                                    delay:
                                        index * 0.03,

                                    ease:
                                        'back.out(1.8)',

                                    scrollTrigger: {
                                        trigger:
                                            step,

                                        start:
                                            'top 83%',
                                    },
                                },
                            );
                        },
                    );

                    if (lineRef.current) {
                        gsap.fromTo(
                            lineRef.current,

                            {
                                scaleY: 0,
                            },

                            {
                                scaleY: 1,

                                ease: 'none',

                                scrollTrigger: {
                                    trigger:
                                        '.process__timeline',

                                    start:
                                        'top 70%',

                                    end:
                                        'bottom 55%',

                                    scrub: true,
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
            id="process"
            className="process"
        >
            <div className="process__glow process__glow--one" />

            <div className="process__glow process__glow--two" />

            <div className="container">
                <div className="process__layout">
                    <div className="process__header">
                        <span className="section-label">
                            Comment ça marche ?
                        </span>

                        <h2>
                            Un processus
                            <br />

                            <span>
                                simple et clair.
                            </span>
                        </h2>

                        <p>
                            Pas de fonctionnement compliqué.
                            On avance étape par étape avec une
                            vision claire du projet et des
                            échanges réguliers.
                        </p>

                        <a
                            href="mailto:r.digit.contact@gmail.com"
                            className="process__contact"
                        >
                            Discuter de votre projet

                            <span>
                                <ArrowUpRight
                                    size={18}
                                    strokeWidth={2}
                                />
                            </span>
                        </a>

                        <div className="process__mini-note">
                            <span className="process__mini-dot" />

                            Un accompagnement du premier
                            échange jusqu’au lancement.
                        </div>
                    </div>

                    <div className="process__timeline">
                        <div className="process__progress">
                            <div
                                ref={lineRef}
                                className="process__progress-fill"
                            />
                        </div>

                        <div className="process__steps">
                            {steps.map(
                                ({
                                    number,
                                    icon: Icon,
                                    title,
                                    eyebrow,
                                    text,
                                    details,
                                }) => (
                                    <article
                                        key={
                                            number
                                        }
                                        className="process__step"
                                    >
                                        <div className="process__node">
                                            <span className="process__node-glow" />

                                            <span className="process__node-core">
                                                {
                                                    number
                                                }
                                            </span>
                                        </div>

                                        <div className="process__step-card">
                                            <div className="process__step-top">
                                                <div>
                                                    <span className="process__step-eyebrow">
                                                        {
                                                            eyebrow
                                                        }
                                                    </span>

                                                    <span className="process__step-number">
                                                        {
                                                            number
                                                        }
                                                        {' '}
                                                        /
                                                        {' '}
                                                        04
                                                    </span>
                                                </div>

                                                <span className="process__step-icon">
                                                    <Icon
                                                        size={
                                                            22
                                                        }
                                                        strokeWidth={
                                                            1.8
                                                        }
                                                    />
                                                </span>
                                            </div>

                                            <h3>
                                                {
                                                    title
                                                }
                                            </h3>

                                            <p className="process__step-description">
                                                {
                                                    text
                                                }
                                            </p>

                                            <div className="process__step-details">
                                                {details.map(
                                                    (
                                                        detail,
                                                    ) => (
                                                        <div
                                                            key={
                                                                detail
                                                            }
                                                        >
                                                            <span />

                                                            {
                                                                detail
                                                            }
                                                        </div>
                                                    ),
                                                )}
                                            </div>
                                        </div>
                                    </article>
                                ),
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
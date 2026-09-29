import {
    useLayoutEffect,
    useRef,
} from 'react';

import {
    ArrowUpRight,
    HeartHandshake,
    MessagesSquare,
    PenTool,
    Zap,
} from 'lucide-react';

import { gsap } from '../../utils/gsap';

import './About.css';

const values = [
    {
        icon: MessagesSquare,
        number: '01',
        title: 'Écoute',
        text:
            'Comprendre le besoin avant de commencer à construire.',
    },
    {
        icon: PenTool,
        number: '02',
        title: 'Sur mesure',
        text:
            'Créer une solution adaptée au projet plutôt qu’un site générique.',
    },
    {
        icon: Zap,
        number: '03',
        title: 'Réactivité',
        text:
            'Rester disponible, avancer clairement et communiquer rapidement.',
    },
    {
        icon: HeartHandshake,
        number: '04',
        title: 'Implication',
        text:
            'Porter le projet avec le client jusqu’à obtenir un résultat satisfaisant.',
    },
];

export default function About() {
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
                                '.about__heading',
                                '.about__copy',
                                '.about__visual',
                                '.about__value',
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
                        '.about__heading',
                        {
                            y: 50,
                            opacity: 0,
                            duration: 0.9,
                            ease: 'power3.out',

                            scrollTrigger: {
                                trigger:
                                    '.about__heading',

                                start:
                                    'top 82%',
                            },
                        },
                    );

                    gsap.from(
                        '.about__copy',
                        {
                            y: 40,
                            opacity: 0,
                            duration: 0.85,
                            ease: 'power3.out',

                            scrollTrigger: {
                                trigger:
                                    '.about__copy',

                                start:
                                    'top 84%',
                            },
                        },
                    );

                    gsap.from(
                        '.about__visual',
                        {
                            x:
                                desktop
                                    ? 70
                                    : 0,

                            y:
                                desktop
                                    ? 0
                                    : 45,

                            rotateY:
                                desktop
                                    ? -7
                                    : 0,

                            scale: 0.95,
                            opacity: 0,

                            duration: 1,

                            ease: 'power3.out',

                            scrollTrigger: {
                                trigger:
                                    '.about__visual',

                                start:
                                    'top 82%',
                            },
                        },
                    );

                    gsap.from(
                        '.about__value',
                        {
                            y: 35,
                            opacity: 0,

                            duration: 0.75,

                            stagger: 0.12,

                            ease: 'power3.out',

                            scrollTrigger: {
                                trigger:
                                    '.about__values',

                                start:
                                    'top 84%',
                            },
                        },
                    );

                    if (desktop) {
                        gsap.to(
                            '.about__visual-card',
                            {
                                y: 45,
                                rotateY: -3,

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

            return () => mm.revert();
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="about"
            className="about"
        >
            <div className="about__glow about__glow--one" />
            <div className="about__glow about__glow--two" />

            <div className="container">
                <div className="about__heading">
                    <span className="section-label">
                        À propos
                    </span>

                    <h2>
                        Je ne développe pas
                        <br />

                        <span>
                            juste des sites.
                        </span>
                    </h2>
                </div>

                <div className="about__main">
                    <div className="about__copy">
                        <p className="about__lead">
                            Je conçois des expériences
                            digitales avec une idée simple :
                            un projet doit être aussi agréable
                            à utiliser qu’à regarder.
                        </p>

                        <p>
                            Mon approche mélange
                            développement, design et réflexion
                            produit. Je cherche à comprendre
                            ce que le projet doit réellement
                            apporter avant de décider comment
                            le construire.
                        </p>

                        <p>
                            Et surtout, je veux que la
                            collaboration reste simple.
                            Répondre rapidement, expliquer
                            clairement les choix et avancer
                            avec le client fait autant partie
                            du projet que le code lui-même.
                        </p>

                        <a
                            href="mailto:r.digit.contact@gmail.com"
                            className="about__contact-link"
                        >
                            Parlons de votre projet

                            <span>
                                <ArrowUpRight
                                    size={18}
                                    strokeWidth={2}
                                />
                            </span>
                        </a>
                    </div>

                    <div className="about__visual">
                        <div className="about__visual-aura" />

                        <div className="about__visual-card">
                            <div className="about__visual-top">
                                <div className="about__visual-brand">
                                    <span className="about__visual-logo">
                                        R
                                    </span>

                                    <div>
                                        <strong>
                                            R.DIGIT
                                        </strong>

                                        <span>
                                            Création numérique
                                        </span>
                                    </div>
                                </div>

                                <span className="about__visual-index">
                                    05 / 08
                                </span>
                            </div>

                            <div className="about__visual-center">
                                <span className="about__visual-small">
                                    MA FAÇON DE TRAVAILLER
                                </span>

                                <h3>
                                    CODE.
                                    <br />

                                    <span>
                                        DESIGN.
                                    </span>

                                    <br />

                                    SOLUTIONS.
                                </h3>
                            </div>

                            <div className="about__visual-process">
                                <div>
                                    <span>
                                        01
                                    </span>

                                    <strong>
                                        Écouter
                                    </strong>
                                </div>

                                <div>
                                    <span>
                                        02
                                    </span>

                                    <strong>
                                        Comprendre
                                    </strong>
                                </div>

                                <div>
                                    <span>
                                        03
                                    </span>

                                    <strong>
                                        Construire
                                    </strong>
                                </div>
                            </div>

                            <div className="about__visual-footer">
                                <span>
                                    R.DIGIT
                                </span>

                                <span className="about__visual-line" />

                                <span>
                                    2026
                                </span>
                            </div>
                        </div>

                        <span className="about__floating-label about__floating-label--one">
                            FRONTEND
                        </span>

                        <span className="about__floating-label about__floating-label--two">
                            UI / UX
                        </span>

                        <span className="about__floating-label about__floating-label--three">
                            PERFORMANCE
                        </span>
                    </div>
                </div>

                <div className="about__values">
                    <div className="about__values-grid" />

                    <div className="about__values-line">
                        <span className="about__values-line-light" />
                    </div>

                    {values.map(
                        (
                            {
                                icon: Icon,
                                number,
                                title,
                                text,
                            },
                            index,
                        ) => (
                            <article
                                key={number}
                                className={[
                                    'about__value',
                                    `about__value--${index + 1}`,
                                ].join(' ')}
                            >
                                <div className="about__value-node">
                                    <span className="about__value-node-wave about__value-node-wave--one" />
                                    <span className="about__value-node-wave about__value-node-wave--two" />
                                    <span className="about__value-node-core" />
                                </div>

                                <div className="about__value-card">
                                    <div className="about__value-top">
                                        <span className="about__value-number">
                                            {number}
                                        </span>

                                        <span className="about__value-icon">
                                            <Icon
                                                size={19}
                                                strokeWidth={1.8}
                                            />
                                        </span>
                                    </div>

                                    <div className="about__value-content">
                                        <span className="about__value-status">
                                            <span />

                                            Étape {number}
                                        </span>

                                        <h3>
                                            {title}
                                        </h3>

                                        <p>
                                            {text}
                                        </p>
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
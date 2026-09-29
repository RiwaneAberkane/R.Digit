import {
    useLayoutEffect,
    useRef,
    useState,
} from 'react';

import {
    ArrowUpRight,
    Check,
    Copy,
    Mail,
} from 'lucide-react';

import { gsap } from '../../utils/gsap';

import './Contact.css';

const EMAIL =
    'r.digit.contact@gmail.com';

export default function Contact() {
    const sectionRef = useRef(null);

    const [copied, setCopied] =
        useState(false);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add(
                {
                    reduceMotion:
                        '(prefers-reduced-motion: reduce)',
                },
                (context) => {
                    const {
                        reduceMotion,
                    } = context.conditions;

                    if (reduceMotion) {
                        gsap.set(
                            [
                                '.contact__label',
                                '.contact__title',
                                '.contact__text',
                                '.contact__actions',
                                '.contact__bottom',
                            ],
                            {
                                opacity: 1,
                                clearProps: 'all',
                            },
                        );

                        return;
                    }

                    const timeline =
                        gsap.timeline({
                            scrollTrigger: {
                                trigger:
                                    sectionRef.current,

                                start:
                                    'top 68%',
                            },

                            defaults: {
                                ease:
                                    'power3.out',
                            },
                        });

                    timeline
                        .from(
                            '.contact__label',
                            {
                                y: 20,
                                opacity: 0,
                                duration: 0.55,
                            },
                        )

                        .from(
                            '.contact__title',
                            {
                                y: 60,
                                opacity: 0,
                                duration: 0.95,
                            },
                            '-=0.25',
                        )

                        .from(
                            '.contact__text',
                            {
                                y: 30,
                                opacity: 0,
                                duration: 0.7,
                            },
                            '-=0.5',
                        )

                        .from(
                            '.contact__actions',
                            {
                                y: 25,
                                opacity: 0,
                                duration: 0.65,
                            },
                            '-=0.4',
                        )

                        .from(
                            '.contact__bottom',
                            {
                                opacity: 0,
                                duration: 0.6,
                            },
                            '-=0.25',
                        );
                },
            );

            return () => mm.revert();
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(
                EMAIL,
            );

            setCopied(true);

            window.setTimeout(() => {
                setCopied(false);
            }, 1800);
        } catch {
            setCopied(false);
        }
    };

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="contact"
        >
            <div className="contact__grid" />

            <div className="contact__glow contact__glow--one" />
            <div className="contact__glow contact__glow--two" />

            <div className="container">
                <div className="contact__content">
                    <span className="contact__label">
                        <span className="contact__status" />

                        Parlons de votre projet
                    </span>

                    <h2 className="contact__title">
                        Une idée en tête ?
                        <br />

                        <span>
                            Faisons-la exister.
                        </span>
                    </h2>

                    <p className="contact__text">
                        Un site, une application,
                        une refonte ou simplement une
                        idée à discuter ? Écrivez-moi.
                        On voit ensemble ce qu’il est
                        possible de construire.
                    </p>

                    <div className="contact__actions">
                        <a
                            href={`mailto:${EMAIL}`}
                            className="contact__mail"
                        >
                            <span className="contact__mail-icon">
                                <Mail
                                    size={21}
                                    strokeWidth={1.8}
                                />
                            </span>

                            <span className="contact__mail-content">
                                <small>
                                    Envoyer un email
                                </small>

                                <strong>
                                    {EMAIL}
                                </strong>
                            </span>

                            <span className="contact__mail-arrow">
                                <ArrowUpRight
                                    size={22}
                                    strokeWidth={2}
                                />
                            </span>
                        </a>

                        <button
                            type="button"
                            className={[
                                'contact__copy',

                                copied
                                    ? 'contact__copy--success'
                                    : '',
                            ]
                                .filter(Boolean)
                                .join(' ')}
                            onClick={handleCopy}
                            aria-label="Copier l'adresse email"
                        >
                            {copied ? (
                                <>
                                    <Check
                                        size={17}
                                        strokeWidth={2}
                                    />

                                    Copié
                                </>
                            ) : (
                                <>
                                    <Copy
                                        size={17}
                                        strokeWidth={2}
                                    />

                                    Copier l’adresse
                                </>
                            )}
                        </button>
                    </div>

                    <div className="contact__bottom">
                        <div className="contact__availability">
                            <span />

                            Disponible pour discuter
                            de nouveaux projets
                        </div>

                        <span className="contact__signature">
                            R.DIGIT · 2026
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
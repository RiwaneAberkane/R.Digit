import {
    ArrowUp,
    ArrowUpRight,
} from 'lucide-react';

import './Footer.css';

export default function Footer() {
    const scrollToTop = () => {
        const reduceMotion =
            window.matchMedia(
                '(prefers-reduced-motion: reduce)',
            ).matches;

        window.scrollTo({
            top: 0,

            behavior: reduceMotion
                ? 'auto'
                : 'smooth',
        });
    };

    return (
        <footer className="footer">
            <div className="footer__glow" />

            <div className="container">
                <div className="footer__top">
                    <a
                        href="/#hero"
                        className="footer__brand"
                        aria-label="R.Digit - Accueil"
                    >
                        <span className="footer__logo">
                            R
                        </span>

                        <div>
                            <strong>
                                R.DIGIT
                            </strong>

                            <span>
                                Design & développement
                            </span>
                        </div>
                    </a>

                    <nav
                        className="footer__nav"
                        aria-label="Navigation du pied de page"
                    >
                        <a href="/#projects">
                            Projets
                        </a>

                        <a href="/#about">
                            À propos
                        </a>

                        <a href="/#process">
                            Processus
                        </a>

                        <a href="/#stack">
                            Technologies
                        </a>

                        <a href="/#contact">
                            Contact
                        </a>
                    </nav>

                    <a
                        href="mailto:r.digit.contact@gmail.com"
                        className="footer__email"
                    >
                        Me contacter

                        <ArrowUpRight
                            size={17}
                            strokeWidth={2}
                        />
                    </a>
                </div>

                <div className="footer__statement">
                    <span>
                        R.DIGIT
                    </span>

                    <h2>
                        DES IDÉES.
                        <br />

                        <em>
                            DU DESIGN.
                        </em>

                        <br />

                        DU CODE.
                    </h2>
                </div>

                <div className="footer__bottom">
                    <p>
                        © 2026 R.Digit.
                        Tous droits réservés.
                    </p>

                    <span>
                        Pensé & développé avec soin.
                    </span>

                    <button
                        type="button"
                        onClick={scrollToTop}
                        className="footer__top-button"
                        aria-label="Revenir en haut de la page"
                    >
                        Haut de page

                        <span>
                            <ArrowUp
                                size={16}
                                strokeWidth={2}
                            />
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
}
import {
    useEffect,
    useState,
} from 'react';

import {
    ArrowUpRight,
    Menu,
    Moon,
    Sun,
    X,
} from 'lucide-react';

import logoRDigital from '../../assets/images/logo-rdigital.png';

import './Header.css';


const navigation = [
    {
        label: 'Projets',
        href: '/#projects',
    },
    {
        label: 'À propos',
        href: '/#about',
    },
    {
        label: 'Processus',
        href: '/#process',
    },
    {
        label: 'Technologies',
        href: '/#stack',
    },
    {
        label: 'Contact',
        href: '/#contact',
    },
];


/* =========================================
   THEME
========================================= */

const getInitialTheme = () => {
    if (typeof window === 'undefined') {
        return 'light';
    }

    const savedTheme =
        window.localStorage.getItem(
            'r-digital-theme',
        );

    if (
        savedTheme === 'light' ||
        savedTheme === 'dark'
    ) {
        return savedTheme;
    }

    /*
     * On garde le portfolio clair par défaut
     * pour respecter la DA originale.
     */
    return 'light';
};


export default function Header() {
    const [isOpen, setIsOpen] =
        useState(false);

    const [theme, setTheme] =
        useState(getInitialTheme);


    /* =========================================
       APPLY THEME
    ========================================= */

    useEffect(() => {
        const root =
            document.documentElement;

        root.dataset.theme =
            theme;

        root.style.colorScheme =
            theme;

        window.localStorage.setItem(
            'r-digital-theme',
            theme,
        );
    }, [theme]);


    /* =========================================
       MOBILE MENU
    ========================================= */

    useEffect(() => {
        document.body.style.overflow =
            isOpen ? 'hidden' : '';

        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener(
            'keydown',
            handleEscape,
        );

        return () => {
            document.body.style.overflow = '';

            window.removeEventListener(
                'keydown',
                handleEscape,
            );
        };
    }, [isOpen]);


    const closeMenu = () => {
        setIsOpen(false);
    };


    /* =========================================
       THEME TOGGLE
    ========================================= */

    const toggleTheme = () => {
        setTheme((currentTheme) =>
            currentTheme === 'light'
                ? 'dark'
                : 'light',
        );
    };


    /* =========================================
       SCROLL
    ========================================= */

    const scrollToSection = (
        event,
        sectionId,
    ) => {
        /*
         * Si on n'est pas sur la Home,
         * on laisse le href faire son travail.
         */
        if (window.location.pathname !== '/') {
            closeMenu();

            return;
        }

        event.preventDefault();

        closeMenu();

        const section =
            document.getElementById(sectionId);

        if (!section) {
            return;
        }

        /*
         * On met d'abord le hash à jour.
         */
        window.history.pushState(
            null,
            '',
            `/#${sectionId}`,
        );

        /*
         * Puis on scroll nous-mêmes.
         */
        const header =
            document.querySelector('.header');

        const headerHeight =
            header?.offsetHeight || 0;

        const sectionTop =
            section.getBoundingClientRect().top +
            window.scrollY -
            headerHeight;

        window.scrollTo({
            top: Math.max(0, sectionTop),
            behavior: 'smooth',
        });
    };


    return (
        <header className="header">
            <div className="container header__container">

                {/* LOGO */}

                <a
                    href="/#hero"
                    className="header__brand"
                    aria-label="R Digital - Accueil"
                    onClick={(event) =>
                        scrollToSection(
                            event,
                            'hero',
                        )
                    }
                >
                    <span className="header__logo">
                        <img
                            src={logoRDigital}
                            alt=""
                            className="header__logo-image"
                        />
                    </span>

                    <span className="header__brand-text">
                        R.DIGIT
                    </span>
                </a>


                {/* NAVIGATION DESKTOP */}

                <nav
                    className="header__nav"
                    aria-label="Navigation principale"
                >
                    {navigation.map(
                        ({
                            label,
                            href,
                        }) => {
                            const sectionId =
                                href.split('#')[1];

                            return (
                                <a
                                    key={label}
                                    href={href}
                                    onClick={(
                                        event,
                                    ) =>
                                        scrollToSection(
                                            event,
                                            sectionId,
                                        )
                                    }
                                >
                                    {label}
                                </a>
                            );
                        },
                    )}
                </nav>


                {/* ACTIONS */}

                <div className="header__actions">

                    {/* DARK MODE */}

                    <button
                        type="button"
                        className="header__theme-toggle"
                        onClick={toggleTheme}
                        aria-label={
                            theme === 'dark'
                                ? 'Activer le mode clair'
                                : 'Activer le mode sombre'
                        }
                        aria-pressed={
                            theme === 'dark'
                        }
                        title={
                            theme === 'dark'
                                ? 'Mode clair'
                                : 'Mode sombre'
                        }
                    >
                        <span className="header__theme-icons">

                            <Sun
                                size={18}
                                strokeWidth={1.9}
                                className={[
                                    'header__theme-icon',
                                    'header__theme-icon--sun',
                                    theme === 'light'
                                        ? 'header__theme-icon--active'
                                        : '',
                                ]
                                    .filter(Boolean)
                                    .join(' ')}
                            />

                            <Moon
                                size={17}
                                strokeWidth={1.9}
                                className={[
                                    'header__theme-icon',
                                    'header__theme-icon--moon',
                                    theme === 'dark'
                                        ? 'header__theme-icon--active'
                                        : '',
                                ]
                                    .filter(Boolean)
                                    .join(' ')}
                            />

                        </span>
                    </button>


                    {/* CTA DESKTOP */}

                    <a
                        href="mailto:r.digit.contact@gmail.com"
                        className="header__contact"
                    >
                        Discutons

                        <ArrowUpRight
                            size={16}
                            strokeWidth={2}
                        />
                    </a>


                    {/* MENU MOBILE */}

                    <button
                        type="button"
                        className="header__menu-button"
                        onClick={() =>
                            setIsOpen(
                                (current) =>
                                    !current,
                            )
                        }
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        aria-label={
                            isOpen
                                ? 'Fermer le menu'
                                : 'Ouvrir le menu'
                        }
                    >
                        {isOpen ? (
                            <X
                                size={22}
                                strokeWidth={2}
                            />
                        ) : (
                            <Menu
                                size={22}
                                strokeWidth={2}
                            />
                        )}
                    </button>

                </div>
            </div>


            {/* MENU MOBILE */}

            <div
                id="mobile-menu"
                className={[
                    'header__mobile',

                    isOpen
                        ? 'header__mobile--open'
                        : '',
                ]
                    .filter(Boolean)
                    .join(' ')}
            >
                <div className="container header__mobile-inner">

                    <div>
                        <span className="header__mobile-label">
                            Navigation
                        </span>

                        <nav
                            className="header__mobile-nav"
                            aria-label="Navigation mobile"
                        >
                            {navigation.map(
                                (
                                    {
                                        label,
                                        href,
                                    },
                                    index,
                                ) => {
                                    const sectionId =
                                        href.split(
                                            '#',
                                        )[1];

                                    return (
                                        <a
                                            key={
                                                label
                                            }
                                            href={
                                                href
                                            }
                                            onClick={(
                                                event,
                                            ) =>
                                                scrollToSection(
                                                    event,
                                                    sectionId,
                                                )
                                            }
                                        >
                                            <span>
                                                {String(
                                                    index +
                                                    1,
                                                ).padStart(
                                                    2,
                                                    '0',
                                                )}
                                            </span>

                                            <strong>
                                                {
                                                    label
                                                }
                                            </strong>

                                            <ArrowUpRight
                                                size={
                                                    18
                                                }
                                                strokeWidth={
                                                    1.8
                                                }
                                            />
                                        </a>
                                    );
                                },
                            )}
                        </nav>
                    </div>


                    {/* BAS DU MENU */}

                    <div className="header__mobile-bottom">

                        <div className="header__mobile-contact-copy">
                            <span>
                                Une idée en tête ?
                            </span>

                            <strong>
                                Parlons-en.
                            </strong>

                            <p>
                                Un projet, une refonte
                                ou simplement une idée
                                à discuter ?
                            </p>
                        </div>


                        <a
                            href="mailto:r.digit.contact@gmail.com"
                            className="header__mobile-contact"
                        >
                            <span>
                                r.digit.contact@gmail.com
                            </span>

                            <span className="header__mobile-contact-icon">
                                <ArrowUpRight
                                    size={18}
                                    strokeWidth={2}
                                />
                            </span>
                        </a>


                        <div className="header__mobile-footer">
                            <span>
                                R.DIGIT
                            </span>

                            <span>
                                2026
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    );
}
import xenomMain from '../assets/images/projects/xenom.webp';
import xenomPerformance from '../assets/images/projects/xenom-performance.webp';
import xenomDesign from '../assets/images/projects/xenom-design.webp';
import xenomExperience from '../assets/images/projects/xenom-experience.webp';
import xenomMachine from '../assets/images/projects/xenom-machine.webp';

import halalMain from '../assets/images/projects/halal-food-caen.webp';
import halalRestaurants from '../assets/images/projects/halal-restaurants.webp';
import halalCard from '../assets/images/projects/halal-card.webp';

import cristouneMain from '../assets/images/projects/cristoune-creation.webp';
import cristouneProduct from '../assets/images/projects/cristoune-product.webp';
import cristouneAdmin from '../assets/images/projects/cristoune-admin.webp';

import kyraMain from '../assets/images/projects/kyra-renov.webp';
import kyraAbout from '../assets/images/projects/kyra-renov-about.webp';
import kyraRealisations from '../assets/images/projects/kyra-renov-realisations.webp';
import kyraServices from '../assets/images/projects/kyra-renov-services.webp';

export const projects = [
    {
        number: '01',
        slug: 'cristoune-creation',

        name: 'CrisToune Création',

        category: 'E-commerce artisanal',

        shortDescription:
            'Une boutique en ligne élégante conçue autour d’un univers artisanal, chaleureux et féminin.',

        description:
            'CrisToune Création est un site e-commerce réalisé pour mettre en valeur des bijoux et objets artisanaux à travers une expérience douce, premium et entièrement adaptée à l’identité de la créatrice.',

        context:
            'Le projet devait aller plus loin qu’un simple catalogue. Il fallait créer un véritable univers de marque tout en proposant une gestion concrète des produits, du catalogue et de l’administration.',

        role:
            'Direction UI, développement frontend, architecture Firebase, authentification, catalogue dynamique et espace administrateur.',

        mainImage: cristouneMain,

        imageAlt:
            'Boutique en ligne CrisToune Création',

        theme: 'cristoune',

        liveUrl: 'https://cristounecreation.fr/',

        githubUrl:
            'https://github.com/RiwaneAberkane/CrisToune-Creation',

        stack: [
            'React',
            'Vite',
            'Firebase',
            'Firestore',
            'Firebase Auth',
        ],

        features: [
            {
                number: '01',
                title: 'Boutique dynamique',
                text:
                    'Les produits et collections sont organisés dans une expérience claire, élégante et cohérente avec la marque.',
            },
            {
                number: '02',
                title: 'Fiches produits',
                text:
                    'Chaque création dispose d’une présentation détaillée avec galerie, informations, prix et actions.',
            },
            {
                number: '03',
                title: 'Administration',
                text:
                    'Un espace privé permet de gérer les créations et le catalogue directement depuis le site.',
            },
        ],

        gallery: [
            {
                image: cristouneProduct,
                alt: 'Fiche produit CrisToune Création',
                label: 'Fiche produit',
                title:
                    'Valoriser chaque création jusque dans le détail.',
            },
            {
                image: cristouneAdmin,
                alt: 'Dashboard administrateur de CrisToune Création',
                label: 'Administration',
                title:
                    'Un catalogue administrable simplement.',
            },
        ],
    },

    {
        number: '02',
        slug: 'halal-food-caen',

        name: 'Halal Food Caen',

        category: 'Guide local & expérience web',

        shortDescription:
            'Une plateforme pensée pour faciliter la découverte de restaurants halal à Caen.',

        description:
            'Halal Food Caen est un guide local permettant de rechercher des restaurants, filtrer les établissements par spécialité et visualiser leur emplacement directement sur une carte interactive.',

        context:
            'Le projet devait rendre une grande quantité d’informations simple à consulter, tout en conservant une identité chaleureuse et accessible. L’objectif principal était de rendre la recherche d’un restaurant rapide et intuitive.',

        role:
            'Conception de l’interface, développement frontend, logique de filtrage, recherche et intégration de la cartographie.',

        mainImage: halalMain,

        imageAlt:
            'Page d’accueil du site Halal Food Caen',

        theme: 'halal',

        liveUrl: 'https://halalfoodcaen.fr/',

        githubUrl:
            'https://github.com/RiwaneAberkane/HalalFoodCaen',

        stack: [
            'HTML',
            'CSS',
            'JavaScript',
            'Leaflet',
        ],

        features: [
            {
                number: '01',
                title: 'Recherche & filtres',
                text:
                    'Les établissements peuvent être recherchés et filtrés rapidement selon différentes spécialités.',
            },
            {
                number: '02',
                title: 'Carte interactive',
                text:
                    'Leaflet permet de localiser les restaurants et de relier directement les résultats à leur position.',
            },
            {
                number: '03',
                title: 'Carte membre',
                text:
                    'Une expérience dédiée permet également de rejoindre la communauté et d’obtenir une carte digitale.',
            },
        ],

        gallery: [
            {
                image: halalRestaurants,
                alt:
                    'Liste des restaurants Halal Food Caen avec carte interactive',
                label: 'Restaurants',
                title:
                    'Trouver rapidement une adresse.',
            },
            {
                image: halalCard,
                alt:
                    'Formulaire de création de la carte membre Halal Food Caen',
                label: 'Carte membre',
                title:
                    'Une expérience pensée aussi pour la communauté.',
            },
        ],
    },

    {
        number: '03',
        slug: 'kyra-renov',

        name: 'Kyra Renov',

        category: 'Site vitrine — Rénovation',

        shortDescription:
            'Un site vitrine moderne conçu pour présenter les services et réalisations d’une entreprise de rénovation en Île-de-France.',

        description:
            'Kyra Renov est un site vitrine conçu pour présenter une entreprise spécialisée dans la rénovation intérieure et extérieure. L’objectif était de créer une présence digitale professionnelle, claire et rassurante, tout en mettant en valeur les prestations et les réalisations.',

        context:
            'Le projet devait permettre à l’entreprise de présenter son savoir-faire de manière simple et professionnelle. L’expérience a été pensée pour faciliter la découverte des services, renforcer la crédibilité de l’entreprise et encourager la prise de contact.',

        role:
            'Conception de l’interface, direction visuelle, développement frontend, responsive design et mise en valeur des prestations et réalisations.',

        mainImage: kyraMain,

        imageAlt:
            'Page d’accueil du site Kyra Renov — rénovation intérieure et extérieure',

        theme: 'kyra',

        liveUrl:
            'https://www.kyrarenov.fr/',

        stack: [
            'React',
            'Vite',
            'CSS',
            'JavaScript',
            'Responsive Design',
        ],

        features: [
            {
                number: '01',
                title: 'Présentation des services',
                text:
                    'Les différentes prestations de rénovation sont présentées de manière claire afin de permettre aux visiteurs de comprendre rapidement l’offre.',
            },
            {
                number: '02',
                title: 'Réalisations',
                text:
                    'Les projets réalisés sont mis en avant à travers une présentation visuelle permettant de montrer concrètement le savoir-faire de l’entreprise.',
            },
            {
                number: '03',
                title: 'Avant / Après',
                text:
                    'Une présentation interactive permet de visualiser les transformations réalisées et de mettre en évidence le résultat des travaux.',
            },
        ],

        gallery: [
            {
                image: kyraAbout,
                alt:
                    'Section À propos du site Kyra Renov',
                label: 'À propos',
                title:
                    'Présenter une entreprise et son savoir-faire.',
            },
            {
                image: kyraRealisations,
                alt:
                    'Section Avant Après du site Kyra Renov',
                label: 'Avant / Après',
                title:
                    'Montrer concrètement la transformation des espaces.',
            },
            {
                image: kyraServices,
                alt:
                    'Section Services du site Kyra Renov',
                label: 'Services',
                title:
                    'Présenter clairement chaque prestation.',
            },
        ],
    },

    {
        number: '04',
        slug: 'xenom',

        name: 'XENOM',

        category: 'Site vitrine immersif',

        shortDescription:
            'Une expérience automobile expérimentale pensée autour du design, du mouvement et de l’immersion.',

        description:
            'XENOM est un site vitrine automobile expérimental conçu comme une véritable expérience visuelle. Le projet repose sur une direction artistique sombre, des compositions cinématiques et des animations qui accompagnent naturellement la découverte du véhicule.',

        context:
            'L’objectif était de créer un projet capable de montrer mes compétences en intégration frontend, responsive, animation et direction visuelle, sans reproduire les codes classiques d’un simple site automobile.',

        role:
            'Conception de l’expérience, direction visuelle, intégration frontend, responsive et animations.',

        mainImage: xenomMain,

        imageAlt:
            'Page d’accueil du site automobile immersif XENOM',

        theme: 'xenom',

        liveUrl:
            'https://xenombeyondmotion.netlify.app/',

        githubUrl:
            'https://github.com/RiwaneAberkane/Xenom',

        stack: [
            'React',
            'Vite',
            'GSAP',
            'ScrollTrigger',
        ],

        features: [
            {
                number: '01',
                title: 'Expérience immersive',
                text:
                    'Une navigation pensée comme une progression visuelle plutôt qu’une simple succession de sections.',
            },
            {
                number: '02',
                title: 'Animations GSAP',
                text:
                    'Les animations servent à guider le regard, créer de la profondeur et renforcer la narration.',
            },
            {
                number: '03',
                title: 'Responsive',
                text:
                    'Les compositions et les interactions ont été adaptées aux différents formats d’écran.',
            },
        ],

        gallery: [
            {
                image: xenomPerformance,
                alt:
                    'Section Performance du projet XENOM',
                label: 'Performance',
                title:
                    'La puissance mise en scène.',
            },
            {
                image: xenomDesign,
                alt:
                    'Section Design du projet XENOM',
                label: 'Design',
                title:
                    'Chaque détail participe à l’identité.',
            },
            {
                image: xenomExperience,
                alt:
                    'Habitacle du véhicule dans la section Experience de XENOM',
                label: 'Experience',
                title:
                    'Une immersion jusque dans l’habitacle.',
            },
            {
                image: xenomMachine,
                alt:
                    'Section The Machine du projet XENOM',
                label: 'The Machine',
                title:
                    'Le véhicule devient le centre de l’expérience.',
            },
        ],
    },
];

export function getProjectBySlug(slug) {
    return projects.find(
        (project) => project.slug === slug,
    );
}
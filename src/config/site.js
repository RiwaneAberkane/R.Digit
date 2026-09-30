export const SITE = {
    name: 'R.Digit',
    url: 'https://rdigit.fr',
    email: 'r.digit.contact@gmail.com',

    title:
        'R.Digit — Développeur Web & Designer',

    description:
        'R.Digit conçoit des sites web modernes, performants et sur mesure, du design au développement.',

    socialImage:
        '/og-rdigit.png',
};

export function getAbsoluteUrl(path = '/') {
    return new URL(path, `${SITE.url}/`).toString();
}
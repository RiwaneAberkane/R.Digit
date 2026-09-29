import {
    useEffect,
} from 'react';

import {
    BrowserRouter,
    Route,
    Routes,
    useLocation,
} from 'react-router-dom';

import Home from '../pages/Home';
import ProjectPage from '../pages/ProjectPage';

function ScrollManager() {
    const {
        pathname,
        hash,
    } = useLocation();

    useEffect(() => {
        if (hash) {
            const id =
                decodeURIComponent(
                    hash.replace(
                        '#',
                        '',
                    ),
                );

            const scrollToElement =
                () => {
                    const element =
                        document.getElementById(
                            id,
                        );

                    if (!element) {
                        return;
                    }

                    element.scrollIntoView({
                        behavior:
                            window.matchMedia(
                                '(prefers-reduced-motion: reduce)',
                            ).matches
                                ? 'auto'
                                : 'smooth',

                        block: 'start',
                    });
                };

            requestAnimationFrame(
                () => {
                    requestAnimationFrame(
                        scrollToElement,
                    );
                },
            );

            return;
        }

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto',
        });
    }, [
        pathname,
        hash,
    ]);

    return null;
}

export default function AppRouter() {
    return (
        <BrowserRouter>
            <ScrollManager />

            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/projets/:slug"
                    element={
                        <ProjectPage />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}
import { h, JSX } from 'preact';
import './sidebar.scss';
import TwitterIcon from '../icons/twitter-icon';
import LinkedInIcon from '../icons/linkedin-icon';
import { useEffect, useLayoutEffect, useRef, useState } from 'preact/hooks';
const bars = '/assets/icons/bars.svg';

export default function Sidebar(): JSX.Element {
    const [currentPath, setCurrentPath] = useState<string | null>(null);
    const [isMobileMenuExpanded, setIsMobileMenuExpanded] = useState(false);
    const linkWrapperRef = useRef<HTMLDivElement>();

    const isCondensed = (): boolean => {
        return [
            /^\/apps\/.+/i,
        ].some(path => currentPath && path.test(currentPath));
    }

    const isActive = (regex: RegExp): boolean => {
        return !!currentPath && regex.test(currentPath);
    }

    const toggleMobileMenu = () => {
        console.log('toggleMobileMenu -> set', !isMobileMenuExpanded)
        setIsMobileMenuExpanded(!isMobileMenuExpanded)
    };

    const handleMenuItemKeydown = (e: JSX.TargetedKeyboardEvent<HTMLElement>) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            e.stopPropagation();
            e.currentTarget.click();
        }
    }

    const handleMenuToggleKeydown = (e: JSX.TargetedKeyboardEvent<HTMLElement>) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMobileMenu();
        }
    }

    useEffect(() => {
        const handleNavigation = () => {
            setCurrentPath(window.location.pathname)
            setIsMobileMenuExpanded(false);
        }

        window.addEventListener('popstate', handleNavigation);
        handleNavigation();

        return () => {
            window.removeEventListener('popstate', handleNavigation);
        }
    }, []);

    useLayoutEffect(() => {
        if (isMobileMenuExpanded) {
            linkWrapperRef?.current?.querySelectorAll('a')[0]?.focus();
        }
    }, [isMobileMenuExpanded, linkWrapperRef])

    return (
        <div className={`sidebar ${isCondensed() ? 'condensed' : ''}`}>
            <div className="identifiers">
                <picture>
                    <source srcSet="
                /assets/me/me-3x.jpg 3x,
                /assets/me/me-2x.jpg 2x,
                /assets/me/me-1x.jpg 1x,
                "
                        type="image/jpeg" />
                    <img src="/assets/me/me-1x.jpg"
                        type="image/jpeg"
                        alt="A headshot of Steve Zelek." />
                </picture>
                <h1 className="name">
                    Steve Zelek
                </h1>
                <p className="title">
                    software maker
                </p>
            </div>
            <div className="navigation-wrapper"
                ref={linkWrapperRef}>
                <ul className={`navigation ${isMobileMenuExpanded ? 'mobile-expanded' : ''}`} >
                    <li>
                        <a href="/"
                            className={`${isActive(/^\/$/i) ? 'active' : ''}`}
                            onKeyDown={(e) => handleMenuItemKeydown(e)}>
                            bio
                        </a>
                    </li>
                    <li>
                        <a href="/apps"
                            className={`${isActive(/^\/apps.*/i) ? 'active' : ''}`}
                            onKeyDown={(e) => handleMenuItemKeydown(e)}>
                            apps
                        </a>
                    </li>
                    <li>
                        <a href="/blog"
                            className={`${isActive(/^\/blog.*/i) ? 'active' : ''}`}
                            onKeyDown={(e) => handleMenuItemKeydown(e)}>
                            blog
                        </a>
                    </li>
                </ul>
                <button className="menu-toggle" type="button" aria-label="Show Navigation Menu"
                    onClick={() => toggleMobileMenu()}
                    onKeyDown={(e) => handleMenuToggleKeydown(e)}>
                    <img src={bars} alt="" />
                </button>
            </div>
            <div className="spacer" />
            <div className="contact">
                <LinkedInIcon />
                <TwitterIcon />
            </div>
        </div>
    );
}
import { h, JSX } from 'preact';
import './sidebar.scss';
import TwitterIcon from 'src/components/icons/twitter-icon';
import LinkedInIcon from 'src/components/icons/linkedin-icon';
import GithubIcon from 'src/components/icons/github-icon';
import { useEffect, useRef, useState, useMemo, useCallback } from 'preact/hooks';
import Link from 'src/components/link/link';
const bars = '/assets/icons/bars.svg';

export default function Sidebar(): JSX.Element {
    const [currentPath, setCurrentPath] = useState<string | null>(null);
    const [linkDecoratorStyle, setLinkDecoratorStyle] = useState<string | null>(null);
    const [isMobileMenuExpanded, setIsMobileMenuExpanded] = useState(false);
    const usrAnchorRef = useRef<HTMLSpanElement>();
    const blogAnchorRef = useRef<HTMLSpanElement>();
    const shareAnchorRef = useRef<HTMLSpanElement>();
    const appsAnchorRef = useRef<HTMLSpanElement>();
    const sidebarRef = useRef<HTMLDivElement>();

    const links = useMemo(() => [
        {
            href: "/",
            activeRegex: /^\/$/i,
            text: "~/usr",
            ref: usrAnchorRef,
        },
        {
            href: "/apps/",
            activeRegex: /^\/apps.*/i,
            text: "~/apps",
            ref: appsAnchorRef
        },
        {
            href: "/share/",
            activeRegex: /^\/share.*/i,
            text: "~/share",
            ref: shareAnchorRef,
        },
        {
            href: "/blog/",
            activeRegex: /^\/blog.*/i,
            text: "~/blog",
            ref: blogAnchorRef,
        },
    ], []);

    const isCondensed = (path: string | null): boolean => {
        return [
            /^\/apps\/.+/i,
        ].some(regex => path && regex.test(path));
    }

    const isActive = useCallback((regex: RegExp, path: string | null): boolean => {
        return !!path && regex.test(path);
    }, []);

    const toggleMobileMenu = () => {
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

    const setDecoratorPosition = useCallback((target: HTMLElement | undefined) => {
        const bounds = target?.getBoundingClientRect();
        if (!bounds) {
            return;
        }
        setLinkDecoratorStyle(`top: ${bounds.y}px; left: ${bounds.x}px;`);
    }, []);


    useEffect(() => {
        const handleNavigation = () => {
            setCurrentPath(window.location.pathname);
            setIsMobileMenuExpanded(false);
        };

        const clickOut = (e: MouseEvent) => {
            if (sidebarRef.current && e.target && !sidebarRef.current.contains(e.target as HTMLElement)) {
                setIsMobileMenuExpanded(false);
            }
        };

        window.addEventListener('popstate', handleNavigation);
        window.addEventListener('click', clickOut)
        handleNavigation();

        return () => {
            window.removeEventListener('popstate', handleNavigation);
            window.removeEventListener('click', clickOut)
        };
    }, [sidebarRef]);

    return (
        <div
            ref={sidebarRef}
            className={`sidebar ${isCondensed(currentPath) ? 'condensed' : ''}`}>
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
            <div className="navigation-wrapper">
                <ul className={`navigation ${isMobileMenuExpanded ? 'mobile-expanded' : ''}`}
                    onMouseLeave={() => setLinkDecoratorStyle('')}>
                    {linkDecoratorStyle && (
                        <span className="link-decorator" style={linkDecoratorStyle}>$ cd</span>
                    )}
                    {links.map((link) => (
                        <li key={link.href}>
                            <a href={link.href}
                                className={`${isActive(link.activeRegex, currentPath) ? 'active' : ''}`}
                                onMouseEnter={() => setDecoratorPosition(link.ref.current)}
                                onFocus={() => {
                                    setDecoratorPosition(link.ref.current)
                                }}
                                onBlur={() => {
                                    setLinkDecoratorStyle('')
                                }}
                                onKeyDown={(e) => handleMenuItemKeydown(e)}>
                                <span className="link-text">
                                    <span
                                        className="link-decorator-anchor"
                                        ref={link.ref}>
                                        $ cd
                                    </span>
                                    {link.text}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
                <button className="menu-toggle" type="button" aria-label="Show Navigation Menu"
                    onClick={() => toggleMobileMenu()}
                    onKeyDown={(e) => handleMenuToggleKeydown(e)}>
                    <img src={bars} alt="" />
                </button>
            </div>
            <div className="spacer" />
            <div className="contact">
                <TwitterIcon />
                <GithubIcon />
                <LinkedInIcon />
            </div>
            <div className="privacy">
                <Link className="demure" href="/privacy/">privacy</Link>
            </div>
        </div>
    );
}
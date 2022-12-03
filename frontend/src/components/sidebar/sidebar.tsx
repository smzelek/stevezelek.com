import { h, JSX } from 'preact';
import './sidebar.scss';
import TwitterIcon from '~frontend/components/icons/twitter-icon';
import LinkedInIcon from '~frontend/components/icons/linkedin-icon';
import GithubIcon from '~frontend/components/icons/github-icon';
import { useEffect, useRef, useState, useMemo, useCallback } from 'preact/hooks';
import Link from '~frontend/components/link/link';
const bars = '/assets/icons/bars.svg';

export default function Sidebar(): JSX.Element {
    const [currentPath, setCurrentPath] = useState<string | null>(null);
    const [linkDecoratorStyle, setLinkDecoratorStyle] = useState<string | null>(null);
    const [isMobileMenuExpanded, setIsMobileMenuExpanded] = useState(false);
    const usrAnchorRef = useRef<HTMLSpanElement>(null);
    const blogAnchorRef = useRef<HTMLSpanElement>(null);
    const appsAnchorRef = useRef<HTMLSpanElement>(null);
    const sidebarRef = useRef<HTMLDivElement>(null);

    const links = useMemo(() => [
        {
            href: "/",
            activeRegex: /^\/$/i,
            text: "~/usr",
            ref: usrAnchorRef,
        },
        {
            href: "/blog/",
            activeRegex: /^\/blog.*/i,
            text: "~/blog",
            ref: blogAnchorRef,
        },
        {
            href: "/apps/",
            activeRegex: /^\/apps.*/i,
            text: "~/apps",
            ref: appsAnchorRef
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

    const setDecoratorPosition = useCallback((target: HTMLElement | null) => {
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
                <img src="/assets/me/me.jpg" type="image/jpeg" alt="A headshot of Steve Zelek." />
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
                        <span className="link-decorator" style={linkDecoratorStyle}>cd</span>
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
                                        cd
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
import { h, Component, createRef } from 'preact';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import './sidebar.scss';
import TwitterIcon from '../icons/twitter-icon';
import LinkedInIcon from '../icons/linkedin-icon';
const bars = './assets/icons/bars.svg';

class Sidebar extends Component {
    linkWrapperRef;
    onRender$ = new Subject();

    constructor(props) {
        super(props);
        this.state = {
            currentPath: null,
            isMobileMenuExpanded: false
        };
        this.linkWrapperRef = createRef();
    }

    componentDidMount() {
        window.addEventListener('popstate', this.handleNavigation);
        this.handleNavigation();
    }

    handleNavigation = () => {
        this.setState({
            ...this.state,
            currentPath: window.location.pathname,
            isMobileMenuExpanded: false
        });
    }

    isCondensed = () => {
        return [
            /^\/apps\/.+/i,
        ].some(path => path.test(this.state.currentPath));
    }

    isActive = (regex) => {
        return regex.test(this.state.currentPath);
    }

    componentWillUnmount() {
        window.removeEventListener('popstate', this.handleNavigation);
    }

    handleMenuItemKeydown(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            e.stopPropagation();
            (e.target).click();
        }
    }

    toggleMobileMenu() {
        this.setState({
            ...this.state,
            isMobileMenuExpanded: !this.state.isMobileMenuExpanded
        });
    }

    async handleMenuToggleKeydown(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.setState({
                ...this.state,
                isMobileMenuExpanded: !this.state.isMobileMenuExpanded
            }, async () => {
                if (this.state.isMobileMenuExpanded) {
                    await this.waitForNextRender();
                    const firstNavItem = this.linkWrapperRef.current.querySelectorAll('a')[0];
                    firstNavItem.focus();
                }
            });
        }
    }

    async waitForNextRender() {
        return this.onRender$.pipe(take(1)).toPromise();
    }

    render() {
        setTimeout(() => {
            this.onRender$.next();
        }, 0);

        return (<div className={`sidebar ${this.isCondensed() ? 'condensed' : ''}`}>
            <div className="identifiers">
                <picture>
                    <source srcSet="
                        ./assets/me/me-3x.webp 3x,
                        ./assets/me/me-2x.webp 2x,
                        ./assets/me/me-1x.webp 1x,
                        "
                        type="image/webp" />
                    <source srcSet="
                        ./assets/me/me-3x.jpg 3x,
                        ./assets/me/me-2x.jpg 2x,
                        ./assets/me/me-1x.jpg 1x,
                        "
                        type="image/jpeg" />
                    <img src="./assets/me/me-1x.jpg"
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
                ref={this.linkWrapperRef}>
                <ul className={`navigation ${this.state.isMobileMenuExpanded ? 'mobile-expanded' : ''}`} >
                    <li>
                        <a href="/"
                            className={`${this.isActive(/^\/$/i) ? 'active' : ''}`}
                            onKeyDown={(e) => this.handleMenuItemKeydown(e)}>
                            bio
                        </a>
                    </li>
                    <li>
                        <a href="/apps"
                            className={`${this.isActive(/^\/apps.*/i) ? 'active' : ''}`}
                            onKeyDown={(e) => this.handleMenuItemKeydown(e)}>
                            apps
                        </a>
                    </li>
                    <li>
                        <a href="/blog"
                            className={`${this.isActive(/^\/blog.*/i) ? 'active' : ''}`}
                            onKeyDown={(e) => this.handleMenuItemKeydown(e)}>
                            blog
                        </a>
                    </li>
                </ul>
                <button className="menu-toggle" type="button" aria-label="Show Navigation Menu"
                    onClick={() => this.toggleMobileMenu()}
                    onKeyDown={(e) => this.handleMenuToggleKeydown(e)}>
                    <img src={bars} alt="" />
                </button>
            </div>
            <div className="spacer"></div>
            <div className="contact">
                <LinkedInIcon />
                <TwitterIcon />
            </div>
        </div>)
    }
}

export default Sidebar;

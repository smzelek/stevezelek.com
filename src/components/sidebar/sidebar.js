import React, { Component } from 'react';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil, distinctUntilChanged } from 'rxjs/operators';
import { MobileServiceFactory } from '../../services/mobile.service';
import { NavLink } from 'react-router-dom';
import './sidebar.scss';
const me = '../../assets/me.jpg';
const gitlab = '../../assets/gitlab.svg';
const linkedin = '../../assets/linkedin.svg';
const bars = '../../assets/bars.svg';

class Sidebar extends Component {

    linkWrapperRef;
    isDestroyed$ = new ReplaySubject(1);
    onRender$ = new Subject();
    mobileService = MobileServiceFactory.getInstance();

    constructor(props) {
        super(props);
        this.state = {
            isMobile: false,
            currentPath: null,
            isMobileMenuExpanded: false
        };
        this.linkWrapperRef = React.createRef();
    }

    contactItems() {
        return (<div className="contact">
            <a href="https://www.linkedin.com/in/steve-zelek-022903107/" className="icon linkedin">
                <img src={linkedin} />
            </a>
            <a href="https://gitlab.com/smzelek/" className="icon gitlab">
                <img src={gitlab} />
            </a>
        </div>);
    }

    componentWillMount() {
        this.mobileService.isMobile()
            .pipe(
                takeUntil(this.isDestroyed$),
                distinctUntilChanged()
            )
            .subscribe((isMobile) => {
                this.setState({
                    ...this.state,
                    isMobile: isMobile,
                    isMobileMenuExpanded: false,
                });
            });

        window.addEventListener('popstate', this.handleNavigation);
        this.handleNavigation();
    }

    handleNavigation = () => {
        this.setState({
            ...this.state,
            currentPath: window.location.hash,
            isMobileMenuExpanded: false
        });
    }

    isCondensed = () => {
        return [
            /\#\/apps\/.*/i
        ].some(path => path.test(this.state.currentPath));
    }

    componentWillUnmount() {
        this.isDestroyed$.next();
        this.isDestroyed$.complete();
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

    navigationItems() {
        return (<ul className="navigation">
            <li>
                <NavLink to="/"
                    exact
                    activeClassName="active"
                    onKeyDown={(e) => this.handleMenuItemKeydown(e)}>
                    bio
                </NavLink>
            </li>
            <li>
                <NavLink to="/apps"
                    activeClassName="active"
                    onKeyDown={(e) => this.handleMenuItemKeydown(e)}>
                    apps
                </NavLink>
            </li>
            <li>
                <NavLink to="/blog"
                    activeClassName="active"
                    onKeyDown={(e) => this.handleMenuItemKeydown(e)}>
                    blog
                </NavLink>
            </li>
        </ul >)
    };

    render() {
        setTimeout(() => {
            this.onRender$.next();
        }, 0);

        return (<div className={`sidebar ${this.state.isMobile ? 'mobile' : ''} ${this.isCondensed() ? 'condensed' : ''}`}>
            <div className="identifiers">
                <img src={me} />
                <h3 className="name">
                    Steve Zelek
                </h3>
                <h4 className="title">
                    software maker
                </h4>
            </div>
            {this.state.isMobile && this.contactItems()}
            <div className="navigation-wrapper"
                ref={this.linkWrapperRef}>
                {(!this.state.isMobile || this.state.isMobileMenuExpanded) && this.navigationItems()}
                <button className="menu-toggle" type="button"
                    onClick={() => this.toggleMobileMenu()}
                    onKeyDown={(e) => this.handleMenuToggleKeydown(e)}>
                    <img src={bars} />
                </button>
            </div>
            <div className="spacer"></div>
            {!this.state.isMobile && this.contactItems()}
        </div>)
    }
}

export default Sidebar;

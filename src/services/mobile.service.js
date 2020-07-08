import { ReplaySubject, Observable } from 'rxjs';
import ResizeObserver from 'resize-observer-polyfill';

export class MobileService {

    isMobileView$ = new ReplaySubject(1);

    constructor() {
        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const { width } = entry.contentRect;
                this.isMobileView$.next(width < 800);
            }
        });

        resizeObserver.observe(document.body);
    }

    isMobile() {
        return this.isMobileView$.asObservable();
    }
}

export const MobileServiceFactory = (function() {
    let service;

    return ({
        getInstance: function () {
            if (!service) {
                service = new MobileService();
            }
            return service;
        }
    });
})();
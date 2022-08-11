import { h, JSX } from "preact";
import './link.scss';

export default function Link({ children, className, ...props }: JSX.HTMLAttributes<HTMLAnchorElement>) {
    return <a className={`link ${className ? className : ''}`} {...props}>{children}</a>
}
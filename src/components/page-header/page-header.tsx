import { h } from 'preact';
import './page-header.scss';

export default function PageHeader({ children }: { children: string }) {
    return (
        <header className="page-header">
            <h2 className="title">{children}</h2>
        </header>
    )
}